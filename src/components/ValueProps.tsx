/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Leaf, Apple, ShieldAlert, Award, HelpingHand } from "lucide-react";

export default function ValueProps() {
  const badges = [
    {
      id: "natural",
      title: "100% Alami & Murni",
      originalText: "Made from carefully selected natural ingredients without artificial additives.",
      b2bDesc: "Dibuat dari buah segar pilihan tanpa tambahan perasa ataupun pewarna. Menyajikan rasa buah alami di setiap produksi untuk membantu kesempurnaan produk bisnis anda.",
      color: "#085aa4",
      hoverColor: "#0072BB",
      icon: Leaf,
    },
    {
      id: "gluten-free",
      title: "Bebas Gluten (Gluten Free)",
      originalText: "Safe for gluten-sensitive individuals and suitable for a gluten-free lifestyle.",
      b2bDesc: "Aman untuk konsumen dengan sensitivitas gluten. Membantu kafe, resto, dan katering Anda memperluas segmentasi pasar dengan menu-menu inklusif, sehat, dan ramah alergi.",
      color: "#085aa4",
      hoverColor: "#0072BB",
      icon: Award,
    },
    {
      id: "no-preservatives",
      title: "Tanpa Pengawet Buatan",
      originalText: "Without artificial preservatives to maintain natural quality and freshness.",
      b2bDesc: "Menjaga kualitas, orisinalitas cita rasa, serta kesegaran alami. Kami menggunakan teknik sterilisasi termal modern untuk menjamin shelf life yang panjang tanpa mengorbankan keamanan pangan.",
      color: "#085aa4",
      hoverColor: "#0072BB",
      icon: ShieldAlert,
    },
    {
      id: "less-sugar",
      title: "Less Sugar / Rendah Kalori",
      originalText: "Lower sugar in every product with the same satisfaction for a healthier snack.",
      b2bDesc: "Kadar gula alami yang tidak mengorbankan kelezatan asli buah. Sangat ideal untuk industri F&B sehat modern yang mengutamakan harmoni rasa premium dan kesehatan.",
      color: "#085aa4",
      hoverColor: "#0072BB",
      icon: Apple,
    }
  ];

  const b2bValueAddon = [
    {
      title: "Formula Tahan Panggang (Bake-Stable)",
      desc: "Teknologi formulasi penstabil (pectin & starch grade tinggi) menjaga struktur selai tetap kokoh, tidak mengering atau hancur saat dioven pada temperatur tinggi industri pastry.",
      icon: HelpingHand,
    },
    {
      title: "Kapasitas Suplai Skala Besar",
      desc: "Dukungan rantai pasok terpercaya dengan kapasitas tonase bulanan prima, dikemas higienis dengan food-grade packaging standar BPOM serta sertifikasi Halal murni.",
      icon: Award,
    }
  ];

  return (
    <section 
      id="trust-badges"
      className="py-20 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-bold text-slate-900 text-3xl sm:text-4xl tracking-tight">
            Keunggulan Istimewa untuk Mitra Bisnis F&B
          </h2>
          <p className="font-sans text-slate-600 text-base">
            Mengapa brand hotel, jaringan café pastry terkemuka, dan pabrik roti terpercaya memilih produk Kalimaya Indonesia sebagai pilar utama bahan baku mereka?
          </p>
          <div className="w-16 h-1 bg-[#085aa4] mx-auto rounded-full mt-3" />
        </div>

        {/* 4 Core Badges from original json */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <motion.div
                key={badge.id}
                id={`badge-card-${badge.id}`}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex flex-col justify-between h-auto transition-all group"
              >
                <div>
                  {/* Decorative Icon Container */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                    style={{ backgroundColor: `${badge.color}15`, color: badge.color }}
                  >
                    <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-display font-bold text-slate-800 text-lg mb-2 group-hover:text-[#0072BB] transition-colors duration-200">
                    {badge.title}
                  </h3>

                  <p className="font-sans text-slate-600 text-sm leading-relaxed mb-4">
                    {badge.b2bDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50 flex flex-col">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                    Komitmen Asli:
                  </span>
                  <span className="font-sans text-xs italic text-slate-500 line-clamp-2">
                    "{badge.originalText}"
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Removed Additional B2B Technical Features as requested */}

      </div>
    </section>
  );
}
