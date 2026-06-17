/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Award } from "lucide-react";

export default function Certifications() {
  return (
    <section 
      id="certification-row" 
      className="py-10 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-slate-50/50 rounded-3xl p-6 sm:p-8 border border-slate-200/50">
          
          {/* Label Title */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
              <ShieldCheck className="w-5 h-5 text-[#085aa4]" />
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-widest text-[#085aa4] uppercase font-extrabold">
                REGULASI & KEAMANAN PANGAN
              </p>
              <h3 className="font-display font-bold text-slate-800 text-lg leading-snug">
                Telah Tersertifikasi Resmi & Terdaftar Nasional
              </h3>
            </div>
          </div>

          {/* Simple Clean Cert Badges */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            
            {/* Halal Badge */}
            <div className="flex items-center gap-3 bg-white border border-emerald-100 rounded-2xl px-5 py-3.5 shadow-xs text-left flex-1 sm:flex-none">
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <p className="font-sans font-bold text-slate-900 text-xs sm:text-sm">
                  Sertifikasi Halal Indonesia
                </p>
                <p className="font-mono text-[10px] text-emerald-600 font-bold mt-0.5">
                  ID00210000234560723
                </p>
              </div>
            </div>

            {/* BPOM Badge */}
            <div className="flex items-center gap-3 bg-white border border-blue-100 rounded-2xl px-5 py-3.5 shadow-xs text-left flex-1 sm:flex-none">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-[#085aa4]" />
              </div>
              <div>
                <p className="font-sans font-bold text-slate-900 text-xs sm:text-sm">
                  Izin Edar BPOM RI MD
                </p>
                <p className="font-mono text-[10px] text-blue-600 font-bold mt-0.5">
                  BPOM RI MD 262813001222
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
