// Test script to add a competitor keyword for testing
// Run this in the browser console on the competitor page

const addTestCompetitorKeyword = async () => {
  try {
    console.log('🧪 Adding test competitor keyword...');
    
    // Get user data
    const userData = localStorage.getItem('user');
    if (!userData) {
      console.error('❌ No user data found');
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    const token = btoa(JSON.stringify({ userId: parsedUser.id }));
    
    // Add a test competitor keyword
    const testKeyword = 'Tesla';
    
    const response = await fetch('/api/competitor-keywords', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ keyword: testKeyword }),
    });
    
    console.log('📊 Add keyword response status:', response.status);
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ Competitor keyword added successfully:', result);
      
      // Refresh the page to see the dropdown
      console.log('🔄 Refreshing page to see dropdown...');
      window.location.reload();
    } else {
      const errorData = await response.json();
      console.error('❌ Failed to add competitor keyword:', errorData);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
};

// Run the test
addTestCompetitorKeyword();
