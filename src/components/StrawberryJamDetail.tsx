/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ShoppingBag, 
  Heart, 
  Sparkles, 
  Droplet, 
  ShieldAlert, 
  Leaf, 
  Flame, 
  Info,
  Apple
} from "lucide-react";

interface StrawberryJamDetailProps {
  onBack: () => void;
  onInquire: (needsText: string) => void;
}

export default function StrawberryJamDetail({ onBack, onInquire }: StrawberryJamDetailProps) {
  const handleRequestSample = () => {
    onInquire("Halo Kalimaya, saya sangat tertarik untuk memesan / meminta sampel uji coba KALIMAYA STRAWBERRY JAM.");
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      
      {/* SECTION 1: CUSTOM NAVIGATION & HERO HEADER IN ONE IMMERSIVE GRADIENT AREA */}
      <div className="relative bg-gradient-to-b from-[#0a4d95] via-[#095aa4] to-[#126bbf] text-white overflow-hidden pb-16 sm:pb-24">
        
        {/* Subtle Faded Strawberries Background Patterns */}
        <div 
          className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=1200')` 
          }}
        />

        {/* Floating Decorative Glow Rings */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-300/10 blur-3xl pointer-events-none" />

        {/* Hero Body Area (Visual split matching the screenshot beautifully) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 sm:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Jam jar with splash animations */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              {/* Splashing visual circles */}
              <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full bg-white/5 border border-white/10 blur-sm pointer-events-none" />
              <div className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full bg-white/10 animate-ping opacity-15 pointer-events-none" />
              
              {/* Product Jar Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-[280px] sm:max-w-[340px] drop-shadow-2xl"
              >
                <img 
                  src="https://kalimayaindonesia.com/wp-content/uploads/2025/12/Untitled-1-1-768x541.png.webp"
                  alt="Kalimaya Strawberry Jam Splash" 
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Right Column: Hero copy and main conversion CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.05]">
                  PURE NATURAL <br className="hidden sm:inline" />
                  STRAWBERRY JAM
                </h1>
                
                <p className="font-sans text-white/80 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
                  Formula selai strowberi premium berkualitas murni dari buah asli Jawa Barat untuk kebutuhan roti, kue, pastry, dan dessert dengan standar ekspor & industri pangan tingkat tinggi.
                </p>
              </motion.div>

              {/* Action Buttons exactly like screen */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={handleRequestSample}
                  className="w-full sm:w-auto px-8 py-3.5 bg-blue-900 border border-transparent hover:bg-blue-950 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-lg transition duration-200 cursor-pointer shadow-md"
                >
                  Shop Now
                </button>
                <button
                  onClick={onBack}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#085aa4] hover:bg-slate-50 font-sans text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer border border-transparent hover:border-white shadow-md flex items-center justify-center gap-1.5"
                >
                  Explore More →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 2: WHAT IS KALIMAYA STRAWBERRY JAM (Match screenshot 2 precisely) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Area: Title Content */}
            <div className="lg:col-span-4 text-left space-y-4">
              <h2 className="font-sans font-black text-[#085aa4] text-3xl sm:text-4xl tracking-tight leading-snug">
                What Is Kalimaya <br />
                Strawberry Jam?
              </h2>
              <p className="font-sans text-slate-500 text-xs sm:text-[13px] leading-relaxed font-semibold tracking-wide">
                100% Natural, Soft Texture, and No Added Preservatives.
              </p>
            </div>

            {/* Middle Area: Core Description Paragraphs & Nutrition Button */}
            <div className="lg:col-span-4 text-left space-y-6">
              <p className="font-sans text-slate-700 text-xs sm:text-[13px] leading-relaxed">
                Stop settling for artificial flavors. Kalimaya Strawberry Jam brings you the taste of <strong className="text-slate-900">real fruit</strong> in every spoon.
              </p>
              <p className="font-sans text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                Made with a soft, <strong className="text-slate-700">spreadable texture</strong>, it is the perfect companion for your morning toast, a sweet topping for desserts, or a mix-in for your yogurt. Simple, natural, and delicious.
              </p>

              <button 
                onClick={handleRequestSample}
                className="flex items-center gap-2 bg-[#095aa4] hover:bg-blue-800 text-white font-sans text-[11px] font-bold tracking-widest uppercase px-5 py-3 rounded-lg transition duration-200 cursor-pointer w-fit shadow-md shadow-blue-500/10"
              >
                <Apple className="w-4 h-4 shrink-0" />
                Nutrition Fact
              </button>
            </div>

            {/* Right Area: Hijab Girl Image cutout (Arlin-Strawberry) */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div className="absolute inset-0 bg-rose-50/50 rounded-3xl blur-xl scale-95 pointer-events-none" />
              <div className="relative max-w-[280px] sm:max-w-[340px] overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-[#fafbfe]">
                <img 
                  src="https://kalimayaindonesia.com/wp-content/uploads/2026/01/Arlin-Strawberry-1024x1024.png.webp" 
                  alt="Beautiful Hijab Girl holding Kalimaya Strawberry Jam jar" 
                  className="w-full h-auto object-cover hover:scale-102 transition duration-500 select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: WHY YOU'LL LOVE STRAWBERRY JAM (Match screenshot 3 precisely) */}
      <section className="relative py-24 bg-gradient-to-r from-[#033b78] to-[#044a95] text-white overflow-hidden">
        
        {/* Faded background strawberries details matching web style */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-color-burn pointer-events-none bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=1200')` 
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: 4 Minimal Grid Elements with classic icons */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 text-left">
              
              {/* Feature 1 */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-rose-300">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                  Authentic Fruit
                </h4>
                <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed">
                  Our jam made with real strawberries for a fresh and natural taste.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                  <Droplet className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                  Soft & Versatile
                </h4>
                <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed">
                  Perfect texture for spreading, mixing, or topping your favorite treats.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-red-300">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                  No Preservatives
                </h4>
                <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed">
                  Clean and safe for the whole family, with no harmful additives.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-teal-300">
                  <Leaf className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                  100% Natural
                </h4>
                <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed">
                  Simple composition just strawberries and sugar. Nothing else hidden.
                </p>
              </div>

            </div>

            {/* Right Column: Heading, Button and the Bait Image */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div className="space-y-3">
                <h3 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl tracking-normal leading-[1.1] uppercase">
                  Why You'll Love <br />
                  Strawberry Jam
                </h3>
                <p className="font-serif italic text-white/60 text-xs sm:text-[13px] tracking-wide">
                  For your daily jam
                </p>
              </div>

              <div>
                <button
                  onClick={handleRequestSample}
                  className="px-8 py-3.5 bg-white text-[#085aa4] hover:bg-slate-100 font-sans text-xs font-bold uppercase tracking-wider rounded-lg transition duration-200 cursor-pointer shadow-md inline-block"
                >
                  Shop Now
                </button>
              </div>

              {/* Square Strawberry Jar image bait exactly like footer screenshot */}
              <div className="relative group max-w-[340px] rounded-2xl overflow-hidden border-2 border-white/10 hover:border-white/30 transition shadow-xl aspect-square">
                <img 
                  src="https://kalimayaindonesia.com/wp-content/uploads/2026/01/strawberry-image-bait-300x300.png.webp" 
                  alt="Kalimaya Strawberry Jar surrounded by real strawberries - image bait" 
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
          <span className="bg-rose-50 text-rose-600 text-[10.5px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Industrial & B2B Solutions
          </span>
          <h2 className="font-display font-bold text-slate-900 text-2xl tracking-tight leading-tight">
            Butuh Spesifikasi Tambahan untuk Pabrik Roti atau Dapur Bakery Anda?
          </h2>
          <p className="font-sans text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Dapatkan katalog parameter laboratorium ph, brix, ketahanan panas oven lengkap, penawaran harga grosir tiering volume besar, dan pengiriman sampel gratis siap saji.
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
