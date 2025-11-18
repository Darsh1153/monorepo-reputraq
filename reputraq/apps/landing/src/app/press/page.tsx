import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Newspaper, Download, Mail, FileText, Calendar } from "lucide-react";

export default function PressPage() {
  console.log("Press page loaded");
  
  const pressReleases = [
    {
      date: "January 15, 2025",
      title: "Reputraq Raises $25M Series B to Expand Global Reputation Monitoring Platform",
      description: "Funding will accelerate product development and international expansion."
    },
    {
      date: "December 10, 2024",
      title: "Reputraq Launches AI-Powered Sentiment Analysis for Real-Time Reputation Management",
      description: "New features enable businesses to detect and respond to reputation threats faster than ever."
    },
    {
      date: "November 5, 2024",
      title: "Reputraq Partners with Leading PR Agencies to Enhance Media Monitoring Capabilities",
      description: "Strategic partnerships bring advanced reputation intelligence to communications professionals."
    },
    {
      date: "October 20, 2024",
      title: "Reputraq Achieves SOC 2 Type II Certification for Enterprise Security",
      description: "Certification demonstrates commitment to data security and compliance standards."
    }
  ];

  const mediaKit = [
    { name: "Company Logo Pack", format: "PNG, SVG", size: "2.5 MB" },
    { name: "Brand Guidelines", format: "PDF", size: "5.2 MB" },
    { name: "Product Screenshots", format: "PNG", size: "12.8 MB" },
    { name: "Executive Headshots", format: "JPG", size: "8.4 MB" }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
              <Newspaper className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Press & Media
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay updated with the latest news, announcements, and resources from Reputraq.
            </p>
          </div>

          {/* Press Contact */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 mb-16">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 mt-1" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                  Press Inquiries
                </h2>
                <p className="text-gray-600 mb-4">
                  For media inquiries, interview requests, or press-related questions, please contact our press team.
                </p>
                <a 
                  href="mailto:press@reputraq.com"
                  className="text-lg font-semibold"
                  style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}
                >
                  press@reputraq.com
                </a>
              </div>
            </div>
          </div>

          {/* Press Releases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Press Releases
            </h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{release.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                    {release.title}
                  </h3>
                  <p className="text-gray-600">{release.description}</p>
                  <a 
                    href="#read-more"
                    className="inline-block mt-4 text-sm font-semibold"
                    style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}
                  >
                    Read More →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Media Kit */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Media Kit
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Download our brand assets, logos, and product images for your articles and publications.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {mediaKit.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                      <div>
                        <h3 className="font-semibold" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.format} • {item.size}</p>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-gray-400" />
                  </div>
                  <a
                    href="#download"
                    className="text-sm font-semibold"
                    style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}
                  >
                    Download →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Company Facts */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-8">Company Facts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About Reputraq</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Reputraq is a leading reputation monitoring and management platform that helps businesses protect and enhance their online reputation through real-time monitoring, AI-powered sentiment analysis, and actionable insights.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Founded in 2020, Reputraq serves thousands of companies worldwide, from startups to Fortune 500 enterprises, monitoring millions of mentions across news, social media, and online conversations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• 10,000+ active users across 50+ countries</li>
                  <li>• 500+ enterprise clients</li>
                  <li>• 50M+ mentions monitored monthly</li>
                  <li>• 99.9% platform uptime SLA</li>
                  <li>• SOC 2 Type II certified</li>
                  <li>• GDPR and CCPA compliant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}

