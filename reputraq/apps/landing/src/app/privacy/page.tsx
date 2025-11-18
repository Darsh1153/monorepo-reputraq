import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Shield, Calendar } from "lucide-react";

export default function PrivacyPage() {
  console.log("Privacy Policy page loaded");
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
              <Shield className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            </div>
            <h1 className="text-5xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Privacy Policy
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
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Reputraq ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our reputation monitoring platform and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold mb-3" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                2.1 Information You Provide
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Account registration information (name, email address, company name)</li>
                <li>Payment and billing information</li>
                <li>Communication preferences and support requests</li>
                <li>Content you submit through our platform</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                2.2 Automatically Collected Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We automatically collect certain information when you use our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Device information and IP addresses</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log files and error reports</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>With service providers who assist us in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                5. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                6. Your Rights and Choices
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Data portability rights</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                7. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                8. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                10. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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

