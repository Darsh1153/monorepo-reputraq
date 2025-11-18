import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { brandConfig } from "@/lib/brand-config";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${brandConfig.brand.name} - ${brandConfig.brand.tagline}`,
  description: "Your reputation matters. Build trust and credibility with Reputraq.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
