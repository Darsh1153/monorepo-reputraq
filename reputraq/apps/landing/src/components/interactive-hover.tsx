"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { brandConfig } from "@/lib/brand-config";

interface InteractiveHoverProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
  color?: string;
}

export function InteractiveHover({ 
  children, 
  className, 
  intensity = "medium",
  color = brandConfig.colorPalette.colors.vibrantSky.hex
}: InteractiveHoverProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const intensityMap = {
    low: { scale: 1.02, glow: 10, blur: 2 },
    medium: { scale: 1.05, glow: 20, blur: 4 },
    high: { scale: 1.08, glow: 30, blur: 6 }
  };

  const { scale, glow, blur } = intensityMap[intensity];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        isHovered ? "scale-105" : "scale-100",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered 
          ? `scale(${scale}) rotateX(${(mousePosition.y - 50) * 0.02}deg) rotateY(${(mousePosition.x - 50) * 0.02}deg)`
          : 'scale(1) rotateX(0deg) rotateY(0deg)',
        boxShadow: isHovered 
          ? `0 ${glow}px ${glow * 2}px ${color}40, 0 0 ${glow * 3}px ${color}20`
          : 'none'
      }}
    >
      {/* Animated background */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${color}20, transparent 50%)`,
          opacity: isHovered ? 1 : 0,
          filter: `blur(${blur}px)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-lg transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${color}30, transparent 70%)`,
          opacity: isHovered ? 1 : 0
        }}
      />
    </div>
  );
}
