# Competitor Area Chart Component

## Overview
The `CompetitorAreaChart` component provides dynamic visualization of sentiment trends over time for competitor keywords. It displays article counts categorized by sentiment (positive, negative, neutral) in an interactive area chart format.

## Features

### 📊 Dynamic Area Chart
- **Stacked Area Chart**: Shows sentiment distribution over time
- **Interactive Tooltips**: Hover to see detailed data for each date
- **Responsive Design**: Adapts to different screen sizes
- **Auto-aggregation**: Automatically groups data by week when there are more than 30 data points

### 📈 Sentiment Analysis
- **Positive**: Articles with sentiment score > 10
- **Negative**: Articles with sentiment score < -10  
- **Neutral**: Articles with sentiment score between -10 and 10

### 🔄 Real-time Updates
- Updates automatically when competitor data changes
- Filters based on selected keyword
- Shows summary statistics

## Usage

```tsx
import CompetitorAreaChart from '@/components/CompetitorAreaChart';

<CompetitorAreaChart 
  articles={filteredArticles} 
  competitorKeywords={competitorKeywords}
  selectedKeyword={selectedKeyword}
/>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `articles` | `Article[]` | Array of competitor articles with sentiment data |
| `competitorKeywords` | `CompetitorKeyword[]` | Array of competitor keywords being tracked |
| `selectedKeyword` | `string?` | Currently selected keyword for filtering (optional) |

## Data Structure

### Article Interface
```typescript
interface Article {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  sentimentScore: number;
  sentimentLabel: string;
  sourceName: string;
  keyword?: string;
}
```

### CompetitorKeyword Interface
```typescript
interface CompetitorKeyword {
  id: number;
  userId: number;
  keyword: string;
  createdAt: string;
}
```

## Chart Features

### 1. Main Area Chart
- **X-axis**: Date (formatted as "MMM DD")
- **Y-axis**: Number of articles
- **Areas**: Stacked areas for positive (green), neutral (gray), and negative (red) sentiment
- **Legend**: Interactive legend to show/hide data series

### 2. Summary Statistics
- **Total Articles**: Overall count of articles
- **Sentiment Percentages**: Percentage breakdown of positive, negative, and neutral sentiment

### 3. Comparison Bar Chart
- **Multi-keyword Comparison**: When multiple competitor keywords are available
- **Side-by-side Sentiment**: Shows sentiment distribution for each keyword
- **Stacked Bars**: Positive, neutral, and negative sentiment stacked

## Styling

The component uses SCSS modules with the following key classes:

- `.container`: Main container with shadow and border
- `.header`: Header section with title and statistics
- `.chartContainer`: Chart wrapper with background
- `.summaryStats`: Statistics display
- `.tooltip`: Custom tooltip styling

## Responsive Design

- **Desktop**: Full layout with side-by-side statistics
- **Tablet**: Stacked layout with centered elements
- **Mobile**: Compact layout with smaller text and adjusted spacing

## Integration

The component is integrated into the competitor page (`/dashboard/competitor`) and appears:

1. After the competitor insights cards
2. Before the existing InteractiveGraphs component
3. Updates automatically when:
   - Competitor keywords are added/removed
   - Data is collected for keywords
   - A specific keyword is selected

## Dependencies

- **Recharts**: For chart rendering
- **Lucide React**: For icons
- **React**: For component logic
- **SCSS Modules**: For styling

## Example Output

The chart will display:
- A stacked area chart showing sentiment trends over time
- Summary statistics showing total articles and sentiment percentages
- A comparison bar chart when multiple keywords are available
- Interactive tooltips with detailed information
- Responsive design that works on all devices

## Data Flow

1. **Data Collection**: Articles are collected via the competitor data collection API
2. **Sentiment Analysis**: Articles are analyzed for sentiment scores
3. **Data Processing**: Component processes articles by date and sentiment
4. **Visualization**: Charts are rendered with the processed data
5. **Interactivity**: Users can hover for details and filter by keyword

