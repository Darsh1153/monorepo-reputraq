import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { newsArticles, keywords, competitorKeywords } from '@/lib/db/schema';
import { eq, and, desc, gte, or, ilike } from 'drizzle-orm';

function getUserIdFromRequest(request: Request): number | null {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }

    const token = authHeader.substring(7);
    const decoded = JSON.parse(atob(token));
    return decoded.userId;
  } catch (error) {
    return null;
  }
}

// Function to create intelligent keyword matching conditions
function createKeywordMatchConditions(keyword: string) {
  // Normalize the keyword for better matching
  const normalizedKeyword = keyword.toLowerCase().trim();
  
  console.log('🔍 Creating keyword match conditions for:', keyword);
  
  // Create OR conditions with priority order
  return or(
    // 1. Exact keyword match (highest priority)
    eq(newsArticles.keyword, keyword),
    
    // 2. Case-insensitive exact keyword match
    eq(newsArticles.keyword, normalizedKeyword),
    
    // 3. Keyword field contains the search term (for broader matches)
    ilike(newsArticles.keyword, `%${normalizedKeyword}%`),
    
    // 4. Only check title/description if keyword is substantial (3+ characters)
    // and use word boundary matching to avoid false positives
    ...(normalizedKeyword.length >= 3 ? [
      // Title contains keyword with word boundaries
      ilike(newsArticles.title, `%${normalizedKeyword}%`),
      // Description contains keyword with word boundaries  
      ilike(newsArticles.description, `%${normalizedKeyword}%`)
    ] : [])
  );
}

interface SentimentAnalysis {
  positive: number;
  negative: number;
  neutral: number;
  averageScore: number;
  totalArticles: number;
  sentimentDistribution: {
    veryPositive: number;    // > 50
    positive: number;        // 10 to 50
    slightlyPositive: number; // 0 to 10
    neutral: number;         // -10 to 10
    slightlyNegative: number; // -10 to 0
    negative: number;        // -50 to -10
    veryNegative: number;    // < -50
  };
  topPositiveArticles: any[];
  topNegativeArticles: any[];
  recentArticles: any[];
}

function calculateSentimentAnalysis(articles: any[], keyword: string): SentimentAnalysis {
  if (articles.length === 0) {
    return { 
      positive: 0, 
      negative: 0, 
      neutral: 0, 
      averageScore: 0,
      totalArticles: 0,
      sentimentDistribution: {
        veryPositive: 0,
        positive: 0,
        slightlyPositive: 0,
        neutral: 0,
        slightlyNegative: 0,
        negative: 0,
        veryNegative: 0
      },
      topPositiveArticles: [],
      topNegativeArticles: [],
      recentArticles: []
    };
  }

  let positive = 0;
  let negative = 0;
  let neutral = 0;
  let totalScore = 0;
  
  const sentimentDistribution = {
    veryPositive: 0,    // > 50
    positive: 0,        // 10 to 50
    slightlyPositive: 0, // 0 to 10
    neutral: 0,         // -10 to 10
    slightlyNegative: 0, // -10 to 0
    negative: 0,        // -50 to -10
    veryNegative: 0     // < -50
  };

  const articlesWithScores = articles.map(article => ({
    ...article,
    sentimentScore: article.sentimentScore || 0,
    sentimentLabel: article.sentimentLabel || 'neutral'
  }));

  articlesWithScores.forEach(article => {
    const score = article.sentimentScore;
    totalScore += score;

    // Categorize sentiment
    if (score > 50) {
      sentimentDistribution.veryPositive++;
      positive++;
    } else if (score > 10) {
      sentimentDistribution.positive++;
      positive++;
    } else if (score > 0) {
      sentimentDistribution.slightlyPositive++;
      neutral++;
    } else if (score >= -10) {
      sentimentDistribution.neutral++;
      neutral++;
    } else if (score > -50) {
      sentimentDistribution.negative++;
      negative++;
    } else {
      sentimentDistribution.veryNegative++;
      negative++;
    }
  });

  // Sort articles by sentiment score
  const sortedBySentiment = [...articlesWithScores].sort((a, b) => b.sentimentScore - a.sentimentScore);
  const sortedByDate = [...articlesWithScores].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return {
    positive,
    negative,
    neutral,
    averageScore: totalScore / articles.length,
    totalArticles: articles.length,
    sentimentDistribution,
    topPositiveArticles: sortedBySentiment.slice(0, 5),
    topNegativeArticles: sortedBySentiment.slice(-5).reverse(),
    recentArticles: sortedByDate.slice(0, 10)
  };
}

