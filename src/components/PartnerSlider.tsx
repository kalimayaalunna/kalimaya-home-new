/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const BRAND_LOGOS = [
  { name: "Apsara Coffee", url: "https://kalimayaindonesia.com/wp-content/uploads/2026/06/apsara-coffee.webp" },
  { name: "Bake Lab", url: "https://kalimayaindonesia.com/wp-content/uploads/2026/06/bakelab.webp" },
  { name: "Delifru", url: "https://kalimayaindonesia.com/wp-content/uploads/2026/06/Delifru-New-Thumbnail.webp" },
  { name: "DNA", url: "https://kalimayaindonesia.com/wp-content/uploads/2026/06/dna.jpeg" },
  { name: "Island", url: "https://kalimayaindonesia.com/wp-content/uploads/2026/06/island.webp" },
  { name: "Meditera", url: "https://kalimayaindonesia.com/wp-content/uploads/2026/06/meditera.webp" },
  { name: "Solo Fresh", url: "https://kalimayaindonesia.com/wp-content/uploads/2026/06/solo-fresh-.webp" },
  { name: "Yana", url: "https://kalimayaindonesia.com/wp-content/uploads/2026/06/yana-.jpeg" },
];

export default function PartnerSlider() {
  // Triple the array to ensure seamless infinite looping with wide screen widths
  const tripleLogos = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="py-14 bg-[#f8fafc] border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Subtle, elegant title */}
        <div className="text-center mb-8">
          <p className="font-sans text-[11px] font-extrabold tracking-widest text-[#085aa4] uppercase">
            Kolaborasi & Kemitraan Strategis
          </p>
          <div className="w-8 h-0.5 bg-blue-600/30 mx-auto mt-2 rounded" />
        </div>
      </div>

      {/* Infinite Slider area */}
      <div className="relative w-full overflow-hidden flex items-center py-6 bg-slate-50 border-y border-slate-100">
        {/* Left & Right Elegant gradients to fade-out the borders */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent z-10 pointer-events-none" />

        {/* Sliding Row - we translate to the right. 
            Initially offset to -50% and animate to 0% to slide to the RIGHT. 
            Slow speed (duration 60s) for elegant effect.
            We use willChange to force hardware acceleration and eliminate lag during scroll. */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 55,
            repeat: Infinity,
          }}
          className="flex gap-10 items-center whitespace-nowrap"
          style={{ 
            width: "max-content",
            willChange: "transform",
            transform: "translate3d(0, 0, 0)"
          }}
        >
          {tripleLogos.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="inline-flex flex-col items-center justify-center h-44 w-72 shrink-0 select-none group bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden p-2"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src={brand.url}
                  alt={brand.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/60 to-transparent p-3 flex flex-col justify-end">
                  <span className="text-white font-sans font-bold text-xs tracking-wider uppercase drop-shadow-sm">
                    {brand.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
