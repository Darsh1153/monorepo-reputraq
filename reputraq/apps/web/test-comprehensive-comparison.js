// Test script for comprehensive Competitor VS News Blog comparison
// This script tests the enhanced comparison functionality with real data

const testComprehensiveComparison = async () => {
  try {
    console.log('🧪 Testing Comprehensive Competitor VS News Blog Comparison...');
    
    // Mock user data (you'll need to replace with actual user data)
    const mockUserId = 1;
    const token = btoa(JSON.stringify({ userId: mockUserId }));
    
    const testData = {
      brandKeyword: 'Tesla',
      competitorKeyword: 'netflix'
    };
    
    console.log('📡 Making API request to /api/competitor-vs-news/compare...');
    console.log('📊 Test data:', testData);
    
    const response = await fetch('http://localhost:3004/api/competitor-vs-news/compare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(testData),
    });
    
    console.log('📊 Response status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Comprehensive comparison successful!');
      
      // Display comprehensive results
      console.log('📈 Brand Analysis:', {
        keyword: data.brandKeyword,
        totalArticles: data.brandSentiment.totalArticles,
        averageScore: data.brandSentiment.averageScore.toFixed(3),
        positive: data.brandSentiment.positive,
        negative: data.brandSentiment.negative,
        neutral: data.brandSentiment.neutral,
        positiveRatio: data.comparison.brandPositiveRatio.toFixed(1) + '%',
        negativeRatio: data.comparison.brandNegativeRatio.toFixed(1) + '%'
      });
      
      console.log('📈 Competitor Analysis:', {
        keyword: data.competitorKeyword,
        totalArticles: data.competitorSentiment.totalArticles,
        averageScore: data.competitorSentiment.averageScore.toFixed(3),
        positive: data.competitorSentiment.positive,
        negative: data.competitorSentiment.negative,
        neutral: data.competitorSentiment.neutral,
        positiveRatio: data.comparison.competitorPositiveRatio.toFixed(1) + '%',
        negativeRatio: data.comparison.competitorNegativeRatio.toFixed(1) + '%'
      });
      
      console.log('🏆 Comparison Results:', {
        overallWinner: data.comparison.overallWinner,
        confidence: data.comparison.confidence,
        sentimentDifference: data.comparison.sentimentDifference.toFixed(3),
        totalArticlesAnalyzed: data.comparison.totalArticlesAnalyzed
      });
      
      console.log('📊 Data Source:', data.dataSource);
      console.log('📅 Analysis Date:', data.analysisDate);
      
      // Show sentiment distribution
      console.log('📊 Brand Sentiment Distribution:', data.brandSentiment.sentimentDistribution);
      console.log('📊 Competitor Sentiment Distribution:', data.competitorSentiment.sentimentDistribution);
      
      // Show sample articles
      console.log('📰 Brand Articles Sample:', data.brandArticles.slice(0, 2).map(article => ({
        title: article.title,
        source: article.sourceName,
        sentiment: article.sentimentLabel,
        score: article.sentimentScore,
        date: article.publishedAt
      })));
      
      console.log('📰 Competitor Articles Sample:', data.competitorArticles.slice(0, 2).map(article => ({
        title: article.title,
        source: article.sourceName,
        sentiment: article.sentimentLabel,
        score: article.sentimentScore,
        date: article.publishedAt
      })));
      
    } else {
      const errorData = await response.json();
      console.error('❌ API Error:', errorData);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
};

// Run the test
testComprehensiveComparison();
