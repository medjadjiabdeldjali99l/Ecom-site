"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ImageGallery from "@/components/ImageGallery";
import OrderForm from "@/components/OrderForm";
import Toast from "@/components/Toast";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { ProductImage, CartItem } from "@/types/types";
import { Plus, Minus, ShoppingBag, Star } from "lucide-react";
import { VACUUM_PRICE } from "@/data/algeria-data";

// Product images with models - VACUUM PRODUCTS
const PRODUCT_IMAGES: ProductImage[] = [
  { url: "/vacuum-1.jpg", model: "Modèle Vacuum Vert" },
  { url: "/vacuum-2.jpg", model: "Modèle Vacuum Gris" },
  { url: "/vacuum-3.jpg", model: "Modèle Vacuum Crevette" },
  { url: "/vacuum-4.jpg", model: "Modèle Vacuum Bleu" },
  { url: "/vacuum-5.jpg", model: "Modèle Vacuum Noire" },
];

export default function VacuumPage() {
  const [selectedModel, setSelectedModel] = useState(PRODUCT_IMAGES[0].model);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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
      // Show toast notification
      setToastMessage("Produit ajouté au panier");
      setToastVisible(true);
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
           تارموس حراري مع 3 كيسان اينوكس بسعة 500 مل
          </h1>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre produit exclusif avec livraison dans toute l&apos;Algérie
          </p> */}
        </div>

        {/* Price and Rating */}
        <div className="flex items-center justify-center gap-6 mb-12 -mt-8">
           <p className="text-4xl font-bold text-forest font-serif">
             {VACUUM_PRICE} DA
           </p>
           <div className="flex items-center gap-1 text-yellow-400">
             {[1, 2, 3, 4, 5].map((_, i) => (
               <Star key={i} className="w-6 h-6 fill-current shadow-sm" />
             ))}
           </div>
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
              {/* <h3 className="text-2xl font-serif font-bold text-forest mb-4">
                Description du Produit
              </h3> */}
              <div className="space-y-3 text-gray-700">
                {/* Arabic Description */}
                <div className="space-y-4 text-right leading-relaxed" dir="rtl">
                  <h3 className="text-2xl font-serif font-bold text-forest mb-4">
                    وصف المنتج
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">
                    استمتع بمشروباتك الساخنة والباردة في أي وقت وفي أي مكان!
                  </p>
                  
                  <p className="text-gray-700">
                    هذا الطقم الحراري الأنيق هو الرفيق المثالي للسفر، المكتب، أو الرحلات. بفضل تقنية العزل المزدوج، يحافظ على حرارة مشروباتك لمدة تصل إلى 12 ساعة.
                  </p>
                  
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>السعة:</strong> 500 مل.</li>
                    <li><strong>المحتوى:</strong> قارورة حرارية + 3 أكواب تقديم.</li>
                    <li><strong>المادة:</strong> فولاذ مقاوم للصدأ (Stainless Steel) عالي الجودة.</li>
                    <li><strong>التصميم:</strong> عصري، متين، وسهل الحمل.</li>
                    <li><strong>هدية مثالية:</strong> يأتي في علبة فاخرة تناسب جميع المناسبات.</li>
                  </ul>
                  
                  <p className="text-forest font-semibold text-lg">
                    اطلبه الآن واستمتع بمشروبك المفضل بالحرارة المثالية!
                  </p>
                </div>
                
                {/* Model Selection Indicator */}
                {/* <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                   <div className="flex items-center justify-between">
                     <div>
                       <p className="font-medium text-forest">Modèle affiché :</p>
                       <p className="text-lg font-bold text-gray-900">{selectedModel}</p>
                     </div>
                   </div>
                   <p className="text-sm text-forest italic">
                     * Ce modèle a été ajouté à votre sélection.
                   </p>
                </div> */}

                {/* <ul className="list-disc list-inside space-y-2 ml-2 mt-4 pt-4 border-t border-gray-100">
                  <li>Qualité premium garantie</li>
                  <li>Livraison rapide dans toute l&apos;Algérie</li>
                  <li>Service client disponible 7j/7</li>
                  <li>Garantie satisfaction</li>
                </ul> */}
              </div>
            </div>
          </div>

          {/* Right Column - Order Form */}
          <div id="order" className="lg:pt-0">
            <OrderForm 
              cartItems={cartItems} 
              onUpdateQuantity={updateQuantity}
              productPrice={VACUUM_PRICE}
              lang="ar"
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
            © 2026 My Suerte. Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* Toast Notification */}
      <Toast 
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      <MobileStickyCTA />
    </div>
  );
}
