import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Shield, Lock, CheckCircle, Award, Eye, Server } from "lucide-react";

export default function SecurityPage() {
  console.log("Security page loaded");
  
  const securityFeatures = [
    {
      icon: Lock,
      title: "Encryption",
      description: "End-to-end encryption for data in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      icon: Shield,
      title: "Access Controls",
      description: "Multi-factor authentication, role-based access control, and single sign-on (SSO) support."
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Secure cloud infrastructure with regular security audits and penetration testing."
    },
    {
      icon: Eye,
      title: "Monitoring & Detection",
      description: "24/7 security monitoring, intrusion detection, and automated threat response systems."
    },
    {
      icon: Award,
      title: "Compliance Certifications",
      description: "SOC 2 Type II, ISO 27001, GDPR, and CCPA compliant with regular third-party audits."
    },
    {
      icon: CheckCircle,
      title: "Data Backup & Recovery",
      description: "Automated daily backups with point-in-time recovery and disaster recovery procedures."
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", status: "Certified" },
    { name: "ISO 27001", status: "Certified" },
    { name: "GDPR", status: "Compliant" },
    { name: "CCPA", status: "Compliant" },
    { name: "HIPAA", status: "Compliant" }
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
              <Shield className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Security & Compliance
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your data security is our top priority. We employ industry-leading security measures to protect your information.
            </p>
          </div>

          {/* Security Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Security Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <feature.icon className="w-10 h-10 mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                  <h3 className="text-xl font-semibold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Certifications & Compliance
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-600" />
                  <h3 className="font-semibold mb-1" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                    {cert.name}
                  </h3>
                  <span className="text-sm text-green-600 font-medium">{cert.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Practices */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Security Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                  Data Protection
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Encryption at rest and in transit (AES-256, TLS 1.3)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Regular security audits and vulnerability assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Data retention policies and secure deletion procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Network segmentation and firewall protection</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                  Access Management
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Multi-factor authentication (MFA) required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Role-based access control (RBAC)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Single sign-on (SSO) support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Regular access reviews and audit logs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Incident Response */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Incident Response
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We maintain a comprehensive incident response plan to quickly identify, contain, and remediate security incidents. Our security team is available 24/7 to respond to threats and vulnerabilities.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span>24/7 security operations center (SOC)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Automated threat detection and response</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Regular security training for all employees</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Bug bounty program for responsible disclosure</span>
              </li>
            </ul>
          </div>

          {/* Security Contact */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            <h2 className="text-3xl font-bold mb-4">Report a Security Issue</h2>
            <p className="text-gray-300 mb-6 text-lg">
              If you discover a security vulnerability, please report it to our security team. We appreciate responsible disclosure.
            </p>
            <div className="bg-slate-700 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-lg font-semibold mb-2">security@reputraq.com</p>
              <p className="text-sm text-gray-300">
                Please include detailed information about the vulnerability and steps to reproduce it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}

