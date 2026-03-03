"use client";

import { ProductImage } from "@/types/types";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface VisualShowcaseProps {
  images: ProductImage[];
}

export default function VisualShowcase({ images }: VisualShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Take the first 3 images or repeat if fewer
  const displayImages = images.slice(0, 3);
  if (displayImages.length < 3) {
    displayImages.push(...images.slice(0, 3 - displayImages.length));
  }

  return (
    <section className="py-24 overflow-hidden bg-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest">
            ✨ أناقة تخطف الأنظار
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            تصميم عصري يجمع بين الأصالة والفخامة، مناسب لكل إطلالاتك
          </p>
        </div>

        {/* Outer container for horizontal scroll on mobile, flex on desktop */}
        <div 
          ref={containerRef}
          className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0"
        >
          {/* Left Image (Large) */}
          <div className="w-full md:w-1/3 z-10 md:-mr-12 opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-105 transform -rotate-3 md:-rotate-6">
             <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src={displayImages[0].url} 
                  alt={displayImages[0].model}
                  fill
                  className="object-cover"
                />
             </div>
          </div>

          {/* Center Mobile UI element */}
          <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] z-30 shrink-0">
             {/* Smartphone Frame */}
             <div className="absolute inset-0 bg-black rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.3)] ring-8 ring-gray-800 p-3 overflow-hidden">
                {/* Internal Screen Content */}
                <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                   {/* Mobile Status Bar Simulation */}
                   <div className="h-6 w-full bg-forest/90 flex items-center justify-between px-6 pt-1">
                      <div className="w-4 h-2 bg-white/20 rounded-full" />
                      <div className="w-12 h-4 bg-white/30 rounded-full" />
                   </div>
                   
                   {/* App-like content */}
                   <div className="p-4 space-y-4">
                      <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative border border-gray-100">
                         <Image 
                            src={displayImages[1].url} 
                            alt="Mobile Preview" 
                            fill 
                            className="object-cover" 
                         />
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-3/4 bg-gray-100 rounded-full" />
                        <div className="h-3 w-1/2 bg-gray-50 rounded-full" />
                      </div>
                      <div className="pt-4 space-y-2">
                         <div className="w-full h-12 bg-forest rounded-xl flex items-center justify-center text-white font-serif font-bold text-sm shadow-md">
                            Acheter Maintenant
                         </div>
                         <div className="flex gap-2">
                            <div className="w-full h-10 bg-forest/10 rounded-xl" />
                            <div className="w-full h-10 bg-forest/10 rounded-xl" />
                         </div>
                      </div>
                      
                      {/* Decorative grid */}
                      <div className="grid grid-cols-2 gap-2 pt-4">
                         <div className="aspect-square bg-gray-50 rounded-lg" />
                         <div className="aspect-square bg-gray-50 rounded-lg" />
                      </div>
                   </div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-500/50 rounded-full" />
             </div>
             
             {/* Floating badges around the mobile */}
             <div className="absolute -top-6 -right-6 w-20 h-20 bg-forest rounded-full flex items-center justify-center text-white font-bold text-center p-2 shadow-xl animate-bounce">
                New
             </div>
             <div className="absolute -bottom-4 -left-8 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 font-bold text-forest">
                #HermesLuxury
             </div>
          </div>

          {/* Right Image (Large) */}
          <div className="w-full md:w-1/3 z-10 md:-ml-12 opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-105 transform rotate-3 md:rotate-6">
             <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src={displayImages[2].url} 
                  alt={displayImages[2].model}
                  fill
                  className="object-cover"
                />
             </div>
          </div>
        </div>
        
        {/* Mobile Scroll Indicator or stacked helper text */}
        <div className="mt-12 text-center md:hidden">
           <div className="inline-flex items-center gap-2 text-gray-500 animate-pulse">
              <span>Scroll d'avant en arrière</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
           </div>
        </div>
      </div>
    </section>
  );
}
