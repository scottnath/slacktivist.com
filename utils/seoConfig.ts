/**
 * Default SEO configuration for slacktivist.com.
 */
export const seoConfig = {
  baseURL: 'https://slacktivist.com',
  description: 'A place that helps.',
  type: 'website' as const,
  image: {
    url: '/favicon.svg',
    alt: 'slacktivist.com',
    width: 500,
    height: 500,
  },
  siteName: 'slacktivist.com',
  twitter: {
    card: 'summary' as const,
  },
};

/** Absolute URL for an OG image path (`public/…`, `/…`, or full URL). */
export function resolveOgImage(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const pathname = path.replace(/^public\//, '/').replace(/^(?!\/)/, '/');
  return `${seoConfig.baseURL.replace(/\/$/, '')}${pathname}`;
}
