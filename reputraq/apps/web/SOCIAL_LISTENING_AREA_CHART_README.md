# Social Listening Area Chart Component

## Overview
The `SocialListeningAreaChart` component provides dynamic visualization of sentiment trends over time for social listening searches. It displays content counts categorized by sentiment (positive, negative, neutral) in an interactive area chart format, specifically designed for social media data analysis.

## Features

### 📊 Dynamic Area Chart
- **Stacked Area Chart**: Shows sentiment distribution over time across social platforms
- **Interactive Tooltips**: Hover to see detailed data for each date/platform
- **Responsive Design**: Adapts to different screen sizes
- **Platform-based Time Series**: Creates synthetic time progression based on platform results

### 📈 Sentiment Analysis
- **Positive**: Content with sentiment score > 0.1
- **Negative**: Content with sentiment score < -0.1  
- **Neutral**: Content with sentiment score between -0.1 and 0.1

### 🔄 Real-time Updates
- Updates automatically when sentiment analysis completes
- Shows data based on current search query
- Displays platform-specific sentiment breakdown

## Usage

```tsx
import SocialListeningAreaChart from '@/components/SocialListeningAreaChart';

<SocialListeningAreaChart 
  sentimentAnalysis={sentimentAnalysis}
  searchQuery={searchQuery}
/>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `sentimentAnalysis` | `SentimentAnalysisResponse \| null` | Complete sentiment analysis response from social listening API |
| `searchQuery` | `string?` | Current search query for context (optional) |

## Data Structure

### SentimentAnalysisResponse Interface
```typescript
interface SentimentAnalysisResponse {
  success: boolean;
  keyword: string;
  platforms: string[];
  insights: {
    keyword: string;
    totalContent: number;
    overallSentiment: number;
    sentimentDistribution: {
      positive: { count: number; percentage: number };
      negative: { count: number; percentage: number };
      neutral: { count: number; percentage: number };
    };
    confidence: number;
    topWords: Array<{ word: string; count: number }>;
    insights: {
      sentimentTrend: 'positive' | 'negative' | 'neutral';
      confidenceLevel: 'high' | 'medium' | 'low';
      dominantSentiment: 'positive' | 'negative' | 'neutral';
    };
  };
  platformResults: { [key: string]: PlatformSentimentResult };
  timestamp: string;
}
```

### PlatformSentimentResult Interface
```typescript
interface PlatformSentimentResult {
  data?: any;
  sentimentResults: SentimentResult[];
  contentCount: number;
  error?: string;
}
```

## Chart Features

### 1. Main Area Chart
- **X-axis**: Date (synthetic time progression based on platforms)
- **Y-axis**: Number of content items
- **Areas**: Stacked areas for positive (green), neutral (gray), and negative (red) sentiment
- **Legend**: Interactive legend to show/hide data series

### 2. Summary Statistics
- **Total Content**: Overall count of analyzed content
- **Sentiment Percentages**: Percentage breakdown of positive, negative, and neutral sentiment

### 3. Platform Comparison Bar Chart
- **Multi-platform Comparison**: When multiple platforms are analyzed
- **Side-by-side Sentiment**: Shows sentiment distribution for each platform
- **Stacked Bars**: Positive, neutral, and negative sentiment stacked

### 4. Additional Insights Cards
- **Overall Sentiment**: Shows the dominant sentiment trend
- **Confidence Level**: Displays analysis confidence percentage
- **Analysis Date**: Shows when the analysis was performed

## Styling

The component uses SCSS modules with the following key classes:

- `.container`: Main container with shadow and border
- `.header`: Header section with title and statistics
- `.chartContainer`: Chart wrapper with background
- `.summaryStats`: Statistics display
- `.insightsSection`: Additional insights cards
- `.tooltip`: Custom tooltip styling

## Responsive Design

- **Desktop**: Full layout with side-by-side statistics and insights grid
- **Tablet**: Stacked layout with centered elements
- **Mobile**: Compact layout with single-column insights grid

## Integration

The component is integrated into the social listening finder page (`/dashboard/social-listening-finder`) and appears:

1. After the sentiment analysis metrics cards
2. Before the existing pie chart and bar chart
3. Updates automatically when:
   - A new search is performed
   - Sentiment analysis completes
   - Different platforms are selected

## Data Processing

### Time Series Creation
Since social listening data doesn't have inherent time-based progression, the component creates a synthetic time series by:

1. **Platform Ordering**: Orders platforms based on their appearance in results
2. **Date Assignment**: Assigns sequential dates to each platform
3. **Sentiment Aggregation**: Aggregates sentiment results for each platform/date
4. **Chart Rendering**: Renders the area chart with the synthetic time series

### Sentiment Categorization
Content is categorized based on sentiment scores:
- **Positive**: Score > 0.1 (social media threshold)
- **Negative**: Score < -0.1 (social media threshold)
- **Neutral**: Score between -0.1 and 0.1

## Dependencies

- **Recharts**: For chart rendering
- **Lucide React**: For icons
- **React**: For component logic
- **SCSS Modules**: For styling

## Example Output

The chart will display:
- A stacked area chart showing sentiment trends across platforms
- Summary statistics showing total content and sentiment percentages
- A comparison bar chart when multiple platforms are analyzed
- Additional insights cards with overall sentiment, confidence, and analysis date
- Interactive tooltips with detailed information
- Responsive design that works on all devices

## Data Flow

1. **Search Execution**: User performs social listening search
2. **Sentiment Analysis**: API analyzes content sentiment across platforms
3. **Data Processing**: Component processes sentiment results by platform
4. **Time Series Creation**: Creates synthetic time progression
5. **Visualization**: Charts are rendered with the processed data
6. **Interactivity**: Users can hover for details and see platform comparisons

## Differences from Competitor Chart

While similar to the competitor area chart, this component:

- **Uses Social Data**: Processes social media sentiment instead of news articles
- **Platform Focus**: Emphasizes platform-specific analysis
- **Synthetic Time Series**: Creates time progression from platform order
- **Social Insights**: Includes additional social media-specific insights
- **Different Thresholds**: Uses social media-appropriate sentiment thresholds

## Error Handling

- **No Data State**: Shows empty state when no sentiment analysis is available
- **Loading States**: Handles loading and error states gracefully
- **Data Validation**: Validates sentiment analysis structure before processing
- **Fallback Values**: Provides fallback values for missing data

