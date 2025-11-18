// Test script for Competitor VS News Blog comparison API
// This script tests the new comparison functionality

const testComparisonAPI = async () => {
  try {
    console.log('🧪 Testing Competitor VS News Blog Comparison API...');
    
    // Mock user data (you'll need to replace with actual user data)
    const mockUserId = 1;
    const token = btoa(JSON.stringify({ userId: mockUserId }));
    
    const testData = {
      brandKeyword: 'Tesla',
      competitorKeyword: 'BMW'
    };
    
    console.log('📡 Making API request to /api/competitor-vs-news/compare...');
    console.log('📊 Test data:', testData);
    
    const response = await fetch('http://localhost:3000/api/competitor-vs-news/compare', {
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
      console.log('✅ Comparison successful!');
      console.log('📈 Results:', {
        brandKeyword: data.brandKeyword,
        competitorKeyword: data.competitorKeyword,
        brandSentiment: data.brandSentiment,
        competitorSentiment: data.competitorSentiment,
        overallWinner: data.comparison.overallWinner,
        sentimentDifference: data.comparison.sentimentDifference
      });
    } else {
      const errorData = await response.json();
      console.error('❌ API Error:', errorData);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
};

// Run the test
testComparisonAPI();
