"use client";

import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  description: string;
  placeholderImg: string;
  duration: string;
}

const VideoCard = ({ title, description, placeholderImg, duration }: VideoCardProps) => (
  <div className="relative group overflow-hidden rounded-2xl bg-white shadow-elegant border border-gray-100">
    {/* Video Placeholder */}
    <div className="relative aspect-[9/16] bg-gray-200 overflow-hidden">
      <img 
        src={placeholderImg} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 text-forest fill-forest" />
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-xs font-medium">
        {duration}
      </div>
    </div>
    
    {/* Content */}
    <div className="p-4 text-right" dir="rtl">
      <h4 className="text-lg font-bold text-forest mb-1">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function VideoSales() {
  const videos = [
    {
      title: "العرض الأول: Hook 🎥",
      description: "من وجه متعب وباهت إلى إشراقة فورية باستخدام الثلج. سحر في 5 ثوانٍ!",
      placeholderImg: "/video-hook-placeholder.jpg",
      duration: "5s"
    },
    {
      title: "طريقة الاستخدام: Tutorial 💡",
      description: "افتحي القالب، مرريه بلطف، واستمتعي بالانتعاش. بسيط وفعال.",
      placeholderImg: "/video-tutorial-placeholder.jpg",
      duration: "15s"
    },
    {
      title: "آراء الملكات: Social Proof 👑",
      description: "بنات من كل مكان جربوه وحبوه. انضمي لعائلة الجمال.",
      placeholderImg: "/video-social-placeholder.jpg",
      duration: "10s"
    }
  ];

  return (
    <section className="py-12 px-4 bg-cream/50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-forest mb-2">المحتوى المرئي</h2>
          <p className="text-gray-600">اكتشفي سر النضارة في ثوانٍ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
        
        <p className="mt-8 text-center text-xs text-gray-400 italic">
          (Note: Remplacez les images par vos vidéos dans le dossier public)
        </p>
      </div>
    </section>
  );
}
