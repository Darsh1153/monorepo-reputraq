"use client";

import Image from "next/image";
import { AnimatedCounter } from "./animated-counter";
import { brandConfig } from "@/lib/brand-config";
import { Waves } from "@/components/ui/waves-background";
import {
  Newspaper, 
  AlertTriangle, 
  Timer, 
  Megaphone,
  BookOpen,
  Share2,
  AlertOctagon,
  EyeOff,
  ShieldAlert,
  Clock3,
  SearchX,
  Globe2,
  Monitor,
  Wifi,
  Database,
  Layers,
  Sparkles
} from "lucide-react";

export function TheChallenge() {


  const conversationPoints = [
    {
      icon: Newspaper,
      title: "Breaking News Everywhere",
      text: "News outlets publish breaking headlines across 200+ countries",
      delay: 0,
      color: brandConfig.colorPalette.colors.vibrantSky.hex
    },
    {
      icon: BookOpen,
      title: "Expert Analysis & Reviews",
      text: "Industry blogs post detailed reviews and case studies",
      delay: 200,
      color: brandConfig.colorPalette.colors.oceanDepth.hex
    },
    {
      icon: Share2,
      title: "Social Media Amplification",
      text: "Social platforms amplify opinions globally in real-time",
      delay: 400,
      color: brandConfig.colorPalette.colors.charcoalCore.hex
    },
    {
      icon: Megaphone,
      title: "Competitive Campaigns",
      text: "Competitors launch strategic campaigns that shift market perception",
      delay: 600,
      color: brandConfig.colorPalette.colors.vibrantSky.hex
    }
  ];

  const riskPoints = [
    {
      icon: AlertOctagon,
      title: "Crisis Escalation",
      text: "Crises escalate before you even know about them",
      description: "Negative stories can go viral in minutes, reaching millions before you can respond",
      impact: "Average response time: 4-6 hours too late",
      delay: 0,
      color: brandConfig.colorPalette.colors.oceanDepth.hex
    },
    {
      icon: EyeOff,
      title: "Missed Opportunities",
      text: "Positive press goes unnoticed and unamplified",
      description: "Great coverage gets buried in the noise, missing chances to build reputation",
      impact: "70% of positive mentions go unshared",
      delay: 200,
      color: brandConfig.colorPalette.colors.charcoalCore.hex
    },
    {
      icon: ShieldAlert,
      title: "Competitive Disadvantage",
      text: "Competitors dominate the conversation unchecked",
      description: "Without monitoring, competitors can shape the narrative about your industry",
      impact: "Market share loss: 15-25% annually",
      delay: 400,
      color: brandConfig.colorPalette.colors.vibrantSky.hex
    },
    {
      icon: Timer,
      title: "Resource Waste",
      text: "Teams waste hours chasing incomplete results",
      description: "Manual monitoring leads to scattered data and missed critical insights",
      impact: "40+ hours weekly on manual tracking",
      delay: 600,
      color: brandConfig.colorPalette.colors.oceanDepth.hex
    }
  ];

  const failurePoints = [
    {
      icon: SearchX,
      title: "Fragmented Coverage",
      text: "News-only tools miss online conversations",
      description: "Traditional media monitoring ignores social media, forums, and blogs where real conversations happen",
      problem: "60% of brand mentions happen outside news",
      delay: 0,
      color: brandConfig.colorPalette.colors.vibrantSky.hex
    },
    {
      icon: Globe2,
      title: "Limited Scope",
      text: "Social-only tools ignore the global press",
      description: "Social media tools miss traditional media coverage that drives long-term reputation",
      problem: "Missing 40% of reputation-building content",
      delay: 200,
      color: brandConfig.colorPalette.colors.oceanDepth.hex
    },
    {
      icon: Clock3,
      title: "Delayed Alerts",
      text: "Alerts often come too late",
      description: "Most tools send notifications hours after stories break, missing critical response windows",
      problem: "Average alert delay: 2-4 hours",
      delay: 400,
      color: brandConfig.colorPalette.colors.charcoalCore.hex
    },
    {
      icon: Monitor,
      title: "Poor User Experience",
      text: "Reports are clunky and hard to use",
      description: "Complex dashboards and confusing interfaces make it hard to extract actionable insights",
      problem: "85% of users abandon tools within 30 days",
      delay: 600,
      color: brandConfig.colorPalette.colors.vibrantSky.hex
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
      `}</style>
      <section
        className="relative overflow-hidden py-28"
        style={{
          background: `linear-gradient(140deg, ${brandConfig.colorPalette.colors.pureWhite.hex} 0%, ${brandConfig.uiGuidelines.backgroundGradient.colors[1]} 65%, ${brandConfig.colorPalette.colors.vibrantSky.hex}0f 100%)`
        }}
      >
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/80 via-transparent to-blue-50/50" />
        <div className="absolute inset-0 -z-10">
          <Waves
            className="opacity-25"
            lineColor={`rgba(${brandConfig.colorPalette.colors.vibrantSky.rgb.join(",")}, 0.35)`}
            backgroundColor="transparent"
            waveSpeedX={0.02}
            waveSpeedY={0.015}
            waveAmpX={32}
            waveAmpY={18}
            friction={0.92}
            tension={0.015}
            maxCursorMove={110}
            xGap={14}
            yGap={34}
          />
        </div>
        <div
          className="absolute inset-0 -z-10 opacity-40 h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "7rem 6rem",
            maskImage: "radial-gradient(circle at 50% 20%, rgba(0,0,0,0.85) 0%, transparent 65%)"
          }}
        />

        <div className="container relative z-10 mx-auto px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/70 px-6 py-3 shadow-lg backdrop-blur-md">
                <span
                  className="text-sm font-semibold uppercase tracking-[0.25em]"
                  style={{ color: brandConfig.colorPalette.colors.oceanDepth.hex }}
                >
                  Media Monitoring Insights
                </span>
              </div>
              <h2
                className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
                style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
              >
                Media Monitoring That Turns Multi-Channel Signals into Credible Stories
              </h2>
              <p
                className="text-lg leading-relaxed md:text-xl"
                style={{ color: brandConfig.colorPalette.colors.oceanDepth.hex }}
              >
                Reputraq’s Media Monitoring unifies the world’s conversations—social posts, video engagement, and creator content—into one
                intelligence layer that fuels your communications team with ready-to-publish narratives and on-brand Media Monitoring summaries.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur-md">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
                  >
                    Real-Time Media Monitoring Coverage
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: brandConfig.colorPalette.colors.oceanDepth.hex }}>
                    AI-crafted Media Monitoring summaries transform raw signals into ready-to-share talking points.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur-md">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
                  >
                    Seamless Media Monitoring Publishing
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: brandConfig.colorPalette.colors.oceanDepth.hex }}>
                    Deliver blog-ready assets that keep your Media Monitoring voice consistent everywhere.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-6 -z-10 rounded-[40px]"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${brandConfig.colorPalette.colors.vibrantSky.hex}1f 0%, transparent 70%)`
                }}
              />
              <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 shadow-2xl backdrop-blur-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-white/40" />
                <Image
                  src="/social-media.png"
                  alt="UNIFIED SOCIAL INTELLIGENCE PLATFORM - Futuristic high-tech data processing environment in a dark room with glowing blue neon lines. Shows Instagram, YouTube, and TikTok data ingestion pillars, central transparent glowing sphere with 'SOCIAL DATA HARMONIZATION & ANALYTICS' icon, and blog publishing output screen. From Data to Actionables."
                  width={1024}
                  height={640}
                  priority
                  className="relative z-10 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="relative min-h-screen py-32 overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-blue-50/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 mb-8 shadow-lg">
            <Sparkles className="w-6 h-6" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
            <span 
              className="text-lg font-semibold"
              style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
            >
              The Challenge
            </span>
          </div>
          
          <h2 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
          >
            The <span style={{ color: brandConfig.colorPalette.primary.main }}>Challenge</span>
          </h2>
          
          <p 
            className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light"
            style={{ color: brandConfig.colorPalette.colors.oceanDepth.hex }}
          >
            Media Monitoring never sleeps. The conversation never stops. Every second:
          </p>
        </div>

        {/* Conversation Points Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
            >
              The Conversation Never Stops
            </h3>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Every second, millions of conversations shape your brand across the digital landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conversationPoints.map((point, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 hover:border-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100/50"
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
              >
                {/* Elegant Hover Background */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-700 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-white"
                />
                
                {/* Animated Border */}
                <div 
                  className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ borderColor: point.color + '40' }}
                />
                
                
                <div className="relative text-center">
                  <div 
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg relative overflow-hidden"
                    style={{ 
                      backgroundColor: point.color + '15',
                      boxShadow: `0 4px 20px ${point.color}20`
                    }}
                  >
                    {/* Animated Background Effect */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-500"
                      style={{ backgroundColor: point.color }}
                    />
                    <point.icon 
                      className="w-10 h-10 group-hover:rotate-12 transition-all duration-500 group-hover:scale-110 relative z-10" 
                      style={{ color: point.color }}
                    />
                  </div>
                  
                  <h4 
                    className="text-xl font-bold leading-tight mb-3"
                    style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
                  >
                    {point.title}
                  </h4>
                  
                  <p 
                    className="text-sm font-medium mb-3"
                    style={{ color: brandConfig.colorPalette.colors.oceanDepth.hex }}
                  >
                    {point.text}
                  </p>
                  
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-50/80 backdrop-blur-sm border border-red-200/50 mb-8 shadow-lg">
              <AlertOctagon className="w-6 h-6 text-red-500" />
              <span className="text-lg font-semibold text-red-700">
                Critical Risks
              </span>
            </div>
            
            <h3 
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
            >
              The risks of blind spots:
            </h3>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Without comprehensive monitoring, these critical risks can devastate your reputation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {riskPoints.map((risk, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/40 hover:border-white/60 transition-all duration-500 hover:scale-102 hover:shadow-xl hover:shadow-red-50/50"
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-all duration-700"
                    style={{ 
                      background: `linear-gradient(45deg, ${risk.color}20, transparent, ${risk.color}10)`
                    }}
                  />
                </div>
                
                <div className="relative">
                  <div className="flex items-start space-x-6 mb-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg relative overflow-hidden"
                    style={{ 
                      backgroundColor: risk.color + '15',
                      boxShadow: `0 4px 15px ${risk.color}25`
                    }}
                  >
                      {/* Glow Effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500"
                        style={{ 
                          backgroundColor: risk.color,
                          boxShadow: `0 0 20px ${risk.color}50`
                        }}
                      />
                    <risk.icon 
                        className="w-8 h-8 group-hover:scale-110 transition-all duration-500 relative z-10" 
                      style={{ color: risk.color }}
                    />
                  </div>
                  <div className="flex-1">
                      <h4 
                        className="text-xl font-bold leading-tight mb-2"
                        style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
                      >
                        {risk.title}
                      </h4>
                      <p 
                        className="text-sm font-medium mb-3"
                        style={{ color: brandConfig.colorPalette.colors.oceanDepth.hex }}
                      >
                        {risk.text}
                      </p>
                    </div>
                  </div>
                  
                  <p 
                    className="text-sm text-gray-600 mb-4 leading-relaxed"
                  >
                    {risk.description}
                  </p>
                  
                  {/* Impact Badge */}
                  <div 
                    className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold"
                    style={{ 
                      backgroundColor: risk.color + '15',
                      color: risk.color
                    }}
                  >
                    <AlertTriangle className="w-3 h-3 mr-2" />
                    {risk.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tool Failure Analysis */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-orange-50/80 backdrop-blur-sm border border-orange-200/50 mb-8 shadow-lg">
              <Database className="w-6 h-6 text-orange-500" />
              <span className="text-lg font-semibold text-orange-700">
                Tool Limitations
              </span>
            </div>
            
            <h3 
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
            >
              Why existing tools fail:
            </h3>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Current solutions are fragmented, slow, and miss the bigger picture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {failurePoints.map((failure, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/50 backdrop-blur-md border border-white/30 hover:border-white/50 transition-all duration-500 hover:scale-102 hover:shadow-xl hover:shadow-orange-50/50"
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-all duration-700"
                    style={{ 
                      background: `linear-gradient(135deg, ${failure.color}20, transparent, ${failure.color}10)`
                    }}
                  />
                </div>
                
                <div className="relative">
                  <div className="flex items-start space-x-6 mb-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg relative overflow-hidden"
                    style={{ 
                      backgroundColor: failure.color + '15',
                      boxShadow: `0 4px 15px ${failure.color}25`
                    }}
                  >
                      {/* Rotating Background Effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-500 group-hover:rotate-180"
                        style={{ backgroundColor: failure.color }}
                      />
                    <failure.icon 
                        className="w-8 h-8 group-hover:scale-110 transition-all duration-500 relative z-10" 
                      style={{ color: failure.color }}
                    />
                  </div>
                  <div className="flex-1">
                      <h4 
                        className="text-xl font-bold leading-tight mb-2"
                        style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
                      >
                        {failure.title}
                      </h4>
                      <p 
                        className="text-sm font-medium mb-3"
                        style={{ color: brandConfig.colorPalette.colors.oceanDepth.hex }}
                      >
                        {failure.text}
                      </p>
                    </div>
                  </div>
                  
                  <p 
                    className="text-sm text-gray-600 mb-4 leading-relaxed"
                  >
                    {failure.description}
                  </p>
                  
                  {/* Problem Badge */}
                  <div 
                    className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold"
                    style={{ 
                      backgroundColor: failure.color + '15',
                      color: failure.color
                    }}
                  >
                    <Layers className="w-3 h-3 mr-2" />
                    {failure.problem}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Impact Statement */}
        <div className="text-center">
          <div className="group relative max-w-6xl mx-auto p-12 rounded-4xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-lg border border-white/50 hover:border-white/80 transition-all duration-500 hover:scale-102 hover:shadow-2xl hover:shadow-blue-100/30">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 rounded-4xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000" />
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="relative">
                  <Wifi className="w-8 h-8" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                </div>
                <span 
                  className="text-lg font-semibold"
                  style={{ color: brandConfig.colorPalette.colors.oceanDepth.hex }}
                >
                  The Bottom Line
                </span>
              </div>
              
              <p 
                className="text-2xl md:text-3xl font-bold leading-relaxed mb-8"
                style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
              >
                Reputation is global, immediate, and fragile. Managing it requires speed, scale, and clarity.
              </p>
              
              {/* Key Statistics */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div 
                    className="text-4xl font-bold mb-2"
                    style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}
                  >
                    <AnimatedCounter
                      value={500}
                      duration={2000}
                      suffix="K+"
                    />
                  </div>
                  <p className="text-sm text-gray-600">News & blogs worldwide</p>
                </div>
                <div className="text-center">
                  <div 
                    className="text-4xl font-bold mb-2"
                    style={{ color: brandConfig.colorPalette.colors.oceanDepth.hex }}
                  >
                    <AnimatedCounter
                      value={200}
                      duration={2000}
                      suffix="+"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Countries covered</p>
                </div>
                <div className="text-center">
                  <div 
                    className="text-4xl font-bold mb-2"
                    style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}
                  >
                    <AnimatedCounter
                      value={5}
                      duration={2000}
                      suffix="min"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Average alert response time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}