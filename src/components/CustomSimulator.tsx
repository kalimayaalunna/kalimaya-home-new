/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  HelpCircle, 
  FlaskConical, 
  Settings2, 
  Share2, 
  Check, 
  Coffee, 
  ArrowRight,
  Database
} from "lucide-react";

interface CustomSimulatorProps {
  onApplySpec: (specText: string) => void;
}

const PACKAGING_TYPES = [
  { id: "glass_bottle", name: "Botol Kaca Bulat", desc: "Ketahanan steril tinggi (Premium Glass)", icon: "🥛" },
  { id: "plastic_jar", name: "Jar Plastik Premium", desc: "Mulut lebar, tahan pecah (Ideal Selai)", icon: "🍯" },
  { id: "plastic_bottle", name: "Botol Plastik RTD", desc: "Ringan & ergonomis (Ideal Susu/Sari)", icon: "🧴" }
];

const FORMULA_COLORS = [
  { id: "red_strawberry", name: "Merah Stroberi", hex: "#dc2626", brix: "42° Brix", desc: "Dari stroberi lokal utuh" },
  { id: "amber_kurma", name: "Cokelat Kurma Legit", hex: "#5a2d0c", brix: "55° Brix", desc: "Manis murni sari kurma" },
  { id: "green_matcha", name: "Hijau Matcha/Pandan", hex: "#15803d", brix: "38° Brix", desc: "Aroma herbal daun pandan" },
  { id: "yellow_mango", name: "Kuning Madu/Mangga", hex: "#d97706", brix: "45° Brix", desc: "Cita rasa tropis menyegarkan" }
];

const CAP_COLORS = [
  { id: "gold", name: "Metallic Gold", hex: "#d4af37", label: "Emas Mewah" },
  { id: "black", name: "Matte Black", hex: "#1f2937", label: "Hitam Premium" },
  { id: "white", name: "Clean White", hex: "#f3f4f6", label: "Putih Minimalis" }
];

