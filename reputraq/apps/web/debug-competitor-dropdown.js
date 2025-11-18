// Debug script to test competitor keywords dropdown
// Run this in the browser console on the competitor page

const debugCompetitorKeywords = async () => {
  try {
    console.log('🔍 Debugging Competitor Keywords Dropdown...');
    
    // Check localStorage user data
    const userData = localStorage.getItem('user');
    console.log('👤 User data from localStorage:', userData);
    
    if (!userData) {
      console.error('❌ No user data found in localStorage');
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    console.log('👤 Parsed user:', parsedUser);
    
    // Create auth token
    const token = btoa(JSON.stringify({ userId: parsedUser.id }));
    console.log('🔑 Auth token:', token);
    
    // Test API call
    const response = await fetch('/api/competitor-keywords', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    console.log('📊 API Response status:', response.status);
    
    if (response.ok) {
      const keywordsData = await response.json();
      console.log('✅ Competitor keywords from API:', keywordsData);
      console.log('📊 Keywords count:', keywordsData.length);
      
      // Check if dropdown exists
      const dropdown = document.querySelector('select[class*="keywordSelect"]');
      console.log('🔍 Dropdown element:', dropdown);
      
      if (dropdown) {
        console.log('📋 Dropdown options:', dropdown.options);
        console.log('📋 Dropdown options length:', dropdown.options.length);
        
        // Check if options are populated
        for (let i = 0; i < dropdown.options.length; i++) {
          console.log(`Option ${i}:`, dropdown.options[i].text, dropdown.options[i].value);
        }
      } else {
        console.error('❌ Dropdown element not found');
      }
      
    } else {
      const errorData = await response.json();
      console.error('❌ API Error:', errorData);
    }
    
  } catch (error) {
    console.error('❌ Debug failed:', error);
  }
};

// Run the debug function
debugCompetitorKeywords();
