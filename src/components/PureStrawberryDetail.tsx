/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Leaf, 
  Scale, 
  Sparkles, 
  FolderHeart,
  FileText,
  CheckCircle2,
  Bookmark,
  ShoppingBag
} from "lucide-react";

interface PureStrawberryDetailProps {
  onBack: () => void;
  onInquire: (needsText: string) => void;
}

export default function PureStrawberryDetail({ onBack, onInquire }: PureStrawberryDetailProps) {
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
    onInquire("Halo Kalimaya, saya tertarik dengan PURE STRAWBERRY 5KG untuk kebutuhan industri / bisnis F&B kami. Mohon informasi harga grosir, katalog lengkap, dan prosedur pengiriman sampel.");
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

      {/* SECTION 1: HERO HEADER - COMPLIANT WITH THE FIRST SCREENSHOT */}
      <div 
        className="relative bg-gradient-to-r from-[#033b78] via-[#054687] to-[#0a529c] text-white overflow-hidden pb-16 sm:pb-24 pt-8"
        id="pure-strawberry-hero"
      >
        {/* Repeating organic/strawberry background watermark texture */}
        <div 
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('https://kalimayaindonesia.com/wp-content/uploads/2025/12/Wordpress-Design.png')` 
          }}
        />

        {/* Back navigation & Badges Row */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </button>
          
          <div className="hidden sm:flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
            100% Real Fruit Puree
          </div>
        </div>

        {/* Main interactive content layout matching screenshot 1 */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Bucket 5KG Graphic showcase */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              {/* Vibrant crimson soft backglow */}
              <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full bg-rose-500/15 blur-3xl pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.93, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-[320px] sm:max-w-[440px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
              >
                <img 
                  src="https://kalimayaindonesia.com/wp-content/uploads/2026/02/pure-strawberry-cover-product-768x768.png.webp"
                  alt="Really Pure Strawberry 5KG pail with splashes" 
                  className="w-full h-auto object-contain hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Right Column: Text heading and core navigation action triggers */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="font-poppins font-black text-white text-4xl sm:text-5xl lg:text-[62px] tracking-tight uppercase leading-[1.05]">
                  REALLY PURE <br />
                  STRAWBERRY
                </h1>
                
                <p className="font-sans text-white/80 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
                  Bahan baku bubur buah stroberi murni (puree) konsentrasi tinggi berkualitas premium tanpa esens buatan. Diformifikasikan secara higienis dalam kemasan bulk pail 5 KG untuk menjangkau efisiensi operasional F&B bisnis Anda secara optimal.
                </p>
              </motion.div>

              {/* Action triggers matching screenshot 1 */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={handleRequestSample}
                  className="w-full sm:w-auto px-8 py-4 bg-[#033b78] hover:bg-[#022e5e] border border-transparent text-white font-sans text-xs font-bold uppercase tracking-wider rounded-lg transition duration-200 cursor-pointer shadow-md"
                >
                  Get Product
                </button>
                <button
                  onClick={handleRequestSample}
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-[#033b78] font-sans text-xs font-bold uppercase tracking-wider rounded-lg transition duration-200 cursor-pointer shadow-sm border border-slate-200"
                >
                  Explore More →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 2: BRAND STORY - "What Is Kalimaya Strawberry Pure?" - MATCHES SCREENSHOT 2 */}
      <section className="py-20 bg-white" id="pure-strawberry-story">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h2 className="font-poppins font-extrabold text-blue-900 text-3xl sm:text-4.5xl tracking-tight leading-tight">
                  What Is Kalimaya <br />
                  Strawberry Pure?
                </h2>
                <p className="font-sans text-[#054687] text-base font-semibold tracking-wide">
                  100% Selected Fresh Strawberries processed without synthetic additives.
                </p>
              </div>

              <div className="font-sans text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Capture the authentic aroma and taste of the harvest season year-round. Our Strawberry Puree is processed from selected <strong className="text-slate-800 font-bold">fresh strawberries</strong> to maintain the fruit's original color and flavor profile.
                </p>
                <p>
                  Free from <strong className="text-slate-800 font-bold">synthetic additives</strong>, it is the ideal base for creating premium syrups, yogurts, desserts, and RTD (Ready to Drink) beverages.
                </p>
              </div>

              {/* Wholesale order trigger button with Cart/Bag icon */}
              <div className="pt-4">
                <button 
                  onClick={handleRequestSample}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0a529c] hover:bg-[#084583] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition duration-200 cursor-pointer shadow"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Get Wholesale Product
                </button>
              </div>
            </div>

            {/* Right Image Column - Arlin smiling with Pure bucket */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100 to-transparent rounded-3xl -z-10 w-[95%] h-[95%] mx-auto" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-[320px] sm:max-w-[380px]"
              >
                <img 
                  src="https://kalimayaindonesia.com/wp-content/uploads/2026/01/Arlin-Pure-1024x1024.png.webp"
                  alt="PT Kalimaya Indonesia's Brand Ambassador holding the 5KG pure strawberry pail"
                  className="w-full h-auto object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: BENEFITS GRID - "Why You'll Love This Puree" - MATCHES SCREENSHOT 3 */}
      <section className="bg-gradient-to-r from-[#033b78] via-[#054687] to-[#0a529c] text-white py-20" id="pure-strawberry-benefits">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: 2x2 Benefits Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              
              {/* Benefit 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-teal-300 shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-poppins font-bold text-white text-base">
                    100% Natural
                  </h3>
                  <p className="font-sans text-blue-100/70 text-xs sm:text-sm leading-relaxed">
                    Simple composition just strawberries and sugar. Nothing else hidden.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-poppins font-bold text-white text-base">
                    Stable Brix Character
                  </h3>
                  <p className="font-sans text-blue-100/70 text-xs sm:text-sm leading-relaxed">
                    Ensures consistent sweetness and texture, making it perfect for industrial formulation.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-poppins font-bold text-white text-base">
                    Authentic Fruit
                  </h3>
                  <p className="font-sans text-blue-100/70 text-xs sm:text-sm leading-relaxed">
                    Our puree made with real strawberries for a fresh and natural taste
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-rose-300 shrink-0">
                  <FolderHeart className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-poppins font-bold text-white text-base">
                    Soft & Versatile
                  </h3>
                  <p className="font-sans text-blue-100/70 text-xs sm:text-sm leading-relaxed">
                    Perfect texture for spreading, mixing, or topping your favorite treats
                  </p>
                </div>
              </div>

            </div>

            {/* Right Side: Copy & Promo image of bucket set on beautiful strawberry pile */}
            <div className="lg:col-span-5 space-y-8 lg:pl-4">
              <div className="space-y-3">
                <h2 className="font-poppins font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
                  Why You'll Love <br />
                  This Puree
                </h2>
                <p className="font-sans text-blue-200/80 text-sm sm:text-base">
                  For your industry
                </p>
                <div className="pt-2">
                  <button 
                    onClick={handleRequestSample}
                    className="px-8 py-3.5 bg-white text-[#033b78] hover:bg-slate-50 font-sans text-xs font-bold uppercase tracking-wider rounded-lg transition duration-200 cursor-pointer shadow-md"
                  >
                    Get Product
                  </button>
                </div>
              </div>

              {/* Puree Image bucket embedded in premium fresh strawberries heap */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 max-w-[280px] sm:max-w-[340px] mx-auto lg:mx-0">
                <img 
                  src="https://kalimayaindonesia.com/wp-content/uploads/2026/01/image-bait-puree-300x300.png.webp"
                  alt="High quality Pure Strawberry 5KG Pail stacked on fresh ripe garden strawberries"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CALL-TO-ACTION FOR BULK BUYERS */}
      <section className="py-20 bg-slate-50 border-t border-slate-100" id="pure-strawberry-b2b">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <Bookmark className="w-10 h-10 text-[#033b78] mx-auto opacity-75" />
          <h2 className="font-poppins font-bold text-slate-900 text-3xl">
            Butuh Standardisasi & Suplai Berkelanjutan?
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Dapatkan sampel gratis Pure Strawberry 5 KG hari ini juga untuk dinilai oleh bagian R&D divisi Anda. Kami menjamin standardisasi derajat Brix, kekentalan konstan dari batch ke batch, serta armada pengiriman bersuhu dingin.
          </p>
          <div className="pt-4">
            <button 
              onClick={handleRequestSample}
              className="px-8 py-4 bg-[#033b78] hover:bg-[#022e5e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition duration-200 cursor-pointer shadow-lg shadow-blue-900/10"
            >
              Order Uji Coba Sampel Ke Pabrik R&D Anda
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
