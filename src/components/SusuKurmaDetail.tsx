/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ShoppingCart, 
  Brain, 
  ShieldCheck, 
  Flame, 
  Sparkles, 
  Activity,
  Heart,
  ChevronRight
} from "lucide-react";

interface SusuKurmaDetailProps {
  onBack: () => void;
  onInquire: (needsText: string) => void;
}

export default function SusuKurmaDetail({ onBack, onInquire }: SusuKurmaDetailProps) {
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFixedHeader(true);
      } else {
        setShowFixedHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBeliSekarang = () => {
    onInquire("Halo Kalimaya! Saya sangat tertarik memesan Susu Kurma Alunna (Susu Sapi Segar & Kurma Premium) secara grosir atau menjajaki distributor kemitraan B2B. Mohon detail kuotasi.");
  };

  const scrollToPelajari = () => {
    const element = document.getElementById("learn-milk-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FAF6EE] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      
      {/* FIXED HEADER FOR SUSU KURMA */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-[#F3B033] text-white shadow-xl transition-all duration-500 ease-out transform ${showFixedHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
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
              <span className="font-sans font-black text-white text-xs sm:text-sm tracking-wider">
                PT Kalimaya Alunna Indonesia
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-white/90">
            <span className="cursor-pointer hover:text-white transition duration-200" onClick={onBack}>Home</span>
            <span className="cursor-pointer hover:text-white transition duration-200" onClick={scrollToPelajari}>Pelajari</span>
            <span className="cursor-pointer hover:text-white transition duration-200" onClick={handleBeliSekarang}>Beli</span>
          </div>

          <div>
            <button 
              onClick={handleBeliSekarang}
              className="px-4 py-2 rounded-full border border-white bg-white text-[#F3B033] hover:bg-transparent hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: HERO / BANNER CONTAINER (MIMICKING SCREENSHOT 1) */}
      <section className="relative bg-[#F3B033] text-white pt-24 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100 via-amber-300 to-amber-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Back button located inside top level */}
          <div className="absolute -top-12 left-6">
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/10 text-white text-xs font-bold uppercase tracking-wider transition duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </button>
          </div>

          {/* Left Column: Susu Kurma bottles with splash (Screenshot 1 left) */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-6">
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative max-w-md sm:max-w-lg w-full flex justify-center"
            >
              <div className="absolute -bottom-6 w-3/4 h-8 bg-black/15 blur-2xl rounded-full" />
              
              {/* Dynamic Composite Splash & Bottles Group */}
              <div className="relative">
                {/* Floating dates overlay back */}
                <motion.div 
                  animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-8 -top-8 w-14 h-14 z-20 hidden sm:block"
                >
                  <img src="https://images.unsplash.com/photo-1569870499705-50e276842897?auto=format&fit=crop&q=80&w=150" alt="Date Fruit" className="rounded-full w-full h-full object-cover shadow-md border-2 border-amber-200" referrerPolicy="no-referrer" />
                </motion.div>

                {/* Floating single date overlay right */}
                <motion.div 
                  animate={{ y: [0, 10, 0], rotate: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -right-8 top-12 w-12 h-12 z-20 hidden sm:block"
                >
                  <img src="https://images.unsplash.com/photo-1569870499705-50e276842897?auto=format&fit=crop&q=80&w=150" alt="Date Fruit" className="rounded-full w-full h-full object-cover shadow-sm border border-amber-300" referrerPolicy="no-referrer" />
                </motion.div>

                {/* Milk splash background decor */}
                <div className="absolute inset-x-0 bottom-2 bg-gradient-to-t from-[#FAF6EE]/20 to-transparent h-24 rounded-full blur-xl" />

                {/* Main Product Image (Susu Kurma UHT Bottle pair) */}
                <img 
                  src="https://alunna.id/wp-content/uploads/2026/04/susu-kurma.webp" 
                  alt="Susu Kurma Alunna Premium Splash Bottles" 
                  className="w-full h-auto object-contain max-h-[350px] sm:max-h-[420px] drop-shadow-[0_24px_50px_rgba(140,88,60,0.3)] select-none hover:scale-[1.02] transition-transform duration-500 relative z-10"
                  referrerPolicy="no-referrer"
                />

                {/* Plate of sweet, wet dates at bottom center-left */}
                <div className="absolute -bottom-4 -left-4 w-32 sm:w-40 z-20">
                  <img 
                    src="https://images.unsplash.com/photo-1569870499705-50e276842897?auto=format&fit=crop&q=80&w=300" 
                    alt="Platter of dates" 
                    className="w-full h-auto rounded-full border-4 border-white/95 shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-1 right-1 bg-amber-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow">
                    Pure & Halal
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Title & detail specifications */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wide font-sans text-white leading-tight drop-shadow-sm select-none"
              >
                Susu Kurma Alunna
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 text-amber-50/90 font-medium leading-relaxed font-sans"
              >
                Diformulasikan khusus untuk mendukung tumbuh kembang si kecil serta menaikkan imunitas alami
              </motion.p>
            </div>

            {/* Buttons aligned perfectly as requested */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button 
                onClick={handleBeliSekarang}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#8C593C] hover:bg-[#6e462d] text-white font-sans text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-950/20 active:scale-95 cursor-pointer border border-[#8C593C]"
              >
                <ShoppingCart className="w-4 h-4 shrink-0" />
                <span>Beli Sekarang</span>
              </button>

              <button 
                onClick={scrollToPelajari}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF6EE]/10 hover:bg-[#FAF6EE]/20 text-white font-sans text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-1 border-2 border-white/60 hover:border-white active:scale-95 cursor-pointer"
              >
                <span>Pelajari</span>
              </button>
            </motion.div>
          </div>

        </div>

        {/* Beautiful screenshot layout bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-[2px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] sm:h-[80px]" fill="#FAF6EE">
            <path d="M0,0 C150,90 350,120 600,100 C850,80 1050,90 1200,120 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 2: ARCHED BENEFIT INFOGRAPHIC (MIMICKING SCREENSHOT 2) */}
      <section className="relative py-20 px-6 bg-[#FAF6EE] overflow-hidden" id="learn-milk-section">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Headline info */}
          <div className="text-center space-y-4 max-w-2xl mx-auto z-10 relative">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-sans font-black text-[#E3902D] uppercase tracking-wide leading-tight"
            >
              Susu Kurma Menambah Nutrisi Anak
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#8C593C]/90 font-sans text-xs sm:text-sm font-bold tracking-wide"
            >
              Diformulasikan khusus untuk mendukung tumbuh kembang si kecil serta menaikkan imunitas alami
            </motion.p>
          </div>

          {/* Symmetrical Arch Layout container */}
          <div className="relative pt-12 pb-24 md:pb-32 px-4 max-w-4xl mx-auto flex items-center justify-center">
            
            {/* Dashed Circular Arc spanning back */}
            <div className="absolute top-16 left-12 right-12 bottom-6 rounded-t-full border-t-2 border-dashed border-[#8C593C]/35 pointer-events-none hidden md:block" />

            {/* Central elements bottom */}
            <div className="relative z-20 flex flex-col items-center justify-end mt-24">
              
              {/* Semi circle solid base and fresh date milk glass inside */}
              <div className="relative w-52 h-24 sm:w-72 sm:h-36 bg-[#F3B033] rounded-t-full flex items-center justify-center overflow-visible shadow-lg shadow-amber-500/10">
                <motion.div
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-4 sm:bottom-6 w-36 sm:w-52 h-auto z-30"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=400" 
                    alt="Premium date shake glass illustrating dates on rim" 
                    className="w-full h-36 sm:h-48 object-cover rounded-2xl drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

            </div>

            {/* Infographic Labels & Nodes responsive grid */}
            {/* Desktop Arch Absolute Placement points */}
            
            {/* Node 1: Zat Besi (Far Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute top-32 left-0 w-44 space-y-1.5 hidden md:block text-right"
            >
              <div className="inline-flex items-center gap-2">
                <span className="font-sans font-black text-[#5D4037] text-md">Zat Besi</span>
                <span className="w-5 h-5 rounded-full bg-[#E3902D] border border-white flex-shrink-0 shadow-md ring-4 ring-[#FAF6EE] z-20" />
              </div>
              <p className="text-[#8C593C] text-xs font-semibold leading-relaxed">
                Mendukung Perkembangan Otak Anak
              </p>
            </motion.div>

            {/* Node 2: Serat (Middle Left) */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute top-4 left-16 w-52 space-y-1.5 hidden md:block text-right pr-6"
            >
              <div className="inline-flex items-center gap-2">
                <span className="font-sans font-black text-[#5D4037] text-md">Serat</span>
                <span className="w-5 h-5 rounded-full bg-[#E3902D] border border-white flex-shrink-0 shadow-md ring-4 ring-[#FAF6EE] z-20" />
              </div>
              <p className="text-[#8C593C] text-xs font-semibold leading-relaxed">
                Melancarkan Pencernaan Anak
              </p>
            </motion.div>

            {/* Node 3: Sumber Energi (Middle Right) */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute top-4 right-16 w-52 space-y-1.5 hidden md:block text-left pl-6"
            >
              <div className="inline-flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#E3902D] border border-white flex-shrink-0 shadow-md ring-4 ring-[#FAF6EE] z-20" />
                <span className="font-sans font-black text-[#5D4037] text-md">Sumber Energi</span>
              </div>
              <p className="text-[#8C593C] text-xs font-semibold leading-relaxed">
                Anak Memerlukan Energi Selain dari ASI
              </p>
            </motion.div>

            {/* Node 4: Kaya Antioksidan (Far Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute top-32 right-0 w-44 space-y-1.5 hidden md:block text-left"
            >
              <div className="inline-flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#E3902D] border border-white flex-shrink-0 shadow-md ring-4 ring-[#FAF6EE] z-20" />
                <span className="font-sans font-black text-[#5D4037] text-md">Kaya Antioksidan</span>
              </div>
              <p className="text-[#8C593C] text-xs font-semibold leading-relaxed">
                Dapat Memperkuat Imun Agar Tidak Mudah Sakit
              </p>
            </motion.div>

            {/* Mobile-only presentation of items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:hidden w-full px-4 text-center z-10 relative">
              <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm space-y-1 text-[#8C593C]">
                <div className="w-8 h-8 rounded-full bg-[#E3902D] text-white flex items-center justify-center mx-auto text-xs font-extrabold mb-1">1</div>
                <h4 className="font-sans font-black text-slate-800 text-sm">Zat Besi</h4>
                <p className="text-xs">Mendukung Perkembangan Otak Anak</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm space-y-1 text-[#8C593C]">
                <div className="w-8 h-8 rounded-full bg-[#E3902D] text-white flex items-center justify-center mx-auto text-xs font-extrabold mb-1">2</div>
                <h4 className="font-sans font-black text-slate-800 text-sm">Serat</h4>
                <p className="text-xs">Melancarkan Pencernaan Anak</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm space-y-1 text-[#8C593C]">
                <div className="w-8 h-8 rounded-full bg-[#E3902D] text-white flex items-center justify-center mx-auto text-xs font-extrabold mb-1">3</div>
                <h4 className="font-sans font-black text-slate-800 text-sm">Sumber Energi</h4>
                <p className="text-xs">Anak Memerlukan Energi Selain dari ASI</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm space-y-1 text-[#8C593C]">
                <div className="w-8 h-8 rounded-full bg-[#E3902D] text-white flex items-center justify-center mx-auto text-xs font-extrabold mb-1">4</div>
                <h4 className="font-sans font-black text-slate-800 text-sm">Kaya Antioksidan</h4>
                <p className="text-xs">Dapat Memperkuat Imun Agar Tidak Mudah Sakit</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: CORE CAPABILITIES & BENEFITS METADATA (MIMICKING SCREENSHOT 3) */}
      <section className="py-24 px-6 bg-[#FAF6EE] relative z-10">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Three high-impact golden top border feature cards (Screenshot 3 top row) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Brain Development */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-[#F3B033] text-white rounded-3xl p-8 pt-10 text-center relative shadow-lg shadow-amber-500/5 overflow-visible"
            >
              {/* White badge holding brain icon offset top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-[#F3B033] flex items-center justify-center shadow-lg border border-yellow-250">
                <Brain className="w-7 h-7" />
              </div>
              
              <div className="space-y-3 mt-4">
                <h3 className="font-sans font-black text-xl uppercase tracking-wide text-white">
                  Brain Development
                </h3>
                <p className="text-amber-50 text-xs sm:text-sm leading-relaxed font-sans">
                  Membantu perkembangan saraf dan pertumbuhan kognitif si kecil.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Immune Support */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: 0.1 }}
              className="bg-[#F3B033] text-white rounded-3xl p-8 pt-10 text-center relative shadow-lg shadow-amber-500/5"
            >
              {/* White badge holding shield icon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-[#F3B033] flex items-center justify-center shadow-lg border border-yellow-250">
                <ShieldCheck className="w-7 h-7" />
              </div>
              
              <div className="space-y-3 mt-4">
                <h3 className="font-sans font-black text-xl uppercase tracking-wide text-white">
                  Immune Support
                </h3>
                <p className="text-amber-50 text-xs sm:text-sm leading-relaxed font-sans">
                  Mendorong imun alami si kecil agar tidak mudah terserang penyakit.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Energy Boost */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: 0.2 }}
              className="bg-[#F3B033] text-white rounded-3xl p-8 pt-10 text-center relative shadow-lg shadow-amber-500/5"
            >
              {/* White badge holding energy icon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-[#F3B033] flex items-center justify-center shadow-lg border border-yellow-250">
                <Flame className="w-7 h-7" />
              </div>
              
              <div className="space-y-3 mt-4">
                <h3 className="font-sans font-black text-xl uppercase tracking-wide text-white">
                  Energy Boost
                </h3>
                <p className="text-amber-50 text-xs sm:text-sm leading-relaxed font-sans">
                  Manis alami dari buah kurma dapat menambah energi si kecil beraktivitas.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Lower layout: Symmetrical banner layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            
            {/* Left decor: Beautiful curved rounded blob with bottles */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute inset-y-0 w-72 h-72 rounded-full bg-[#8C593C] opacity-[0.9] -z-10 -ml-12 mt-6 blur-md" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-xs relative"
              >
                <img 
                  src="https://alunna.id/wp-content/uploads/2026/04/susu-kurma.webp" 
                  alt="Susu Kurma Alunna detail" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] select-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Right: Premium brand values text explanation */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#E3902D] uppercase tracking-wide">
                  Susu Kurma yang Lezat dan Bernutrisi
                </h2>
                <div className="w-16 h-1 bg-[#8C593C] mx-auto lg:mx-0 rounded-full" />
              </div>

              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                Mulai momen sehat anak hari ini dengan kebaikan susu sapi steril dan kurma premium kualitas tinggi. Cita rasa legit alami tanpa gula tambahan buatan.
              </p>

              <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E3902D]/20 text-[#8C593C] text-xs font-bold font-sans shadow-sm inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3902D]" />
                  100% Real Milk & Dates
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E3902D]/20 text-[#8C593C] text-xs font-bold font-sans shadow-sm inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3902D]" />
                  High Calcium & Vitamin D
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E3902D]/20 text-[#8C593C] text-xs font-bold font-sans shadow-sm inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3902D]" />
                  Bebas Pemanis Tambatan
                </span>
              </div>

              <div className="pt-6">
                <button 
                  onClick={handleBeliSekarang}
                  className="px-8 py-3.5 bg-[#8C593C] hover:bg-[#6e462d] text-white font-sans text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md shadow-amber-950/10 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Minta Penawaran B2B</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-amber-100/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
          
          <div className="flex gap-6 font-medium text-[11px] uppercase tracking-widest">
            <span className="cursor-pointer hover:text-slate-800 transition" onClick={onBack}>Home</span>
            <span className="cursor-pointer hover:text-slate-800 transition" onClick={scrollToPelajari}>Pelajari</span>
            <span className="cursor-pointer hover:text-slate-800 transition" onClick={handleBeliSekarang}>Contact</span>
          </div>

          <div className="text-right text-slate-400 font-medium tracking-wide">
            <span>Copyright © 2026 Kalimaya Premium Healthy Snack</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
