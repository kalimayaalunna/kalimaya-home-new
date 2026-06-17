/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import PartnerSlider from "./PartnerSlider";

export default function Testimonials() {
  return (
    <>
      <section id="testimonials-b2b" className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold block">
              Suara Para Mitra Bisnis
            </span>
            <h2 className="font-display font-bold text-slate-900 text-3xl sm:text-4xl tracking-tight">
              Bagaimana Kalimaya Membantu Dapur F&B Bertumbuh
            </h2>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Dari artisan bakery lokal hingga jaringan waralaba berskala nasional, komitmen kami pada rasa buah murni dan performa teknis (bake-stability) diuji secara berkala oleh ahlinya.
            </p>
            <div className="w-16 h-1 bg-[#085aa4] mx-auto rounded-full mt-3" />
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, idx) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between relative group hover:shadow-md transition-shadow"
              >
                <div className="space-y-4 text-left">
                  {/* Custom representation of high-end testimonial design */}
                  <span className="font-serif text-5xl text-blue-100 absolute top-4 left-4 font-extrabold select-none pointer-events-none group-hover:text-blue-200 transition-colors">
                    “
                  </span>
                  
                  <p className="font-sans text-slate-600 text-sm leading-relaxed relative z-10 pt-4">
                    "{test.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-50 flex items-center gap-3.5 text-left">
                  {/* Aesthetic Avatar Block */}
                  <div className="w-10 h-10 rounded-full bg-[#085aa4]/10 text-[#085aa4] font-display font-bold text-sm flex items-center justify-center shrink-0">
                    {test.logoText}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-800 text-sm">
                      {test.name}
                    </h4>
                    <p className="font-sans text-slate-500 text-xs">
                      {test.role}, <span className="font-medium text-[#085aa4]">{test.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* BRAND COLLABORATION SLIDER */}
      <PartnerSlider />

      <section className="pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Corporate Partnership Banner */}
          <div className="bg-[#085aa4] rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            
            <div className="lg:col-span-8 space-y-3 z-10">
              <h4 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-white leading-normal">
                Memiliki Jaringan Kafe lebih dari 5 Cabang?
              </h4>
              <p className="font-sans text-blue-100 text-sm max-w-xl leading-relaxed">
                Dapatkan kontrak suplai tahunan eksklusif dengan harga rate flat yang diproteksi dari inflasi komoditas pangan, prioritas restock utama, serta layanan kustomisasi brix berkala oleh tim R&D ahli kami.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end z-10">
              <a
                href="#request-portal"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#085aa4] font-sans font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                Diskusikan Kontrak Volume Tinggi
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
