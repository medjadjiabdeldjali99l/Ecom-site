"use client";

import Image from "next/image";

interface CustomerFeedbackProps {
  images: string[];
}

export default function CustomerFeedback({ images }: CustomerFeedbackProps) {
  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest">
            ✨ آراء زبنائنا (Feedback) 💬
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            ثقتكم هي سر نجاحنا! إليكم بعض تجارب زبائننا مع منتجاتنا.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="flex overflow-x-auto pb-8 pt-2 px-4 gap-5 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {images.map((url, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[85%] sm:w-[48%] md:w-full snap-center first:pl-2 last:pr-2 md:first:pl-0 md:last:pr-0"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-elegant-lg border-4 border-white transform transition-all duration-300 md:hover:scale-105 active:scale-95 cursor-pointer">
                <Image 
                  src={url} 
                  alt={`Feedback ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator Dots */}
        <div className="flex justify-center gap-1.5 mt-2 md:hidden">
           {images.map((_, i) => (
             <div key={i} className="w-2 h-2 rounded-full bg-forest/20 first:bg-forest first:w-4 transition-all duration-300" />
           ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white rounded-full font-serif font-bold shadow-lg transform hover:scale-105 transition-all cursor-default">
            <span>⭐⭐⭐⭐⭐ 4.9/5 بناءً على 2500+ طلب</span>
          </div>
        </div>
      </div>
    </section>
  );
}
