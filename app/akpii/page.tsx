"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ImageGallery from "@/components/ImageGallery";
import OrderForm from "@/components/OrderForm";
import Toast from "@/components/Toast";
import MobileStickyCTA from "@/components/MobileStickyCTA";
// import VideoSales from "@/components/VideoSales";
// import FAQ from "@/components/FAQ";
// import UpsellContent from "@/components/UpsellContent";
import { ProductImage, CartItem } from "@/types/types";
import { Star } from "lucide-react";
import { AKPII_PRICE } from "@/data/algeria-data";

const PRODUCT_IMAGES: ProductImage[] = [
  { url: "/AKPI-3.png", model: "AKPII ✨" },
  { url: "/AKPI-1.png", model: "AKPII ✨" },
  { url: "/AKPI-2.png", model: "AKPII ✨" },
  { url: "/AKPI-4.png", model: "AKPII ✨" },
  { url: "/AKPII-5.png", model: "AKPII ✨" },
];

export default function AkpiiPage() {
  const [selectedModel, setSelectedModel] = useState(PRODUCT_IMAGES[0].model);
  const [cartItems, setCartItems] = useState<CartItem[]>([{ model: "Akpii ✨", quantity: 1 }]);

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
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-forest leading-tight">
            ✨ ترمة منحوتة بدون عمليات.. اكتشفي سر بذور الأكبي الإفريقية! 🍑
          </h1>
          <p className="text-2xl font-bold text-forest-dark max-w-2xl mx-auto">
            فعّلي هرمونات الأنوثة طبيعياً!
          </p>
        </div>

        {/* Price and Rating */}
        <div className="flex items-center justify-center gap-6 mb-12 -mt-8">
           <p className="text-4xl font-bold text-forest font-serif">
             {AKPII_PRICE} DA
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
              onModelSelect={(model) => setSelectedModel(model)}
            />

            {/* Product Description */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-elegant">
              <div className="space-y-3 text-gray-700">
                {/* Arabic Description */}
                <div className="space-y-6 text-right leading-relaxed" dir="rtl">
                  <header>
                    <h3 className="text-3xl font-serif font-bold text-forest mb-4 leading-tight">
                      بذور الأكبي الإفريقية: <span className="block mt-2">سر القوام المتناسق والجمال الطبيعي</span>
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      هل تبحثين عن حل طبيعي وآمن لنحت الجسم؟ <strong>بذور الأكبي (Akpi Seeds)</strong> ليست مجرد بذور عادية، بل هي كنز طبيعي غني بالزيوت الأساسية والمركبات التي تستهدف خلايا الجسم لتعزيز المظهر الأنثوي بدون جراحة أو مواد كيميائية.
                    </p>
                  </header>

                  <section className="space-y-4">
                    <h4 className="text-xl font-bold text-forest-dark border-r-4 border-forest pr-3">
                      الفوائد العلمية والتأثير الهرموني:
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>
                        <strong>تحفيز الإستروجين النباتي (Phytoestrogens):</strong> تحتوي البذور على مركبات تحاكي عمل هرمون الأنوثة الطبيعي، مما يساعد على تنسيق توزيع الدهون في الجسم.
                      </li>
                      <li>
                        <strong>تنشيط الخلايا الدهنية (Adipocytes):</strong> تعمل على تحفيز نمو الأنسجة في مناطق الأنوثة وتوجيه المغذيات إليها بشكل موضعي.
                      </li>
                      <li>
                        <strong>تعزيز الكولاجين الطبيعي:</strong> تساهم الأحماض الدهنية في البذور في شد الجلد ومنع ظهور علامات التمدد (Stretch Marks).
                      </li>
                    </ul>
                  </section>

                  <section className="bg-forest/5 p-5 rounded-xl border border-forest/10 space-y-4">
                    <h4 className="text-xl font-bold text-forest">طريقة التحضير والاستخدام:</h4>
                    <p className="text-sm text-gray-600 mb-2">للحصول على أفضل النتائج، اتبعي هذه الخطوات البسيطة لتحويل البذور إلى كريم طبيعي فعال:</p>
                    <div className="grid gap-3">
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-forest text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">1</span>
                        <p><strong>التحميص:</strong> ضعي البذور في مقلاة على نار هادئة لدقائق بسيطة حتى تظهر رائحتها الزكية.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-forest text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">2</span>
                        <p><strong>الطحن:</strong> اطحني البذور جيداً حتى تحصلي على قوام ناعم جداً.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-forest text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">3</span>
                        <p><strong>المزج:</strong> اخلطي المسحوق مع كمية متساوية من زبدة الشيا الخام أو زيت الحلبة للحصول على قوام كريمي.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-forest text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">4</span>
                        <p><strong>التطبيق:</strong> دلكي المنطقة المطلوبة بحركات دائرية لمدة 5 دقائق يومياً قبل النوم لضمان أقصى امتصاص للمكونات الفعالة.</p>
                      </div>
                    </div>
                  </section>

                  <section className="pt-4 border-t border-gray-100">
                    <h4 className="text-xl font-bold text-forest mb-2">لماذا تختارين بذور الأكبي؟</h4>
                    <p className="text-gray-700">
                      تمنحك هذه البذور حلاً يعتمد على البيولوجيا الطبيعية للجسم، فهي توازن الهرمونات وتشد الترهلات في آن واحد، مما يمنحكِ قواماً مشدوداً وجلداً ناعماً كالحرير.
                    </p>
                  </section>
                  
                  <footer className="pt-4">
                    <p className="text-2xl font-serif font-bold text-forest-dark animate-pulse">
                      ابدئي رحلة التغيير اليوم واكتشفي قوة الطبيعة الإفريقية!
                    </p>
                  </footer>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Form */}
          <div id="order" className="lg:pt-0">
            <OrderForm 
              cartItems={cartItems} 
              onUpdateQuantity={updateQuantity}
              productPrice={AKPII_PRICE}
              lang="ar"
              successUrl="/success"
              productName="Akpii"
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

      <MobileStickyCTA />
    </div>
  );
}
