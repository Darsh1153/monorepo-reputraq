// Browser Console Debug Script for Competitor Keywords Dropdown
// Copy and paste this into the browser console on the competitor page

const debugCompetitorDropdown = async () => {
  try {
    console.log('🔍 Debugging Competitor Keywords Dropdown...');
    
    // Check localStorage user data
    const userData = localStorage.getItem('user');
    console.log('👤 Raw user data from localStorage:', userData);
    
    if (!userData) {
      console.error('❌ No user data found in localStorage');
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    console.log('👤 Parsed user:', parsedUser);
    console.log('👤 User ID:', parsedUser.id);
    
    // Create auth token
    const token = btoa(JSON.stringify({ userId: parsedUser.id }));
    console.log('🔑 Auth token:', token);
    
    // Test API call
    console.log('📡 Making API request to /api/competitor-keywords...');
    const response = await fetch('/api/competitor-keywords', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    console.log('📊 API Response status:', response.status);
    console.log('📊 API Response ok:', response.ok);
    
    if (response.ok) {
      const keywordsData = await response.json();
      console.log('✅ Competitor keywords from API:', keywordsData);
      console.log('📊 Keywords count:', keywordsData.length);
      
      // Check if dropdown exists
      const dropdown = document.querySelector('select[class*="keywordSelect"]');
      console.log('🔍 Dropdown element:', dropdown);
      
      if (dropdown) {
        console.log('📋 Dropdown options count:', dropdown.options.length);
        console.log('📋 Dropdown options:');
        for (let i = 0; i < dropdown.options.length; i++) {
          console.log(`  Option ${i}: "${dropdown.options[i].text}" (value: "${dropdown.options[i].value}")`);
        }
        
        // Check if dropdown is visible
        const computedStyle = window.getComputedStyle(dropdown);
        console.log('👁️ Dropdown visibility:', {
          display: computedStyle.display,
          visibility: computedStyle.visibility,
          opacity: computedStyle.opacity,
          width: computedStyle.width,
          height: computedStyle.height
        });
        
        // Check if dropdown is disabled
        console.log('🔒 Dropdown disabled:', dropdown.disabled);
        
      } else {
        console.error('❌ Dropdown element not found');
        
        // Try to find any select element
        const allSelects = document.querySelectorAll('select');
        console.log('🔍 All select elements found:', allSelects.length);
        allSelects.forEach((select, index) => {
          console.log(`  Select ${index}:`, select.className, select.id);
        });
      }
      
      // Check React state
      console.log('⚛️ Looking for React state indicators...');
      const debugInfo = document.querySelector('[class*="debugInfo"]');
      if (debugInfo) {
        console.log('📊 Debug info found:', debugInfo.textContent);
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
debugCompetitorDropdown();
