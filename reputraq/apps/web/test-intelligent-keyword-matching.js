// Test script for intelligent keyword matching in Competitor VS News comparison
// This script tests the enhanced keyword matching functionality

const testIntelligentKeywordMatching = async () => {
  try {
    console.log('🧪 Testing Intelligent Keyword Matching for Competitor VS News...');
    
    // Mock user data (you'll need to replace with actual user data)
    const mockUserId = 1;
    const token = btoa(JSON.stringify({ userId: mockUserId }));
    
    // Test with iPhone variations that should match iPhone articles
    const testCases = [
      {
        brandKeyword: 'iphone 16',
        competitorKeyword: 'iphone 17',
        description: 'Testing iPhone 16 vs iPhone 17 comparison'
      },
      {
        brandKeyword: 'iPhone',
        competitorKeyword: 'netflix',
        description: 'Testing iPhone vs Netflix comparison'
      },
      {
        brandKeyword: 'iphone',
        competitorKeyword: 'android',
        description: 'Testing iPhone vs Android comparison'
      }
    ];
    
    for (const testCase of testCases) {
      console.log(`\n📊 Test Case: ${testCase.description}`);
      console.log('📡 Making API request to /api/competitor-vs-news/compare...');
      console.log('📊 Test data:', testCase);
      
      const response = await fetch('http://localhost:3004/api/competitor-vs-news/compare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(testCase),
      });
      
      console.log('📊 Response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('✅ Comparison successful!');
        
        console.log('📈 Brand Analysis:', {
          keyword: data.brandKeyword,
          totalArticles: data.brandSentiment.totalArticles,
          averageScore: data.brandSentiment.averageScore.toFixed(3),
          positive: data.brandSentiment.positive,
          negative: data.brandSentiment.negative,
          neutral: data.brandSentiment.neutral
        });
        
        console.log('📈 Competitor Analysis:', {
          keyword: data.competitorKeyword,
          totalArticles: data.competitorSentiment.totalArticles,
          averageScore: data.competitorSentiment.averageScore.toFixed(3),
          positive: data.competitorSentiment.positive,
          negative: data.competitorSentiment.negative,
          neutral: data.competitorSentiment.neutral
        });
        
        console.log('🏆 Comparison Results:', {
          overallWinner: data.comparison.overallWinner,
          confidence: data.comparison.confidence,
          sentimentDifference: data.comparison.sentimentDifference.toFixed(3),
          totalArticlesAnalyzed: data.comparison.totalArticlesAnalyzed
        });
        
        // Show sample articles to verify they contain the keywords
        if (data.brandArticles.length > 0) {
          console.log('📰 Brand Articles Sample:', data.brandArticles.slice(0, 2).map(article => ({
            title: article.title,
            keyword: article.keyword,
            sentiment: article.sentimentLabel,
            score: article.sentimentScore
          })));
        }
        
        if (data.competitorArticles.length > 0) {
          console.log('📰 Competitor Articles Sample:', data.competitorArticles.slice(0, 2).map(article => ({
            title: article.title,
            keyword: article.keyword,
            sentiment: article.sentimentLabel,
            score: article.sentimentScore
          })));
        }
        
      } else {
        const errorData = await response.json();
        console.error('❌ API Error:', errorData);
      }
      
      // Wait a bit between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
};

// Run the test
testIntelligentKeywordMatching();
