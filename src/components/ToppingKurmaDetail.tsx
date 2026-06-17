/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ShoppingBag, 
  Heart, 
  Sparkles, 
  Droplet, 
  ShieldAlert, 
  Leaf, 
  Info,
  Apple,
  CheckCircle2
} from "lucide-react";

interface ToppingKurmaDetailProps {
  onBack: () => void;
  onInquire: (needsText: string) => void;
}

export default function ToppingKurmaDetail({ onBack, onInquire }: ToppingKurmaDetailProps) {
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFixedHeader(true);
      } else {
        setShowFixedHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRequestSample = () => {
    onInquire("Halo Kalimaya, saya tertarik untuk memesan / meminta sampel uji coba KALIMAYA TOPPING KURMA.");
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      
      {/* HEADER SECTION - SCROLL DEPENDENT */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-[#0A3D91] text-white shadow-xl transition-all duration-500 ease-out transform ${showFixedHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
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

      {/* SECTION 1: CUSTOM NAVIGATION & HERO HEADER IN ONE IMMERSIVE GRADIENT AREA */}
      <div className="relative bg-gradient-to-b from-[#7c522b] via-[#8f6239] to-[#ac7c53] text-white overflow-hidden pb-16 sm:pb-24 pt-8">
        
        {/* Back navigation & Badges Row inside Hero */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 flex items-center justify-between mb-2">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>
          
          <div className="flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-200 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 stroke-[3]" />
            100% Sari Kurma Alami
          </div>
        </div>

        {/* Subtle Faded Dates Background Patterns */}
        <div 
          className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=1200')` 
          }}
        />

        {/* Floating Decorative Glow Rings */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] rounded-full bg-yellow-300/10 blur-3xl pointer-events-none" />

        {/* Hero Body Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 sm:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Topping Kurma bottle with glowing overlays */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              {/* Splashing visual circles */}
              <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full bg-white/5 border border-white/10 blur-sm pointer-events-none" />
              <div className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full bg-amber-400/10 animate-ping opacity-15 pointer-events-none" />
              
              {/* Product Bottle Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-[200px] sm:max-w-[240px] drop-shadow-2xl"
              >
                <img 
                  src="https://kalimayaindonesia.com/wp-content/uploads/2025/12/topping-kurma.png.webp"
                  alt="Kalimaya Topping Kurma Bottle" 
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Right Column: Hero copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.05]">
                  PURE NATURAL <br className="hidden sm:inline" />
                  TOPPING KURMA
                </h1>
                
                <p className="font-sans text-white/80 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
                  Ekstrak sari kurma khalas murni bermutu tinggi. Diproses steril tanpa pemanis sintetis, sangat pas untuk topping menu minuman kekinian, latte, kopi, boba, and dessert premium.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={handleRequestSample}
                  className="w-full sm:w-auto px-8 py-3.5 bg-amber-900 border border-transparent hover:bg-amber-950 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-lg transition duration-200 cursor-pointer shadow-md"
                >
                  Shop Now
                </button>
                <button
                  onClick={onBack}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-amber-800 hover:bg-slate-50 font-sans text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer border border-transparent hover:border-white shadow-md flex items-center justify-center gap-1.5"
                >
                  Explore More →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 2: WHAT IS KALIMAYA TOPPING KURMA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Area: Title Content */}
            <div className="lg:col-span-4 text-left space-y-4">
              <h2 className="font-sans font-black text-amber-850 text-3xl sm:text-4xl tracking-tight leading-snug">
                What Is Kalimaya <br />
                Topping Kurma?
              </h2>
              <p className="font-sans text-slate-500 text-xs sm:text-[13px] leading-relaxed font-semibold tracking-wide">
                100% Pure Date Concentrate, Rich Minerals, and Healthy Purity.
              </p>
            </div>

            {/* Middle Area: Core Description Paragraphs & Nutrition Button */}
            <div className="lg:col-span-4 text-left space-y-6">
              <p className="font-sans text-slate-700 text-xs sm:text-[13px] leading-relaxed">
                Enjoy sweetness guilt-free. Kalimaya Topping Kurma delivers the deliciousness of <strong className="text-slate-900">100% natural, premium dates</strong> with no artificial thickeners.
              </p>
              <p className="font-sans text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                Crafted meticulously to bring a smooth, <strong className="text-slate-700">caramel-like flow texture</strong> that enhances beverages, sweet waffles, yogurt, and health bowls seamlessly.
              </p>

              <button 
                onClick={handleRequestSample}
                className="flex items-center gap-2 bg-[#7c522b] hover:bg-amber-900 text-white font-sans text-[11px] font-bold tracking-widest uppercase px-5 py-3 rounded-lg transition duration-200 cursor-pointer w-fit shadow-md shadow-amber-500/10"
              >
                <Apple className="w-4 h-4 shrink-0" />
                Nutrition Fact
              </button>
            </div>

            {/* Right Area: Yani-Topping Display Box */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div className="absolute inset-0 bg-amber-50/50 rounded-3xl blur-xl scale-95 pointer-events-none" />
              <div className="relative max-w-[285px] sm:max-w-[340px] overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-[#fafbfe]">
                <img 
                  src="https://kalimayaindonesia.com/wp-content/uploads/2026/01/Yani-Topping-1024x1024.png.webp" 
                  alt="Standardisasi Kualitas Laboratorium B2B - Yani Topping" 
                  className="w-full h-auto object-cover hover:scale-102 transition duration-500 select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: WHY YOU'LL LOVE TOPPING KURMA */}
      <section className="relative py-24 bg-gradient-to-r from-[#503115] to-[#73471c] text-white overflow-hidden">
        
        {/* Faded background dates details matching web style */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-color-burn pointer-events-none bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=1200')` 
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: 4 Minimal Grid Elements with classic icons */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 text-left">
              
              {/* Feature 1 */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                  100% Real Dates
                </h4>
                <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed">
                  No added sugar or corn syrup. Just pure concentrates of luxury Khalas dates.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-yellow-300">
                  <Droplet className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                  Flows Perfectly
                </h4>
                <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed">
                  Formulated to flow easily through automated drink dispensers and latte art.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-red-300">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                  Rich in Nutrition
                </h4>
                <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed">
                  Naturally packed with dietary fibers, potassium, iron, and slow-release energy.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-200">
                  <Leaf className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                  Unrefined Purity
                </h4>
                <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed">
                  All-natural extraction with zero additives, making it ideal for clean-label brands.
                </p>
              </div>

            </div>

            {/* Right Column: Heading, Button and the bait image */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div className="space-y-3">
                <h3 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl tracking-normal leading-[1.1] uppercase">
                  Why You'll Love <br />
                  Topping Kurma
                </h3>
                <p className="font-serif italic text-white/60 text-xs sm:text-[13px] tracking-wide">
                  For your healthy indulgence
                </p>
              </div>

              <div>
                <button
                  onClick={handleRequestSample}
                  className="px-8 py-3.5 bg-white text-amber-900 hover:bg-slate-100 font-sans text-xs font-bold uppercase tracking-wider rounded-lg transition duration-200 cursor-pointer shadow-md inline-block"
                >
                  Shop Now
                </button>
              </div>

              {/* Square Topping bait image exactly matching the UI layout */}
              <div className="relative group max-w-[340px] rounded-2xl overflow-hidden border-2 border-white/10 hover:border-white/30 transition shadow-xl aspect-square">
                <img 
                  src="https://kalimayaindonesia.com/wp-content/uploads/2026/01/topping-image-bait-300x300.png.webp" 
                  alt="Delicious Ice Cream with Kalimaya Topping Kurma bait" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER ACTION CARD FOR BUSINESS ENGAGEMENT */}
      <section className="py-16 bg-[#fafbfe] border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="bg-amber-50 text-amber-800 text-[10.5px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Enterprise & Cafe Partner
          </span>
          <h2 className="font-display font-bold text-slate-900 text-2xl tracking-tight leading-tight">
            Tingkatkan Nilai Menu Anda dengan Pemanis Sehat Autentik
          </h2>
          <p className="font-sans text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Dapatkan sampel uji coba gratis, sertifikasi analisis bahan kimia lengkap, dan penawaran harga kemudahan B2B tier terbaik untuk kelancaran rantai pasok Anda.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleRequestSample}
              className="px-6 py-3.5 bg-[#085aa4] hover:bg-blue-700 text-white font-sans text-xs font-extrabold uppercase tracking-wider rounded-xl transition duration-200 cursor-pointer"
            >
              Minta Sampel & Penawaran Industri
            </button>
            <button
              onClick={onBack}
              className="px-6 py-3.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-sans text-xs font-extrabold uppercase tracking-wider rounded-xl transition duration-200 cursor-pointer"
            >
              Kembali ke Katalog
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
