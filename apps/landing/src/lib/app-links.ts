export const appBaseUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";

export const appLoginUrl = `${appBaseUrl}/signin`;
export const appSignupUrl = `${appBaseUrl}/signup`;
