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
import VisualShowcase from "@/components/VisualShowcase";
import { ProductImage, CartItem } from "@/types/types";
import { Star } from "lucide-react";
import { HERMES_PRICE } from "@/data/algeria-data";

// Product images — 4 colorways
const PRODUCT_IMAGES: ProductImage[] = [
  { url: "/hermes-camel.jpeg",  model: "Camel 🐪" },
  // { url: "/hermes-beige.jpeg",  model: "Beige 🤍" },
  { url: "/hermes-noir.jpeg",   model: "Noir 🖤" },
  { url: "/hermes-bleu.jpeg",   model: "Bleu 🔵" },
];
const PRODUCT_IMAGES_AFFICHE: ProductImage[] = [
  { url: "/black_site.jpeg",  model: "Camel 🐪" },
  // { url: "/hermes-beige.jpeg",  model: "Beige 🤍" },
  { url: "/bl_site.jpeg",   model: "Noir 🖤" },
  { url: "/brrown_site.jpeg",   model: "Bleu 🔵" },
];

// Available shoe sizes
const POINTURES = ["36", "37", "38", "39", "40", "41"];

const HERMES_VIDEOS = [
  {
    title: "العرض الأول: Hook 🎥",
    description: "أناقة لا مثيل لها مع Hermès. اكتشفي الفرق في ثوانٍ!",
    videoUrl: "/video/hermes-hook.webm",
    duration: "51s",
  },
  {
    title: "طريقة الاستخدام: Tutorial 💡",
    description: "احمليها بأسلوب، أظهري شخصيتك. بسيط وأنيق.",
    videoUrl: "/video/hermes-tutorial.MP4",
    duration: "47s",
  },
];

