import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Shield, CheckCircle, Calendar } from "lucide-react";

export default function GDPRPage() {
  console.log("GDPR page loaded");
  
  const rights = [
    {
      title: "Right of Access",
      description: "You have the right to obtain confirmation as to whether or not personal data concerning you is being processed, and access to that data."
    },
    {
      title: "Right to Rectification",
      description: "You have the right to have inaccurate personal data corrected and incomplete personal data completed."
    },
    {
      title: "Right to Erasure",
      description: "You have the right to request deletion of your personal data under certain circumstances."
    },
    {
      title: "Right to Restrict Processing",
      description: "You have the right to request restriction of processing of your personal data in certain situations."
    },
    {
      title: "Right to Data Portability",
      description: "You have the right to receive your personal data in a structured, commonly used format and transmit it to another controller."
    },
    {
      title: "Right to Object",
      description: "You have the right to object to processing of your personal data for direct marketing purposes or legitimate interests."
    },
    {
      title: "Right to Withdraw Consent",
      description: "Where processing is based on consent, you have the right to withdraw consent at any time."
    },
    {
      title: "Right to Lodge a Complaint",
      description: "You have the right to lodge a complaint with a supervisory authority if you believe your rights have been violated."
    }
  ];

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
              GDPR Compliance
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Last updated: January 15, 2025</span>
            </div>
          </div>

          {/* Compliance Statement */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-green-900">GDPR Compliant</h2>
            </div>
            <p className="text-green-800 text-lg leading-relaxed">
              Reputraq is fully compliant with the General Data Protection Regulation (GDPR). We are committed to protecting your privacy and ensuring your data rights are respected.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                What is GDPR?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect on May 25, 2018. It applies to all organizations that process personal data of individuals in the European Union (EU) and European Economic Area (EEA), regardless of where the organization is located.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Our Commitment to GDPR
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Reputraq is committed to GDPR compliance and protecting the privacy rights of all our users, including those in the EU and EEA. We have implemented comprehensive data protection measures including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Data minimization and purpose limitation</li>
                <li>Strong encryption and security measures</li>
                <li>Regular security assessments and audits</li>
                <li>Data processing agreements with all service providers</li>
                <li>Privacy by design and default principles</li>
                <li>Transparent privacy policies and notices</li>
                <li>Easy-to-use data subject rights request process</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Your Data Protection Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Under GDPR, you have several important rights regarding your personal data:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {rights.map((right, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                      {right.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                How to Exercise Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                To exercise any of your GDPR rights, you can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Submit a request through your account settings dashboard</li>
                <li>Email us at privacy@reputraq.com with "GDPR Request" in the subject line</li>
                <li>Contact our Data Protection Officer at dpo@reputraq.com</li>
                <li>Use our online data request form</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We will respond to your request within 30 days as required by GDPR. In some cases, we may need to verify your identity before processing your request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Data Processing and Legal Basis
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We process your personal data based on the following legal bases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Consent:</strong> When you have given clear consent for specific processing activities</li>
                <li><strong>Contract:</strong> When processing is necessary for the performance of a contract</li>
                <li><strong>Legal obligation:</strong> When we need to comply with legal requirements</li>
                <li><strong>Legitimate interests:</strong> When processing is necessary for our legitimate business interests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                When we transfer personal data outside the EU/EEA, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by the European Commission, and adequacy decisions where applicable. We only transfer data to countries that provide an adequate level of data protection or where we have implemented appropriate safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Data Breach Notification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In the event of a data breach that poses a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours and inform affected individuals without undue delay, as required by GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Data Protection Officer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance. You can contact our DPO at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> dpo@reputraq.com<br />
                  <strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105, United States
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our GDPR compliance or wish to exercise your data protection rights, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@reputraq.com<br />
                  <strong>Data Protection Officer:</strong> dpo@reputraq.com<br />
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

