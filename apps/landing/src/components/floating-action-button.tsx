"use client";

import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle, Zap, Sparkles } from "lucide-react";
import { brandConfig } from "@/lib/brand-config";
import { appSignupUrl } from "@/lib/app-links";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const actions = [
    {
      icon: ArrowUp,
      label: "Scroll to top",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      color: brandConfig.colorPalette.colors.charcoalCore.hex
    },
    {
      icon: MessageCircle,
      label: "Contact Us",
      action: () => window.open("mailto:info@example.com", "_blank"),
      color: brandConfig.colorPalette.colors.charcoalCore.hex
    },
    {
      icon: Zap,
      label: "Pricing",
      action: () => window.open("/pricing", "_self"),
      color: brandConfig.colorPalette.colors.charcoalCore.hex
    },
    {
      icon: Sparkles,
      label: "Get Started",
      action: () => window.open(appSignupUrl, "_blank"),
      color: brandConfig.colorPalette.colors.charcoalCore.hex
    }
  ];

  return (
    <div
      className={`fixed bottom-4 right-4 p-3 rounded-full bg-white shadow-lg z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-end">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className="flex items-center mb-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
            style={{ color: action.color }}
          >
            <action.icon className="h-5 w-5" />
            <span className="ml-2 text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloatingActionButton;
