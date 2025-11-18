"use client";

import { useState, useEffect } from "react";
import { brandConfig } from "@/lib/brand-config";

interface ProgressIndicatorProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function ProgressIndicator({ 
  steps, 
  currentStep, 
  className = "" 
}: ProgressIndicatorProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div 
          className="absolute top-1/2 left-0 h-1 bg-gray-200 rounded-full -translate-y-1/2"
          style={{ width: 'calc(100% - 2rem)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
              background: `linear-gradient(90deg, ${brandConfig.colorPalette.colors.vibrantSky.hex}, ${brandConfig.colorPalette.colors.oceanDepth.hex})`,
              boxShadow: `0 0 10px ${brandConfig.colorPalette.colors.vibrantSky.hex}30`
            }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative z-10 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                index <= currentStep
                  ? 'scale-110 shadow-lg'
                  : 'scale-100'
              }`}
              style={{
                backgroundColor: index <= currentStep 
                  ? brandConfig.colorPalette.colors.vibrantSky.hex
                  : '#e5e7eb',
                color: index <= currentStep 
                  ? brandConfig.colorPalette.colors.pureWhite.hex
                  : '#9ca3af',
                boxShadow: index <= currentStep 
                  ? `0 0 20px ${brandConfig.colorPalette.colors.vibrantSky.hex}40`
                  : 'none'
              }}
            >
              {index < currentStep ? '✓' : index + 1}
            </div>
            
            {/* Step Label */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <span
                className={`text-xs font-medium transition-colors duration-300 ${
                  index <= currentStep
                    ? 'text-gray-900'
                    : 'text-gray-500'
                }`}
              >
                {step}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
