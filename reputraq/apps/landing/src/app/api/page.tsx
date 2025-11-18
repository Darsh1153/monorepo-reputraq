import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Code, Key, Book, Zap, Shield, Globe } from "lucide-react";

export default function APIPage() {
  console.log("API page loaded");
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
              <Code className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Reputraq API
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate real-time reputation monitoring and sentiment analysis into your applications with our comprehensive REST API.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <Key className="w-8 h-8 mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <h3 className="text-xl font-semibold mb-2">RESTful API</h3>
              <p className="text-gray-600">Standard REST endpoints with JSON responses for easy integration.</p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <Zap className="w-8 h-8 mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <h3 className="text-xl font-semibold mb-2">Real-time Webhooks</h3>
              <p className="text-gray-600">Receive instant notifications when reputation events occur.</p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <Shield className="w-8 h-8 mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">OAuth 2.0 authentication with rate limiting and IP whitelisting.</p>
            </div>
          </div>

          {/* Quick Start */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Quick Start
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <pre className="text-green-400 text-sm overflow-x-auto">
{`// Get your API key from dashboard
const API_KEY = 'your-api-key-here';
const BASE_URL = 'https://api.reputraq.com/v1';

// Fetch reputation insights
const response = await fetch(\`\${BASE_URL}/insights\`, {
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`}
              </pre>
            </div>
            <p className="text-gray-600">
              Get started in minutes with our comprehensive API documentation and code examples.
            </p>
          </div>

          {/* API Endpoints */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Core Endpoints
            </h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded text-sm font-semibold text-white" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}>
                    GET
                  </span>
                  <code className="text-lg font-mono">/v1/insights</code>
                </div>
                <p className="text-gray-600 mb-2">Retrieve reputation insights and sentiment analysis for your brand.</p>
                <p className="text-sm text-gray-500">Returns: JSON object with sentiment scores, mentions, and trends.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded text-sm font-semibold text-white" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}>
                    POST
                  </span>
                  <code className="text-lg font-mono">/v1/alerts</code>
                </div>
                <p className="text-gray-600 mb-2">Create custom alert rules for reputation monitoring.</p>
                <p className="text-sm text-gray-500">Accepts: Alert configuration with keywords, thresholds, and notification settings.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded text-sm font-semibold text-white" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}>
                    GET
                  </span>
                  <code className="text-lg font-mono">/v1/mentions</code>
                </div>
                <p className="text-gray-600 mb-2">Search and filter brand mentions across all monitored channels.</p>
                <p className="text-sm text-gray-500">Supports: Date ranges, sentiment filters, source types, and pagination.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded text-sm font-semibold text-white" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}>
                    GET
                  </span>
                  <code className="text-lg font-mono">/v1/competitors</code>
                </div>
                <p className="text-gray-600 mb-2">Compare your brand reputation against competitors.</p>
                <p className="text-sm text-gray-500">Returns: Comparative analysis with sentiment trends and market share.</p>
              </div>
            </div>
          </div>

          {/* Documentation Links */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <Book className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <h2 className="text-3xl font-bold">Full Documentation</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Explore our complete API reference with detailed examples, authentication guides, and best practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#docs" 
                className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ 
                  backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                  color: brandConfig.colorPalette.colors.pureWhite.hex
                }}
              >
                View Documentation
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg font-medium border-2 transition-all hover:scale-105"
                style={{ 
                  borderColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                  color: brandConfig.colorPalette.colors.pureWhite.hex
                }}
              >
                Contact Sales
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

