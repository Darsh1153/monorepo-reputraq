import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";

export default function ContactPage() {
  console.log("Contact page loaded");
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-lg font-medium text-white transition-all hover:scale-105 flex items-center justify-center gap-2"
                  style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
                    <Mail className="w-6 h-6" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                      Email
                    </h3>
                    <a href="mailto:hello@reputraq.com" className="text-gray-600 hover:underline">
                      hello@reputraq.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
                    <Phone className="w-6 h-6" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                      Phone
                    </h3>
                    <a href="tel:+15551234567" className="text-gray-600 hover:underline">
                      +1 (555) 123-4567
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
                    <MapPin className="w-6 h-6" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                      Office
                    </h3>
                    <p className="text-gray-600">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                  <h3 className="font-semibold" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                    Support Hours
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                  <li>Saturday: 10:00 AM - 2:00 PM EST</li>
                  <li>Sunday: Closed</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Enterprise customers have 24/7 support access.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Other Ways to Connect</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <MessageSquare className="w-8 h-8 mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-300 mb-4">
                  Chat with our support team in real-time for immediate assistance.
                </p>
                <a href="#chat" className="text-sm font-semibold" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}>
                  Start Chat →
                </a>
              </div>
              <div>
                <Mail className="w-8 h-8 mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                <h3 className="text-xl font-semibold mb-2">Sales Team</h3>
                <p className="text-gray-300 mb-4">
                  Interested in enterprise solutions? Our sales team is ready to help.
                </p>
                <a href="mailto:sales@reputraq.com" className="text-sm font-semibold" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}>
                  Contact Sales →
                </a>
              </div>
              <div>
                <MessageSquare className="w-8 h-8 mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                <h3 className="text-xl font-semibold mb-2">Help Center</h3>
                <p className="text-gray-300 mb-4">
                  Browse our knowledge base for answers to common questions.
                </p>
                <a href="/help" className="text-sm font-semibold" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}>
                  Visit Help Center →
                </a>
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

