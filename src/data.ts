/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Testimonial } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "prod-strawberry-jam",
    name: "STRAWBERRY JAM",
    category: "pastry",
    description: "Selai stroberi premium berstandar industri dengan persentase buah stroberi Jawa segar yang melimpah. Memiliki aroma buah alami yang kuat serta ketahanan panas tinggi, sangat direkomendasikan untuk isian roti manis premium, pastry, and kue tart.",
    ingredients: "Stroberi Segar Pilihan (65%), Pektin Alami, Gula Tebu Alami, Asam Sitrat.",
    sugarContent: "Low Sugar (42° Brix)",
    viscosity: "Sangat Tinggi (Bake-Stable)",
    bakeStability: true,
    shelfLife: "12 Bulan (Suhu Ruang)",
    packagingSizes: ["Pail 5 Kg", "Bucket 10 Kg", "Drum 25 Kg"],
    features: ["Bake-stable (tidak meluber/kering saat dioven)", "Serat buah stroberi asli melimpah", "Kompatibel untuk suhu beku & pemanggangan"],
    image: "https://kalimayaindonesia.com/wp-content/uploads/2025/12/Untitled-1-1-768x541.png.webp"
  },
  {
    id: "prod-topping-kurma",
    name: "TOPPING KURMA",
    category: "beverage",
    description: "Saus topping premium (date syrup) yang diproses dari 100% konsentrat buah kurma pilihan. Menghasilkan cita rasa karamel eksotis murni tanpa tambahan perisa sintetis, sempurna untuk siraman pemanis sehat es krim, waffles, pancakes, pancake durian, boba, susu, dan minuman café.",
    ingredients: "100% Sari Konsentrat Kurma Khalas Premium.",
    sugarContent: "Natural Sweetness (Source of Minerals)",
    viscosity: "Sedang",
    bakeStability: false,
    shelfLife: "12 Bulan",
    packagingSizes: ["Botol 1 Liter (B2B Pack)", "Pail 5 Kg"],
    features: ["100% kurma murni tanpa pemanis sintetis", "Kandungan mineral organik melimpah", "Mudah larut dalam aplikasi dingin maupun panas"],
    image: "https://kalimayaindonesia.com/wp-content/uploads/2025/12/topping-kurma.png.webp"
  },
  {
    id: "prod-tamarra-brownies-chips",
    name: "TAMARRA BROWNIES CHIPS",
    category: "spreads",
    description: "Keripik brownies super tipis dan renyah bebas gluten (Gluten-Free) yang diolah khusus dengan sentuhan inovatif manisnya gula kurma alami pilihan. Camilan premium sehat bernutrisi tinggi dengan cokelat pekat berkualitas tinggi.",
    ingredients: "Tepung Bebas Gluten, Gula Kurma Alami, Cokelat Bubuk Premium, Choco Chips, Minyak Nabati, Garam.",
    sugarContent: "Rendah Indeks Glikemik (Gula Kurma)",
    viscosity: "Cair", // Dummy mapping compliant with type union
    bakeStability: true,
    shelfLife: "9 Bulan",
    packagingSizes: ["Karton Box 2 Kg", "Bulk Bag 5 Kg"],
    features: ["Bebas Gluten (Gluten-Free)", "Pemanis alami gula kurma ramah pencernaan", "Tekstur renyah durasi simpan prima"],
    image: "https://kalimayaindonesia.com/wp-content/uploads/2025/12/tamarra-brownies.png.webp"
  },
  {
    id: "prod-pure-strawberry",
    name: "PURE STRAWBERRY",
    category: "pastry",
    description: "Bubur konsentrat buah stroberi asli (puree) ukuran bulk pack industal 5 KG untuk penggunaan operasional F&B efisien tinggi. Bebas dari esens kimia atau pengawet buatan, menjaga kemurnian vitamin, warna merah, dan tingkat keasaman buah segar.",
    ingredients: "Buah Stroberi Jawa Segar (99.8%), Pengatur Keasaman (Asam Sitrat).",
    sugarContent: "Tanpa Tambahan Gula (Pure Fruit)",
    viscosity: "Cair",
    bakeStability: false,
    shelfLife: "8 Bulan (Suhu Dingin / Beku)",
    packagingSizes: ["Pail Higienis 5 Kg", "Bucket 15 Kg"],
    features: ["100% buah stroberi murni tanpa pengawet", "Warna merah cerah cerlang alami", "Ideal untuk adonan cake, es krim, mousse, & smoothies"],
    image: "https://kalimayaindonesia.com/wp-content/uploads/2026/02/pure-strawberry-cover-product-768x768.png.webp"
  },
  {
    id: "prod-date-jam",
    name: "DATE JAM",
    category: "spreads",
    description: "Selai kurma (Selai Kurma Alami) dengan kelembutan tekstur legit dan cita rasa manis tradisional yang mewah. Sangat ideal sebagai bahan olesan roti, isian roti manis (filling), maupun kombinasi kreasi R&D chef hotel ternama.",
    ingredients: "Daging Kurma Premium Pilihan, Air, Pektin Buah Alami.",
    sugarContent: "Manis Alami Kurma (60% Serat Pangan)",
    viscosity: "Sedang",
    bakeStability: false,
    shelfLife: "12 Bulan",
    packagingSizes: ["Jar Kaca 350g (Hotel Pack)", "Pail 5 Kg"],
    features: ["Kaya akan zat besi dan vitamin alami", "Mudah dioles & tekstur homogen sempurna", "Tanpa tambahan zat pewarna karamel sintetis"],
    image: "https://alunna.id/wp-content/uploads/2026/04/selai-kurma-variant.webp"
  },
  {
    id: "prod-date-seed-drink",
    name: "DATE SEED DRINK",
    category: "beverage",
    description: "Minuman seduhan legendaris yang memproses biji kurma pilihan yang dipanggang lambat (slow roast) secara modern. Memberikan aroma panggangan khas mirip kopi hitam dengan rasa earthy, sepenuhnya bebas kafein serta aman bagi perut sensitif.",
    ingredients: "100% Biji Kurma Panggang Giling Premium.",
    sugarContent: "Bebas Gula & Tanpa Kalori",
    viscosity: "Cair",
    bakeStability: false,
    shelfLife: "18 Bulan (Suhu Kering)",
    packagingSizes: ["Pack 100g (Drip Bags)", "Bulk Pack Giling 1 Kg"],
    features: ["Bebas Kafein (Caffeine-Free)", "Mengandung antioksidan polifenol tinggi", "Ramah lambung & penderita penyakit mag"],
    image: "https://alunna.id/wp-content/uploads/2026/04/date-seed-drink.webp"
  },
  {
    id: "prod-dates-cookies",
    name: "DATES COOKIES",
    category: "spreads",
    description: "Kukis renyah berbahan dasar adonan kurma alami berserat tinggi dengan formula bebas gluten. Mengisi energi secara instan dan sehat tanpa memicu lonjakan gula darah mendadak.",
    ingredients: "Daging Kurma Lumat, Tepung Kentang & Mocaf Bebas Gluten, Mentega Alami, Telur.",
    sugarContent: "Low Sugar Index",
    viscosity: "Sedang",
    bakeStability: true,
    shelfLife: "10 Bulan",
    packagingSizes: ["Boks Display B2B", "Bulk Carton 3 Kg"],
    features: ["Gluten-Free (Bebas Tepung Terigu)", "Manis murni bersumber dari serat kurma", "Renyah remah berkualitas tinggi"],
    image: "https://alunna.id/wp-content/uploads/2026/04/dates-cookies.webp"
  },
  {
    id: "prod-susu-kurma",
    name: "SUSU KURMA",
    category: "beverage",
    description: "Kombinasi nutrisi berimbang antara susu sapi segar murni dengan sari kurma pilihan berstandar uht steril. Menghasilkan minuman energi alami pembangun stamina yang disukai khalayak modern.",
    ingredients: "Susu Sapi Segar (80%), Sari Konsentrat Kurma Alami (20%).",
    sugarContent: "No Added Cane Sugar (Hanya Manis Buah)",
    viscosity: "Cair",
    bakeStability: false,
    shelfLife: "6 Bulan (Penyimpanan Dingin)",
    packagingSizes: ["Karton UHT 250ml", "Karton Bulk 1 Liter"],
    features: ["Susu steril murni kaya protein", "Peningkat daya tahan tubuh alami", "Siap diminum langsung (RTD)"],
    image: "https://alunna.id/wp-content/uploads/2026/04/susu-kurma.webp"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-apsara",
    name: "Ariana Putri",
    role: "Lead Barista & Menu Developer",
    company: "Apsara Coffee",
    quote: "Topping Kurma dari Kalimaya memiliki kekentalan konsisten dan rasa manis legit alami yang ideal untuk campuran espresso base. Sangat mempermudah kami dalam meluncurkan seri signature latte sehat di seluruh outlet kami.",
    logoText: "AC"
  },
  {
    id: "test-bakelab",
    name: "Hendry Tan",
    role: "Head Baker & Founder",
    company: "Bake Lab",
    quote: "Bake-stable strawberry jam dari Kalimaya terbukti memiliki performa suhu oven tinggi yang sempurna. Selai tidak meluber atau kering, dan serat buah aslinya memberikan sensasi gigitan premium pada pastry kami.",
    logoText: "BL"
  },
  {
    id: "test-yana",
    name: "Sarah Meilani",
    role: "Product R&D Manager",
    company: "Yana Bakery & Pastry",
    quote: "Kerjasama rantai pasokan bahan baku dengan tim Kalimaya sangat andal dan profesional. Kualitas brix yang konsisten mempermudah standardisasi rasa seluruh cabang produksi kami.",
    logoText: "YN"
  }
];

export const BUSINESS_TYPES = [
  "Bakery / Pastry Shop",
  "Café / Restaurant Chain",
  "Katering / Hotel F&B",
  "Manufaktur Makanan Skala Besar",
  "Distributor Bahan Baku Kue"
];
