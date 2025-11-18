import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Cookie, Calendar } from "lucide-react";

export default function CookiesPage() {
  console.log("Cookie Policy page loaded");
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
              <Cookie className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            </div>
            <h1 className="text-5xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Cookie Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Last updated: January 15, 2025</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                1. What Are Cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies allow websites to recognize your device and remember information about your visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                2. How We Use Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Reputraq uses cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Remember your preferences and settings</li>
                <li>Authenticate your identity and maintain your session</li>
                <li>Analyze how you use our service to improve functionality</li>
                <li>Provide personalized content and features</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                3. Types of Cookies We Use
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                3.1 Essential Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Session cookies:</strong> Maintain your login session</li>
                <li><strong>Security cookies:</strong> Protect against fraud and unauthorized access</li>
                <li><strong>Load balancing cookies:</strong> Distribute traffic across servers</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                3.2 Analytics Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Page views and navigation patterns</li>
                <li>Time spent on pages</li>
                <li>Error messages and performance metrics</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                3.3 Functional Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                These cookies enable enhanced functionality and personalization, such as remembering your preferences.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Language and region preferences</li>
                <li>Dashboard layout and settings</li>
                <li>Notification preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                3.4 Marketing Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Advertising campaign tracking</li>
                <li>Conversion measurement</li>
                <li>Retargeting and remarketing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                4. Third-Party Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may use third-party services that set cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Analytics providers:</strong> Google Analytics, Mixpanel</li>
                <li><strong>Advertising networks:</strong> For marketing and retargeting</li>
                <li><strong>Customer support:</strong> Intercom, Zendesk</li>
                <li><strong>Payment processors:</strong> Stripe, PayPal</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                These third parties have their own privacy policies and cookie practices. We encourage you to review their policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                5. Managing Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of our website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                You can manage cookies through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Browser settings (Chrome, Firefox, Safari, Edge)</li>
                <li>Our cookie preference center (accessible from the footer)</li>
                <li>Third-party opt-out tools (for advertising cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                6. Cookie Duration
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Cookies may be either "persistent" or "session" cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain on your device for a set period or until you delete them</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                7. Updates to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                8. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@reputraq.com<br />
                  <strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105, United States
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}

