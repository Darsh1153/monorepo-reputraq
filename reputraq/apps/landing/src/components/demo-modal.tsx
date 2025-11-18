"use client";

import { useEffect } from "react";
import { X, Play, Pause, Maximize2, Minimize2, Eye } from "lucide-react";
import { brandConfig } from "@/lib/brand-config";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  console.log("Demo modal opened:", isOpen);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: brandConfig.colorPalette.colors.vibrantSky.hex + "20" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + "20" }}
            >
              <Play
                className="w-5 h-5"
                style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}
              />
            </div>
            <div>
              <h2 className="text-xl font-bold" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Reputraq Demo
              </h2>
              <p className="text-sm text-gray-500">View-only demonstration</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close demo"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Demo Content */}
        <div className="relative bg-gray-50" style={{ height: "70vh", minHeight: "500px" }}>
          {/* Demo Dashboard Preview */}
          <div className="h-full overflow-auto p-8">
            <div className="max-w-5xl mx-auto space-y-6">
              {/* Dashboard Header */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                    Reputraq Dashboard
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600">Live Demo</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Mentions</p>
                    <p className="text-2xl font-bold text-blue-600">12,458</p>
                    <p className="text-xs text-green-600 mt-1">↑ 12% from last week</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Sentiment Score</p>
                    <p className="text-2xl font-bold text-green-600">8.4/10</p>
                    <p className="text-xs text-green-600 mt-1">↑ 0.3 from last week</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Alerts</p>
                    <p className="text-2xl font-bold text-purple-600">23</p>
                    <p className="text-xs text-gray-500 mt-1">3 require attention</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Brand Health</p>
                    <p className="text-2xl font-bold text-orange-600">Good</p>
                    <p className="text-xs text-gray-500 mt-1">Stable trend</p>
                  </div>
                </div>
              </div>

              {/* Recent Mentions */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                  Recent Mentions
                </h4>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                        {item}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-900">News Article Title {item}</span>
                          <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">Positive</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          This is a sample mention from a news source. The sentiment analysis shows positive sentiment...
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>2 hours ago</span>
                          <span>•</span>
                          <span>TechCrunch</span>
                          <span>•</span>
                          <span>Social Media</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sentiment Chart */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                  Sentiment Trend (Last 30 Days)
                </h4>
                <div className="h-48 bg-gradient-to-t from-blue-50 to-white rounded-lg flex items-end justify-around p-4 border border-gray-200">
                  {Array.from({ length: 30 }, (_, i) => (
                    <div
                      key={i}
                      className="flex-1 mx-0.5 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                      style={{
                        height: `${Math.random() * 60 + 30}%`,
                        minHeight: "20px"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* View-Only Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-full flex items-center gap-2 backdrop-blur-sm">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">View-Only Demo Mode</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-6 py-4 border-t bg-gray-50 flex items-center justify-between"
          style={{ borderColor: brandConfig.colorPalette.colors.vibrantSky.hex + "20" }}
        >
          <p className="text-sm text-gray-600">
            This is a read-only demonstration. <a href="#" className="font-semibold" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}>Start your free trial</a> to access the full platform.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg font-medium transition-all hover:scale-105"
            style={{
              backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
              color: brandConfig.colorPalette.colors.pureWhite.hex
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

