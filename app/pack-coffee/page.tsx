"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ImageGallery from "@/components/ImageGallery";
import OrderForm from "@/components/OrderForm";
import Toast from "@/components/Toast";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import VideoSales from "@/components/VideoSales";
import FAQ from "@/components/FAQ";
import UpsellContent from "@/components/UpsellContent";
import { ProductImage, CartItem } from "@/types/types";
import { Plus, Minus, ShoppingBag, Star } from "lucide-react";
import { PACK_COFFEE_PRICE } from "@/data/algeria-data";

// Product images with models - PACK COFFEE PRODUCTS
const PRODUCT_IMAGES: ProductImage[] = [
  { url: "/vacum1.png", model: "Noir 🖤" },
  { url: "/moulain.png", model: "Noir 🖤" },
  { url: "/cap.jpeg", model: "Noir 🖤" },
  { url: "/photo pack 3.jpeg", model: "Noir 🖤" },
];

const COFFEE_PACKS = [
  {
    id: "pack-1",
    title: "العرض 1: كبسولة قابلة لإعادة الشحن + مطحنة قهوة",
    price: 2900,
    images: ["/cap.jpeg", "/moulain.png"],
    description: "نظافة وانتعاش مضاعف (قطعتين)"
  },
  {
    id: "pack-2",
    title: "العرض 2: كبسولة قابلة لإعادة الشحن + قارورة حرارية مع 3 أكواب",
    price: 2900,
    images: ["/cap.jpeg", "/vacum1.png"],
    description: "قطعتين مع هدية خاصة"
  },
  {
    id: "pack-3",
    title: "العرض 3:كبسولة قابلة لإعادة الشحن + قارورة حرارية مع 3 أكواب + مطحنة قهوة",
    price: 4300,
    images: ["/cap.jpeg","/moulain.png","/vacum1.png"],
    description: "3 قطع للتوفير الأقصى"
  }
];


