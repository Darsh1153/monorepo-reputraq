"use client";

import { useState, useEffect, useRef } from "react";
import { brandConfig } from "@/lib/brand-config";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  startValue?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  showGlow?: boolean;
  color?: string;
}

export function AnimatedCounter({
  value,
  duration = 2000,
  startValue = 0,
  suffix = "",
  prefix = "",
  className = "",
  showGlow = false,
  color = brandConfig.colorPalette.colors.vibrantSky.hex
}: AnimatedCounterProps) {
  const [count, setCount] = useState(startValue);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startCount = startValue;
    const endCount = value;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startCount + (endCount - startCount) * easeOutCubic);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration, startValue]);

  return (
    <div
      ref={counterRef}
      className={`relative ${className}`}
    >
      <span
        className={`font-bold transition-all duration-300 ${
          showGlow ? 'animate-pulse-glow' : ''
        }`}
        style={{
          color: color,
          textShadow: showGlow ? `0 0 20px ${color}50` : 'none'
        }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </span>
      
      {/* Animated underline */}
      <div
        className="absolute -bottom-1 left-0 h-0.5 transition-all duration-500"
        style={{
          width: isVisible ? '100%' : '0%',
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}50`
        }}
      />
    </div>
  );
}