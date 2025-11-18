// API Key Fallback System for Ensemble Data API
// Handles automatic fallback when API limits are reached

const defaultToken = process.env.ENSEMBLE_TOKEN || 'QWZp10LXkDheSUQo';

interface ApiKey {
  email: string;
  token: string;
  isActive: boolean;
  lastUsed?: Date;
  errorCount: number;
}

interface ApiResponse {
  success: boolean;
  data?: any;
  error?: string;
  status?: number;
  usedApiKey?: string;
}

class ApiKeyManager {
  private apiKeys: ApiKey[] = [
    {
      email: 'darsh_collection@ensembledata.com',
      token: 'QWZp10LXkDheSUQo', // Hardcoded new API key
      isActive: true,
      errorCount: 0
    }
  ];

  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    console.log('🔧 ApiKeyManager constructor called with:', {
      baseUrl,
      apiKeysCount: this.apiKeys.length,
      firstKeyEmail: this.apiKeys[0]?.email,
      firstKeyToken: this.apiKeys[0]?.token ? this.apiKeys[0].token.substring(0, 4) + '...' + this.apiKeys[0].token.substring(this.apiKeys[0].token.length - 4) : 'MISSING',
      firstKeyActive: this.apiKeys[0]?.isActive
    });
  }

  /**
   * Get the next available API key
   */
  private getNextApiKey(): ApiKey | null {
    // Sort by error count (ascending) and last used (ascending)
    const sortedKeys = this.apiKeys
      .filter(key => key.isActive)
      .sort((a, b) => {
        if (a.errorCount !== b.errorCount) {
          return a.errorCount - b.errorCount;
        }
        if (!a.lastUsed && !b.lastUsed) return 0;
        if (!a.lastUsed) return -1;
        if (!b.lastUsed) return 1;
        return a.lastUsed.getTime() - b.lastUsed.getTime();
      });

    return sortedKeys[0] || null;
  }

  /**
   * Mark an API key as having an error
   */
  private markApiKeyError(token: string, error: string): void {
    const apiKey = this.apiKeys.find(key => key.token === token);
    if (apiKey) {
      apiKey.errorCount++;
      
      // If it's a rate limit error (495) or too many errors, temporarily disable
      if (error.includes('495') || error.includes('limit') || apiKey.errorCount >= 3) {
        apiKey.isActive = false;
        console.log(`🚫 API Key ${apiKey.email} temporarily disabled due to: ${error}`);
        
        // Re-enable after 1 hour
        setTimeout(() => {
          apiKey.isActive = true;
          apiKey.errorCount = 0;
          console.log(`✅ API Key ${apiKey.email} re-enabled`);
        }, 60 * 60 * 1000); // 1 hour
      }
    }
  }

  /**
   * Mark an API key as successfully used
   */
  private markApiKeySuccess(token: string): void {
    const apiKey = this.apiKeys.find(key => key.token === token);
    if (apiKey) {
      apiKey.lastUsed = new Date();
      // Reset error count on successful use
      if (apiKey.errorCount > 0) {
        apiKey.errorCount = Math.max(0, apiKey.errorCount - 1);
      }
    }
  }

  /**
   * Make API request with automatic fallback
   */
  async makeRequest(endpoint: string, options: RequestInit = {}): Promise<ApiResponse> {
    const maxRetries = this.apiKeys.length;
    let lastError: string = '';

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const apiKey = this.getNextApiKey();
      
      if (!apiKey) {
        console.error('❌ No active API keys found! Available keys:', this.apiKeys.map(k => ({ email: k.email, isActive: k.isActive, errorCount: k.errorCount })));
        return {
          success: false,
          error: 'All API keys are currently unavailable',
          status: 503,
          usedApiKey: 'None'
        };
      }

      try {
        // Ensure endpoint has proper query parameter separator
        const separator = endpoint.includes('?') ? '&' : '?';
        const url = `${this.baseUrl}${endpoint}${separator}token=${apiKey.token}`;
        console.log(`🔄 Attempt ${attempt + 1}: Using API key ${apiKey.email}`);
        console.log(`🔑 Token (first 4, last 4): ${apiKey.token.substring(0, 4)}...${apiKey.token.substring(apiKey.token.length - 4)}`);
        console.log(`📡 Full URL (token hidden): ${url.replace(apiKey.token, '***TOKEN***')}`);
        console.log(`🌐 Base URL: ${this.baseUrl}`);
        console.log(`📍 Endpoint: ${endpoint}`);
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            ...options.headers
          },
          ...options
        });

        if (response.ok) {
          const data = await response.json();
          this.markApiKeySuccess(apiKey.token);
          console.log(`✅ Success with API key ${apiKey.email}`);
          console.log(`📊 Response data keys:`, Object.keys(data || {}));
          
          return {
            success: true,
            data,
            usedApiKey: apiKey.email
          };
        } else {
          const errorText = await response.text();
          lastError = errorText;
          
          console.log(`❌ API key ${apiKey.email} failed with status ${response.status}`);
          console.log(`❌ Error response:`, errorText.substring(0, 500)); // First 500 chars
          console.log(`❌ Response headers:`, Object.fromEntries(response.headers.entries()));
          this.markApiKeyError(apiKey.token, errorText);
          
          // If it's a rate limit error, try next key immediately
          if (response.status === 495 || errorText.includes('limit')) {
            continue;
          }
          
          // For other errors, return immediately
          return {
            success: false,
            error: errorText,
            status: response.status,
            usedApiKey: apiKey.email
          };
        }
      } catch (error) {
        lastError = error instanceof Error ? error.message : 'Unknown error';
        console.log(`❌ API key ${apiKey.email} failed with error: ${lastError}`);
        if (error instanceof Error) {
          console.log(`❌ Error stack:`, error.stack);
        }
        this.markApiKeyError(apiKey.token, lastError);
      }
    }

    console.error('❌ All API keys exhausted. Final error:', lastError);
    return {
      success: false,
      error: `All API keys failed. Last error: ${lastError}`,
      status: 503,
      usedApiKey: 'All keys failed'
    };
  }

  /**
   * Get status of all API keys
   */
  getApiKeyStatus(): { email: string; isActive: boolean; errorCount: number; lastUsed?: Date }[] {
    return this.apiKeys.map(key => ({
      email: key.email,
      isActive: key.isActive,
      errorCount: key.errorCount,
      lastUsed: key.lastUsed
    }));
  }

  /**
   * Reset all API keys (useful for testing)
   */
  resetApiKeys(): void {
    this.apiKeys.forEach(key => {
      key.isActive = true;
      key.errorCount = 0;
      key.lastUsed = undefined;
    });
    console.log('🔄 All API keys have been reset');
  }
}

// Create singleton instance
const baseUrl = process.env.NEXT_PUBLIC_ENSEMBLE_BASE_URL || 'https://ensembledata.com/apis';
console.log('🔧 API Key Manager initialized with:', {
  baseUrl,
  defaultToken: defaultToken.substring(0, 4) + '...' + defaultToken.substring(defaultToken.length - 4),
  hasEnvToken: !!process.env.ENSEMBLE_TOKEN,
  hasEnvBaseUrl: !!process.env.NEXT_PUBLIC_ENSEMBLE_BASE_URL
});
export const apiKeyManager = new ApiKeyManager(baseUrl);

// Export the class for testing
export { ApiKeyManager };
