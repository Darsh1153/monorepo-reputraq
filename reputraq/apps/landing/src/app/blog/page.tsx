import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";
import { brandConfig } from "@/lib/brand-config";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

export default function BlogPage() {
  console.log("Blog page loaded");
  
  const blogPosts = [
    {
      title: "The Future of Reputation Management: 5 Trends to Watch in 2025",
      excerpt: "Explore the emerging trends shaping the reputation management landscape, from AI-powered sentiment analysis to real-time crisis response.",
      author: "Sarah Chen",
      date: "January 20, 2025",
      category: "Industry Insights",
      readTime: "5 min read"
    },
    {
      title: "How to Build a Crisis Communication Plan for Your Brand",
      excerpt: "Learn the essential steps to create an effective crisis communication strategy that protects your reputation when it matters most.",
      author: "Michael Rodriguez",
      date: "January 15, 2025",
      category: "Best Practices",
      readTime: "7 min read"
    },
    {
      title: "Understanding Sentiment Analysis: A Complete Guide for Marketers",
      excerpt: "Dive deep into sentiment analysis technology and discover how it can transform your brand monitoring and customer engagement strategies.",
      author: "Emily Johnson",
      date: "January 10, 2025",
      category: "Technology",
      readTime: "6 min read"
    },
    {
      title: "Case Study: How a Fortune 500 Company Improved Reputation Scores by 40%",
      excerpt: "Discover the strategies and tools that helped a major enterprise turn around their reputation in just six months.",
      author: "David Kim",
      date: "January 5, 2025",
      category: "Case Studies",
      readTime: "8 min read"
    },
    {
      title: "Social Media Monitoring: Best Practices for 2025",
      excerpt: "Stay ahead of the curve with the latest social media monitoring techniques and tools for effective reputation management.",
      author: "Lisa Anderson",
      date: "December 28, 2024",
      category: "Best Practices",
      readTime: "5 min read"
    },
    {
      title: "The ROI of Reputation Management: Measuring Impact on Business Growth",
      excerpt: "Learn how to quantify the value of reputation management and demonstrate its impact on revenue, customer acquisition, and retention.",
      author: "James Wilson",
      date: "December 22, 2024",
      category: "Business Strategy",
      readTime: "6 min read"
    }
  ];

  const categories = ["All Posts", "Industry Insights", "Best Practices", "Technology", "Case Studies", "Business Strategy"];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Reputraq Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Insights, strategies, and best practices for reputation management, brand monitoring, and digital communications.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0 
                    ? 'text-white' 
                    : 'text-gray-600 border border-gray-200 hover:border-gray-300'
                }`}
                style={index === 0 ? { backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex } : {}}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Tag className="w-5 h-5" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }} />
                <span className="text-sm font-semibold" style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}>
                  FEATURED
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <a
                href="#read"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ 
                  backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex,
                  color: brandConfig.colorPalette.colors.pureWhite.hex
                }}
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <a
                      href="#read"
                      className="inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: brandConfig.colorPalette.colors.vibrantSky.hex }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: brandConfig.colorPalette.colors.charcoalCore.hex }}>
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Get the latest reputation management insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="px-6 py-3 rounded-lg font-medium text-white transition-all hover:scale-105"
                style={{ backgroundColor: brandConfig.colorPalette.colors.vibrantSky.hex }}
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

