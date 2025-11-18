/**
 * Reach Calculator Utility
 * 
 * Calculates estimated article reach based on publication monthly reach
 * with bounce rate and drop rate considerations.
 */

export interface ReachCalculationResult {
  monthlyReach: number;
  percentageMultiplier: number;
  baseEstimatedReach: number;
  bounceRate: number;
  dropRate: number;
  finalEstimatedReach: number;
  reachRange: string;
}

/**
 * Reach percentage multipliers based on monthly reach ranges
 */
const REACH_MULTIPLIERS = [
  { min: 25000000, max: Infinity, percentage: 0.01 },      // More than 25mn: 1%
  { min: 15000000, max: 25000000, percentage: 0.015 },    // Between 15mn and 25mn: 1.5%
  { min: 5000000, max: 15000000, percentage: 0.02 },      // Between 5mn and 15mn: 2%
  { min: 1000000, max: 5000000, percentage: 0.025 },       // Between 1mn and 5mn: 2.5%
  { min: 500000, max: 1000000, percentage: 0.03 },        // Between 500k to 1mn: 3%
  { min: 250000, max: 500000, percentage: 0.05 },         // Between 250k to 500k: 5%
  { min: 10000, max: 250000, percentage: 0.1 },          // Between 10k to 250k: 10%
];

/**
 * Get percentage multiplier based on monthly reach
 */
function getPercentageMultiplier(monthlyReach: number): number {
  for (const range of REACH_MULTIPLIERS) {
    if (monthlyReach >= range.min && monthlyReach < range.max) {
      return range.percentage;
    }
  }
  // Default to lowest percentage if below 10k
  return 0.1;
}

/**
 * Generate a deterministic hash from a string
 * This ensures consistent values for the same input
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Get reach range label
 */
function getReachRangeLabel(monthlyReach: number): string {
  for (const range of REACH_MULTIPLIERS) {
    if (monthlyReach >= range.min && monthlyReach < range.max) {
      if (range.max === Infinity) {
        return 'More than 25mn';
      }
      return `${formatNumber(range.min)} - ${formatNumber(range.max)}`;
    }
  }
  return 'Below 10k';
}

/**
 * Calculate estimated reach for an article
 * 
 * @param monthlyReach - Monthly website visits of the publication
 * @param bounceRate - Bounce rate (default: random between 50-60%)
 * @param dropRate - Drop rate (default: random between 35-38%)
 * @returns ReachCalculationResult with detailed breakdown
 */
export function calculateArticleReach(
  monthlyReach: number,
  bounceRate?: number,
  dropRate?: number
): ReachCalculationResult {
  console.log('Calculating reach for monthly reach:', monthlyReach);
  
  // Use provided rates or generate random within specified ranges
  const finalBounceRate = bounceRate ?? (0.5 + Math.random() * 0.1); // 50-60%
  const finalDropRate = dropRate ?? (0.35 + Math.random() * 0.03); // 35-38%
  
  // Get percentage multiplier based on monthly reach
  const percentageMultiplier = getPercentageMultiplier(monthlyReach);
  const reachRange = getReachRangeLabel(monthlyReach);
  
  // Calculate base estimated reach: monthlyReach * percentage
  const baseEstimatedReach = monthlyReach * percentageMultiplier;
  
  // Apply bounce rate: visitors leaving from home page
  const afterBounceRate = baseEstimatedReach * (1 - finalBounceRate);
  
  // Apply drop rate: visitors not reaching article due to distraction
  const finalEstimatedReach = afterBounceRate * (1 - finalDropRate);
  
  console.log('Reach calculation:', {
    monthlyReach,
    percentageMultiplier,
    baseEstimatedReach,
    bounceRate: finalBounceRate,
    dropRate: finalDropRate,
    finalEstimatedReach
  });
  
  return {
    monthlyReach,
    percentageMultiplier,
    baseEstimatedReach,
    bounceRate: finalBounceRate,
    dropRate: finalDropRate,
    finalEstimatedReach: Math.round(finalEstimatedReach),
    reachRange,
  };
}

/**
 * Estimate monthly reach based on publication name/domain
 * This is a dynamic algorithm that estimates reach based on various factors
 * 
 * @param sourceName - Publication/source name
 * @param url - Article URL (optional, for domain extraction)
 * @param keyword - Article keyword (for dynamic variation)
 * @param engagement - Article engagement metrics (optional)
 * @returns Estimated monthly reach
 */
