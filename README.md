# slacktivist.com

Node 24 Astro + Storybook site using [`@scottnath/devx`](https://github.com/scottnath/devx) for shared tooling.

Published at [slacktivist.com](https://slacktivist.com).

## Local development

```bash
npm install
npm start          # Astro dev server
npm run storybook  # Storybook on http://localhost:6006
npm run typecheck  # astro check
npm run build      # production build → dist/
```

## AT Protocol

[standard.site](https://standard.site/) blog publishing via `snath-devx atproto sync`. See the [devx atproto docs](https://github.com/scottnath/devx/blob/main/docs/atproto.md).

1. `public/.well-known/atproto-did` — domain identity (already set)
2. Edit `atproto.config.ts` if publication metadata changes
3. Write posts in `src/content/blog/` (remove `draft: true` to publish)
4. Credentials in env or `.env` — `ATPROTO_APP_PASSWORD`, `ATP_IDENTIFIER`
5. `npm run sync:atproto:dry-run` then `npm run sync:atproto`

CI syncs on deploy when repo secrets `ATPROTO_APP_PASSWORD` and `ATP_IDENTIFIER` are set.

## Commits

Use [Gitmoji](https://gitmoji.dev) commit messages. See `@scottnath/devx` docs in `node_modules/@scottnath/devx/docs/`.
