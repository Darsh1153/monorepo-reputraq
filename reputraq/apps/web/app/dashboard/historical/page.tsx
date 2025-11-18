'use client';

import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/redux';
import { setUser } from '@/lib/store/slices/userSlice';
import { Clock, Settings } from 'lucide-react';
import CronJobManager from '@/components/CronJobManager';
import styles from './HistoricalDashboard.module.scss';

export default function HistoricalDashboard() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      
      // Update Redux store with user data
      dispatch(setUser(parsedUser));
    }
    setPageLoading(false);
  }, [dispatch]);

  if (pageLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <span>Loading automation settings...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <span>Please sign in to view automation settings</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.title}>
          <Settings className="w-8 h-8" />
          <div>
            <h1>Automation Settings</h1>
            <p>Manage automated data collection schedules and cron jobs</p>
          </div>
        </div>
      </div>

      {/* Automation Settings Content */}
      <div className={styles.automationContent}>
        <CronJobManager userId={user.id} />
      </div>
    </div>
  );
}

