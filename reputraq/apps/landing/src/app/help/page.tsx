import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { HelpCircle, Search, MessageSquare, Book, Video, ArrowRight } from "lucide-react";

export default function HelpPage() {
  console.log("Help Center page loaded");
  
  const categories = [
    {
      title: "Getting Started",
      icon: Book,
      articles: [
        "Creating Your First Dashboard",
        "Setting Up Brand Monitoring",
        "Configuring Alert Rules",
        "Understanding Sentiment Scores"
      ]
    },
    {
      title: "Account & Billing",
      icon: HelpCircle,
      articles: [
        "Managing Your Subscription",
        "Upgrading Your Plan",
        "Payment Methods",
        "Billing Questions"
      ]
    },
    {
      title: "Features & Tools",
      icon: Video,
      articles: [
        "Using the Dashboard",
        "Setting Up Integrations",
        "Exporting Reports",
        "API Access & Keys"
      ]
    },
    {
      title: "Troubleshooting",
      icon: MessageSquare,
      articles: [
        "Common Issues",
        "Data Not Updating",
        "Alert Notifications",
        "Performance Issues"
      ]
    }
  ];

  const popularArticles = [
    "How do I set up my first monitoring campaign?",
    "What is sentiment analysis and how does it work?",
    "How to configure email and Slack notifications",
    "Understanding reputation scores and metrics",
    "How to export data and generate reports",
    "API authentication and rate limits"
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
              <HelpCircle className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Help Center
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Find answers to common questions and learn how to get the most out of Reputraq.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search for help articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Popular Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <a
                  key={index}
                  href="#article"
                  className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all hover:scale-105 flex items-center justify-between"
                >
                  <span className="text-gray-700">{article}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Browse by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
                    <category.icon className="w-6 h-6" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a
                          href="#article"
                          className="text-sm text-gray-600 hover:underline"
                          style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}
                        >
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 text-center">
              <MessageSquare className="w-10 h-10 mx-auto mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Live Chat
              </h3>
              <p className="text-gray-600 mb-4">
                Chat with our support team in real-time for immediate assistance.
              </p>
              <a
                href="#chat"
                className="inline-block px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ 
                  backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                  color: brandConfig.colorPalette.colors.pureWhite.hex
                }}
              >
                Start Chat
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 text-center">
              <Book className="w-10 h-10 mx-auto mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Documentation
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides and API documentation for developers.
              </p>
              <a
                href="/docs"
                className="inline-block px-6 py-3 rounded-lg font-medium border-2 transition-all hover:scale-105"
                style={{ 
                  borderColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                  color: brandConfig.colorPalette.colors.vibrantSky.hex
                }}
              >
                View Docs
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 text-center">
              <MessageSquare className="w-10 h-10 mx-auto mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Contact Us
              </h3>
              <p className="text-gray-600 mb-4">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 rounded-lg font-medium border-2 transition-all hover:scale-105"
                style={{ 
                  borderColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                  color: brandConfig.colorPalette.colors.vibrantSky.hex
                }}
              >
                Contact Support
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Our support team is available 24/7 for enterprise customers. Contact us for personalized assistance.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
              style={{ 
                backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                color: brandConfig.colorPalette.colors.pureWhite.hex
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}

