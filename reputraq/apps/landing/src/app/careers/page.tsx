import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Briefcase, MapPin, Clock, Users, Heart, Zap } from "lucide-react";

export default function CareersPage() {
  console.log("Careers page loaded");
  
  const openPositions = [
    {
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      description: "Build scalable features for our reputation monitoring platform using modern web technologies."
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Remote / New York, NY",
      type: "Full-time",
      description: "Drive product positioning and go-to-market strategies for our enterprise solutions."
    },
    {
      title: "Data Scientist",
      department: "Data & AI",
      location: "Remote / Austin, TX",
      type: "Full-time",
      description: "Develop and improve our sentiment analysis and reputation scoring algorithms."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help enterprise clients maximize value from Reputraq's reputation monitoring platform."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Seattle, WA",
      type: "Full-time",
      description: "Maintain and scale our infrastructure to ensure 99.9% uptime for global customers."
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote / Los Angeles, CA",
      type: "Full-time",
      description: "Design intuitive interfaces that make complex reputation data accessible and actionable."
    }
  ];

  const benefits = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage" },
    { icon: Zap, title: "Flexible Work", description: "Remote-first culture with flexible hours" },
    { icon: Briefcase, title: "Professional Growth", description: "Learning budget and career development programs" },
    { icon: Users, title: "Team Culture", description: "Collaborative environment with regular team events" }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Join the Reputraq Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Help us build the future of reputation management. We're looking for passionate individuals who want to make an impact.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Why Work at Reputraq
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <benefit.icon className="w-8 h-8 mb-4" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Open Positions
            </h2>
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                        {position.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href="#apply"
                      className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 whitespace-nowrap"
                      style={{ 
                        backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                        color: brandConfig.colorPalette.colors.pureWhite.hex
                      }}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Culture Section */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Our Culture
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What We Value</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}></div>
                    <span>Ownership and accountability in everything we do</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}></div>
                    <span>Continuous learning and growth mindset</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}></div>
                    <span>Transparent communication and feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}></div>
                    <span>Work-life balance and mental health</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Diversity & Inclusion</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We're committed to building a diverse and inclusive workplace where everyone can thrive. We believe that different perspectives lead to better solutions and a stronger team.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Reputraq is an equal opportunity employer. We welcome applicants from all backgrounds and do not discriminate on the basis of race, religion, gender, sexual orientation, age, or disability.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See a Role That Fits?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              We're always interested in connecting with talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
              style={{ 
                backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                color: brandConfig.colorPalette.colors.pureWhite.hex
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}

