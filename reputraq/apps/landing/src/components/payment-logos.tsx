import React from "react";

interface PaymentLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const VisaLogo: React.FC<PaymentLogoProps> = ({ className = "", width = 60, height = 20 }) => (
  <svg
    viewBox="0 0 100 33"
    width={width}
    height={height}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="33" fill="#1434CB" rx="4" />
    <text
      x="50"
      y="22"
      fontSize="18"
      fill="white"
      fontWeight="700"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      letterSpacing="2"
    >
      VISA
    </text>
  </svg>
);

export const MastercardLogo: React.FC<PaymentLogoProps> = ({ className = "", width = 60, height = 40 }) => (
  <svg
    viewBox="0 0 100 62"
    width={width}
    height={height}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="62" fill="white" rx="4" />
    <circle cx="33" cy="31" r="18" fill="#EB001B" />
    <circle cx="47" cy="31" r="18" fill="#F79E1B" />
    <path
      d="M40 31C40 25.5 42.5 20.5 46.5 17C44 14.5 40.5 13 36.5 13C28.5 13 22 19.5 22 31C22 42.5 28.5 49 36.5 49C40.5 49 44 47.5 46.5 45C42.5 41.5 40 36.5 40 31Z"
      fill="#FF5F00"
    />
  </svg>
);

export const AmexLogo: React.FC<PaymentLogoProps> = ({ className = "", width = 60, height = 40 }) => (
  <svg
    viewBox="0 0 100 62"
    width={width}
    height={height}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="62" fill="#006FCF" rx="4" />
    <text
      x="50"
      y="38"
      fontSize="12"
      fill="white"
      fontWeight="700"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      letterSpacing="3"
    >
      AMEX
    </text>
  </svg>
);

export const DinersClubLogo: React.FC<PaymentLogoProps> = ({ className = "", width = 60, height = 40 }) => (
  <svg
    viewBox="0 0 100 62"
    width={width}
    height={height}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="62" fill="#0079BA" rx="4" />
    <circle cx="28" cy="31" r="10" fill="white" />
    <circle cx="72" cy="31" r="10" fill="white" />
    <text
      x="50"
      y="38"
      fontSize="9"
      fill="white"
      fontWeight="700"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      letterSpacing="1"
    >
      DINERS
    </text>
  </svg>
);

export const UpiLogo: React.FC<PaymentLogoProps> = ({ className = "", width = 60, height = 40 }) => (
  <svg
    viewBox="0 0 100 62"
    width={width}
    height={height}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="62" fill="#6FCF97" rx="4" />
    <circle cx="50" cy="28" r="10" fill="white" />
    <path
      d="M50 20L45 28L50 36L55 28L50 20Z"
      fill="#6FCF97"
    />
    <text
      x="50"
      y="48"
      fontSize="10"
      fill="white"
      fontWeight="700"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      letterSpacing="2"
    >
      UPI
    </text>
  </svg>
);

export const PayPalLogo: React.FC<PaymentLogoProps> = ({ className = "", width = 60, height = 40 }) => (
  <svg
    viewBox="0 0 100 62"
    width={width}
    height={height}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="62" fill="#003087" rx="4" />
    <text
      x="50"
      y="38"
      fontSize="14"
      fill="#009CDE"
      fontWeight="700"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      letterSpacing="1"
    >
      PayPal
    </text>
  </svg>
);
