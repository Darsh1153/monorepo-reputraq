'use client';

import React, { useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar
} from 'recharts';
import { TrendingUp, BarChart3, Calendar } from 'lucide-react';
import styles from './CompetitorAreaChart.module.scss';

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

interface CompetitorKeyword {
  id: number;
  userId: number;
  keyword: string;
  createdAt: string;
}

interface CompetitorAreaChartProps {
  articles: Article[];
  competitorKeywords: CompetitorKeyword[];
  selectedKeyword?: string;
}

interface ChartDataPoint {
  date: string;
  total: number;
  positive: number;
  negative: number;
  neutral: number;
  keyword?: string;
}

const CompetitorAreaChart: React.FC<CompetitorAreaChartProps> = ({
  articles,
  competitorKeywords,
  selectedKeyword
}) => {
  // Process data for the area chart
  const chartData = useMemo(() => {
    if (!articles || articles.length === 0) {
      return [];
    }

    // Group articles by date and keyword
    const dataMap = new Map<string, ChartDataPoint>();

    articles.forEach(article => {
      const date = new Date(article.publishedAt).toISOString().split('T')[0];
      const key = selectedKeyword ? `${date}_${selectedKeyword}` : date;
      
      if (!dataMap.has(key)) {
        dataMap.set(key, {
          date: date,
          total: 0,
          positive: 0,
          negative: 0,
          neutral: 0,
          keyword: selectedKeyword
        });
      }

      const dataPoint = dataMap.get(key)!;
      dataPoint.total += 1;

      // Categorize sentiment based on score ranges
      const score = article.sentimentScore || 0;
      if (score > 10) {
        dataPoint.positive += 1;
      } else if (score < -10) {
        dataPoint.negative += 1;
      } else {
        dataPoint.neutral += 1;
      }
    });

    // Convert to array and sort by date
    const sortedData = Array.from(dataMap.values())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // If we have more than 30 data points, aggregate by week
    if (sortedData.length > 30) {
      const weeklyData = new Map<string, ChartDataPoint>();
      
      sortedData.forEach(point => {
        const date = new Date(point.date);
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay()); // Start of week
        const weekKey = weekStart.toISOString().split('T')[0];
        
        if (!weeklyData.has(weekKey)) {
          weeklyData.set(weekKey, {
            date: weekKey,
            total: 0,
            positive: 0,
            negative: 0,
            neutral: 0,
            keyword: point.keyword
          });
        }
        
        const weekPoint = weeklyData.get(weekKey)!;
        weekPoint.total += point.total;
        weekPoint.positive += point.positive;
        weekPoint.negative += point.negative;
        weekPoint.neutral += point.neutral;
      });
      
      return Array.from(weeklyData.values())
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    return sortedData;
  }, [articles, selectedKeyword]);

  // Calculate summary statistics
  const summaryStats = useMemo(() => {
    const total = articles.length;
    const positive = articles.filter(a => (a.sentimentScore || 0) > 10).length;
    const negative = articles.filter(a => (a.sentimentScore || 0) < -10).length;
    const neutral = articles.filter(a => {
      const score = a.sentimentScore || 0;
      return score >= -10 && score <= 10;
    }).length;

    return {
      total,
      positive,
      negative,
      neutral,
      positivePercentage: total > 0 ? Math.round((positive / total) * 100) : 0,
      negativePercentage: total > 0 ? Math.round((negative / total) * 100) : 0,
      neutralPercentage: total > 0 ? Math.round((neutral / total) * 100) : 0
    };
  }, [articles]);

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <p className={styles.tooltipLabel}>{`Date: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className={styles.tooltipItem} style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (articles.length === 0) {
    return (
      <div className={styles.emptyState}>
        <BarChart3 size={48} className={styles.emptyIcon} />
        <h3>No Data Available</h3>
        <p>Collect competitor data to see sentiment trends over time</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <TrendingUp size={24} />
          </div>
          <div className={styles.titleContent}>
            <h2>Sentiment Trends Over Time</h2>
            <p>
              {selectedKeyword 
                ? `Sentiment analysis for "${selectedKeyword}"`
                : `Sentiment analysis across all competitor keywords`
              }
            </p>
          </div>
        </div>
        
        <div className={styles.summaryStats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{summaryStats.total}</span>
            <span className={styles.statLabel}>Total Articles</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue} style={{ color: '#10b981' }}>
              {summaryStats.positivePercentage}%
            </span>
            <span className={styles.statLabel}>Positive</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue} style={{ color: '#ef4444' }}>
              {summaryStats.negativePercentage}%
            </span>
            <span className={styles.statLabel}>Negative</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue} style={{ color: '#0093DD' }}>
              {summaryStats.neutralPercentage}%
            </span>
            <span className={styles.statLabel}>Neutral</span>
          </div>
        </div>
      </div>

      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="date" 
              stroke="#6b7280"
              fontSize={12}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
              }}
            />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area
              type="monotone"
              dataKey="positive"
              stackId="1"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.6}
              name="Positive"
            />
            <Area
              type="monotone"
              dataKey="neutral"
              stackId="1"
              stroke="#0093DD"
              fill="#0093DD"
              fillOpacity={0.6}
              name="Neutral"
            />
            <Area
              type="monotone"
              dataKey="negative"
              stackId="1"
              stroke="#ef4444"
              fill="#ef4444"
              fillOpacity={0.6}
              name="Negative"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Bar Chart for Comparison */}
      {competitorKeywords.length > 1 && (
        <div className={styles.comparisonSection}>
          <h3>Sentiment Comparison by Keyword</h3>
          <div className={styles.barChartContainer}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={competitorKeywords.map(keyword => {
                const keywordArticles = articles.filter(article => 
                  article.title?.toLowerCase().includes(keyword.keyword.toLowerCase()) ||
                  article.description?.toLowerCase().includes(keyword.keyword.toLowerCase())
                );
                
                const positive = keywordArticles.filter(a => (a.sentimentScore || 0) > 10).length;
                const negative = keywordArticles.filter(a => (a.sentimentScore || 0) < -10).length;
                const neutral = keywordArticles.filter(a => {
                  const score = a.sentimentScore || 0;
                  return score >= -10 && score <= 10;
                }).length;
                
                return {
                  keyword: keyword.keyword,
                  positive,
                  negative,
                  neutral,
                  total: keywordArticles.length
                };
              })} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="keyword" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar dataKey="positive" stackId="a" fill="#10b981" name="Positive" />
                <Bar dataKey="neutral" stackId="a" fill="#0093DD" name="Neutral" />
                <Bar dataKey="negative" stackId="a" fill="#ef4444" name="Negative" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompetitorAreaChart;

