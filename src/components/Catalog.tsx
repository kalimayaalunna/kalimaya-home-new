/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { 
  X,
  ShieldCheck, 
  Leaf, 
  Clock, 
  Layers, 
  Plus, 
  HelpCircle,
  Sparkles,
  ArrowRightCircle,
  FileText
} from "lucide-react";

interface CatalogProps {
  onOpenSampleForm: () => void;
  onViewDetailedStrawberryJam?: () => void;
  onViewDetailedToppingKurma?: () => void;
  onViewDetailedTamarraBrownies?: () => void;
  onViewDetailedPureStrawberry?: () => void;
  onViewDetailedDateJam?: () => void;
  onViewDetailedDateSeedDrink?: () => void;
  onViewDetailedDatesCookies?: () => void;
  onViewDetailedSusuKurma?: () => void;
}

// Map each product to its specific gradient styling matching the screenshot precisely
const PRODUCT_STYLES: Record<string, { gradient: string }> = {
  "prod-strawberry-jam": {
    gradient: "from-[#ef6669] to-[#fa9da8]"
  },
  "prod-topping-kurma": {
    gradient: "from-[#858489] to-[#b6babd]"
  },
  "prod-tamarra-brownies-chips": {
    gradient: "from-[#419cd2] to-[#88cbe8]"
  },
  "prod-pure-strawberry": {
    gradient: "from-[#e43f3b] to-[#f78280]"
  },
  "prod-date-jam": {
    gradient: "from-[#f4a132] to-[#fcd375]"
  },
  "prod-date-seed-drink": {
    gradient: "from-[#79a65d] to-[#afd69c]"
  },
  "prod-dates-cookies": {
    gradient: "from-[#663d21] to-[#a07455]"
  },
  "prod-susu-kurma": {
    gradient: "from-[#eb6729] to-[#fca662]"
  }
};

