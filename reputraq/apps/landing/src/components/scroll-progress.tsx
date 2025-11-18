"use client";

import { useState, useEffect } from "react";
import { brandConfig } from "@/lib/brand-config";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: `linear-gradient(90deg, ${brandConfig.colorPalette.colors.vibrantSky.hex}, ${brandConfig.colorPalette.colors.oceanDepth.hex})`,
          boxShadow: `0 0 10px ${brandConfig.colorPalette.colors.vibrantSky.hex}50`
        }}
      />
    </div>
  );
}