export function estimatePublicationMonthlyReach(
  sourceName: string,
  url?: string,
  keyword?: string,
  engagement?: { views?: number; shares?: number; comments?: number; likes?: number }
): number {
  console.log('Estimating monthly reach for:', { sourceName, url, keyword });
  
  // Base estimation factors
  let estimatedReach = 100000; // Default: 100k
  
  // Factor 1: Source name analysis (common major publications)
  const sourceLower = sourceName.toLowerCase();
  const majorPublications: { [key: string]: number } = {
    'bbc': 50000000,
    'cnn': 45000000,
    'reuters': 40000000,
    'the new york times': 35000000,
    'the guardian': 30000000,
    'washington post': 28000000,
    'forbes': 25000000,
    'techcrunch': 20000000,
    'the verge': 18000000,
    'wired': 15000000,
    'bloomberg': 40000000,
    'wall street journal': 35000000,
    'usa today': 30000000,
    'nbc': 25000000,
    'abc': 25000000,
    'cbs': 25000000,
    'fox news': 30000000,
    'cnbc': 20000000,
    'time': 20000000,
    'newsweek': 15000000,
  };
  
  // Check for exact matches first
  for (const [pub, reach] of Object.entries(majorPublications)) {
    if (sourceLower.includes(pub)) {
      estimatedReach = reach;
      console.log('Matched major publication:', pub, 'reach:', reach);
      break;
    }
  }
  
  // Factor 2: Domain-based estimation (if URL available)
  if (url) {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      const domainLower = domain.toLowerCase();
      
      // Check domain patterns
      if (domainLower.includes('.edu')) {
        estimatedReach = Math.max(estimatedReach, 500000);
      } else if (domainLower.includes('.gov')) {
        estimatedReach = Math.max(estimatedReach, 2000000);
      } else if (domainLower.includes('.org')) {
        estimatedReach = Math.max(estimatedReach, 1000000);
      }
      
      // Check for known domains
      if (domainLower.includes('medium.com')) {
        estimatedReach = Math.max(estimatedReach, 12000000);
      } else if (domainLower.includes('substack.com')) {
        estimatedReach = Math.max(estimatedReach, 5000000);
      } else if (domainLower.includes('wordpress.com')) {
        estimatedReach = Math.max(estimatedReach, 2000000);
      }
    } catch (e) {
      console.log('Error parsing URL:', e);
    }
  }
  
  // Factor 3: Keyword-based dynamic variation
  // Popular keywords might indicate higher-traffic publications
  if (keyword) {
    const keywordLower = keyword.toLowerCase();
    const popularKeywords = ['technology', 'ai', 'artificial intelligence', 'bitcoin', 'crypto', 'stock', 'market'];
    const isPopularKeyword = popularKeywords.some(pk => keywordLower.includes(pk));
    
    if (isPopularKeyword) {
      estimatedReach = estimatedReach * 1.2; // 20% boost for popular keywords
    }
  }
  
  // Factor 4: Engagement-based estimation
  // Higher engagement suggests higher reach publication
  if (engagement) {
    const totalEngagement = (engagement.views || 0) + 
                           (engagement.shares || 0) * 10 + 
                           (engagement.comments || 0) * 5 + 
                           (engagement.likes || 0) * 2;
    
    if (totalEngagement > 10000) {
      estimatedReach = estimatedReach * 1.5;
    } else if (totalEngagement > 5000) {
      estimatedReach = estimatedReach * 1.3;
    } else if (totalEngagement > 1000) {
      estimatedReach = estimatedReach * 1.1;
    }
  }
  
  // Factor 5: Add deterministic variation based on article properties (±20%)
  // This ensures the same article always gets the same variation
  const variationKey = `${sourceName}|${url || ''}|${keyword || ''}`;
  const variationHash = hashString(variationKey);
  const normalizedHash = (variationHash % 10000) / 10000; // 0 to 1
  const deterministicVariation = 0.8 + (normalizedHash * 0.4); // 0.8 to 1.2
  estimatedReach = estimatedReach * deterministicVariation;
  
  // Ensure minimum and maximum bounds
  estimatedReach = Math.max(10000, Math.min(estimatedReach, 100000000));
  
  console.log('Final estimated monthly reach:', estimatedReach);
  
  return Math.round(estimatedReach);
}

/**
 * Calculate reach for an article with automatic monthly reach estimation
 * 
 * @param sourceName - Publication/source name
 * @param url - Article URL
 * @param keyword - Article keyword
 * @param engagement - Article engagement metrics
 * @returns ReachCalculationResult
 */
export function calculateArticleReachAuto(
  sourceName: string,
  url?: string,
  keyword?: string,
  engagement?: { views?: number; shares?: number; comments?: number; likes?: number }
): ReachCalculationResult {
  const monthlyReach = estimatePublicationMonthlyReach(sourceName, url, keyword, engagement);
  return calculateArticleReach(monthlyReach);
}

/**
 * Format number for display
 */
export function formatReachNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
}

/**
 * Format number (internal helper)
 */
function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
}

