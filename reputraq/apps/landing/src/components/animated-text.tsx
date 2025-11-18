"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { brandConfig } from "@/lib/brand-config";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationType?: "slide-up" | "slide-left" | "slide-right" | "scale-in" | "bounce-in" | "zoom-in" | "flip-in" | "wave-in";
  highlightWords?: string[];
  highlightColor?: string;
  style?: React.CSSProperties;
}

const animationTypes = {
  "slide-up": "animate-dynamic-slide-up",
  "slide-left": "animate-dynamic-slide-left", 
  "slide-right": "animate-dynamic-slide-right",
  "scale-in": "animate-dynamic-scale-in",
  "bounce-in": "animate-dynamic-bounce-in",
  "zoom-in": "animate-dynamic-zoom-in",
  "flip-in": "animate-dynamic-flip-in",
  "wave-in": "animate-dynamic-wave-in"
};

export function AnimatedText({ 
  text, 
  className, 
  delay = 0, 
  animationType = "slide-up",
  highlightWords = [],
  highlightColor = brandConfig.colorPalette.colors.vibrantSky.hex,
  style
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const renderText = () => {
    const words = text.split(" ");
    return words.map((word, index) => {
      const isHighlighted = highlightWords.some(highlight => 
        word.toLowerCase().includes(highlight.toLowerCase())
      );
      
      return (
        <span
          key={index}
          className={cn(
            "transition-all duration-300",
            isHighlighted && "font-bold"
          )}
          style={{
            color: isHighlighted ? highlightColor : "inherit"
          }}
        >
          {word}{index < words.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <span 
      className={cn(
        "animate-initial",
        isVisible && animationTypes[animationType],
        className
      )}
      style={style}
    >
      {renderText()}
    </span>
  );
}
