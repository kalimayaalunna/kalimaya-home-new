/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: "pastry" | "beverage" | "spreads" | "glaze";
  description: string;
  ingredients: string;
  sugarContent: string; // e.g. "Low Sugar (30° Brix)"
  viscosity: "Cair"| "Sedang" | "Sangat Tinggi (Bake-Stable)";
  bakeStability: boolean;
  shelfLife: string;
  packagingSizes: string[];
  features: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  logoText: string;
}

export interface FormulationConfig {
  fruit: string;
  sweetness: string; // Brix Level
  viscosity: "Cair"| "Sedang" | "Sangat Tinggi (Bake-Stable)";
  colorDepth: "Alami" | "Terang (Tambahan Alami)";
  packaging: string;
  estimatedVolumeKn: number; // in kg
}

export interface Inquiry {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  notes: string;
  selectedProducts: string[]; // Product ids
  customFormulations: FormulationConfig[];
  status: "pending" | "approved" | "processing";
  createdAt: string;
}
