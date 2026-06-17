/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ShoppingCart,
  Brain,
  ShieldAlert,
  Zap,
  CheckCircle2,
  Bookmark,
  ChevronRight,
  Sparkles
} from "lucide-react";

interface DateJamDetailProps {
  onBack: () => void;
  onInquire: (needsText: string) => void;
}

export default function DateJamDetail({ onBack, onInquire }: DateJamDetailProps) {
  const handleRequestSample = () => {
    onInquire("Halo Kalimaya, saya sangat tertarik dengan Selai Kurma MPASI (DATE JAM) Alunna untuk kebutuhan bisnis / suplai retail kami. Mohon informasi harga dan cara pengiriman sampel.");
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      
      {/* HEADER SECTION - MIMICKING THE EMBEDDED NAVIGATION BAR */}
      <div className="bg-[#0A3D91] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white text-[11px] font-bold uppercase tracking-wider transition duration-200 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Kembali
            </button>
            <div className="flex items-center gap-2.5 ml-2">
              <img 
                src="https://kalimayaindonesia.com/wp-content/uploads/2025/12/cropped-cropped-Kalimaya-02-1-scaled-1-200x48.png.webp" 
                alt="PT Kalimaya Alunna Indonesia Logo" 
                className="h-8 sm:h-9 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <span className="font-sans font-black text-white text-xs sm:text-sm tracking-wider hidden xl:inline">
                PT Kalimaya Alunna Indonesia
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-white/90">
            <span className="cursor-pointer hover:text-white transition duration-200" onClick={onBack}>Home</span>
            <span className="cursor-pointer hover:text-white transition duration-200" onClick={onBack}>About</span>
            <span className="cursor-pointer hover:text-white transition duration-200" onClick={handleRequestSample}>Blog</span>
            <span className="cursor-pointer hover:text-white transition duration-200" onClick={handleRequestSample}>Contact</span>
          </div>

          <div>
            <button 
              onClick={handleRequestSample}
              className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-[#0D58C8] text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: HERO - COMPLIANT WITH THE FIRST SCREENSHOT */}
      <div 
        className="relative bg-gradient-to-r from-[#0A3D91] via-[#0D58C8] to-[#0A3D91] text-white overflow-hidden pb-24 pt-16"
        id="date-jam-hero"
      >
        {/* Subtle Decorative Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
        
        {/* Soft elegant radial glowing halos in background */}
        <div className="absolute -top-12 -left-12 w-[350px] h-[350px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#0D58C8]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-10 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

        {/* Abstract thin geometric vector lines & circles */}
        <div className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none hidden lg:block">
          <svg viewBox="0 0 400 400" className="w-full h-full text-white" fill="none">
            <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" />
            <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Jar with subtle sparkles and dynamic background halos */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              
              {/* Spinning soft dash circle behind jar */}
              <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full border border-white/10 border-dashed animate-[spin_80s_linear_infinite] pointer-events-none" />
              <div className="absolute w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full border border-white/5 pointer-events-none" />

              {/* Floating Sparkles decorative icons */}
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-4 right-[10%] sm:right-[15%] z-20 text-yellow-300 opacity-80"
              >
                <Sparkles className="w-6 h-6 drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0], scale: [1, 0.9, 1] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-[10%] sm:left-[15%] z-20 text-blue-200 opacity-60"
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              
              <div className="relative z-15 w-full max-w-[280px] sm:max-w-[400px]">
                {/* Main Alunna Date Jam Jar with modern micro-floating animation */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="relative z-10 drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)]"
                >
                  <img 
                    src="https://alunna.id/wp-content/uploads/2026/04/selai-kurma-variant.webp"
                    alt="Selai Kurma Alunna Apple Date Jam" 
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

            </div>

            {/* Right Column: Title, Subtitle, and Modern Tag */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left relative">
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-5"
              >
                {/* Premium Clean Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-blue-100 font-semibold tracking-wider uppercase mx-auto lg:mx-0">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <span>100% Organik & Nutrisi Alami</span>
                </div>

                <h1 className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-[60px] tracking-tight leading-[1.1] uppercase">
                  Selai Kurma MPASI
                </h1>
                
                <p className="font-sans text-blue-100 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed opacity-95">
                  Diformulasikan khusus untuk mendukung tumbuh kembang si kecil serta menaikkan imunitas alami secara optimal.
                </p>
              </motion.div>
            </div>

          </div>
        </div>

      </div>

      {/* SECTION 2: THE SEMI-CIRCULAR ARCH OF BENEFITS - MATCHES SCREENSHOT 2 */}
      <section className="py-20 bg-white" id="date-jam-benefits-arch">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Titles precisely matching screenshot 2 but styled with Blue Navy and Royal Blue */}
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
            <h2 className="font-sans font-extrabold text-[#0D58C8] text-3xl sm:text-4xl lg:text-[44px] tracking-tight">
              Selai Kurma dari Buah Alami
            </h2>
            <p className="font-sans text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed">
              Diformulasikan khusus untuk mendukung tumbuh kembang si kecil serta menaikkan imunitas alami
            </p>
          </div>

          {/* Dotted Arch presentation */}
          <div className="relative max-w-4xl mx-auto h-[320px] sm:h-[480px] flex items-end justify-center overflow-visible mt-16 sm:mt-24">
            
            {/* Background Arch SVG Line */}
            <div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none">
              <svg viewBox="0 0 800 400" className="w-full h-full text-blue-900/10" fill="none">
                <path 
                  d="M 50,400 A 350,350 0 0,1 750,400" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeDasharray="8,8" 
                />
              </svg>
            </div>

            {/* Bottom half-sphere in center Royal Blue (solid base representing growth / sun) */}
            <div className="absolute bottom-0 w-[240px] h-[120px] sm:w-[480px] sm:h-[240px] bg-[#0D58C8] rounded-t-full z-10" />

            {/* WOODEN SPOON WITH TEXTURED DATE JAM EMBEDDED IN CENTRAL SUNRISE */}
            <div className="absolute bottom-0 z-20 w-[140px] sm:w-[250px] transform translate-y-[15%] sm:translate-y-[2%] flex flex-col items-center">
              <img 
                src="https://alunna.id/wp-content/uploads/2026/04/selai-kurma-variant.webp" // Variant fallback to match the brand jar beautifully or spoon representation
                alt="Wooden Spoon with Date Jam Paste"
                className="w-[85%] h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                referrerPolicy="no-referrer"
              />
              {/* Wooden handle mimic overlay wrapper */}
              <div className="w-5 h-20 sm:w-8 h-32 bg-[#e29b47] rounded-b-xl shadow-md -mt-10" />
            </div>

            {/* BENEFITS PINPOINTS ATTACHED ON THE THE DOTTED ARCH */}
            {/* Dot 1: Zat Besi (Far Left) */}
            <div className="absolute left-[3%] sm:left-[5%] top-[70%] sm:top-[65%] z-30 flex items-center gap-3 w-[150px] sm:w-[220px]">
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#0D58C8] border-4 border-white shadow-md shrink-0 animate-pulse" />
              <div className="text-left">
                <h4 className="font-sans font-extrabold text-[#0A3D91] text-xs sm:text-sm">Zat Besi</h4>
                <p className="font-sans text-slate-500 text-[10px] sm:text-xs leading-tight">Mendukung Perkembangan Otak Anak</p>
              </div>
            </div>

            {/* Dot 2: Serat (Top Left) */}
            <div className="absolute left-[8%] sm:left-[18%] top-[25%] sm:top-[18%] z-30 flex items-end gap-3 w-[150px] sm:w-[200px] flex-col text-right">
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <h4 className="font-sans font-extrabold text-[#0A3D91] text-xs sm:text-sm">Serat</h4>
                  <p className="font-sans text-slate-500 text-[10px] sm:text-xs leading-tight">Melancarkan Pencernaan Anak</p>
                </div>
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#0D58C8] border-4 border-white shadow-md shrink-0" />
              </div>
            </div>

            {/* Dot 3: Sumber Energi (Top Right) */}
            <div className="absolute right-[8%] sm:right-[18%] top-[25%] sm:top-[18%] z-30 flex items-start gap-3 w-[150px] sm:w-[200px] flex-col text-left">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#0D58C8] border-4 border-white shadow-md shrink-0" />
                <div className="text-left">
                  <h4 className="font-sans font-extrabold text-[#0A3D91] text-xs sm:text-sm">Sumber Energi</h4>
                  <p className="font-sans text-slate-500 text-[10px] sm:text-xs leading-tight">Anak Memerlukan Energi Selain dari ASI</p>
                </div>
              </div>
            </div>

            {/* Dot 4: Kaya Antioksidan (Far Right) */}
            <div className="absolute right-[3%] sm:right-[5%] top-[70%] sm:top-[65%] z-30 flex items-center justify-end gap-3 w-[150px] sm:w-[220px] text-right">
              <div className="text-right">
                <h4 className="font-sans font-extrabold text-[#0A3D91] text-xs sm:text-sm">Kaya Antioksidan</h4>
                <p className="font-sans text-slate-500 text-[10px] sm:text-xs leading-tight">Dapat Memperkuat Imun Agar Tidak Mudah Sakit</p>
              </div>
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#0D58C8] border-4 border-white shadow-md shrink-0 animate-pulse" />
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: THE THREE BLUE BENEFIT CARDS - MATCHES SCREENSHOT 3 */}
      <section className="pb-28 bg-white" id="date-jam-bento-cards">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Brain Development */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#0A3D91] text-white rounded-3xl p-8 pt-12 relative shadow-lg text-center overflow-visible"
            >
              {/* Round Icon Bubble exactly matching screenshot 3 icon placements with royal blue tone */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0D58C8] flex items-center justify-center text-white shadow-md border-4 border-white">
                <Brain className="w-7 h-7 stroke-[2]" />
              </div>
              <div className="space-y-3 pt-2">
                <h3 className="font-sans font-extrabold text-white text-lg sm:text-xl">
                  Brain Development
                </h3>
                <p className="font-sans text-blue-100 text-xs sm:text-sm leading-relaxed">
                  Membantu perkembangan saraf dan pertumbuhan kognitif si kecil
                </p>
              </div>
            </motion.div>

            {/* Card 2: Immune Support */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#0A3D91] text-white rounded-3xl p-8 pt-12 relative shadow-lg text-center overflow-visible"
            >
              {/* Round Icon Bubble */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0D58C8] flex items-center justify-center text-white shadow-md border-4 border-white">
                <ShieldAlert className="w-7 h-7 stroke-[2]" />
              </div>
              <div className="space-y-3 pt-2">
                <h3 className="font-sans font-extrabold text-white text-lg sm:text-xl">
                  Immune Support
                </h3>
                <p className="font-sans text-blue-100 text-xs sm:text-sm leading-relaxed">
                  Mendorong imun alami si kecil agar tidak mudah terserang penyakit
                </p>
              </div>
            </motion.div>

            {/* Card 3: Energy Boost */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#0A3D91] text-white rounded-3xl p-8 pt-12 relative shadow-lg text-center overflow-visible"
            >
              {/* Round Icon Bubble */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0D58C8] flex items-center justify-center text-white shadow-md border-4 border-white">
                <Zap className="w-7 h-7 stroke-[2]" />
              </div>
              <div className="space-y-3 pt-2">
                <h3 className="font-sans font-extrabold text-white text-lg sm:text-xl">
                  Energy Boost
                </h3>
                <p className="font-sans text-blue-100 text-xs sm:text-sm leading-relaxed">
                  Manis alami dari buah kurma dapat menambah energi si kecil beraktivitas
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FOOTER CALL-TO-ACTION FOR B2B DISTRIBUTION & RETAIL */}
      <section className="py-20 bg-[#0D58C8] text-white border-t border-white/10" id="date-jam-b2b">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <img 
            src="https://kalimayaindonesia.com/wp-content/uploads/2026/02/favicon-blue.png" 
            alt="PT Kalimaya Alunna Indonesia Favicon" 
            className="w-14 h-14 mx-auto object-contain brightness-0 invert"
            referrerPolicy="no-referrer"
          />
          <h2 className="font-sans font-extrabold text-white text-3xl">
            Sediakan Solusi Sehat Bernutrisi Alami pada Gerai Anda
          </h2>
          <p className="font-sans text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            PT Kalimaya Alunna Indonesia membuka kemitraan eksklusif bagi distributor regional, apotek, butik bayi, dan supermarket nasional untuk menyambut permintaan pasar keluarga modern terhadap produk MPASI murni berkualitas tinggi dengan penawaran margins optimal.
          </p>
          <div className="pt-4">
            <button 
              onClick={handleRequestSample}
              className="px-8 py-4 bg-white hover:bg-blue-50 text-[#0D58C8] font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition duration-200 cursor-pointer shadow-lg"
            >
              Hubungi Sales & Partner Executive
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
