"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ProductImage } from "@/types/types";

interface ImageGalleryProps {
  images: ProductImage[];
  selectedModels?: string[];
  onModelSelect?: (model: string) => void;
}

export default function ImageGallery({ images, selectedModels = [], onModelSelect }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    if (onModelSelect && images[index]) {
      onModelSelect(images[index].model);
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white shadow-elegant">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                selectedImage === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.url}
                alt={`Product view ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => {
          const isSelected = selectedModels.includes(image.model);
          return (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`relative aspect-square overflow-hidden rounded-lg transition-all ${
                selectedImage === index
                  ? "ring-2 ring-forest ring-offset-2"
                  : "hover:opacity-80"
              } ${isSelected ? "ring-4 ring-forest/70 ring-offset-0 border-2 border-white" : ""}`}
            >
              <Image
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              {/* Checkmark overlay for selected items */}
              {isSelected && (
                <div className="absolute inset-0 bg-forest/20 flex items-center justify-center">
                  <div className="bg-forest text-white rounded-full p-1 shadow-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
