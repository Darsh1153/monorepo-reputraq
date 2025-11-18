import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Users, MessageSquare, Github, Twitter, Linkedin, Book, Award } from "lucide-react";

export default function CommunityPage() {
  console.log("Community page loaded");
  
  const communityLinks = [
    {
      platform: "GitHub",
      icon: Github,
      description: "Contribute to open-source projects and access code examples",
      link: "#github",
      members: "2.5K+"
    },
    {
      platform: "Discord",
      icon: MessageSquare,
      description: "Join our Discord server for real-time discussions and support",
      link: "#discord",
      members: "5K+"
    },
    {
      platform: "Twitter",
      icon: Twitter,
      description: "Follow us for updates, tips, and industry news",
      link: "#twitter",
      members: "15K+"
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      description: "Connect with other professionals and share insights",
      link: "#linkedin",
      members: "8K+"
    }
  ];

  const resources = [
    {
      title: "Community Forum",
      description: "Ask questions, share knowledge, and connect with other users",
      icon: MessageSquare
    },
    {
      title: "Developer Resources",
      description: "SDKs, code samples, and integration guides",
      icon: Book
    },
    {
      title: "Community Showcase",
      description: "See how others are using Reputraq to protect their reputation",
      icon: Award
    }
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
              <Users className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Connect with thousands of reputation management professionals, share insights, and learn from each other.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 rounded-xl border border-gray-200">
              <Users className="w-10 h-10 mx-auto mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <div className="text-3xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                30K+
              </div>
              <p className="text-gray-600">Community Members</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200">
              <MessageSquare className="w-10 h-10 mx-auto mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <div className="text-3xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                50K+
              </div>
              <p className="text-gray-600">Monthly Messages</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200">
              <Book className="w-10 h-10 mx-auto mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <div className="text-3xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                1K+
              </div>
              <p className="text-gray-600">Shared Resources</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200">
              <Award className="w-10 h-10 mx-auto mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
              <div className="text-3xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                200+
              </div>
              <p className="text-gray-600">Active Contributors</p>
            </div>
          </div>

          {/* Community Platforms */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Connect With Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {communityLinks.map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all hover:scale-105"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
                      <platform.icon className="w-6 h-6" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                        {platform.platform}
                      </h3>
                      <p className="text-sm text-gray-500">{platform.members} members</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{platform.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Community Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8">
                  <resource.icon className="w-10 h-10 mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                  <h3 className="text-xl font-semibold mb-3" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                    {resource.title}
                  </h3>
                  <p className="text-gray-600">{resource.description}</p>
                  <a
                    href="#resource"
                    className="inline-block mt-4 text-sm font-semibold"
                    style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}
                  >
                    Explore →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-6">Community Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Be Respectful</h3>
                <p className="text-gray-300 leading-relaxed">
                  Treat all community members with respect and kindness. We welcome diverse perspectives and encourage constructive discussions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Share Knowledge</h3>
                <p className="text-gray-300 leading-relaxed">
                  Help others by sharing your experiences, tips, and best practices. The community grows stronger when we learn together.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Stay On Topic</h3>
                <p className="text-gray-300 leading-relaxed">
                  Keep discussions relevant to reputation management, Reputraq features, and related topics to maintain quality conversations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Rules</h3>
                <p className="text-gray-300 leading-relaxed">
                  Adhere to our code of conduct and community rules. Violations may result in warnings or removal from the community.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Ready to Join?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Start connecting with the Reputraq community today.
            </p>
            <a
              href="#join"
              className="inline-block px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
              style={{ 
                backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                color: brandConfig.colorPalette.colors.pureWhite.hex
              }}
            >
              Join Community
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}

