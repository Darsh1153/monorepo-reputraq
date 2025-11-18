import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function AboutPage() {
  console.log("About page loaded");
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              About Reputraq
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to help businesses protect and enhance their reputation in an increasingly connected digital world.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
                  <Target className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                </div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                  Our Mission
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  In today's digital landscape, reputation is everything. A single negative review, viral social media post, or news article can significantly impact your business. We believe every company deserves the tools to monitor, understand, and protect their reputation.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Reputraq empowers businesses with real-time insights, AI-powered sentiment analysis, and actionable intelligence to stay ahead of reputation risks and opportunities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                  Our Values
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}></div>
                    <div>
                      <strong className="text-gray-900">Transparency</strong>
                      <p className="text-gray-600">We believe in clear, honest communication with our customers and stakeholders.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}></div>
                    <div>
                      <strong className="text-gray-900">Innovation</strong>
                      <p className="text-gray-600">We continuously push the boundaries of what's possible in reputation monitoring.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}></div>
                    <div>
                      <strong className="text-gray-900">Customer Success</strong>
                      <p className="text-gray-600">Your success is our success. We're committed to helping you achieve your goals.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl border border-gray-200">
              <Users className="w-10 h-10 mx-auto mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <div className="text-4xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                10,000+
              </div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200">
              <TrendingUp className="w-10 h-10 mx-auto mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <div className="text-4xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                50M+
              </div>
              <p className="text-gray-600">Mentions Monitored</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200">
              <Award className="w-10 h-10 mx-auto mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <div className="text-4xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                500+
              </div>
              <p className="text-gray-600">Enterprise Clients</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200">
              <Target className="w-10 h-10 mx-auto mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <div className="text-4xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                99.9%
              </div>
              <p className="text-gray-600">Uptime SLA</p>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                Reputraq was founded in 2020 by a team of data scientists and reputation management experts who recognized the growing need for comprehensive, real-time reputation monitoring solutions.
              </p>
              <p>
                Starting with a vision to democratize reputation intelligence, we've built a platform that combines cutting-edge AI technology with intuitive design, making it accessible to businesses of all sizes.
              </p>
              <p>
                Today, we serve thousands of companies worldwide, from startups to Fortune 500 enterprises, helping them protect their most valuable asset—their reputation.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Join Our Team
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We're always looking for talented individuals who share our passion for innovation and customer success.
            </p>
            <a 
              href="/careers"
              className="inline-block px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
              style={{ 
                backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                color: brandConfig.colorPalette.colors.pureWhite.hex
              }}
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}

