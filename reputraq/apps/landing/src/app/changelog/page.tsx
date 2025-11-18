import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Calendar, Sparkles, Bug, Zap, Shield, Plus } from "lucide-react";

export default function ChangelogPage() {
  console.log("Changelog page loaded");
  
  const changelogEntries = [
    {
      version: "2.5.0",
      date: "January 20, 2025",
      type: "feature",
      title: "Enhanced Sentiment Analysis",
      description: "Improved AI models for more accurate sentiment detection across multiple languages and contexts.",
      items: [
        "Multi-language sentiment support expanded to 25 languages",
        "Context-aware sentiment analysis for industry-specific terminology",
        "Real-time sentiment trend visualization"
      ]
    },
    {
      version: "2.4.2",
      date: "January 15, 2025",
      type: "improvement",
      title: "Dashboard Performance Updates",
      description: "Optimized dashboard loading times and improved data visualization performance.",
      items: [
        "50% faster dashboard load times",
        "Improved chart rendering for large datasets",
        "Enhanced mobile responsiveness"
      ]
    },
    {
      version: "2.4.1",
      date: "January 10, 2025",
      type: "fix",
      title: "Bug Fixes and Stability",
      description: "Resolved several issues reported by users and improved overall platform stability.",
      items: [
        "Fixed alert notification delivery delays",
        "Resolved data sync issues with external integrations",
        "Improved error handling for API rate limits"
      ]
    },
    {
      version: "2.4.0",
      date: "January 5, 2025",
      type: "feature",
      title: "New Integration Marketplace",
      description: "Launch of integration marketplace with 20+ new third-party service connections.",
      items: [
        "Slack, Microsoft Teams, and Discord integrations",
        "Zapier and Make.com workflow automation",
        "Enhanced webhook customization options"
      ]
    },
    {
      version: "2.3.5",
      date: "December 28, 2024",
      type: "security",
      title: "Security Enhancements",
      description: "Important security updates and compliance improvements.",
      items: [
        "Enhanced API authentication mechanisms",
        "Improved data encryption at rest",
        "SOC 2 Type II compliance updates"
      ]
    },
    {
      version: "2.3.4",
      date: "December 20, 2024",
      type: "improvement",
      title: "Reporting Improvements",
      description: "New reporting features and export options for better data analysis.",
      items: [
        "Custom report builder with drag-and-drop interface",
        "PDF and Excel export enhancements",
        "Scheduled report delivery via email"
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "feature":
        return Plus;
      case "improvement":
        return Zap;
      case "fix":
        return Bug;
      case "security":
        return Shield;
      default:
        return Sparkles;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case "feature":
        return brandConfig.colorPalette.colors.vibrantSky.hex;
      case "improvement":
        return "#10B981";
      case "fix":
        return "#F59E0B";
      case "security":
        return "#EF4444";
      default:
        return brandConfig.colorPalette.colors.vibrantSky.hex;
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
              <Sparkles className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Changelog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay up to date with the latest features, improvements, and fixes to Reputraq.
            </p>
          </div>

          {/* Changelog Entries */}
          <div className="space-y-8">
            {changelogEntries.map((entry, index) => {
              const Icon = getIcon(entry.type);
              const color = getColor(entry.type);
              
              return (
                <div key={index} className="border-l-4 pl-6 pb-8" style={{ borderColor: color }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: color + '20' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: color }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: color }}>
                          {entry.version}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {entry.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                    {entry.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{entry.description}</p>
                  
                  <ul className="space-y-2">
                    {entry.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: color }}></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Subscribe Section */}
          <div className="mt-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Never Miss an Update
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our changelog and get notified about new features and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="px-6 py-3 rounded-lg font-medium text-white transition-all hover:scale-105"
                style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}

