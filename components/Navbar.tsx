"use client";

import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-forest/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-cream" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-forest">
                Premium Store
              </h1>
              <p className="text-xs text-gray-600">Livraison en Algérie</p>
            </div>
          </div>

          {/* Optional: Add navigation links here */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#product" className="text-gray-700 hover:text-forest transition-colors">
              Produit
            </a>
            <a href="#order" className="text-gray-700 hover:text-forest transition-colors">
              Commander
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
