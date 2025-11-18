import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Book, Code, Zap, Shield, Search, ArrowRight } from "lucide-react";

export default function DocsPage() {
  console.log("Documentation page loaded");
  
  const docSections = [
    {
      title: "Getting Started",
      description: "Quick start guides and setup instructions",
      icon: Zap,
      topics: ["Introduction", "Account Setup", "First Dashboard", "Basic Configuration"]
    },
    {
      title: "API Reference",
      description: "Complete API documentation with examples",
      icon: Code,
      topics: ["Authentication", "Endpoints", "Webhooks", "Rate Limits"]
    },
    {
      title: "Features Guide",
      description: "Learn how to use all platform features",
      icon: Book,
      topics: ["Monitoring Setup", "Alert Configuration", "Sentiment Analysis", "Reports"]
    },
    {
      title: "Security & Compliance",
      description: "Security best practices and compliance information",
      icon: Shield,
      topics: ["Data Security", "Privacy Settings", "GDPR Compliance", "SOC 2"]
    }
  ];

  const quickLinks = [
    { title: "API Quick Start", href: "#api-quickstart", description: "Get started with our API in 5 minutes" },
    { title: "Dashboard Overview", href: "#dashboard", description: "Navigate and use the Reputraq dashboard" },
    { title: "Setting Up Alerts", href: "#alerts", description: "Configure real-time reputation alerts" },
    { title: "Integrations", href: "#integrations", description: "Connect Reputraq with your tools" },
    { title: "Troubleshooting", href: "#troubleshooting", description: "Common issues and solutions" },
    { title: "Best Practices", href: "#best-practices", description: "Tips for effective reputation management" }
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
              <Book className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Documentation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Everything you need to get started with Reputraq and make the most of our reputation monitoring platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Popular Guides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:scale-105"
                >
                  <h3 className="text-lg font-semibold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{link.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}>
                    Read Guide
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Documentation Sections
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {docSections.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
                      <section.icon className="w-6 h-6" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-500">{section.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}></div>
                        <a href={`#${topic.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">
                          {topic}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* API Documentation CTA */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white mb-16">
            <div className="flex items-center gap-4 mb-6">
              <Code className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <h2 className="text-3xl font-bold">API Documentation</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Integrate Reputraq into your applications with our comprehensive REST API. Complete with code examples, authentication guides, and interactive endpoints.
            </p>
            <a
              href="/api"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              style={{ 
                backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                color: brandConfig.colorPalette.colors.pureWhite.hex
              }}
            >
              View API Docs
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Need More Help?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/help"
                className="px-6 py-3 rounded-lg font-medium border-2 transition-all hover:scale-105"
                style={{ 
                  borderColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                  color: brandConfig.colorPalette.colors.vibrantSky.hex
                }}
              >
                Visit Help Center
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ 
                  backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                  color: brandConfig.colorPalette.colors.pureWhite.hex
                }}
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}

