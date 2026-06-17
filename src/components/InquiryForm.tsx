/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { 
  Send, 
  CheckCircle, 
  Calendar, 
  User, 
  PhoneCall, 
  Mail, 
  FileText,
  ShieldCheck,
  Award,
  Sparkles
} from "lucide-react";

interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  needs: string;
  status: string;
  createdAt: string;
}

interface InquiryFormProps {
  initialNeeds?: string;
  onClearInitialNeeds?: () => void;
}

export default function InquiryForm({ initialNeeds = "", onClearInitialNeeds }: InquiryFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [needs, setNeeds] = useState("");

  const [activeInquiry, setActiveInquiry] = useState<Inquiry | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSectionRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (initialNeeds) {
      setNeeds(initialNeeds);
    }
  }, [initialNeeds]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !needs) {
      alert("Harap lengkapi seluruh kolom formulir.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request processing
    setTimeout(() => {
      const uniqueId = `KIM-B2B-${Math.floor(100000 + Math.random() * 900000)}`;
      const newInquiry: Inquiry = {
        id: uniqueId,
        name,
        phone,
        email,
        needs,
        status: "pending",
        createdAt: new Date().toLocaleDateString("id-ID", {
          year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
        })
      };

      setActiveInquiry(newInquiry);
      setIsSubmitting(false);

      // Reset fields
      setName("");
      setPhone("");
      setEmail("");
      setNeeds("");

      // Scroll to tracking view
      setTimeout(() => {
        formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1200);
  };

  const calculateDaysFromNow = (days: number) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div ref={formSectionRef} className="scroll-mt-10 max-w-3xl mx-auto">
      {activeInquiry ? (
        /* SUCCESS TRACKING SYSTEM - SIMPLIFIED */
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden text-left"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-[#085aa4] p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="bg-white/20 text-emerald-100 font-mono text-[10.5px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Pengajuan Terkirim
                </span>
                <h3 className="font-display font-extrabold text-2xl">
                  Portal Pelacakan Kemitraan
                </h3>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-xl text-right">
                <p className="text-[10px] text-emerald-200 uppercase font-mono">Kode Tracking</p>
                <p className="font-mono text-lg font-bold tracking-wider">{activeInquiry.id}</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            
            {/* Success Greetings Card */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex gap-4">
              <CheckCircle className="w-10 h-10 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-display font-bold text-slate-800 text-base">
                  Terima kasih, {activeInquiry.name}!
                </h4>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                  Permohonan kemitraan B2B Anda telah masuk ke antrean database Kalimaya Indonesia. Hub representative kami akan segera memproses kebutuhan bahan baku Anda.
                </p>
              </div>
            </div>

            {/* Operational Timeline Stages */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-slate-900 text-base flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#085aa4]" />
                Estimasi Linimasa Pemrosesan
              </h4>

              <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-6 pt-2">
                
                {/* Stage 1: Done */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-emerald-100 flex items-center justify-center" />
                  <div>
                    <h5 className="font-sans font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-2">
                      Verifikasi Data & WhatsApp
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold font-mono">Selesai</span>
                    </h5>
                    <p className="font-sans text-slate-500 text-xs mt-1">
                      Terdaftar pada {activeInquiry.createdAt}. WhatsApp: {activeInquiry.phone}
                    </p>
                  </div>
                </div>

                {/* Stage 2: Active */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100" />
                  <div>
                    <h5 className="font-sans font-bold text-[#085aa4] text-xs sm:text-sm flex items-center gap-2">
                      Analisis Spesifikasi oleh Tim Sales & R&D
                      <span className="text-[10px] bg-blue-100 text-[#085aa4] px-2 py-0.5 rounded font-semibold font-sans animate-pulse">Proses</span>
                    </h5>
                    <p className="font-sans text-slate-600 text-xs mt-1">
                      Tim sales logistik kami sedang meninjau kebutuhan: <strong className="text-slate-800">"{activeInquiry.needs}"</strong> untuk menyesuaikan penawaran harga grosir khusus.
                    </p>
                    <span className="font-mono text-[10px] text-slate-400 block mt-1">
                      Estimasi hubungi: {calculateDaysFromNow(1)}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Summary of Submissions */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-xs space-y-2.5">
              <h5 className="font-sans font-bold text-slate-800 uppercase tracking-wider">Ikhtisar Formulir:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600">
                <div>
                  <span className="text-slate-400 block mb-0.5">Nama / Perusahaan</span>
                  <span className="font-semibold text-slate-800">{activeInquiry.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">No. WhatsApp</span>
                  <span className="font-semibold text-slate-800">{activeInquiry.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Email Bisnis</span>
                  <span className="font-semibold text-slate-850">{activeInquiry.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Detail Kebutuhan</span>
                  <span className="font-medium text-slate-700 italic">"{activeInquiry.needs}"</span>
                </div>
              </div>
            </div>

            {/* Reset button */}
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                _id="btn-tracker-reset"
                onClick={() => {
                  setActiveInquiry(null);
                  onClearInitialNeeds?.();
                }}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-sans text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Kirim Pengajuan Baru
              </button>
            </div>

          </div>
        </motion.div>
      ) : (
        /* SIMPLE INQUIRY FORM */
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/60 shadow-xl shadow-slate-100 text-left space-y-8">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-display font-bold text-slate-900 text-2xl tracking-tight text-center">
              Kirim Pesan & Pengajuan Spesifikasi
            </h3>
            <p className="font-sans text-slate-500 text-xs sm:text-sm">
              Sampaikan kebutuhan bahan baku buah premium Anda, tim representatif resmi Kalimaya akan membalas penawaran dan mengirimkan sampel gratis.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            
            {/* Nama atau Perusahaan */}
            <div className="space-y-1.5">
              <label className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#085aa4]" /> Nama Lengkap atau Nama Perusahaan *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Robert Wijaya / PT. Bakery Nusantara"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#085aa4] transition-all bg-slate-50/30"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* No WhatsApp */}
              <div className="space-y-1.5">
                <label className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#085aa4]" /> Nomor WhatsApp (Aktif) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#085aa4] transition-all bg-slate-50/30"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#085aa4]" /> Alamat Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Contoh: procurement@bakerindo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#085aa4] transition-all bg-slate-50/30"
                />
              </div>
            </div>

            {/* Kebutuhan */}
            <div className="space-y-1.5">
              <label className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#085aa4]" /> Detail Kebutuhan Bahan Baku *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Sebutkan varian rasa selai, perkiraan volume, atau spesifikasi panggangan yang Anda cari..."
                value={needs}
                onChange={(e) => setNeeds(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#085aa4] transition-all resize-none bg-slate-50/30"
              />
            </div>

            {/* Submit Button */}
            <button
              id="btn-submit-inquiry"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#085aa4] hover:bg-blue-700 text-white font-sans font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:bg-slate-300"
            >
              {isSubmitting ? (
                <>Sedang Mengirimkan...</>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Kirim Pengajuan Sekarang
                </>
              )}
            </button>

            {/* Trust assurances info inside the form card */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 p-0 text-emerald-600" /> Pengolahan Higienis Berstandar Dunia
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-4 p-0 text-blue-600" /> Sertifikasi Resmi BPOM & HALAL MUI
              </span>
            </div>

          </form>
        </div>
      )}
    </div>
  );
}
