/** Public site origin (no trailing slash). Set NEXT_PUBLIC_SITE_URL in Vercel. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.calldrduffy.com'
