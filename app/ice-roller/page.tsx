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
import { ICE_ROLLER_PRICE } from "@/data/algeria-data";

// Product images with models - ICE ROLLER PRODUCTS
const PRODUCT_IMAGES: ProductImage[] = [
  { url: "/ice-roller-1.jpg", model: "Modèle Ice Roller Vert" },
  { url: "/ice-roller-2.jpg", model: "Modèle Ice Roller Gris" },
  { url: "/ice-roller-3.jpg", model: "Modèle Ice Roller Crevette" },
  { url: "/ice-roller-4.jpg", model: "Modèle Ice Roller Bleu" },
  { url: "/ice-roller-5.jpg", model: "Modèle Ice Roller Noire" },
];

export default function IceRollerPage() {
  const [selectedModel, setSelectedModel] = useState(PRODUCT_IMAGES[0].model);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    setCartItems(prev => {
      const exists = prev.find(item => item.model === model);
      if (exists) {
        return prev.filter(item => item.model !== model);
      }
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
            ❄️🧊 مكعب الثلج للبشرة
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            وداعاً لانتفاخ الصباح مع Ice Roller.. لبشرة مشدودة ومنتعشة يومياً
          </p>
        </div>

        {/* Price and Rating */}
        <div className="flex items-center justify-center gap-6 mb-12 -mt-8">
           <p className="text-4xl font-bold text-forest font-serif">
             {ICE_ROLLER_PRICE} DA
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
              selectedModels={cartItems.map(i => i.model)}
              onModelSelect={handleModelSelect}
            />
            
            {/* Product Description */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-elegant">
              <div className="space-y-3 text-gray-700">
                {/* French Description */}
                <div className="space-y-4 text-left leading-relaxed border-b border-gray-100 pb-6 mb-6">
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
                    <li><strong>Sculpter le visage :</strong> Accentue les pommettes et lifte le visage naturellement.</li>
                    <li><strong>Traiter les cernes :</strong> Réduit efficacement les poches sous les yeux.</li>
                    <li><strong>Économie intelligente :</strong> Achetez le moule une fois et utilisez-le indéfiniment avec vos propres recettes.</li>
                    <li><strong>Silicone médical :</strong> Sûr pour la peau et facile à tenir (ne gèle pas vos mains).</li>
                  </ul>
                </div>

                {/* Arabic Description */}
                <div className="space-y-4 text-right leading-relaxed" dir="rtl">
                  <h3 className="text-2xl font-serif font-bold text-forest mb-4">
                    وصف المنتج
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">
                    لماذا تحتاجين إلى قالب الثلج في روتينك؟
                  </p>
                  
                  <p className="text-gray-700">
                    هل تعانين من انتفاخ الوجه عند الاستيقاظ؟ أو تعبتِ من المسام الواسعة والبشرة الشاحبة؟ هذا القالب ليس مجرد أداة، بل هو سر جمالك الطبيعي. مصمم ليمنحكِ فوائد &quotالعلاج بالتبريد&quot (Cryotherapy) في منزلك، لشد الجلد، وتصغير المسام، وإعطاء وجهك إشراقة لا تقاوم.
                  </p>
                  
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>نحت الوجه:</strong> يبرز عظام الخد ويرفع الوجه بشكل طبيعي.</li>
                    <li><strong>علاج الهالات:</strong> يقلل بشكل فعال من انتفاخ تحت العينين.</li>
                    <li><strong>توفير ذكي:</strong> اشتري القالب مرة واحدة واستخدميه للأبد بوصفاتك الخاصة.</li>
                    <li><strong>سيليكون طبي:</strong> آمن على البشرة وسهل الإمساك (لا يجمد يديكِ).</li>
                  </ul>
                  
                  <p className="text-forest font-semibold text-lg">
                    اطلبيه الآن وامنحي بشرتك العناية التي تستحقها!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Form */}
          <div id="order" className="lg:pt-0">
            <OrderForm 
              cartItems={cartItems} 
              onUpdateQuantity={updateQuantity}
              productPrice={ICE_ROLLER_PRICE}
              lang="ar"
            />
          </div>
        </div>

        {/* Video Ideas Section */}
        <VideoSales />

        {/* FAQ Section */}
        <FAQ />

        {/* Features Section */}
        <UpsellContent />
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