export default function CustomSimulator({ onApplySpec }: CustomSimulatorProps) {
  const [selectedPack, setSelectedPack] = useState(PACKAGING_TYPES[0]);
  const [selectedFormula, setSelectedFormula] = useState(FORMULA_COLORS[0]);
  const [selectedCap, setSelectedCap] = useState(CAP_COLORS[0]);
  const [brandName, setBrandName] = useState("Kalimaya Premium");
  const [subtitle, setSubtitle] = useState("Formula Selai Kustom");
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    const spec = `Halo Kalimaya B2B Representative, saya ingin mengajukan formulasi spesifikasi kustom berikut:\n- Jenis Wadah: ${selectedPack.name}\n- Formula Isi: ${selectedFormula.name} (${selectedFormula.brix})\n- Warna Tutup: ${selectedCap.name}\n- Label Pembungkus: "${brandName} - ${subtitle}"\n\nMohon bantu siapkan estimasi harga bulk dan sampel uji coba khusus untuk bisnis kami.`;
    onApplySpec(spec);
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
    }, 3000);
  };

  return (
    <section 
      id="custom-product-simulator" 
      className="py-16 bg-[#f0f7ff] border-t border-b border-blue-100 text-left"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#085aa4] font-extrabold flex items-center justify-center gap-1.5">
            <FlaskConical className="w-4 h-4 text-[#085aa4]" />
            LAYANAN PRIVATE LABEL & FORMULASI KUSTOM
          </span>
          <h2 className="font-display font-extrabold text-[#085aa4] text-2xl sm:text-3xl tracking-tight leading-tight">
            Interaktif: Simulasikan Kemasan & Formula Anda
          </h2>
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
            Sesuaikan wadah, formula warna isi, warna tutup botol, serta label rancangan produk bisnis Anda sendiri. Kami memproduksi pesanan bulk B2B dengan formulasi OEM/ODM berstandar internasional.
          </p>
          <div className="w-16 h-1.5 bg-[#085aa4] mx-auto rounded-full mt-3" />
        </div>

        {/* Simulator Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Controls Left Panel */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-105 pb-3">
                <Settings2 className="w-4 h-4 text-blue-600" />
                <h4 className="font-display font-bold text-slate-800 text-sm uppercase tracking-wider">
                  Panel Konfigurator Produk
                </h4>
              </div>

              {/* 1. Pack Selector */}
              <div className="space-y-2">
                <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wide block">
                  1. Pilih Tipe Wadah & Kemasan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PACKAGING_TYPES.map((pack) => (
                    <button
                      key={pack.id}
                      type="button"
                      onClick={() => setSelectedPack(pack)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                        selectedPack.id === pack.id
                          ? "border-[#085aa4] bg-blue-50/50 ring-2 ring-blue-500/10"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{pack.icon}</span>
                        <div className="space-y-0.5">
                          <p className="font-sans font-bold text-xs text-slate-800 leading-tight">
                            {pack.name}
                          </p>
                          <p className="font-sans text-[9px] text-slate-400 leading-none">
                            B2B Standard
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Formula Color Selector */}
              <div className="space-y-2">
                <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wide block">
                  2. Formula & Warna Mengisi Wadah (Filling Variant)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {FORMULA_COLORS.map((formula) => (
                    <button
                      key={formula.id}
                      type="button"
                      onClick={() => setSelectedFormula(formula)}
                      className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                        selectedFormula.id === formula.id
                          ? "border-[#085aa4] bg-blue-50/40"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-4 h-4 rounded-full shrink-0 border border-black/10" 
                          style={{ backgroundColor: formula.hex }}
                        />
                        <div className="min-w-0">
                          <p className="font-sans font-bold text-[10px] text-slate-800 truncate leading-none">
                            {formula.name}
                          </p>
                          <span className="font-mono text-[8px] text-blue-600 block mt-0.5 font-bold">
                            {formula.brix}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Cap Selector */}
              <div className="space-y-2">
                <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wide block">
                  3. Warna Tutup Kemasan (Sealing Cap)
                </label>
                <div className="flex flex-wrap gap-2">
                  {CAP_COLORS.map((cap) => (
                    <button
                      key={cap.id}
                      type="button"
                      onClick={() => setSelectedCap(cap)}
                      className={`px-3.5 py-2 rounded-xl border cursor-pointer transition-all duration-200 flex items-center gap-2 ${
                        selectedCap.id === cap.id
                          ? "border-[#085aa4] bg-blue-50/40 font-bold"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <span 
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0" 
                        style={{ backgroundColor: cap.hex }}
                      />
                      <span className="font-sans text-[11px] text-slate-700">{cap.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Custom Label Text */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-sans text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                    Nama Brand/Produk Kustom
                  </label>
                  <input
                    type="text"
                    maxLength={26}
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-sans rounded-lg border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Contoh: Brand Premium"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-sans text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                    Sub-Deklarasi / Detail Label
                  </label>
                  <input
                    type="text"
                    maxLength={32}
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-sans rounded-lg border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Contoh: Sari Stroberi Organik"
                  />
                </div>
              </div>
            </div>

            {/* Action triggering apply callback */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
              <p className="font-sans text-[10.5px] text-slate-400 max-w-xs leading-tight">
                * Spesifikasi kustomisasi ini akan diintegrasikan otomatis pada formulir penawaran harga di bawah.
              </p>
              <button
                type="button"
                onClick={handleApply}
                className="px-5 py-2.5 bg-[#085aa4] hover:bg-blue-700 text-white font-sans text-xs font-bold rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {applied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    Berhasil Diterapkan!
                  </>
                ) : (
                  <>
                    Salin Spesifikasi ke Form
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Live Preview Right Panel */}
          <div className="lg:col-span-5 bg-gradient-to-b from-white to-blue-50/40 rounded-3xl p-6 border border-blue-100 flex flex-col justify-between items-center text-center shadow-sm relative">
            <div className="absolute top-4 left-4 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full text-blue-700 font-mono text-[9px] font-bold tracking-wider uppercase">
              Live Preview
            </div>

            {/* 3D-Look Vector Bottle Drawing responsive based on inputs */}
            <div className="w-full flex-1 flex items-center justify-center py-6 min-h-[290px]">
              
              {/* Bottle Simulator Frame Container with motion animation delay on adjustments */}
              <motion.div
                key={selectedPack.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative pb-4 flex flex-col items-center"
              >
                
                {/* SVG Visualizing the dynamic bottle, liquid color and cap */}
                <svg
                  width={selectedPack.id === "glass_bottle" ? "140" : selectedPack.id === "plastic_jar" ? "150" : "110"}
                  height="220"
                  viewBox="0 0 150 250"
                  className="filter drop-shadow-[0_12px_15px_rgba(8,90,164,0.15)]"
                >
                  {/* Define helpful gradients and filters */}
                  <defs>
                    <linearGradient id="capGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={selectedCap.hex} stopOpacity="1" />
                      <stop offset="50%" stopColor={selectedCap.id === "gold" ? "#ffeb99" : selectedCap.id === "black" ? "#4b5563" : "#ffffff"} stopOpacity="1" />
                      <stop offset="100%" stopColor={selectedCap.hex} stopOpacity="1" />
                    </linearGradient>

                    <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={selectedFormula.hex} stopOpacity="0.95" />
                      <stop offset="35%" stopColor={selectedFormula.hex} stopOpacity="0.8" />
                      <stop offset="70%" stopColor={selectedFormula.hex} stopOpacity="0.95" />
                      <stop offset="100%" stopColor={selectedFormula.hex} stopOpacity="1" />
                    </linearGradient>

                    <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                      <stop offset="20%" stopColor="#ffffff" stopOpacity="0.1" />
                      <stop offset="90%" stopColor="#ffffff" stopOpacity="0" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>

                  {/* 1. SEAMLESS CAP SHAPE */}
                  <rect
                    x="45"
                    y="10"
                    width="60"
                    height="18"
                    rx="4"
                    fill="url(#capGradient)"
                  />
                  {/* Cap Ring Lock */}
                  <rect
                    x="42"
                    y="25"
                    width="66"
                    height="4"
                    rx="1"
                    fill="url(#capGradient)"
                    opacity="0.9"
                  />

                  {/* 2. PACKAGING BODY SHAPE WITH COLOR FILL BASED ON PACKAGING TYPE */}
                  {selectedPack.id === "glass_bottle" && (
                    <>
                      {/* Neck of Glass Bottle */}
                      <path d="M50,28 L100,28 L100,60 L125,100 L125,230 L25,230 L25,100 L50,60 Z" fill="#e2e8f0" opacity="0.3" stroke="#cbd5e1" strokeWidth="1.5" />
                      {/* Liquid Content in Glass Bottle */}
                      <path d="M53,60 L97,60 L118,97 L118,225 L32,225 L32,97 L53,60 Z" fill="url(#liquidGradient)" />
                    </>
                  )}

                  {selectedPack.id === "plastic_jar" && (
                    <>
                      {/* Short Neck of Jar */}
                      <path d="M40,28 L110,28 L110,48 L135,70 L135,235 L15,235 L15,70 L40,48 Z" fill="#e2e8f0" opacity="0.3" stroke="#cbd5e1" strokeWidth="1.5" />
                      {/* Liquid Content in Jar */}
                      <path d="M43,45 L107,45 L128,68 L128,230 L22,230 L22,68 L43,45 Z" fill="url(#liquidGradient)" />
                    </>
                  )}

                  {selectedPack.id === "plastic_bottle" && (
                    <>
                      {/* Curved narrow bottle */}
                      <path d="M52,28 L98,28 L98,70 C110,95 115,130 110,235 L40,235 C35,130 40,95 52,70 Z" fill="#e2e8f0" opacity="0.3" stroke="#cbd5e1" strokeWidth="1.5" />
                      {/* Liquid Content in bottle */}
                      <path d="M54,65 L96,65 C103,90 108,125 103,230 L47,230 C42,125 47,90 54,65 Z" fill="url(#liquidGradient)" />
                    </>
                  )}

                  {/* 3. WHITE BRAND LABEL WRAPPER ON TOP OF CONTENT */}
                  <rect
                    x={selectedPack.id === "glass_bottle" ? "35" : selectedPack.id === "plastic_jar" ? "28" : "48"}
                    y="105"
                    width={selectedPack.id === "glass_bottle" ? "80" : selectedPack.id === "plastic_jar" ? "94" : "54"}
                    height="75"
                    rx="3"
                    fill="#ffffff"
                    stroke="#085aa4"
                    strokeWidth="1"
                    className="shadow-sm"
                  />

                  {/* Tiny circular shield watermark icon on label */}
                  <circle cx="75" cy="122" r="7" fill="#085aa4" opacity="0.1" />

                  {/* Glass Shimmer Reflection highlight layer */}
                  <path
                    d={
                      selectedPack.id === "glass_bottle"
                        ? "M30,100 L45,100 L45,220 L30,220 Z"
                        : selectedPack.id === "plastic_jar"
                        ? "M20,70 L40,70 L40,230 L20,230 Z"
                        : "M45,70 L55,70 L55,230 L45,230 Z"
                    }
                    fill="url(#glassReflection)"
                    pointerEvents="none"
                  />
                </svg>

                {/* Floating CSS Text Preview Overlay to act as Simulated Front Label */}
                <div className="absolute top-[125px] w-[95px] flex flex-col items-center justify-center text-center space-y-0.5 pointer-events-none select-none">
                  {/* Brand name */}
                  <p className="font-display font-black text-slate-900 text-[10px] uppercase leading-tight line-clamp-1 w-[80px]">
                    {brandName || "Kalimaya"}
                  </p>
                  {/* Subtle decorative divider */}
                  <div className="w-8 h-[1px] bg-red-500/20" />
                  {/* Subtitle */}
                  <p className="font-sans font-medium text-[#085aa4] text-[6.5px] uppercase leading-none line-clamp-1 w-[80px]">
                    {subtitle || "Formula Kustom"}
                  </p>
                  {/* Micro Net Weight */}
                  <p className="font-mono text-[5.5px] text-slate-400 capitalize pt-1">
                    B2B OEM Standard
                  </p>
                  {/* Miniature Halal / Quality badge representation as clean tiny circle indicators */}
                  <div className="flex gap-1 pt-1 opacity-80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Halal Verified" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" title="BPOM Standard" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" title="Lab Tested" />
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Spec readout info widget */}
            <div className="w-full bg-white border border-blue-50/80 p-4 rounded-2xl text-xs space-y-1.5 text-left">
              <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono tracking-wider">
                <span>PARAMETER TEKNIS</span>
                <span className="text-[#085aa4] font-bold">READY TO FORMULATE</span>
              </div>
              <p className="font-sans text-slate-700 text-xs leading-snug">
                Disusun khusus menggunakan wadah <strong className="text-slate-900">{selectedPack.name}</strong> dengan isi kualifikasi <strong className="text-slate-900">{selectedFormula.name} ({selectedFormula.brix})</strong> berhias tutup <strong className="text-slate-900">{selectedCap.name}</strong>.
              </p>
              <div className="h-[1px] bg-slate-100 mt-1" />
              <p className="font-mono text-[9px] text-[#085aa4]/80 italic">
                * Hasil audit stabilitas & masa kedaluwarsa berkisar 12 bulan (suhu terkontrol).
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
