import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { FileText, Calendar } from "lucide-react";

export default function TermsPage() {
  console.log("Terms of Service page loaded");
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex + '20' }}>
              <FileText className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            </div>
            <h1 className="text-5xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Terms of Service
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
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using Reputraq's services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the service. These Terms apply to all visitors, users, and others who access or use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Reputraq provides a reputation monitoring and management platform that enables businesses to track, analyze, and manage their online reputation across various channels including news, social media, and online conversations. Our services include real-time monitoring, sentiment analysis, alert notifications, and reporting tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                3. User Accounts
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                To access certain features of our service, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                4. Acceptable Use
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You agree not to use the service to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any malicious code, viruses, or harmful data</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Scrape, crawl, or harvest data from the service without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                5. Subscription and Payment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Our service is offered on a subscription basis. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Pay all fees associated with your subscription plan</li>
                <li>Automatic renewal of your subscription unless cancelled</li>
                <li>Price changes with 30 days' notice</li>
                <li>No refunds for partial subscription periods unless required by law</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We reserve the right to change our pricing with notice. Continued use of the service after price changes constitutes acceptance of the new pricing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                6. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The service and its original content, features, and functionality are owned by Reputraq and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not modify, reproduce, distribute, create derivative works, publicly display, or otherwise exploit any part of the service without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                7. Data and Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of the service is also governed by our Privacy Policy. By using the service, you consent to the collection and use of information in accordance with our Privacy Policy. You retain ownership of any data you submit to the service, and we will not use your data except as necessary to provide the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                8. Service Availability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to maintain high availability of our service but do not guarantee uninterrupted or error-free operation. We may perform scheduled maintenance and updates, which may temporarily interrupt service. We are not liable for any damages resulting from service interruptions or failures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                9. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, Reputraq shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                10. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your account and access to the service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the service will cease immediately. You may terminate your account at any time by contacting us or using the account deletion feature.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                11. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the service after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                12. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or the service shall be resolved in the courts of San Francisco, California.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                13. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@reputraq.com<br />
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

