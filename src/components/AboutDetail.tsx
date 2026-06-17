/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Home, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  Flag,
  Handshake, 
  ShieldCheck, 
  Leaf, 
  Globe, 
  ArrowRight,
  Instagram,
  Facebook,
  Award
} from "lucide-react";

interface AboutDetailProps {
  onBack: () => void;
  onInquire: (needsText: string) => void;
}

export default function AboutDetail({ onBack, onInquire }: AboutDetailProps) {
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

  const handleContactClick = () => {
    onInquire("Halo Kalimaya, saya tertarik untuk mengetahui lebih lanjut peluang kerjasama kemitraan dengan PT Kalimaya Alunna Indonesia. Mohon informasi syarat dan ketentuannya.");
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      
      {/* HEADER SECTION - SCROLL DEPENDENT ONLY (FIRST SECTION DOES NOT HAVE IT) */}
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
            <span className="cursor-pointer hover:text-white transition duration-200" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>About</span>
            <span className="cursor-pointer hover:text-white transition duration-200" onClick={handleContactClick}>Blog</span>
            <span className="cursor-pointer hover:text-white transition duration-200" onClick={handleContactClick}>Contact</span>
          </div>

          <div>
            <button 
              onClick={handleContactClick}
              className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-[#0D58C8] text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: HERO CONTAINER WITH DATE PALMS & HERO HEADING (MIMICKING SCREENSHOT 1) */}
      <section className="relative bg-gradient-to-r from-[#0A3D91] via-[#0D58C8] to-[#0A3D91] text-white py-24 px-6 overflow-hidden">
        {/* Palm fronds / dates background with subtle opacity */}
        <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1200')" }} />
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Header navigation bar back button inside Hero to allow layout without Sticky Header initially */}
          <div className="absolute -top-12 left-0">
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </button>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-widest uppercase font-sans text-white text-center"
          >
            About Us
          </motion.h1>

          {/* Breadcrumb controls */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md rounded-full px-6 py-3.5 border border-white/10 max-w-xs mx-auto text-white"
          >
            <button onClick={onBack} className="flex items-center gap-2 hover:text-amber-300 transition cursor-pointer">
              <Home className="w-4 h-4 text-amber-300" />
              <span>Home</span>
            </button>
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <button onClick={handleContactClick} className="flex items-center gap-2 hover:text-amber-300 transition cursor-pointer">
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Contact</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: NATURAL INGREDIENTS AREA (SCREENSHOT 1 CONTENT) */}
      <section className="py-24 px-6 bg-white" id="about-intro">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Product group shot */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="absolute inset-x-0 bottom-0 top-1/4 rounded-full bg-blue-50/70 filter blur-3xl -z-10" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-md sm:max-w-lg"
            >
              <img 
                src="https://kalimayaindonesia.com/wp-content/uploads/2026/01/Product-Kalimaya-Indonesia.png.webp" 
                alt="Product Kalimaya Indonesia Group" 
                className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(13,88,200,0.18)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Right Column: Descriptions & list */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-550/10 text-blue-800 border border-blue-100 text-xs font-semibold tracking-wide" style={{ backgroundColor: "#0D58C812", color: "#0D58C8" }}>
              <Sparkles className="w-4 h-4" />
              <span>About Kalimaya</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-black text-[#0A3D91] tracking-tight leading-tight uppercase">
              Natural Ingredients, Real Impact, Simply Delicious.
            </h2>

            <p className="font-sans text-slate-600 text-base leading-relaxed">
              Empower local farmers by adding value to locally sourced materials through <strong className="text-slate-900 font-bold">healthy food</strong> production.
            </p>

            {/* Structured check items */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D58C8] shrink-0 mt-0.5" />
                <span className="font-sans text-slate-700 text-sm font-medium">Sourced from 100% natural ingredients</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D58C8] shrink-0 mt-0.5" />
                <span className="font-sans text-slate-700 text-sm font-medium">Creates real impact for local farmers</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D58C8] shrink-0 mt-0.5" />
                <span className="font-sans text-slate-700 text-sm font-medium">Delivers a simply delicious taste</span>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0D58C8] hover:bg-[#0A3D91] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition duration-200 cursor-pointer shadow-lg shadow-blue-900/10"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: OUR FUTURE / VISION & MISSION (SCREENSHOT 2 CONTENT) */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100" id="about-vision">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: General concept and socials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D58C8]/10 text-[#0D58C8] text-xs font-semibold tracking-wide">
              <span>✈ Our Future</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-sans font-black text-[#0A3D91] tracking-tight leading-tight uppercase">
              Healty Snack For Everyone
            </h2>

            <p className="font-sans text-slate-600 text-base leading-relaxed">
              Turning Indonesia's natural ingredients into <strong className="text-slate-900 font-bold">premium healthy snacks</strong>. We are more than just a food brand.
            </p>

            <div className="pt-2">
              <button 
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0D58C8] hover:bg-[#0A3D91] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition duration-200 cursor-pointer shadow-lg shadow-blue-900/10"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social rounds exactly matching screenshot vibe */}
            <div className="flex items-center gap-3 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0D58C8] hover:bg-[#0A3D91] text-white flex items-center justify-center transition shadow-md">
                <Instagram className="w-5 h-5" />
              </a>
              {/* TikTok custom icon equivalent rounded style */}
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0D58C8] hover:bg-[#0A3D91] text-white flex items-center justify-center font-black text-sm tracking-tighter transition shadow-md">
                <span>🎵</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0D58C8] hover:bg-[#0A3D91] text-white flex items-center justify-center transition shadow-md">
                <Facebook className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Right: Vision & Mission Blocks */}
          <div className="lg:col-span-6 space-y-10 lg:pl-6">
            {/* Vision block */}
            <div className="flex gap-4 items-start">
              <div className="p-3.5 rounded-xl bg-white text-[#0D58C8] shadow-md border border-slate-100 shrink-0">
                <Target className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-sans font-black text-[#0A3D91] text-xl uppercase tracking-wide">
                  Vision
                </h3>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                  To become a trusted healthy food company with strong social value, delivering high-quality natural products that create positive impact for society.
                </p>
              </div>
            </div>

            {/* Mission block */}
            <div className="flex gap-4 items-start">
              <div className="p-3.5 rounded-xl bg-white text-[#0D58C8] shadow-md border border-slate-100 shrink-0">
                <Flag className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-sans font-black text-[#0A3D91] text-xl uppercase tracking-wide">
                  Mission
                </h3>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                  To create healthy, delicious, and innovative food products with high-quality standards that can compete in both national and global markets.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: WHY US (SCREENSHOT 3 CONTENT - ASYMMETRICAL Bento Grid structure) */}
      <section className="py-24 px-6 bg-white" id="about-why">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center md:text-left space-y-2 max-w-sm">
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0A3D91] tracking-tight uppercase leading-none">
              Why Us
            </h2>
            <div className="w-12 h-1 bg-[#0D58C8] rounded-full mt-3" />
          </div>

          {/* Symmetrical / Unique asymmetric bento flow as seen in custom screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            
            {/* Left column card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D58C8] flex items-center justify-center">
                <span>✊</span>
              </div>
              <h3 className="font-sans font-black text-[#0A3D91] text-lg uppercase tracking-wide">
                Empowerment
              </h3>
              <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                Empowering local farmers and women through sustainable partnerships.
              </p>
            </motion.div>

            {/* Middle double-stacked cards (one solid blue highlighted, one outline) */}
            <div className="space-y-6">
              {/* Card 2: Integrity & Transparency (Solid Premium Blue Backdrop exactly matching SS3) */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-[#0D58C8] text-white rounded-3xl p-8 shadow-[0_12px_40px_rgba(13,88,200,0.25)] space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-black text-white text-lg uppercase tracking-wide">
                  Integrity & Transparency
                </h3>
                <p className="font-sans text-blue-50 text-xs sm:text-sm leading-relaxed">
                  Clear ingredients, transparent processes, and honest product claims.
                </p>
              </motion.div>

              {/* Card 3: Quality & Safety */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D58C8] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-black text-[#0A3D91] text-lg uppercase tracking-wide">
                  Quality & Safety
                </h3>
                <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Natural ingredients, less sugar, and preservative-free products.
                </p>
              </motion.div>
            </div>

            {/* Right column double-stacked cards */}
            <div className="space-y-6">
              {/* Card 4: Sustainability */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D58C8] flex items-center justify-center">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-black text-[#0A3D91] text-lg uppercase tracking-wide">
                  Sustainability
                </h3>
                <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Eco-friendly production and circular economy practices.
                </p>
              </motion.div>

              {/* Card 5: Social Innovation */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D58C8] flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-black text-[#0A3D91] text-lg uppercase tracking-wide">
                  Social Innovation
                </h3>
                <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Innovative products addressing nutrition and wellness needs.
                </p>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: MEET THE PROFESSIONALS (SCREENSHOT 4 CONTENT) */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100" id="about-team">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D58C8]/10 text-[#0D58C8] text-xs font-semibold tracking-wide">
              <span>👥 Our Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0A3D91] uppercase tracking-tight">
              Meet The Professionals
            </h2>
            <div className="w-16 h-1 bg-[#0D58C8] mx-auto rounded-full" />
          </div>

          {/* Cards for Bu Intan & Mba Niken exactly custom rendered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            
            {/* Bu Intan */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                <img 
                  src="https://kalimayaindonesia.com/wp-content/uploads/2026/02/bu-intan-768x1153.jpeg.webp" 
                  alt="Bu Intan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-center space-y-1">
                <h3 className="font-sans font-black text-[#0A3D91] text-lg">Bu Intan</h3>
                <p className="font-sans text-slate-500 text-xs sm:text-sm font-medium">Co-Founder & Clinical Nutrition Advisor</p>
                <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-[#0D58C8] font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Product Formulation Partner</span>
                </div>
              </div>
            </motion.div>

            {/* Mba Niken */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                <img 
                  src="https://kalimayaindonesia.com/wp-content/uploads/2026/02/mba-niken-dwi-768x1153.png.webp" 
                  alt="Mba Niken Dwi" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-center space-y-1">
                <h3 className="font-sans font-black text-[#0A3D91] text-lg">Mba Niken Dwi</h3>
                <p className="font-sans text-slate-500 text-xs sm:text-sm font-medium">Chief Quality Officer & Food Technologist</p>
                <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-[#0D58C8] font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>QC & Sourcing lead</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 6: PREMIUM FOOTER CTA BANNER (SCREENSHOT 5 CONTENT) */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* Cocoa beans overlay background */}
        <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&q=80&w=1200')" }} />
        <div className="absolute inset-0 bg-[#0A3D91] opacity-90 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-widest text-white uppercase leading-tight">
              YOUR BODY DESERVES THE FINEST
            </h2>
            <p className="font-sans text-blue-100 text-sm sm:text-base font-semibold max-w-xl mx-auto block opacity-90">
              Start Your Healthy Lifestyle Today with Kalimaya
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <button 
              onClick={() => {
                onInquire("Saya sangat tertarik memesan / membeli produk camilan & selai premium sehat Bernutrisi Alami dari Kalimaya.");
              }}
              className="px-8 py-4 bg-white hover:bg-slate-100 text-[#0D58C8] font-sans text-xs font-bold uppercase tracking-widest rounded-full transition duration-300 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
            >
              PURCHASE OUR PRODUCT
            </button>
          </motion.div>
        </div>
      </section>

      {/* LOW-KEY FOOTER NAVIGATION & COPYRIGHT (SCREENSHOT 5 FOOTER CONTENT) */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
          
          <div className="flex gap-6 font-medium text-[11px] uppercase tracking-widest">
            <span className="cursor-pointer hover:text-slate-800 transition" onClick={onBack}>Home</span>
            <span className="cursor-pointer hover:text-slate-800 transition" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>About</span>
            <span className="cursor-pointer hover:text-slate-800 transition" onClick={handleContactClick}>Blog</span>
            <span className="cursor-pointer hover:text-slate-800 transition" onClick={handleContactClick}>Contact</span>
          </div>

          <div className="text-right text-slate-400 font-medium tracking-wide">
            <span>Copyright © 2026 Kalimaya Premium Healthy Snack</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
