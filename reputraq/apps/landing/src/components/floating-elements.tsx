"use client";

import { useEffect, useRef } from "react";
import { brandConfig } from "@/lib/brand-config";

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export function FloatingElements({ count = 6, className = "" }: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const elements: HTMLDivElement[] = [];

    const colors = [
      brandConfig.colorPalette.colors.vibrantSky.hex,
      brandConfig.colorPalette.colors.oceanDepth.hex,
      brandConfig.colorPalette.colors.charcoalCore.hex
    ];

    // Create floating elements
    for (let i = 0; i < count; i++) {
      const element = document.createElement('div');
      element.className = 'absolute rounded-full animate-float-slow opacity-60';
      
      const size = Math.random() * 8 + 4; // 4-12px
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.backgroundColor = colors[i % colors.length];
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.animationDelay = `${Math.random() * 3}s`;
      element.style.animationDuration = `${3 + Math.random() * 2}s`;
      
      container.appendChild(element);
      elements.push(element);
    }

    return () => {
      elements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [count]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    />
  );
}
