// Test script for comprehensive brand keyword matching
// This script tests that brand keywords now work the same way as competitor keywords

const testBrandKeywordMatching = async () => {
  try {
    console.log('🧪 Testing Brand Keyword Matching (Same as Competitor)...');
    
    // Mock user data (you'll need to replace with actual user data)
    const mockUserId = 1;
    const token = btoa(JSON.stringify({ userId: mockUserId }));
    
    // First, let's see what keywords are available
    console.log('📊 Step 1: Checking available keywords...');
    const keywordsResponse = await fetch('http://localhost:3004/api/available-keywords', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (keywordsResponse.ok) {
      const keywordsData = await keywordsResponse.json();
      console.log('✅ Available keywords received:');
      console.log('📊 Total articles:', keywordsData.totalArticles);
      console.log('📝 Unique keywords:', keywordsData.uniqueKeywords);
      console.log('📊 Keywords with counts:', keywordsData.keywordCounts);
    } else {
      console.error('❌ Available keywords API failed:', await keywordsResponse.text());
    }
    
    console.log('\n📊 Step 2: Testing brand keyword matching...');
    
    // Test with different brand keywords that should find articles
    const testCases = [
      {
        brandKeyword: 'iphone 17',
        competitorKeyword: 'netflix',
        description: 'Testing iPhone 17 (brand) vs Netflix (competitor)'
      },
      {
        brandKeyword: 'samsung',
        competitorKeyword: 'iphone 17',
        description: 'Testing Samsung (brand) vs iPhone 17 (competitor)'
      },
      {
        brandKeyword: 'tesla',
        competitorKeyword: 'samsung',
        description: 'Testing Tesla (brand) vs Samsung (competitor)'
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
        console.log('✅ Brand keyword matching successful!');
        
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
testBrandKeywordMatching();
