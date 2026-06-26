import type { AtprotoSyncConfig } from '@scottnath/devx/atproto';

export default {
  siteUrl: 'https://slacktivist.com',
  identifier: process.env.ATP_IDENTIFIER ?? 'slacktivist.com',
  contentDir: 'src/content/blog',
  postPathPrefix: '/blog',
  publication: {
    name: 'slacktivist.com',
    description: 'Scott Nath — slack activism, dev, and the open web',
  },
  statePath: 'atproto-state.json',
  syndicationPath: 'atproto-syndication.json',
  wellKnownDir: 'public/.well-known',
} satisfies AtprotoSyncConfig;
