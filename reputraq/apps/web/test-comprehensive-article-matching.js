// Test script for comprehensive article matching
// This script tests the enhanced article matching functionality

const testComprehensiveArticleMatching = async () => {
  try {
    console.log('🧪 Testing Comprehensive Article Matching...');
    
    // Mock user data (you'll need to replace with actual user data)
    const mockUserId = 1;
    const token = btoa(JSON.stringify({ userId: mockUserId }));
    
    // First, let's see what articles are available
    console.log('📊 Step 1: Checking available articles...');
    const debugResponse = await fetch('http://localhost:3004/api/debug-articles', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (debugResponse.ok) {
      const debugData = await debugResponse.json();
      console.log('✅ Debug data received:');
      console.log('📊 Total articles:', debugData.totalArticles);
      console.log('📝 Unique keywords:', debugData.uniqueKeywords);
      console.log('📊 Articles by keyword:', debugData.articlesByKeyword);
      console.log('📰 Sample articles:', debugData.sampleArticles);
    } else {
      console.error('❌ Debug API failed:', await debugResponse.text());
    }
    
    console.log('\n📊 Step 2: Testing comprehensive comparison...');
    
    // Test with iPhone variations
    const testCases = [
      {
        brandKeyword: 'iphone 16',
        competitorKeyword: 'iphone 17',
        description: 'Testing iPhone 16 vs iPhone 17 comprehensive matching'
      },
      {
        brandKeyword: 'iPhone',
        competitorKeyword: 'netflix',
        description: 'Testing iPhone vs Netflix comprehensive matching'
      },
      {
        brandKeyword: 'iphone',
        competitorKeyword: 'android',
        description: 'Testing iPhone vs Android comprehensive matching'
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
        console.log('✅ Comprehensive comparison successful!');
        
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
          console.log('📰 Brand Articles Sample:', data.brandArticles.slice(0, 3).map(article => ({
            title: article.title,
            keyword: article.keyword,
            sentiment: article.sentimentLabel,
            score: article.sentimentScore
          })));
        } else {
          console.log('⚠️ No brand articles found');
        }
        
        if (data.competitorArticles.length > 0) {
          console.log('📰 Competitor Articles Sample:', data.competitorArticles.slice(0, 3).map(article => ({
            title: article.title,
            keyword: article.keyword,
            sentiment: article.sentimentLabel,
            score: article.sentimentScore
          })));
        } else {
          console.log('⚠️ No competitor articles found');
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
testComprehensiveArticleMatching();
