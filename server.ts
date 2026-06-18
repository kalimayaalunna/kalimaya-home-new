/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import dns from "dns";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

// Force Node to resolve localhost to IPV4 first inside containers
dns.setDefaultResultOrder("ipv4first");

// Helper function to send incoming inquiry email
async function sendInquiryEmail(data: { name: string; phone: string; email: string; needs: string }) {
  const { name, phone, email, needs } = data;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  let transporter: nodemailer.Transporter | null = null;

  try {
    if (smtpHost && smtpUser && smtpPass) {
      // Real SMTP Server Config defined by the user in Secrets
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });
      console.log(`[Nodemailer] SMTP server configured: ${smtpHost}:${smtpPort}`);
    } else {
      // Automatic preview sandbox developer fallback:
      // Uses SMTP Ethereal sandboxes to simulate 100% genuine outgoing flows
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log(`[Nodemailer] Using automatic ethereal development fallback account: ${testAccount.user}`);
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 30px; border: 1px solid #f0f0f0; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="border-bottom: 2px solid #085aa4; padding-bottom: 15px; margin-bottom: 25px;">
          <h2 style="color: #085aa4; margin: 0; font-size: 20px;">Portal Kemitraan Kalimaya Indonesia</h2>
          <span style="color: #999; font-size: 11px;">Notifikasi Formulir Masuk Resmi</span>
        </div>
        <p style="font-size: 14px; color: #555; line-height: 1.5;">Pengajuan kemitraan B2B baru telah masuk dengan rincian berikut:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 25px 0;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; width: 35%; color: #888; font-size: 13px;"><strong>Nama / Perusahaan:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #333; font-size: 14px; font-weight: bold;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #888; font-size: 13px;"><strong>Nomor WhatsApp:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #333; font-size: 14px;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #888; font-size: 13px;"><strong>Email Bisnis:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #333; font-size: 14px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;"><strong>Detail Kebutuhan:</strong></td>
            <td style="padding: 10px 0; color: #444; font-size: 13.5px; line-height: 1.6; white-space: pre-line;">${needs}</td>
          </tr>
        </table>
        
        <div style="background: #fcfcfc; border: 1px dashed #e5e5e5; padding: 15px; border-radius: 8px; font-size: 12px; color: #777; margin-top: 30px;">
          <p style="margin: 0 0 5px 0;"><strong>Catatan untuk Admin:</strong></p>
          <p style="margin: 0; line-height: 1.4;">Harap segera hubungi calon mitra di atas melalui nomor WhatsApp dalam sekurang-kurangnya 24 jam untuk mendiskusikan penawaran harga grosir khusus atau mengirim sampel bahan baku.</p>
        </div>
        
        <div style="border-top: 1px solid #eee; margin-top: 35px; padding-top: 15px; text-align: center; color: #aaa; font-size: 11px;">
          &copy; ${new Date().getFullYear()} PT Kalimaya Alunna Indonesia. Seluruh Hak Cipta Dilindungi.
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Portal Kemitraan Kalimaya" <${smtpUser || "portal@kalimayaindonesia.com"}>`,
      to: "relations@kalimayaindonesia.com",
      subject: `[B2B Kemitraan] Pengajuan Baru - ${name}`,
      html: htmlContent,
    });

    console.log(`[Nodemailer] Email processed successfully. Message ID: ${info.messageId}`);

    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log(`[Nodemailer] Dev Sandbox Ethereal Mail URL: ${previewUrl}`);
      return { success: true, previewUrl, msgId: info.messageId };
    }

    return { success: true, msgId: info.messageId };
  } catch (error) {
    console.error("[Nodemailer] Error sending inquiry email:", error);
    // Even if nodemailer fails, return success representation so client front-end doesn't break
    return { success: false, error: (error as Error).message };
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON Body Parser for APIs
  app.use(express.json());

  // API Submit Form handler
  app.post("/api/submit-form", async (req, res) => {
    const { name, phone, email, needs } = req.body;

    if (!name || !phone || !email || !needs) {
      return res.status(400).json({ error: "Missing required form fields." });
    }

    console.log(`[API] Received brand-new inquiry from ${name} (${email})`);
    
    const emailResult = await sendInquiryEmail({ name, phone, email, needs });
    
    // Always succeed so user modal triggers elegantly
    res.json({
      status: "ok",
      sent: emailResult.success,
      previewUrl: (emailResult as any).previewUrl || null,
    });
  });

  // Integration with Vite inside Development environment
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("[Server] Vite development middleware loaded.");
  } else {
    // Production serving from built client files
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("[Server] Production static files mounting on /dist ready.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] PT Kalimaya Alunna running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
