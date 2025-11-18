"use client";

import { cn } from "@/lib/utils";
import { brandConfig } from "@/lib/brand-config";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: "primary" | "secondary" | "success" | "warning" | "danger" | "custom";
  customGradient?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className,
  gradient = "primary",
  customGradient,
  animate = true
}: GradientTextProps) {
  const getGradientClass = () => {
    if (customGradient) return customGradient;
    
    switch (gradient) {
      case "primary":
        return `bg-gradient-to-r from-[${brandConfig.colorPalette.colors.vibrantSky.hex}] to-[${brandConfig.colorPalette.colors.oceanDepth.hex}]`;
      case "secondary":
        return `bg-gradient-to-r from-[${brandConfig.colorPalette.colors.oceanDepth.hex}] to-[${brandConfig.colorPalette.colors.charcoalCore.hex}]`;
      case "success":
        return "bg-gradient-to-r from-green-500 to-emerald-600";
      case "warning":
        return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "danger":
        return "bg-gradient-to-r from-red-500 to-pink-500";
      default:
        return `bg-gradient-to-r from-[${brandConfig.colorPalette.colors.vibrantSky.hex}] to-[${brandConfig.colorPalette.colors.oceanDepth.hex}]`;
    }
  };

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent font-semibold",
        getGradientClass(),
        animate && "animate-gradient-shift",
        className
      )}
    >
      {children}
    </span>
  );
}