export async function POST(request: NextRequest) {
  try {
    console.log('🔄 Competitor VS News comparison request received');
    
    const userId = getUserIdFromRequest(request);
    console.log('👤 User ID from request:', userId);
    
    if (!userId) {
      console.log('❌ No user ID found in request');
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { brandKeyword, competitorKeyword } = body;

    if (!brandKeyword || !competitorKeyword) {
      return NextResponse.json(
        { error: 'Both brand and competitor keywords are required' },
        { status: 400 }
      );
    }

    console.log('🎯 Comparing:', { brandKeyword, competitorKeyword });

    const database = await db;

    // Get date range for recent articles (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Fetch brand articles with intelligent keyword matching
    console.log('📰 Fetching brand articles for:', brandKeyword);
    const brandKeywordConditions = createKeywordMatchConditions(brandKeyword);
    const brandArticles = await database
      .select()
      .from(newsArticles)
      .where(
        and(
          eq(newsArticles.userId, userId),
          brandKeywordConditions,
          gte(newsArticles.publishedAt, thirtyDaysAgo)
        )
      )
      .orderBy(desc(newsArticles.publishedAt))
      .limit(200); // Increased limit for better analysis

    console.log('📊 Found brand articles:', brandArticles.length);
    console.log('📰 Brand articles sample:', brandArticles.slice(0, 3).map(a => ({
      title: a.title,
      keyword: a.keyword,
      sentimentScore: a.sentimentScore
    })));

    // Always use comprehensive search for brand articles to match all available articles
    let finalBrandArticles = brandArticles;
    
    // Get ALL articles for the user (no date restriction for comprehensive search)
    const allUserArticles = await database
      .select()
      .from(newsArticles)
      .where(eq(newsArticles.userId, userId))
      .orderBy(desc(newsArticles.publishedAt))
      .limit(500); // Increased limit for comprehensive search
    
    console.log('📊 Total user articles available:', allUserArticles.length);
    
    // Filter articles that contain the brand keyword in title, description, or keyword field
    // Use more precise matching to avoid false positives
    const comprehensiveBrandArticles = allUserArticles.filter(article => {
      const keywordLower = brandKeyword.toLowerCase().trim();
      const titleLower = article.title?.toLowerCase() || '';
      const descLower = article.description?.toLowerCase() || '';
      const articleKeywordLower = article.keyword?.toLowerCase() || '';
      
      // Exact keyword match in the keyword field (highest priority)
      if (articleKeywordLower === keywordLower) {
        return true;
      }
      
      // Check if the article's keyword field contains the brand keyword
      if (articleKeywordLower.includes(keywordLower)) {
        return true;
      }
      
      // Check if the brand keyword contains the article's keyword (for broader matches)
      if (keywordLower.includes(articleKeywordLower) && articleKeywordLower.length > 2) {
        return true;
      }
      
      // Only check title and description if the keyword is substantial (3+ characters)
      // and use word boundary matching to avoid false positives
      if (keywordLower.length >= 3) {
        const wordBoundaryRegex = new RegExp(`\\b${keywordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        
        if (wordBoundaryRegex.test(titleLower) || wordBoundaryRegex.test(descLower)) {
          return true;
        }
      }
      
      return false;
    });
    
    // Use the larger set of articles (either intelligent matching or comprehensive search)
    if (comprehensiveBrandArticles.length > brandArticles.length) {
      finalBrandArticles = comprehensiveBrandArticles;
      console.log('📊 Using comprehensive search for brand articles:', finalBrandArticles.length);
    } else {
      console.log('📊 Using intelligent matching for brand articles:', finalBrandArticles.length);
    }
    
    console.log('📰 Brand articles sample:', finalBrandArticles.slice(0, 3).map(a => ({
      title: a.title,
      keyword: a.keyword,
      sentimentScore: a.sentimentScore,
      publishedAt: a.publishedAt
    })));
    
    // Debug: Show why articles were matched
    if (finalBrandArticles.length > 0) {
      console.log('🔍 Brand article matching debug:');
      finalBrandArticles.slice(0, 3).forEach((article, index) => {
        console.log(`Article ${index + 1}:`, {
          title: article.title,
          keyword: article.keyword,
          matchesKeyword: article.keyword?.toLowerCase() === brandKeyword.toLowerCase(),
          keywordContains: article.keyword?.toLowerCase().includes(brandKeyword.toLowerCase()),
          titleContains: article.title?.toLowerCase().includes(brandKeyword.toLowerCase())
        });
      });
    }

    // Fetch competitor articles with intelligent keyword matching
    console.log('📰 Fetching competitor articles for:', competitorKeyword);
    const competitorKeywordConditions = createKeywordMatchConditions(competitorKeyword);
    const competitorArticles = await database
      .select()
      .from(newsArticles)
      .where(
        and(
          eq(newsArticles.userId, userId),
          competitorKeywordConditions,
          gte(newsArticles.publishedAt, thirtyDaysAgo)
        )
      )
      .orderBy(desc(newsArticles.publishedAt))
      .limit(200); // Increased limit for better analysis

    console.log('📊 Found competitor articles:', competitorArticles.length);
    console.log('📰 Competitor articles sample:', competitorArticles.slice(0, 3).map(a => ({
      title: a.title,
      keyword: a.keyword,
      sentimentScore: a.sentimentScore
    })));

    // Always use comprehensive search for competitor articles to match all available articles
    let finalCompetitorArticles = competitorArticles;
    
    // Filter articles that contain the competitor keyword in title, description, or keyword field
    // Use more precise matching to avoid false positives
    const comprehensiveCompetitorArticles = allUserArticles.filter(article => {
      const keywordLower = competitorKeyword.toLowerCase().trim();
      const titleLower = article.title?.toLowerCase() || '';
      const descLower = article.description?.toLowerCase() || '';
      const articleKeywordLower = article.keyword?.toLowerCase() || '';
      
      // Exact keyword match in the keyword field (highest priority)
      if (articleKeywordLower === keywordLower) {
        return true;
      }
      
      // Check if the article's keyword field contains the competitor keyword
      if (articleKeywordLower.includes(keywordLower)) {
        return true;
      }
      
      // Check if the competitor keyword contains the article's keyword (for broader matches)
      if (keywordLower.includes(articleKeywordLower) && articleKeywordLower.length > 2) {
        return true;
      }
      
      // Only check title and description if the keyword is substantial (3+ characters)
      // and use word boundary matching to avoid false positives
      if (keywordLower.length >= 3) {
        const wordBoundaryRegex = new RegExp(`\\b${keywordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        
        if (wordBoundaryRegex.test(titleLower) || wordBoundaryRegex.test(descLower)) {
          return true;
        }
      }
      
      return false;
    });
    
    // Use the larger set of articles (either intelligent matching or comprehensive search)
    if (comprehensiveCompetitorArticles.length > competitorArticles.length) {
      finalCompetitorArticles = comprehensiveCompetitorArticles;
      console.log('📊 Using comprehensive search for competitor articles:', finalCompetitorArticles.length);
    } else {
      console.log('📊 Using intelligent matching for competitor articles:', finalCompetitorArticles.length);
    }
    
    console.log('📰 Competitor articles sample:', finalCompetitorArticles.slice(0, 3).map(a => ({
      title: a.title,
      keyword: a.keyword,
      sentimentScore: a.sentimentScore
    })));

    // Calculate comprehensive sentiment analysis for both
    const brandSentiment = calculateSentimentAnalysis(finalBrandArticles, brandKeyword);
    const competitorSentiment = calculateSentimentAnalysis(finalCompetitorArticles, competitorKeyword);

    console.log('📈 Brand sentiment analysis:', {
      totalArticles: brandSentiment.totalArticles,
      averageScore: brandSentiment.averageScore,
      positive: brandSentiment.positive,
      negative: brandSentiment.negative,
      neutral: brandSentiment.neutral
    });
    
    console.log('📈 Competitor sentiment analysis:', {
      totalArticles: competitorSentiment.totalArticles,
      averageScore: competitorSentiment.averageScore,
      positive: competitorSentiment.positive,
      negative: competitorSentiment.negative,
      neutral: competitorSentiment.neutral
    });

    // Determine comprehensive comparison results
    const sentimentDifference = brandSentiment.averageScore - competitorSentiment.averageScore;
    const brandAdvantage = sentimentDifference > 0;
    const competitorAdvantage = sentimentDifference < 0;
    
    // More sophisticated winner determination
    let overallWinner: string;
    let confidence: string;
    
    if (Math.abs(sentimentDifference) < 0.5) {
      overallWinner = 'Tie';
      confidence = 'Low';
    } else if (Math.abs(sentimentDifference) < 2) {
      overallWinner = brandAdvantage ? brandKeyword : competitorKeyword;
      confidence = 'Medium';
    } else {
      overallWinner = brandAdvantage ? brandKeyword : competitorKeyword;
      confidence = 'High';
    }

    // Calculate additional metrics
    const brandPositiveRatio = brandSentiment.totalArticles > 0 ? 
      (brandSentiment.positive / brandSentiment.totalArticles) * 100 : 0;
    const competitorPositiveRatio = competitorSentiment.totalArticles > 0 ? 
      (competitorSentiment.positive / competitorSentiment.totalArticles) * 100 : 0;

    const brandNegativeRatio = brandSentiment.totalArticles > 0 ? 
      (brandSentiment.negative / brandSentiment.totalArticles) * 100 : 0;
    const competitorNegativeRatio = competitorSentiment.totalArticles > 0 ? 
      (competitorSentiment.negative / competitorSentiment.totalArticles) * 100 : 0;

    const comparisonResult = {
      brandKeyword,
      competitorKeyword,
      brandSentiment,
      competitorSentiment,
      comparison: {
        sentimentDifference,
        brandAdvantage,
        competitorAdvantage,
        overallWinner,
        confidence,
        brandPositiveRatio,
        competitorPositiveRatio,
        brandNegativeRatio,
        competitorNegativeRatio,
        totalArticlesAnalyzed: brandSentiment.totalArticles + competitorSentiment.totalArticles
      },
      brandArticles: brandSentiment.recentArticles, // Real recent articles
      competitorArticles: competitorSentiment.recentArticles, // Real recent articles
      analysisDate: new Date().toISOString(),
      dataSource: 'Real API Data from News Articles Database'
    };

    console.log('✅ Comprehensive comparison completed:', {
      sentimentDifference: sentimentDifference.toFixed(3),
      overallWinner,
      confidence,
      brandArticlesCount: brandSentiment.totalArticles,
      competitorArticlesCount: competitorSentiment.totalArticles,
      totalArticlesAnalyzed: brandSentiment.totalArticles + competitorSentiment.totalArticles
    });

    return NextResponse.json(comparisonResult);

  } catch (error) {
    console.error('❌ Error performing comparison:', error);
    return NextResponse.json(
      { error: 'Failed to perform comparison', details: error.message },
      { status: 500 }
    );
  }
}
