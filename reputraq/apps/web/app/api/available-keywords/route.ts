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
    console.log('🔍 Available Keywords API request received');
    
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
      .limit(1000);

    console.log('📊 Total articles found:', allArticles.length);

    // Get unique keywords from articles
    const uniqueKeywords = [...new Set(allArticles.map(article => article.keyword).filter(Boolean))];
    
    // Count articles per keyword
    const keywordCounts = uniqueKeywords.map(keyword => {
      const articles = allArticles.filter(article => article.keyword === keyword);
      return {
        keyword,
        count: articles.length,
        sampleTitle: articles[0]?.title || 'No title'
      };
    }).sort((a, b) => b.count - a.count); // Sort by count descending

    console.log('📝 Unique keywords found:', uniqueKeywords.length);
    console.log('📊 Keywords with counts:', keywordCounts);

    return NextResponse.json({
      totalArticles: allArticles.length,
      uniqueKeywords,
      keywordCounts,
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
    console.error('❌ Error in available keywords API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch available keywords', details: error.message },
      { status: 500 }
    );
  }
}
