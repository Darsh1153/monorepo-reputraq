"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Waves } from "@/components/ui/waves-background"
import { brandConfig } from "@/lib/brand-config"
import { appSignupUrl } from "@/lib/app-links"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  eyebrow = "Introducing Reputraq",
  title,
  subtitle,
  ctaLabel = "Get Early Access",
  ctaHref = appSignupUrl,
}: HeroProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Waves />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg text-gray-700 mb-8">{subtitle}</p>
            <Button
              asChild
              className="mt-[-20px] w-fit md:w-52 z-20 tracking-tighter text-center text-lg hover-elegant"
              style={{
                backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                color: brandConfig.colorPalette.colors.pureWhite.hex,
                border: `2px solid ${brandConfig.colorPalette.colors.vibrantSky.hex}`
              }}
            >
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">{eyebrow}</h2>
            <p className="text-lg text-gray-700 mb-6">
              {subtitle}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}








