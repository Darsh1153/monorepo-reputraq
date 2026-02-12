export const appBaseUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? 
  (process.env.NODE_ENV === "production" ? "https://app.reputraq.com" : "http://localhost:3001");

export const appLoginUrl = `${appBaseUrl}/signin`;
export const appSignupUrl = `${appBaseUrl}/signup`;
