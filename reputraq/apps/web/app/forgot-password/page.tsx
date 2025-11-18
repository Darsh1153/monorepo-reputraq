'use client';

import { useState } from 'react';
import styles from './page.module.scss';

export default function ForgotPasswordPage() {
  console.log('ForgotPasswordPage rendered');
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{ email?: string; newPassword?: string; confirmPassword?: string; general?: string }>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    console.log('Validating forgot password form');
    const newErrors: typeof errors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'New password must be at least 6 characters long';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    console.log('Forgot password field change', field);
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    if (errors.general) {
      setErrors(prev => ({ ...prev, general: undefined }));
    }
    if (successMessage) {
      setSuccessMessage('');
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Forgot password form submitted');

    if (!validateForm()) {
      console.log('Forgot password validation failed', errors);
      return;
    }

    setIsSubmitting(true);
    setErrors(prev => ({ ...prev, general: undefined }));
    setSuccessMessage('');

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          newPassword: formData.newPassword,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.log('Forgot password error response', error);
        setErrors(prev => ({ ...prev, general: error.message || 'Unable to reset password. Please try again.' }));
      } else {
        console.log('Forgot password reset successful');
        setSuccessMessage('Password updated successfully. You can now sign in with your new password.');
        setFormData({
          email: '',
          newPassword: '',
          confirmPassword: '',
        });
      }
    } catch (error) {
      console.error('Forgot password network error', error);
      setErrors(prev => ({ ...prev, general: 'Network error. Please try again later.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Reset your password</h1>
        <p className={styles.subtitle}>
          Enter your account email and new password to regain access.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {errors.general && (
            <div className={styles.errorAlert}>
              {errors.general}
            </div>
          )}

          {successMessage && (
            <div className={styles.successAlert}>
              {successMessage}
            </div>
          )}

          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(event) => handleChange('email', event.target.value)}
              className={`${styles.input} ${errors.email ? styles.error : ''}`}
              placeholder="Enter the email you use to sign in"
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="newPassword" className={styles.label}>
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={(event) => handleChange('newPassword', event.target.value)}
              className={`${styles.input} ${errors.newPassword ? styles.error : ''}`}
              placeholder="Enter a new password"
            />
            {errors.newPassword && <span className={styles.errorText}>{errors.newPassword}</span>}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(event) => handleChange('confirmPassword', event.target.value)}
              className={`${styles.input} ${errors.confirmPassword ? styles.error : ''}`}
              placeholder="Re-enter your new password"
            />
            {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Resetting Password...' : 'Reset Password'}
          </button>
        </form>

        <div className={styles.links}>
          <a href="/signin" className={styles.link}>
            Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

