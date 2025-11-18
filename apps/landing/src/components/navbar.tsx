"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { brandConfig } from "@/lib/brand-config";
import { Menu, X } from "lucide-react";
import { Waves } from "@/components/ui/waves-background";
import { appLoginUrl, appSignupUrl } from "@/lib/app-links";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800">
            {brandConfig.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            asChild
            variant="outline" 
            size="sm"
            className="border-2 hover-elegant"
            style={{
              borderColor: brandConfig.colorPalette.colors.oceanDepth.hex,
              color: brandConfig.colorPalette.colors.oceanDepth.hex
            }}
          >
            <Link href={appLoginUrl}>Sign In</Link>
          </Button>
          <Button 
            asChild
            size="sm"
            className="hover-elegant"
            style={{
              backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
              color: brandConfig.colorPalette.colors.pureWhite.hex
            }}
          >
            <Link href={appSignupUrl}>Get Started</Link>
          </Button>
        </div>

        <button 
          className="md:hidden text-gray-600 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="p-4">
            <Button 
              asChild
              variant="outline" 
              size="sm"
              className="w-full border-2"
              style={{
                borderColor: brandConfig.colorPalette.colors.oceanDepth.hex,
                color: brandConfig.colorPalette.colors.oceanDepth.hex
              }}
            >
              <Link href={appLoginUrl} onClick={() => setIsMenuOpen(false)}>
                Sign In
              </Link>
            </Button>
            <Button 
              asChild
              size="sm"
              className="w-full"
              style={{
                backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                color: brandConfig.colorPalette.colors.pureWhite.hex
              }}
            >
              <Link href={appSignupUrl} onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;








