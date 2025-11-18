"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  className?: string;
  videoSrc?: string;
  posterSrc?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export function VideoPlayer({ 
  className,
  videoSrc = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  posterSrc,
  autoPlay = true,
  loop = true,
  muted = true
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div 
      className={cn(
        "relative group rounded-2xl overflow-hidden shadow-2xl transition-all duration-500",
        "hover:shadow-3xl hover:scale-105",
        className
      )}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={posterSrc}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        onError={(e) => console.error('Video error:', e)}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle overlay for better video integration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />

      {/* Clean video without floating elements */}
    </div>
  );
}