export default function Catalog({ onOpenSampleForm, onViewDetailedStrawberryJam, onViewDetailedToppingKurma, onViewDetailedTamarraBrownies, onViewDetailedPureStrawberry, onViewDetailedDateJam, onViewDetailedDateSeedDrink, onViewDetailedDatesCookies, onViewDetailedSusuKurma }: CatalogProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleInquiryRedirect = () => {
    setSelectedProduct(null);
    setTimeout(() => {
      onOpenSampleForm();
    }, 100);
  };

  return (
    <section 
      id="product-catalog" 
      className="py-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#085aa4] font-extrabold px-3 py-1 bg-blue-50 rounded-full inline-block">
            Kalimaya Products
          </span>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Custom Banners Grid with generous spacing and visible overflow to accommodate offset layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 max-w-6xl mx-auto pt-12 pb-12 overflow-visible">
          {PRODUCTS.map((product) => {
            const style = PRODUCT_STYLES[product.id] || { gradient: "from-slate-600 to-slate-500" };
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`group relative h-80 sm:h-96 rounded-[32px] shadow-lg hover:shadow-2xl hover:scale-[1.015] transition-all duration-300 bg-gradient-to-r ${style.gradient} text-white flex overflow-visible`}
              >
                {/* Visual Glow Layer on Hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-[32px]" />

                {/* Left Side: Product Branding Center Box */}
                <div className="w-1/2 p-6 sm:p-10 flex flex-col justify-center items-center text-center relative z-10">
                  <div className="mb-6">
                    <h3 className="font-display font-black text-white text-lg sm:text-l md:text-xl lg:text-2xl leading-tight tracking-widest break-normal uppercase text-center drop-shadow-sm">
                      {product.name}
                    </h3>
                  </div>

                  {/* Outlined Action Button as in Screenshot */}
                  <button
                    onClick={() => {
                      if (product.id === "prod-strawberry-jam" && onViewDetailedStrawberryJam) {
                        onViewDetailedStrawberryJam();
                      } else if (product.id === "prod-topping-kurma" && onViewDetailedToppingKurma) {
                        onViewDetailedToppingKurma();
                      } else if (product.id === "prod-tamarra-brownies-chips" && onViewDetailedTamarraBrownies) {
                        onViewDetailedTamarraBrownies();
                      } else if (product.id === "prod-pure-strawberry" && onViewDetailedPureStrawberry) {
                        onViewDetailedPureStrawberry();
                      } else if (product.id === "prod-date-jam" && onViewDetailedDateJam) {
                        onViewDetailedDateJam();
                      } else if (product.id === "prod-date-seed-drink" && onViewDetailedDateSeedDrink) {
                        onViewDetailedDateSeedDrink();
                      } else if (product.id === "prod-dates-cookies" && onViewDetailedDatesCookies) {
                        onViewDetailedDatesCookies();
                      } else if (product.id === "prod-susu-kurma" && onViewDetailedSusuKurma) {
                        onViewDetailedSusuKurma();
                      } else {
                        setSelectedProduct(product);
                      }
                    }}
                    className="px-6 py-3.5 min-h-[44px] bg-transparent hover:bg-white text-white hover:text-slate-900 font-sans font-extrabold text-[11px] uppercase tracking-wider rounded-xl border border-white/60 hover:border-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    View Product
                    <ArrowRightCircle className="w-4 h-4 shrink-0" />
                  </button>
                </div>

                {/* Right Side: Elegant Floating Product Image, offset and oversized */}
                <div className="w-1/2 relative flex items-center justify-center z-20 overflow-visible">
                  {product.id === "prod-strawberry-jam" ? (
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -right-16 -top-28 sm:-right-24 sm:-top-44 md:-right-28 md:-top-48 lg:-right-32 lg:-top-52 w-[180%] h-[180%] sm:w-[195%] h-[195%] md:w-[205%] h-[205%] flex items-center justify-center pointer-events-none z-30 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transform scale-100 group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{
                        y: [0, -12, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -right-4 -top-8 sm:-right-8 sm:-top-12 md:-right-10 md:-top-14 lg:-right-14 lg:-top-16 w-[125%] h-[125%] sm:w-[135%] h-[135%] flex items-center justify-center pointer-events-none drop-shadow-2xl"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transform group-hover:scale-[1.08] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Help Center Guidance */}
        <div className="mt-16 text-center max-w-2xl mx-auto bg-slate-50 border border-slate-200/50 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-center text-left">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-[#085aa4]" />
          </div>
          <div>
            <h4 className="font-sans font-bold text-slate-800 text-sm">
              Butuh Formulasi Khusus dengan Parameter Berbeda?
            </h4>
            <p className="font-sans text-slate-500 text-xs mt-1 leading-relaxed">
              Jika lini bakery, kafe, atau pabrik Anda membutuhkan Brix khusus, konsistensi selai kustom, atau kemasan drum industri berat, silakan isi formulir di bawah ini agar analis R&D kami merespons segera.
            </p>
          </div>
        </div>

      </div>

      {/* DETAILED SPECIFICATIONS MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl relative border border-slate-150 z-10 text-left flex flex-col"
            >
              
              {/* Header with Background Gradient matching current product */}
              <div className={`p-6 sm:p-8 bg-gradient-to-r ${(PRODUCT_STYLES[selectedProduct.id] || { gradient: "from-slate-600 to-slate-500" }).gradient} text-white relative`}>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-black/15 hover:bg-black/30 text-white transition cursor-pointer"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="space-y-1 pr-6">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/80 font-bold">
                    Spesifikasi Produk B2B Kalimaya
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-none uppercase">
                    {selectedProduct.name}
                  </h3>
                </div>
              </div>

              {/* Specifications Content Scrollable area */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
                
                {/* Description */}
                <div className="space-y-1.5">
                  <p className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Deskripsi Bahan Baku
                  </p>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Specs Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Ingredients */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1 text-xs">
                    <span className="font-sans text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Leaf className="w-3.5 h-3.5 text-emerald-500" /> Komposisi Utama
                    </span>
                    <p className="font-sans font-medium text-slate-800 leading-relaxed mt-1">
                      {selectedProduct.ingredients}
                    </p>
                  </div>

                  {/* Sugar Index */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1 text-xs">
                    <span className="font-sans text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-500" /> Kadar Kemanisan (Brix)
                    </span>
                    <p className="font-mono font-bold text-slate-800 mt-1">
                      {selectedProduct.sugarContent}
                    </p>
                  </div>

                  {/* Viskositas */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1 text-xs">
                    <span className="font-sans text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#085aa4]" /> Viskositas / Tekstur
                    </span>
                    <p className="font-sans font-semibold text-slate-800 mt-1">
                      {selectedProduct.viscosity}
                    </p>
                  </div>

                  {/* Shelf Life */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1 text-xs">
                    <span className="font-sans text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-500" /> Masa Kedaluwarsa
                    </span>
                    <p className="font-sans font-semibold text-indigo-600 mt-1">
                      {selectedProduct.shelfLife}
                    </p>
                  </div>

                </div>

                {/* Highlights List */}
                <div className="space-y-2">
                  <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Karakteristik Mutu & Keunggulan
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-700">
                    {selectedProduct.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Packaging Sizes */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="font-sans text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Pilihan Kemasan B2B Bulk
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {selectedProduct.packagingSizes.map((size, idx) => (
                        <span key={idx} className="bg-blue-50 text-[#085aa4] border border-blue-100 text-[10px] font-bold px-2.5 py-1 rounded-md">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-150 flex flex-col sm:flex-row gap-3 sm:justify-between items-center">
                <span className="font-sans text-[11px] text-slate-400 text-center sm:text-left">
                  ✓ Diproduksi di fasilitas higienis bersertifikat Halal & BPOM RI
                </span>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 sm:flex-none px-4 py-3 min-h-[44px] border border-slate-200 text-slate-600 hover:text-slate-800 hover:bg-slate-100 font-sans text-xs font-bold rounded-xl transition cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleInquiryRedirect}
                    className="flex-1 sm:flex-none px-5 py-3 min-h-[44px] bg-[#085aa4] hover:bg-blue-700 text-white font-sans text-xs font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-1 shadow-md shadow-blue-500/10"
                  >
                    Minta Penawaran Harga & Sampel
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
