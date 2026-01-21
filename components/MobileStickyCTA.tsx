"use client";

import { ShoppingBag } from "lucide-react";

export default function MobileStickyCTA() {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-2 z-50 md:hidden animate-pulse">
      <button
        onClick={scrollToOrder}
        className="w-16 h-16 bg-forest text-cream rounded-full shadow-2xl flex flex-col items-center justify-center hover:bg-forest/90 active:scale-95 transition-all border-2 border-white"
        aria-label="Acheter maintenant"
      >
        <span className="font-bold text-xs text-center leading-tight">اطلب</span>
        <span className="font-bold text-xs text-center leading-tight">الآن</span>
      </button>
    </div>
  );
}
