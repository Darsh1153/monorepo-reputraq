import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { CheckCircle, AlertCircle, XCircle, Clock, Activity } from "lucide-react";

export default function StatusPage() {
  console.log("Status page loaded");
  
  const services = [
    {
      name: "API",
      status: "operational",
      uptime: "99.99%",
      responseTime: "120ms"
    },
    {
      name: "Dashboard",
      status: "operational",
      uptime: "99.98%",
      responseTime: "85ms"
    },
    {
      name: "Data Processing",
      status: "operational",
      uptime: "99.97%",
      responseTime: "250ms"
    },
    {
      name: "Alert System",
      status: "operational",
      uptime: "99.95%",
      responseTime: "45ms"
    },
    {
      name: "Webhooks",
      status: "operational",
      uptime: "99.99%",
      responseTime: "180ms"
    }
  ];

  const recentIncidents = [
    {
      date: "January 18, 2025",
      title: "Scheduled Maintenance - API",
      status: "resolved",
      description: "Completed scheduled maintenance window for API infrastructure improvements."
    },
    {
      date: "January 10, 2025",
      title: "Increased Latency - Dashboard",
      status: "resolved",
      description: "Brief period of increased latency resolved. All systems operational."
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
              <Activity className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              System Status
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real-time status and uptime information for all Reputraq services.
            </p>
          </div>

          {/* Overall Status */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-green-900">All Systems Operational</h2>
            </div>
            <p className="text-green-700 text-lg">
              All services are running normally. No incidents reported.
            </p>
          </div>

          {/* Service Status */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Service Status
            </h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-semibold" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                        {service.name}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {service.status}
                      </span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Uptime (30 days):</span>
                      <span className="ml-2 font-semibold text-gray-900">{service.uptime}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Avg Response Time:</span>
                      <span className="ml-2 font-semibold text-gray-900">{service.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Recent Incidents
            </h2>
            <div className="space-y-4">
              {recentIncidents.map((incident, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-500">{incident.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                        {incident.title}
                      </h3>
                      <p className="text-gray-600">{incident.description}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {incident.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Uptime Stats */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Uptime Statistics
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                  99.99%
                </div>
                <p className="text-gray-600">Last 30 Days</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                  99.98%
                </div>
                <p className="text-gray-600">Last 90 Days</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                  99.97%
                </div>
                <p className="text-gray-600">Last 6 Months</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                  99.96%
                </div>
                <p className="text-gray-600">Last 12 Months</p>
              </div>
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Subscribe to status updates and get notified about incidents and maintenance windows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ 
                  backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                  color: brandConfig.colorPalette.colors.pureWhite.hex
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}

