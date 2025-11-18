import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { newsArticles } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';

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

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Debug Articles API request received');
    
    const userId = getUserIdFromRequest(request);
    console.log('👤 User ID from request:', userId);
    
    if (!userId) {
      console.log('❌ No user ID found in request');
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const database = await db;

    // Get ALL articles for the user
    const allArticles = await database
      .select()
      .from(newsArticles)
      .where(eq(newsArticles.userId, userId))
      .orderBy(desc(newsArticles.publishedAt))
      .limit(100);

    console.log('📊 Total articles found:', allArticles.length);

    // Group articles by keyword
    const articlesByKeyword = allArticles.reduce((acc, article) => {
      const keyword = article.keyword || 'unknown';
      if (!acc[keyword]) {
        acc[keyword] = [];
      }
      acc[keyword].push({
        id: article.id,
        title: article.title,
        keyword: article.keyword,
        sentimentScore: article.sentimentScore,
        sentimentLabel: article.sentimentLabel,
        publishedAt: article.publishedAt
      });
      return acc;
    }, {} as Record<string, any[]>);

    // Get unique keywords
    const uniqueKeywords = Object.keys(articlesByKeyword);

    console.log('📝 Unique keywords found:', uniqueKeywords);
    console.log('📊 Articles by keyword:', Object.keys(articlesByKeyword).map(keyword => ({
      keyword,
      count: articlesByKeyword[keyword].length
    })));

    return NextResponse.json({
      totalArticles: allArticles.length,
      uniqueKeywords,
      articlesByKeyword,
      sampleArticles: allArticles.slice(0, 5).map(article => ({
        id: article.id,
        title: article.title,
        keyword: article.keyword,
        sentimentScore: article.sentimentScore,
        sentimentLabel: article.sentimentLabel,
        publishedAt: article.publishedAt
      }))
    });

  } catch (error) {
    console.error('❌ Error in debug articles API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch debug articles', details: error.message },
      { status: 500 }
    );
  }
}
