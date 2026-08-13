# Caliver Rossel — React + Vite migration

This project is a structure-preserving migration of the supplied HTML/CSS/JavaScript site.

- 52 original application pages were converted to native React JSX.
- Original CSS/assets/vendors are preserved under `public/site`.
- Original page scripts are loaded in their original order after the React DOM mounts.
- Original inline scripts were externalized under `public/runtime`.
- Internal `.html` links are mapped to the equivalent React route.
- No iframe or `dangerouslySetInnerHTML` is used.

Run:

```bash
npm install
npm run dev
npm run build
```
