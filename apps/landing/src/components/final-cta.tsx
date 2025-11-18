"use client";

import Link from "next/link";
import { brandConfig } from "@/lib/brand-config";
import { 
  ArrowRight, 
  CheckCircle
} from "lucide-react";
import { appSignupUrl } from "@/lib/app-links";

export function FinalCTA() {
  return (
          {/* CTA Button */}
          <div className="mb-12">
            <Link 
              href={appSignupUrl}
              className="group relative px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto shadow-lg"
              style={{
                backgroundColor: brandConfig.colorPalette.primary.main,
                color: 'white',
                boxShadow: `0 10px 30px ${brandConfig.colorPalette.primary.main}30`
              }}
            >
              <span className="flex items-center">
                <span className="mr-3 text-2xl">👉</span>
                Get Early Access Today
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
  );
}