export default function HermesPage() {
  const [cartItems, setCartItems]         = useState<CartItem[]>([]);
  const [selectedPointure, setPointure]   = useState<string>("");
  const [toastVisible, setToastVisible]   = useState(false);
  const [toastMessage, setToastMessage]   = useState("");

  const handleModelSelect = (model: string) => {
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
    setCartItems(prev =>
      prev
        .map(item =>
          item.model === model
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const handlePointureSelect = (p: string) => {
    setPointure(prev => (prev === p ? "" : p));
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-forest">
            ✨👡 بليغة Hermès
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            أناقة لا تُضاهى مع Hermès.. الفخامة الحقيقية بين يديكِ
          </p>
        </div>

        {/* Price and Rating */}
        <div className="flex items-center justify-center gap-6 mb-12 -mt-8">
          <p className="text-4xl font-bold text-forest font-serif">
            {HERMES_PRICE} DA
          </p>
          <div className="flex items-center gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current shadow-sm" />
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Column — Gallery + Selectors */}
          <div id="product" className="lg:sticky lg:top-24 h-fit space-y-6">
            <ImageGallery
              images={PRODUCT_IMAGES}
              selectedModels={cartItems.map(i => i.model)}
              onModelSelect={handleModelSelect}
            />

            {/* ── Pointure selector ── */}
            <div className="bg-white rounded-xl p-5 shadow-elegant">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Pointure المقاس
              </p>
              <div className="flex flex-wrap gap-3">
                {POINTURES.map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handlePointureSelect(p)}
                    className={`
                      w-12 h-12 rounded-lg border-2 font-serif font-bold text-base
                      transition-all duration-200
                      ${selectedPointure === p
                        ? "border-forest bg-forest text-white shadow-md scale-105"
                        : "border-gray-200 bg-white text-gray-700 hover:border-forest/60 hover:bg-forest/5"
                      }
                    `}
                  >
                    {p}
                  </button>
                ))}
              </div>
              {!selectedPointure && (
                <p className="text-xs text-amber-600 mt-2">
                  ⚠️ Veuillez choisir une pointure / يرجى اختيار المقاس
                </p>
              )}
            </div>

            {/* ── Color / Couleur reminder ── */}
            <div className="bg-white rounded-xl p-5 shadow-elegant">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Couleur اللون
              </p>
              <div className="flex flex-wrap gap-3">
                {PRODUCT_IMAGES.map((img, idx) => {
                  const isSelected = cartItems.some(i => i.model === img.model);
                  // Map model name to a swatch background color
                  const swatchColors: Record<string, string> = {
                    "Camel 🐪":  "bg-amber-700",
                    // "Beige 🤍":  "bg-amber-100 border-amber-300",
                    "Noir 🖤":   "bg-gray-900",
                    "Bleu 🔵":  "bg-blue-600",
                  };
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleModelSelect(img.model)}
                      title={img.model}
                      className={`
                        w-12 h-12 rounded-lg border-2 flex items-center justify-center
                        font-serif font-bold text-xs transition-all duration-200
                        ${isSelected
                          ? "border-forest ring-2 ring-forest ring-offset-2 scale-105"
                          : "border-gray-200 hover:border-forest/60"
                        }
                        ${swatchColors[img.model] ?? "bg-gray-200"}
                      `}
                    >
                      {isSelected && (
                        <svg className="w-5 h-5 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
              {cartItems.length === 0 && (
                <p className="text-xs text-amber-600 mt-2">
                  ⚠️ Veuillez choisir une couleur / يرجى اختيار اللون
                </p>
              )}
            </div>

            {/* Product Description */}
            <div className="bg-white rounded-xl p-6 shadow-elegant">
              <div className="space-y-3 text-gray-700">
                {/* French Description */}
                <div className="space-y-4 text-left leading-relaxed border-b border-gray-100 pb-6 mb-6">
                  <h3 className="text-2xl font-serif font-bold text-forest mb-4">
                    Description du Produit
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">
                    Pourquoi choisir nos mules Hermès ?
                  </p>
                  <p className="text-gray-700">
                    Vous cherchez une mule qui allie luxe, confort et élégance ? Nos mules Hermès ne sont
                    pas juste des chaussures, c&apos;est une déclaration de style. Disponibles en 4 coloris
                    et 6 pointures (36 à 41), elles subliment chaque tenue.
                  </p>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li><strong>Élégance intemporelle :</strong> Dessin iconique qui traverse les tendances.</li>
                    <li><strong>Confort premium :</strong> Semelle souple, port agréable toute la journée.</li>
                    <li><strong>4 Coloris :</strong> Camel, Beige, Noir, Bleu — pour toutes les occasions.</li>
                    <li><strong>Pointures 36–41 :</strong> Disponible dans toutes les tailles.</li>
                  </ul>
                </div>

                {/* Arabic Description */}
                <div className="space-y-4 text-right leading-relaxed" dir="rtl">
                  <h3 className="text-2xl font-serif font-bold text-forest mb-4">
                    وصف المنتج
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">
                    لماذا تختارين مولا Hermès؟
                  </p>
                  <p className="text-gray-700">
                    هل تبحثين عن حذاء يجمع بين الفخامة والراحة والأناقة؟ مولا Hermès ليست مجرد حذاء، بل هي
                    إعلان عن أسلوبكِ. متوفرة في 4 ألوان ومقاسات من 36 إلى 41، تُضيف لمسة من الرقي لكل إطلالة.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>أناقة لا تفنى:</strong> تصميم أيقوني يتخطى صيحات الموضة.</li>
                    <li><strong>راحة فائقة:</strong> نعل مرن ومريح طوال اليوم.</li>
                    <li><strong>4 ألوان:</strong> كاميل، بيج، أسود، أزرق — لكل مناسبة.</li>
                    <li><strong>مقاسات 36 – 41:</strong> متوفرة بجميع المقاسات.</li>
                  </ul>
                  <p className="text-forest font-semibold text-lg">
                    اختاري مقاسكِ ولونكِ الآن واطلبي!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Order Form */}
          <div id="order" className="lg:pt-0">
            <OrderForm
              cartItems={cartItems}
              onUpdateQuantity={updateQuantity}
              productPrice={HERMES_PRICE}
              lang="ar"
              pointure={selectedPointure}
            />
          </div>
        </div>

        {/* Visual Showcase Section */}
        <VisualShowcase images={PRODUCT_IMAGES_AFFICHE} />

        {/* Video Section */}
        {/* <VideoSales videos={HERMES_VIDEOS} /> */}

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
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-forest text-cream py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 My Suerte. Tous droits réservés.</p>
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
