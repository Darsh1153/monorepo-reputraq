'use client';

import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/redux';
import { setUser } from '@/lib/store/slices/userSlice';
import { 
  Settings, 
  Bell, 
  Mail, 
  Clock, 
  Monitor, 
  Shield, 
  Key, 
  Globe,
  Save,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff,
  Copy,
  Trash2
} from 'lucide-react';
import CronJobManager from '@/components/CronJobManager';
import styles from './page.module.scss';

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  weeklyDigest: boolean;
  keywordAlerts: boolean;
  competitorUpdates: boolean;
  systemUpdates: boolean;
}

interface DisplaySettings {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  dateFormat: string;
  timeFormat: '12h' | '24h';
  itemsPerPage: number;
}

interface PrivacySettings {
  dataSharing: boolean;
  analytics: boolean;
  marketingEmails: boolean;
}

interface ApiKey {
  id: number;
  name: string;
  key: string;
  createdAt: string;
  lastUsed: string | null;
}

export default function SettingsPage() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [activeTab, setActiveTab] = useState<'notifications' | 'data' | 'display' | 'privacy' | 'api'>('notifications');
  
  // Notification settings
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    emailNotifications: true,
    pushNotifications: false,
    weeklyDigest: true,
    keywordAlerts: true,
    competitorUpdates: true,
    systemUpdates: true,
  });

  // Display settings
  const [displaySettings, setDisplaySettings] = useState<DisplaySettings>({
    theme: 'light',
    language: 'en',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    itemsPerPage: 20,
  });

  // Privacy settings
  const [privacySettings, setPrivacySettings] = useState<PrivacySettings>({
    dataSharing: false,
    analytics: true,
    marketingEmails: false,
  });

  // API Keys
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [newApiKeyName, setNewApiKeyName] = useState('');
  const [creatingApiKey, setCreatingApiKey] = useState(false);
  const [showApiKey, setShowApiKey] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    console.log('Settings page loaded, fetching user data');
    // Load user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      dispatch(setUser(parsedUser));
    }
    
    // Load settings from localStorage
    loadSettings();
    loadApiKeys();
    setPageLoading(false);
  }, [dispatch]);

  const loadSettings = () => {
    console.log('Loading settings from localStorage');
    const savedNotifications = localStorage.getItem('notificationSettings');
    const savedDisplay = localStorage.getItem('displaySettings');
    const savedPrivacy = localStorage.getItem('privacySettings');

    if (savedNotifications) {
      setNotificationSettings(JSON.parse(savedNotifications));
    }
    if (savedDisplay) {
      setDisplaySettings(JSON.parse(savedDisplay));
    }
    if (savedPrivacy) {
      setPrivacySettings(JSON.parse(savedPrivacy));
    }
  };

  const loadApiKeys = async () => {
    if (!user?.id) return;
    
    try {
      console.log('Loading API keys for user:', user.id);
      // For now, we'll use localStorage to store user API keys
      // In the future, this should connect to a backend API
      const savedKeys = localStorage.getItem(`apiKeys_${user.id}`);
      if (savedKeys) {
        setApiKeys(JSON.parse(savedKeys));
      }
    } catch (error) {
      console.error('Failed to load API keys:', error);
    }
  };

  const handleNotificationChange = (key: keyof NotificationSettings) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleDisplayChange = (key: keyof DisplaySettings, value: any) => {
    setDisplaySettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePrivacyChange = (key: keyof PrivacySettings) => {
    setPrivacySettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const saveNotificationSettings = async () => {
    setLoading(true);
    setMessage(null);
    console.log('Saving notification settings:', notificationSettings);

    try {
      localStorage.setItem('notificationSettings', JSON.stringify(notificationSettings));
      
      // Here you would typically save to the backend
      // await fetch('/api/settings/notifications', { ... });
      
      setMessage({ type: 'success', text: 'Notification settings saved successfully!' });
    } catch (error) {
      console.error('Error saving notification settings:', error);
      setMessage({ type: 'error', text: 'Failed to save notification settings' });
    } finally {
      setLoading(false);
    }
  };

  const saveDisplaySettings = async () => {
    setLoading(true);
    setMessage(null);
    console.log('Saving display settings:', displaySettings);

    try {
      localStorage.setItem('displaySettings', JSON.stringify(displaySettings));
      
      // Apply theme if changed
      if (displaySettings.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (displaySettings.theme === 'light') {
        document.documentElement.classList.remove('dark');
      }
      
      setMessage({ type: 'success', text: 'Display settings saved successfully!' });
    } catch (error) {
      console.error('Error saving display settings:', error);
      setMessage({ type: 'error', text: 'Failed to save display settings' });
    } finally {
      setLoading(false);
    }
  };

  const savePrivacySettings = async () => {
    setLoading(true);
    setMessage(null);
    console.log('Saving privacy settings:', privacySettings);

    try {
      localStorage.setItem('privacySettings', JSON.stringify(privacySettings));
      
      setMessage({ type: 'success', text: 'Privacy settings saved successfully!' });
    } catch (error) {
      console.error('Error saving privacy settings:', error);
      setMessage({ type: 'error', text: 'Failed to save privacy settings' });
    } finally {
      setLoading(false);
    }
  };

  const createApiKey = async () => {
    if (!newApiKeyName.trim() || !user?.id) return;
    
    setCreatingApiKey(true);
    setMessage(null);
    console.log('Creating API key:', newApiKeyName);

    try {
      // Generate a simple API key (in production, use a proper key generation method)
      const apiKey = `rt_${btoa(`${user.id}_${Date.now()}_${Math.random()}`).replace(/[^a-zA-Z0-9]/g, '').substring(0, 32)}`;
      
      const newKey: ApiKey = {
        id: Date.now(),
        name: newApiKeyName,
        key: apiKey,
        createdAt: new Date().toISOString(),
        lastUsed: null,
      };

      const updatedKeys = [...apiKeys, newKey];
      setApiKeys(updatedKeys);
      localStorage.setItem(`apiKeys_${user.id}`, JSON.stringify(updatedKeys));
      setNewApiKeyName('');
      setMessage({ type: 'success', text: 'API key created successfully! Make sure to copy it now - you won\'t be able to see it again.' });
    } catch (error) {
      console.error('Error creating API key:', error);
      setMessage({ type: 'error', text: 'Failed to create API key' });
    } finally {
      setCreatingApiKey(false);
    }
  };

  const deleteApiKey = async (keyId: number) => {
    if (!user?.id) return;
    
    if (!confirm('Are you sure you want to delete this API key? This action cannot be undone.')) {
      return;
    }

    setLoading(true);
    console.log('Deleting API key:', keyId);

    try {
      const updatedKeys = apiKeys.filter(key => key.id !== keyId);
      setApiKeys(updatedKeys);
      localStorage.setItem(`apiKeys_${user.id}`, JSON.stringify(updatedKeys));
      setMessage({ type: 'success', text: 'API key deleted successfully!' });
    } catch (error) {
      console.error('Error deleting API key:', error);
      setMessage({ type: 'error', text: 'Failed to delete API key' });
    } finally {
      setLoading(false);
    }
  };

  const copyApiKey = (key: string) => {
    navigator.clipboard.writeText(key);
    setMessage({ type: 'success', text: 'API key copied to clipboard!' });
  };

  const toggleApiKeyVisibility = (keyId: number) => {
    setShowApiKey(prev => ({
      ...prev,
      [keyId]: !prev[keyId]
    }));
  };

  if (pageLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading settings...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.errorContainer}>
        <AlertCircle size={32} />
        <h2>Access Denied</h2>
        <p>Please sign in to access settings.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <Settings size={32} className={styles.titleIcon} />
            <h1 className={styles.title}>Settings</h1>
          </div>
          <p className={styles.subtitle}>Manage your application preferences and configurations</p>
        </div>
      </div>

      {/* Message Display */}
      {message && (
        <div className={`${styles.message} ${styles[message.type]}`}>
          {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'notifications' ? styles.active : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          <Bell size={18} />
          <span>Notifications</span>
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'data' ? styles.active : ''}`}
          onClick={() => setActiveTab('data')}
        >
          <Clock size={18} />
          <span>Data Collection</span>
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'display' ? styles.active : ''}`}
          onClick={() => setActiveTab('display')}
        >
          <Monitor size={18} />
          <span>Display</span>
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'privacy' ? styles.active : ''}`}
          onClick={() => setActiveTab('privacy')}
        >
          <Shield size={18} />
          <span>Privacy</span>
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'api' ? styles.active : ''}`}
          onClick={() => setActiveTab('api')}
        >
          <Key size={18} />
          <span>API Keys</span>
        </button>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>
                <Bell size={20} />
                <h2>Notification Preferences</h2>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <label className={styles.settingLabel}>
                    <Mail size={16} />
                    Email Notifications
                  </label>
                  <p className={styles.settingDescription}>
                    Receive email notifications for important updates
                  </p>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={notificationSettings.emailNotifications}
                    onChange={() => handleNotificationChange('emailNotifications')}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <label className={styles.settingLabel}>
                    <Bell size={16} />
                    Push Notifications
                  </label>
                  <p className={styles.settingDescription}>
                    Receive browser push notifications
                  </p>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={notificationSettings.pushNotifications}
                    onChange={() => handleNotificationChange('pushNotifications')}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <label className={styles.settingLabel}>
                    <Mail size={16} />
                    Weekly Digest
                  </label>
                  <p className={styles.settingDescription}>
                    Receive a weekly summary of your monitoring activity
                  </p>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={notificationSettings.weeklyDigest}
                    onChange={() => handleNotificationChange('weeklyDigest')}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <label className={styles.settingLabel}>
                    <Bell size={16} />
                    Keyword Alerts
                  </label>
                  <p className={styles.settingDescription}>
                    Get notified when your keywords are mentioned
                  </p>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={notificationSettings.keywordAlerts}
                    onChange={() => handleNotificationChange('keywordAlerts')}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <label className={styles.settingLabel}>
                    <Bell size={16} />
                    Competitor Updates
                  </label>
                  <p className={styles.settingDescription}>
                    Receive updates about competitor activity
                  </p>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={notificationSettings.competitorUpdates}
                    onChange={() => handleNotificationChange('competitorUpdates')}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <label className={styles.settingLabel}>
                    <Bell size={16} />
                    System Updates
                  </label>
                  <p className={styles.settingDescription}>
                    Receive notifications about system maintenance and updates
                  </p>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={notificationSettings.systemUpdates}
                    onChange={() => handleNotificationChange('systemUpdates')}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>

              <div className={styles.cardActions}>
                <button
                  onClick={saveNotificationSettings}
                  disabled={loading}
                  className={styles.saveButton}
                >
                  <Save size={16} />
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Data Collection Tab */}
        {activeTab === 'data' && (
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>
                <Clock size={20} />
                <h2>Data Collection Settings</h2>
              </div>
            </div>
            <div className={styles.cardBody}>
              {user?.id && <CronJobManager userId={user.id} />}
            </div>
          </div>
        )}

        {/* Display Tab */}
        {activeTab === 'display' && (
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>
                <Monitor size={20} />
                <h2>Display Preferences</h2>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <Monitor size={16} />
                    Theme
                  </label>
                  <select
                    value={displaySettings.theme}
                    onChange={(e) => handleDisplayChange('theme', e.target.value)}
                    className={styles.select}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto (System)</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <Globe size={16} />
                    Language
                  </label>
                  <select
                    value={displaySettings.language}
                    onChange={(e) => handleDisplayChange('language', e.target.value)}
                    className={styles.select}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="zh">Chinese</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <Clock size={16} />
                    Date Format
                  </label>
                  <select
                    value={displaySettings.dateFormat}
                    onChange={(e) => handleDisplayChange('dateFormat', e.target.value)}
                    className={styles.select}
                  >
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    <option value="DD MMM YYYY">DD MMM YYYY</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <Clock size={16} />
                    Time Format
                  </label>
                  <select
                    value={displaySettings.timeFormat}
                    onChange={(e) => handleDisplayChange('timeFormat', e.target.value)}
                    className={styles.select}
                  >
                    <option value="12h">12 Hour</option>
                    <option value="24h">24 Hour</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <Monitor size={16} />
                    Items Per Page
                  </label>
                  <select
                    value={displaySettings.itemsPerPage}
                    onChange={(e) => handleDisplayChange('itemsPerPage', parseInt(e.target.value))}
                    className={styles.select}
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>

              <div className={styles.cardActions}>
                <button
                  onClick={saveDisplaySettings}
                  disabled={loading}
                  className={styles.saveButton}
                >
                  <Save size={16} />
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Privacy Tab */}
        {activeTab === 'privacy' && (
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>
                <Shield size={20} />
                <h2>Privacy Settings</h2>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <label className={styles.settingLabel}>
                    <Shield size={16} />
                    Data Sharing
                  </label>
                  <p className={styles.settingDescription}>
                    Allow sharing of anonymized data for product improvement
                  </p>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={privacySettings.dataSharing}
                    onChange={() => handlePrivacyChange('dataSharing')}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <label className={styles.settingLabel}>
                    <Shield size={16} />
                    Analytics
                  </label>
                  <p className={styles.settingDescription}>
                    Help us improve by sharing usage analytics
                  </p>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={privacySettings.analytics}
                    onChange={() => handlePrivacyChange('analytics')}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <label className={styles.settingLabel}>
                    <Mail size={16} />
                    Marketing Emails
                  </label>
                  <p className={styles.settingDescription}>
                    Receive emails about new features and promotions
                  </p>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={privacySettings.marketingEmails}
                    onChange={() => handlePrivacyChange('marketingEmails')}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>

              <div className={styles.cardActions}>
                <button
                  onClick={savePrivacySettings}
                  disabled={loading}
                  className={styles.saveButton}
                >
                  <Save size={16} />
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* API Keys Tab */}
        {activeTab === 'api' && (
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>
                <Key size={20} />
                <h2>API Keys</h2>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.apiKeyForm}>
                <input
                  type="text"
                  value={newApiKeyName}
                  onChange={(e) => setNewApiKeyName(e.target.value)}
                  placeholder="Enter API key name"
                  className={styles.input}
                />
                <button
                  onClick={createApiKey}
                  disabled={creatingApiKey || !newApiKeyName.trim()}
                  className={styles.createButton}
                >
                  <Key size={16} />
                  {creatingApiKey ? 'Creating...' : 'Create API Key'}
                </button>
              </div>

              {apiKeys.length === 0 ? (
                <div className={styles.emptyState}>
                  <Key size={48} />
                  <p>No API keys created yet</p>
                  <span>Create an API key to access the API</span>
                </div>
              ) : (
                <div className={styles.apiKeysList}>
                  {apiKeys.map((apiKey) => (
                    <div key={apiKey.id} className={styles.apiKeyItem}>
                      <div className={styles.apiKeyInfo}>
                        <div className={styles.apiKeyName}>{apiKey.name}</div>
                        <div className={styles.apiKeyMeta}>
                          <span>Created: {new Date(apiKey.createdAt).toLocaleDateString()}</span>
                          {apiKey.lastUsed && (
                            <span>Last used: {new Date(apiKey.lastUsed).toLocaleDateString()}</span>
                          )}
                        </div>
                      </div>
                      <div className={styles.apiKeyValue}>
                        <input
                          type={showApiKey[apiKey.id] ? 'text' : 'password'}
                          value={apiKey.key}
                          readOnly
                          className={styles.apiKeyInput}
                        />
                        <div className={styles.apiKeyActions}>
                          <button
                            onClick={() => toggleApiKeyVisibility(apiKey.id)}
                            className={styles.iconButton}
                            title={showApiKey[apiKey.id] ? 'Hide' : 'Show'}
                          >
                            {showApiKey[apiKey.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                          <button
                            onClick={() => copyApiKey(apiKey.key)}
                            className={styles.iconButton}
                            title="Copy"
                          >
                            <Copy size={16} />
                          </button>
                          <button
                            onClick={() => deleteApiKey(apiKey.id)}
                            className={styles.iconButton}
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