export default function PackCoffeePage() {
  const [selectedModel, setSelectedModel] = useState(PRODUCT_IMAGES[0].model);
  const [selectedPackId, setSelectedPackId] = useState(COFFEE_PACKS[0].id);
  
  const selectedPack = COFFEE_PACKS.find(p => p.id === selectedPackId) || COFFEE_PACKS[0];
  
  // Transform the selected pack into a CartItem for the OrderForm
  const cartItems: CartItem[] = [
    { model: selectedPack.title, quantity: 1 }
  ];

  const handlePackSelect = (packId: string) => {
    setSelectedPackId(packId);
  };

  const updateQuantity = (model: string, delta: number) => {
    // Quantity is fixed for packs in this UI, but we keep the function for OrderForm compatibility
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-forest">
           🔥 عروض حصرية  Pack Coffee
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            إختر باقتك المفضلة واستمتع بالتوفير
          </p>
        </div>

        {/* Price and Rating */}
        <div className="flex items-center justify-center gap-6 mb-12 -mt-8">
           <p className="text-4xl font-bold text-forest font-serif">
             {PACK_COFFEE_PRICE} DA
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
              selectedModels={[]} // No model selection highlights
              onModelSelect={(model) => setSelectedModel(model)} // Only changes visual view
            />

            {/* Pack Selection UI */}
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-serif font-bold text-forest text-right mb-6" dir="rtl">
                إختر العرض المناسب لك:
              </h3>
              
              <div className="space-y-3">
                {COFFEE_PACKS.map((pack) => (
                  <label 
                    key={pack.id}
                    className={`
                      relative flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300
                      ${selectedPackId === pack.id 
                        ? "border-forest bg-forest/5 shadow-md ring-1 ring-forest" 
                        : "border-gray-200 bg-white hover:border-forest/30"}
                    `}
                    dir="rtl"
                  >
                    <div className="flex items-center gap-4">
                      {/* Checkbox/Radio */}
                      <div className={`
                        w-6 h-6 rounded-full border-2 flex items-center justify-center
                        ${selectedPackId === pack.id ? "border-forest bg-forest" : "border-gray-300"}
                      `}>
                        {selectedPackId === pack.id && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                      </div>
                      <input 
                        type="radio" 
                        name="pack-selection" 
                        className="hidden" 
                        checked={selectedPackId === pack.id}
                        onChange={() => handlePackSelect(pack.id)}
                      />

                      {/* Small Images */}
                      <div className="flex -space-x-4 overflow-hidden">
                        {pack.images.slice(0, 2).map((img, i) => (
                          <div key={i} className="relative w-12 h-12 rounded-lg border-2 border-white overflow-hidden shadow-sm">
                            <img src={img} alt="" className="object-cover w-full h-full" />
                          </div>
                        ))}
                      </div>

                      {/* Title and Description */}
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{pack.title}</p>
                        <p className="text-xs text-gray-500">{pack.description}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-left font-bold text-forest text-lg">
                      {pack.price} DA
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Product Description */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-elegant">
              <div className="space-y-3 text-gray-700">
                {/* French Description */}
                {/* <div className="space-y-4 text-left leading-relaxed border-b border-gray-100 pb-6 mb-6">
                  <h3 className="text-2xl font-serif font-bold text-forest mb-4">
                    Description du Produit
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">
                    Pourquoi avez-vous besoin du moule à glace dans votre routine ?
                  </p>
                  <p className="text-gray-700">
                    Souffrez-vous de gonflements du visage au réveil ? Ou êtes-vous fatiguée des pores dilatés et du teint terne ? Ce moule n&apos;est pas seulement un outil, c&apos;est votre secret de beauté naturelle. Conçu pour vous offrir les bienfaits de la &quotcryothérapie&quot à domicile, il raffermit la peau, resserre les pores et donne à votre visage un éclat irrésistible.
                  </p>
                  
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li><strong>Sculpter le visage :</strong> Accentue les pommettes et lifte le visage naturally.</li>
                    <li><strong>Traiter les cernes :</strong> Réduit efficacement les poches sous les yeux.</li>
                    <li><strong>Économie intelligente :</strong> Achetez le moule une fois et utilisez-le indéfiniment avec vos propres recettes.</li>
                    <li><strong>Silicone médical :</strong> Sûr pour la peau and facile à tenir (ne gèle pas vos mains).</li>
                  </ul>
                </div> */}

                {/* Arabic Description */}
                <div className="space-y-4 text-right leading-relaxed" dir="rtl">
                  <h3 className="text-2xl font-serif font-bold text-forest mb-4">
                    لماذا تختار عروض Pack Coffee؟
                  </h3>
                  
                  <p className="text-gray-700">
                    وفر أكثر مع باقاتنا المختارة بعناية. سواء كنت تريد تجربة المنتج أو التوفير للعائلة، لدينا العرض المناسب لك.
                  </p>
                  
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>💰 توفير حقيقي:</strong> أسعار مخفضة عند شراء المجموعات</li>
                    <li><strong>🎁 هدايا حصرية:</strong> متوفرة في العرض الثاني</li>
                    <li><strong>⚡ توصيل سريع:</strong> لكل الولايات</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Form */}
          <div id="order" className="lg:pt-0">
            <OrderForm 
              cartItems={cartItems} 
              onUpdateQuantity={updateQuantity}
              productPrice={selectedPack.price}
              lang="ar"
              successUrl="/success-pack-coffee"
            />
          </div>
        </div>

        {/* Video Ideas Section */}
        {/* <VideoSales videos={PACK_COFFEE_VIDEOS} /> */}

        {/* FAQ Section */}
        {/* <FAQ /> */}

        {/* Features Section */}
        {/* <UpsellContent /> */}
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

        {/* Final Upsell Section */}
        
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-forest text-cream py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 My Suerte. Tous droits réservés.
          </p>
        </div>
      </footer>

      <MobileStickyCTA />
    </div>
  );
}
