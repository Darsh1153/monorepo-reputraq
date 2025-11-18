"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatedText } from "@/components/animated-text";
import { brandConfig } from "@/lib/brand-config";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bell,
  Brain,
  ChartArea,
  Clock,
  CloudLightning,
  Compass,
  Eye,
  FileText,
  Globe,
  Layers,
  LineChart,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Radar,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { appSignupUrl } from "@/lib/app-links";

const TheReputraqSolution = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate an API call or data fetching
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <AlertTriangle className="h-12 w-12 mr-2" />
        {error}
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">
              The Reputraq Solution
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our comprehensive platform provides real-time monitoring,
              actionable insights, and automated response to protect your
              brand and reputation across all major social media platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={appSignupUrl}
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                style={{
                  backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                  color: brandConfig.colorPalette.colors.pureWhite.hex,
                  boxShadow: `0 10px 30px ${brandConfig.colorPalette.colors.vibrantSky.hex}30`
                }}
              >
                <AnimatedText
                  text="Get Started Today"
                  className="block"
                  delay={8000}
                />
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                style={{
                  borderColor: brandConfig.colorPalette.colors.oceanDepth.hex,
                  color: brandConfig.colorPalette.colors.oceanDepth.hex,
                  backgroundColor: 'transparent'
                }}
              >
                <AnimatedText
                  text="Schedule Demo"
                  className="block"
                  delay={8500}
                />
                <Eye className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Real-time monitoring of social media channels</span>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Comprehensive analytics and reporting</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>24/7 threat detection and response</span>
                </li>
                <li className="flex items-start">
                  <CloudLightning className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Automated reputation management</span>
                </li>
                <li className="flex items-start">
                  <Globe className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Global coverage across all major platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheReputraqSolution;
