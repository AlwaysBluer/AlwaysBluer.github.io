# Blog Maintenance Guide

- This is AlwaysBluer's public personal blog. Keep changes focused, readable, and suitable for public release.
- Use `src/data/site.ts` as the single source for site identity, current technical directions, validation principles, and writing threads.
- Store posts in `src/content/posts/`. Keep every published post's `path` stable so existing URLs do not break.
- Preserve the two migrated 2024 article URLs unless an explicit redirect plan is approved.
- Separate verified facts, design inference, and unknowns in technical writing. Do not present a proposal or partial experiment as deployed evidence.
- Never publish company-internal repository names, customer data, credentials, private endpoints, or unreleased project details.
- Run `npm run build` after content, routing, component, or styling changes. Use browser checks for visible layout or interaction changes.
- Use the GitHub plugin for operations on `AlwaysBluer/AlwaysBluer.github.io`; do not use ordinary Git network commands for the personal GitHub remote.
