"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ImageGallery from "@/components/ImageGallery";
import OrderForm from "@/components/OrderForm";
import { ProductImage, CartItem } from "@/types/types";
import { Plus, Minus, ShoppingBag } from "lucide-react";

// Product images with models
const PRODUCT_IMAGES: ProductImage[] = [
  { url: "/1.jpg", model: "Modèle Blanc & Rose" },
  { url: "/2.jpg", model: "Modèle Rouge" },
  { url: "/3.jpg", model: "Modèle Noir" },
  { url: "/4.jpg", model: "Modèle Beige" },
  { url: "/5.jpg", model: "Modèle Beigeloooo" },
];

export default function Home() {
  const [selectedModel, setSelectedModel] = useState(PRODUCT_IMAGES[0].model);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    setCartItems(prev => {
      // Check if model already exists
      const exists = prev.find(item => item.model === model);
      if (exists) {
        // Toggle OFF: Remove from cart if clicked again
        return prev.filter(item => item.model !== model);
      }
      // Toggle ON: Add new item
      return [...prev, { model, quantity: 1 }];
    });
  };

  const updateQuantity = (model: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.model === model) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0)); 
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-forest">
            Produit Premium
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre produit exclusif avec livraison dans toute l&apos;Algérie
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Column - Image Gallery */}
          <div id="product" className="lg:sticky lg:top-24 h-fit">
            <ImageGallery 
              images={PRODUCT_IMAGES} 
              selectedModels={cartItems.map(i => i.model)} // Pass selected models for UI highlighting
              onModelSelect={handleModelSelect}
            />
            
            {/* Product Description */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-elegant">
              <h3 className="text-2xl font-serif font-bold text-forest mb-4">
                Description du Produit
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  Un produit de qualité supérieure conçu pour répondre à vos besoins.
                  Fabriqué avec les meilleurs matériaux et une attention particulière
                  aux détails.
                </p>
                
                {/* Model Selection Indicator */}
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                   <div className="flex items-center justify-between">
                     <div>
                       <p className="font-medium text-forest">Modèle affiché :</p>
                       <p className="text-lg font-bold text-gray-900">{selectedModel}</p>
                     </div>
                   </div>
                   <p className="text-sm text-forest italic">
                     * Ce modèle a été ajouté à votre sélection.
                   </p>
                </div>

                <ul className="list-disc list-inside space-y-2 ml-2 mt-4 pt-4 border-t border-gray-100">
                  <li>Qualité premium garantie</li>
                  <li>Livraison rapide dans toute l&apos;Algérie</li>
                  <li>Service client disponible 7j/7</li>
                  <li>Garantie satisfaction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Order Form */}
          <div id="order" className="lg:pt-0">
            <OrderForm 
              cartItems={cartItems} 
              onUpdateQuantity={updateQuantity}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-forest">Qualité Garantie</h3>
            <p className="text-gray-600">Produits authentiques et de haute qualité</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-forest">Livraison Rapide</h3>
            <p className="text-gray-600">Livraison dans toutes les wilayas</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-forest">Support 7j/7</h3>
            <p className="text-gray-600">Notre équipe à votre service</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-forest text-cream py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 Premium Store. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
