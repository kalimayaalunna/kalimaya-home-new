/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, Flame, ShieldCheck, Check } from "lucide-react";

interface HeroProps {
  onScrollToCatalog: () => void;
  onScrollToInquiry: () => void;
}

export default function Hero({ onScrollToCatalog, onScrollToInquiry }: HeroProps) {
  return (
    <section 
      id="hero-b2b"
      className="relative min-h-[850px] lg:min-h-[900px] flex items-center justify-center bg-gradient-to-b from-[#0A3D91] via-[#0A3D91]/95 to-[#0D58C8] text-white overflow-hidden py-20 sm:py-28"
    >
      {/* 1. Organic Noise overlay for ultimate premium paper texture split */}
      <div 
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none z-10" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />

      {/* Background Graphic Watermark */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay filter saturate-110 pointer-events-none"
        style={{
          backgroundImage: `url('https://kalimayaindonesia.com/wp-content/uploads/2025/12/Wordpress-Design.png')`,
          backgroundPosition: "center right"
        }}
      />

      {/* Decorative Blur Circles for depth (Depth-of-field) */}
      <div className="absolute top-[10%] left-[-5%] w-[45%] h-[45%] rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-300/10 blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Premium Headline & Core Value Statements */}
        <div className="lg:col-span-7 text-left space-y-10">
          
          <div className="space-y-5">
            {/* 2. Tiny Luxury Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-sans text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm"
              id="hero-premium-badge"
            >
              <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
              Premium Supplier
            </motion.div>

            {/* 3. Poppins ExtraBold Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-poppins font-extrabold text-white text-3xl sm:text-5xl lg:text-[70px] tracking-tight leading-[1.05] sm:leading-[1.08]"
              id="hero-headline"
            >
              Bahan Baku Selai Premium Untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-100 to-white">Industri F&B</span>
            </motion.h1>
          </div>

          {/* 4. Opacity subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-sans text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal"
            id="hero-subheadline"
          >
            Menghadirkan produk dengan cita rasa buah alami yang lebih berkualitas dan berdaya saing
          </motion.p>

          {/* 5. Clean 3 Value Proposition Blocks with Minimalist Icon Design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10"
            id="hero-value-props"
          >
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-300">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-poppins font-semibold text-white text-sm tracking-wide">
                Rasa Buah Lebih Natural
              </h3>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-300">
                <Flame className="w-4 h-4" />
              </div>
              <h3 className="font-poppins font-semibold text-white text-sm tracking-wide">
                Stabil untuk Produksi & Baking
              </h3>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-rose-300">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-poppins font-semibold text-white text-sm tracking-wide">
                Rendah Gula & Bebas Pengawet
              </h3>
            </div>
          </motion.div>
          
        </div>

        {/* Right Column: World-Class Showcase with 3D depth floating layers */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[450px] lg:h-[550px]" id="hero-showcase-column">
          
          {/* A. Radial Glow Lembut di Belakang Produk */}
          <div className="absolute w-[450px] h-[450px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-300/20 blur-[130px] opacity-75 pointer-events-none -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 z-0 mix-blend-screen" />
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#0D58C8]/30 blur-[100px] opacity-60 pointer-events-none -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 z-0 mix-blend-screen" />
          
          {/* B. Soft shadow natural pada podium untuk menggrounding botol */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/45 rounded-full blur-xl z-10 pointer-events-none" />

          {/* 3D Depth Floating Particles */}
          
          {/* Floating Strawberry 1: Far back blur */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: [10, -10, 10],
              rotate: [0, 8, 0]
            }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              opacity: { delay: 0.5, duration: 0.8 }
            }}
            className="absolute -top-4 -left-6 sm:-left-12 w-16 h-16 sm:w-20 sm:h-20 z-20 pointer-events-none select-none filter blur-[2px] opacity-80"
          >
            <img 
              src="https://kalimayaindonesia.com/wp-content/uploads/2026/01/strawberry-image-bait-300x300.png.webp"
              alt="Floating Ingredient Piece"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Floating Strawberry 2: Foreground camera blur */}
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ 
              y: [-15, 15, -15],
              rotate: [0, -12, 0]
            }}
            transition={{
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              opacity: { delay: 0.7, duration: 0.8 }
            }}
            className="absolute -bottom-10 -right-4 sm:-right-8 w-24 h-24 sm:w-28 sm:h-28 z-40 pointer-events-none select-none filter blur-[3.5px] opacity-75"
          >
            <img 
              src="https://kalimayaindonesia.com/wp-content/uploads/2026/01/strawberry-image-bait-300x300.png.webp"
              alt="Floating ingredient piece blur"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* C. The Core Showcase: Jar increased in size by ±15% */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.3 }}
            className="relative relative-product-container z-30 p-4"
          >
            <img 
              id="hero-strawberry-jam-img"
              src="https://kalimayaindonesia.com/wp-content/uploads/2025/12/strawberry-jam.png" 
              alt="Premium Raw Strawberry Ingredient supplier Kalimaya Indonesia with splash" 
              className="w-[320px] sm:w-[415px] md:w-[430px] h-auto object-contain filter drop-shadow-[0_30px_45px_rgba(0,0,0,0.5)] select-none hover:scale-102 transition-transform duration-500 pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
