"use client";

import { Hero } from "@/components/ui/hero-1";
import { appSignupUrl } from "@/lib/app-links";

interface HeroProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function HeroSection({
  eyebrow = "Introducing Reputraq",
  title = "Reputraq: Uncover Every Story That Shapes Your Reputation",
  subtitle = "From breaking news media, your brand story is being written right now. Reputraq brings it all together in one place so you can act before it's too late.",
  ctaLabel = "Get Early Access",
  ctaHref = appSignupUrl
}: HeroProps) {
  return (
    <Hero
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
    />
  );
}








