"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, Instagram, Home } from "lucide-react";

interface OrderData {
  fullName: string;
  phone: string;
  wilaya: string;
  commune: string;
  deliveryMethod: string;
  totalPrice: number;
}

export default function SuccessLightRommPage() {
  const router = useRouter();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("orderData");
    if (data) {
      setOrderData(JSON.parse(data));
    }
  }, [router]);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
        <div id="pixel-lightromm" className="hidden"></div>
        <h1 className="text-2xl font-serif font-bold text-forest mb-4">Page de Confirmation (Light Room)</h1>
        <p className="text-gray-600 mb-8">Aucune donnée de commande trouvée.</p>
        <button
          onClick={() => router.push("/")}
          className="bg-forest text-white px-6 py-2 rounded-lg"
        >
          Retour à l&apos;accueil
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      {/* Product Specific Pixel Placeholder */}
      <div id="pixel-lightromm" className="hidden"></div>
      
      <div className="max-w-2xl w-full">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-block animate-bounce">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mt-6 mb-4">
            Commande Confirmée !
          </h1>
          <p className="text-xl text-gray-600">
            Merci pour votre confiance, {orderData.fullName}
          </p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white rounded-2xl shadow-elegant-lg p-8 mb-8 space-y-6">
          <h2 className="text-2xl font-serif font-bold text-forest border-b border-gray-200 pb-4">
            Récapitulatif de votre commande
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">Nom complet</span>
              <span className="font-semibold text-gray-900">{orderData.fullName}</span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">Téléphone</span>
              <span className="font-semibold text-gray-900">{orderData.phone}</span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">Wilaya</span>
              <span className="font-semibold text-gray-900">{orderData.wilaya}</span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">Commune</span>
              <span className="font-semibold text-gray-900">{orderData.commune}</span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">Mode de livraison</span>
              <span className="font-semibold text-gray-900">
                {orderData.deliveryMethod === "home" ? "À Domicile" : "Au Bureau"}
              </span>
            </div>

            <div className="flex justify-between items-center py-4 bg-cream/50 rounded-lg px-4 mt-6">
              <span className="text-lg font-medium text-gray-700">Prix Total</span>
              <span className="text-3xl font-serif font-bold text-forest">
                {orderData.totalPrice.toLocaleString()} DZD
              </span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Notre équipe vous contactera dans les plus brefs délais
              pour confirmer les détails de votre commande et organiser la livraison.
            </p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => router.push("/")}
            className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-forest font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-forest transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="w-5 h-5" />
            <span>Retour à l&apos;accueil</span>
          </button>

          <a
            href="https://www.instagram.com/_my_suerte_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Instagram className="w-5 h-5" />
            <span>Suivez nos nouveautés</span>
          </a>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-8 p-6 bg-white/50 rounded-xl">
          <p className="text-gray-600 italic">
            &quot;Nous sommes ravis de vous compter parmi nos clients. Votre satisfaction est notre priorité !&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
