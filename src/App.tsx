/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  MapPin, 
  Mail, 
  PhoneCall, 
  ShieldCheck,
  ClipboardList,
  ArrowLeft,
  ShoppingBag,
  MessageCircle
} from "lucide-react";

import Hero from "./components/Hero";
import Certifications from "./components/Certifications";
import ValueProps from "./components/ValueProps";
import Catalog from "./components/Catalog";
import CustomSimulator from "./components/CustomSimulator";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import StrawberryJamDetail from "./components/StrawberryJamDetail";
import ToppingKurmaDetail from "./components/ToppingKurmaDetail";
import TamarraBrowniesDetail from "./components/TamarraBrowniesDetail";
import PureStrawberryDetail from "./components/PureStrawberryDetail";
import DateJamDetail from "./components/DateJamDetail";
import AboutDetail from "./components/AboutDetail";
import DateSeedDrinkDetail from "./components/DateSeedDrinkDetail";
import DatesCookiesDetail from "./components/DatesCookiesDetail";
import SusuKurmaDetail from "./components/SusuKurmaDetail";
import { trackPixelEvent } from "./utils/pixel";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [simulatedSpec, setSimulatedSpec] = useState("");
  const [currentPage, setCurrentPage] = useState<"home" | "strawberry-jam" | "topping-kurma" | "tamarra-brownies-chips" | "pure-strawberry" | "date-jam" | "about" | "date-seed-drink" | "dates-cookies" | "susu-kurma">("home");
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Meta Pixel Scroll and Click Tracker
  React.useEffect(() => {
    let viewContentFired = false;
    let scrollTimer: any = null;

    const handleScrollTracking = () => {
      if (viewContentFired) return;
      
      if (!scrollTimer) {
        // Start a 3 second timer once the user has performed some scroll action
        scrollTimer = setTimeout(() => {
          trackPixelEvent("ViewContent");
          viewContentFired = true;
          window.removeEventListener("scroll", handleScrollTracking);
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScrollTracking, { passive: true });

    // Global Click listener pointing to WhatsApp triggers the lead event
    const handleGlobalClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target !== document.body) {
        if (target.tagName === "A") {
          const href = (target as HTMLAnchorElement).href;
          if (href && (href.trim().includes("wa.me") || href.trim().includes("whatsapp.com"))) {
            trackPixelEvent("Lead");
            break;
          }
        }
        target = target.parentElement;
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("scroll", handleScrollTracking);
      document.removeEventListener("click", handleGlobalClick);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);

  // Scroll tracking hook
  React.useEffect(() => {
    const handleScroll = () => {
      if (currentPage !== "home") {
        setShowWhatsApp(true);
        return;
      }
      if (!aboutRef.current) {
        const hasScrolledPastHero = window.scrollY >= 400;
        setShowFixedHeader(window.scrollY >= 700);
        setShowWhatsApp(hasScrolledPastHero);
        return;
      }
      const rect = aboutRef.current.getBoundingClientRect();
      // Show header when "Regulasi & Keamanan" (Certifications) reaches near top of viewport (offset 100px)
      const passedHero = rect.top <= 250;
      setShowFixedHeader(rect.top <= 100);
      setShowWhatsApp(passedHero);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initial trigger
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  // Periodic tooltip trigger "tanya-tanya disini"
  React.useEffect(() => {
    if (!showWhatsApp) {
      setShowTooltip(false);
      return;
    }

    // Cycle duration: 5 seconds total (visible for 2.5s, invisible for 2.5s)
    const interval = setInterval(() => {
      setShowTooltip(true);
      const hideTimeout = setTimeout(() => {
        setShowTooltip(false);
      }, 2500);
      return () => clearTimeout(hideTimeout);
    }, 5000);

    // Initial delay trigger for immediate attention hook
    const initialShow = setTimeout(() => {
      setShowTooltip(true);
      const hideInitial = setTimeout(() => {
        setShowTooltip(false);
      }, 2500);
      return () => clearTimeout(hideInitial);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(initialShow);
    };
  }, [showWhatsApp]);

  // Scroll references
  const catalogRef = useRef<HTMLDivElement>(null);
  const inquiryRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    setCurrentPage("home");
    setMobileMenuOpen(false);
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 selection:bg-blue-100 selection:text-[#085aa4] w-full overflow-x-hidden relative">
      


      {/* CORE PAGES & SECTIONS */}
      <main>
        {currentPage === "home" ? (
          <>
            {/* 1. HERO COMPONENT */}
            <Hero 
              onScrollToCatalog={() => scrollTo(catalogRef)} 
              onScrollToInquiry={() => scrollTo(inquiryRef)} 
            />

            {/* 2. CERTIFICATIONS DISPLAY (PROMINENT BPOM & HALAL) */}
            <div ref={aboutRef}>
              <Certifications />

              {/* 3. VALUE PROPS (TRUST BADGES & B2B ADVANTAGES) */}
              <ValueProps />
            </div>

            {/* 4. PRODUCT CATALOG (SPEC SHEET SHOWCASE) */}
            <div ref={catalogRef}>
              <Catalog 
                onOpenSampleForm={() => scrollTo(inquiryRef)}
                onViewDetailedStrawberryJam={() => {
                  setCurrentPage("strawberry-jam");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                onViewDetailedToppingKurma={() => {
                  setCurrentPage("topping-kurma");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                onViewDetailedTamarraBrownies={() => {
                  setCurrentPage("tamarra-brownies-chips");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                onViewDetailedPureStrawberry={() => {
                  setCurrentPage("pure-strawberry");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                onViewDetailedDateJam={() => {
                  setCurrentPage("date-jam");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                onViewDetailedDateSeedDrink={() => {
                  setCurrentPage("date-seed-drink");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                onViewDetailedDatesCookies={() => {
                  setCurrentPage("dates-cookies");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                onViewDetailedSusuKurma={() => {
                  setCurrentPage("susu-kurma");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              />
            </div>

            {/* 4.5. CUSTOM PRODUCT SIMULATOR */}
            <CustomSimulator 
              onApplySpec={(spec) => {
                setSimulatedSpec(spec);
                scrollTo(inquiryRef);
              }}
            />

            {/* 5. CLIENT TESTIMONIALS */}
            <div ref={testimonialsRef}>
              <Testimonials />
            </div>

            {/* 6. PARTNERSHIP & INQUIRY FORM */}
            <section 
              id="request-portal" 
              className="py-20 bg-slate-100/50"
            >
              <div className="max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#085aa4] font-extrabold block">
                    Portal Kemitraan Kalimaya
                  </span>
                  <h2 className="font-display font-bold text-slate-900 text-3xl sm:text-4xl tracking-tight">
                    Hubungi Kami & Ajukan Permintaan
                  </h2>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    Silakan isi formulir singkat berikut. Tim perwakilan dagang kami akan memproses penawaran dan mengirimkan sampel uji coba langsung ke fasilitas produksi F&B Anda.
                  </p>
                  <div className="w-16 h-1 bg-[#085aa4] mx-auto rounded-full mt-3" />
                </div>

                <div ref={inquiryRef}>
                  <InquiryForm 
                    initialNeeds={simulatedSpec}
                    onClearInitialNeeds={() => setSimulatedSpec("")}
                  />
                </div>

              </div>
            </section>
          </>
        ) : currentPage === "strawberry-jam" ? (
          <StrawberryJamDetail 
            onBack={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            onInquire={(needsText) => {
              setSimulatedSpec(needsText);
              setCurrentPage("home");
              setTimeout(() => {
                scrollTo(inquiryRef);
              }, 150);
            }}
          />
        ) : currentPage === "topping-kurma" ? (
          <ToppingKurmaDetail
            onBack={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            onInquire={(needsText) => {
              setSimulatedSpec(needsText);
              setCurrentPage("home");
              setTimeout(() => {
                scrollTo(inquiryRef);
              }, 150);
            }}
          />
        ) : currentPage === "tamarra-brownies-chips" ? (
          <TamarraBrowniesDetail
            onBack={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            onInquire={(needsText) => {
              setSimulatedSpec(needsText);
              setCurrentPage("home");
              setTimeout(() => {
                scrollTo(inquiryRef);
              }, 150);
            }}
          />
        ) : currentPage === "pure-strawberry" ? (
          <PureStrawberryDetail
            onBack={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            onInquire={(needsText) => {
              setSimulatedSpec(needsText);
              setCurrentPage("home");
              setTimeout(() => {
                scrollTo(inquiryRef);
              }, 150);
            }}
          />
        ) : currentPage === "date-jam" ? (
          <DateJamDetail
            onBack={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            onInquire={(needsText) => {
              setSimulatedSpec(needsText);
              setCurrentPage("home");
              setTimeout(() => {
                scrollTo(inquiryRef);
              }, 150);
            }}
          />
        ) : currentPage === "date-seed-drink" ? (
          <DateSeedDrinkDetail
            onBack={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            onInquire={(needsText) => {
              setSimulatedSpec(needsText);
              setCurrentPage("home");
              setTimeout(() => {
                scrollTo(inquiryRef);
              }, 150);
            }}
          />
        ) : currentPage === "dates-cookies" ? (
          <DatesCookiesDetail
            onBack={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            onInquire={(needsText) => {
              setSimulatedSpec(needsText);
              setCurrentPage("home");
              setTimeout(() => {
                scrollTo(inquiryRef);
              }, 150);
            }}
          />
        ) : currentPage === "susu-kurma" ? (
          <SusuKurmaDetail
            onBack={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            onInquire={(needsText) => {
              setSimulatedSpec(needsText);
              setCurrentPage("home");
              setTimeout(() => {
                scrollTo(inquiryRef);
              }, 150);
            }}
          />
        ) : (
          <AboutDetail
            onBack={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            onInquire={(needsText) => {
              setSimulatedSpec(needsText);
              setCurrentPage("home");
              setTimeout(() => {
                scrollTo(inquiryRef);
              }, 150);
            }}
          />
        )}
      </main>



      {/* FLOATING WHATSAPP BUTTON (CONVERSION CATALYST FOR B2B CLIENTS) */}
      <AnimatePresence>
        {showWhatsApp && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 md:bottom-8 right-6 z-50 flex flex-col items-end pointer-events-none"
            id="whatsapp-floater-container"
          >
            {/* Tooltip Chat Bubble with 5s Interval toggle */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="bg-white text-slate-800 text-[11.5px] font-sans font-bold py-2 px-3.5 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-slate-100 mb-2 relative pointer-events-auto mr-1 block text-center whitespace-nowrap"
                  id="whatsapp-tooltip"
                >
                  {/* Speech Bubble Arrow */}
                  <div className="absolute bottom-[-5px] right-5 w-2.5 h-2.5 bg-white border-r border-b border-slate-100 rotate-45" />
                  tanya-tanya disini
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glowing WA Button */}
            <a 
              href="https://wa.me/6282134567890?text=Halo%20PT%20Kalimaya%20Indonesia%2C%20saya%20tertarik%20dengan%20bahan%20baku%20premium%20untuk%20bisnis%20F%26B%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba56] text-white p-4 rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all duration-300 pointer-events-auto hover:scale-110 active:scale-95 group relative border-2 border-white/20"
              title="Hubungi Kami di WhatsApp"
              id="whatsapp-floater-btn"
            >
              {/* External subtle glow ring */}
              <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping duration-1500 scale-105 pointer-events-none -z-10" />
              <MessageCircle className="w-6 h-6 fill-white stroke-[2.5]" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
