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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 selection:bg-blue-100 selection:text-[#085aa4]">
      
      {/* PROFESSIONAL B2B BRAND HEADER & NAV */}
      {currentPage === "home" && (
        <header className={`fixed top-0 left-0 right-0 z-50 bg-[#0D58C8] border-b border-white/10 text-white shadow-md transition-all duration-500 ease-out transform ${
          showFixedHeader 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}>
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo brand and back arrow */}
            <div className="flex items-center gap-3 animate-fade-in">
              <span 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="font-serif font-black italic text-2xl tracking-normal text-white hover:opacity-90 cursor-pointer select-none"
              >
                Kalimaya
              </span>
            </div>

            {/* Desktop Navigation Links (matching screenshot precisely with HOME removed) */}
            <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase text-white/90">
              <button 
                onClick={() => {
                  setCurrentPage("about");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }} 
                className="hover:text-amber-300 transition duration-200 cursor-pointer text-left"
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollTo(testimonialsRef)} 
                className="hover:text-amber-300 transition duration-200 cursor-pointer text-left"
              >
                BLOG
              </button>
              <button 
                onClick={() => scrollTo(inquiryRef)} 
                className="hover:text-amber-300 transition duration-200 cursor-pointer text-left"
              >
                CONTACT
              </button>
            </nav>

            {/* Right Header Controls (Shopping bag & CONTACT US Outlined Pill) */}
            <div className="flex items-center gap-6">
              <ShoppingBag className="w-5 h-5 text-white/90 hover:text-white cursor-pointer transition hidden sm:block" />
              <button 
                onClick={() => scrollTo(inquiryRef)}
                className="border border-white/60 hover:bg-white hover:text-[#0D58C8] hover:border-white transition duration-300 text-[11px] font-bold tracking-wider uppercase px-5 py-2.5 rounded-full cursor-pointer"
              >
                CONTACT US
              </button>

              {/* Tablet/Mobile Menu Trigger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-3 min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-white/10 text-white rounded-xl transition"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </header>
      )}

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {currentPage === "home" && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-0 top-20 bg-[#0D58C8] text-white border-b border-white/10 shadow-xl z-40 p-6 flex flex-col gap-4 text-xs font-bold tracking-widest uppercase text-left"
          >
            <button 
              onClick={() => {
                setCurrentPage("about");
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "instant" });
              }} 
              className="py-4 min-h-[48px] hover:text-amber-300 border-b border-white/10 text-left block w-full cursor-pointer"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollTo(testimonialsRef)} 
              className="py-4 min-h-[48px] hover:text-amber-300 border-b border-white/10 text-left block w-full cursor-pointer"
            >
              BLOG
            </button>
            <button 
              onClick={() => scrollTo(inquiryRef)} 
              className="py-4 min-h-[48px] hover:text-amber-300 border-b border-white/10 text-left block w-full cursor-pointer"
            >
              CONTACT
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-left w-full">
          
          {/* Left: Brand Identity Block */}
          <div className="flex items-center gap-2.5">
            <span className="font-display font-bold text-white text-base tracking-tight uppercase">
              PT Kalimaya Alunna Indonesia
            </span>
          </div>

          {/* Right: Essential Contacts & Quick Links (Balanced columns on right hand side) */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            
            {/* Contacts */}
            <div className="space-y-2.5">
              <h4 className="font-sans text-[11px] font-bold text-slate-300 uppercase tracking-widest">
                Layanan Hubungan Kemitraan
              </h4>
              <div className="space-y-2 font-sans text-xs text-slate-400">
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>relations@kalimayaindonesia.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>+62 821-3456-7890 (B2B Support)</span>
                </p>
              </div>
            </div>



          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-3 font-sans text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} PT Kalimaya Alunna Indonesia. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Syarat & Ketentuan Pasokan</span>
            <span className="hover:text-slate-450 cursor-pointer">Kebijakan Privasi</span>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (CONVERSION CATALYST FOR B2B CLIENTS) */}
      <AnimatePresence>
        {showWhatsApp && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none"
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
