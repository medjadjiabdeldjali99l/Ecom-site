"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface VideoCardProps {
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
}

const VideoCard = ({ title, description, videoUrl, duration }: VideoCardProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const remaining = Math.ceil(videoRef.current.duration - videoRef.current.currentTime);
      setTimeLeft(remaining);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setTimeLeft(Math.ceil(videoRef.current.duration));
    }
  };

  return (
    <div className="relative group overflow-hidden rounded-2xl bg-white shadow-elegant border border-gray-100">
      {/* Video Placeholder */}
      <div className="relative aspect-[9/16] bg-gray-200 overflow-hidden">
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button 
          onClick={toggleMute}
          className="absolute bottom-4 left-4 w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
        <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-xs font-medium">
          {timeLeft !== null ? `${timeLeft}s` : duration}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 text-right" dir="rtl">
        <h4 className="text-lg font-bold text-forest mb-1">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

interface VideoSalesProps {
  title?: string;
  subtitle?: string;
  videos: VideoCardProps[];
}

export default function VideoSales({ 
  title = "المحتوى المرئي", 
  subtitle = "اكتشفي سر النضارة في ثوانٍ", 
  videos 
}: VideoSalesProps) {

  return (
    <section className="py-12 px-4 bg-cream/50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-forest mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
