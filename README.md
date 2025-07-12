# Global Energia

This repository contains the React application for Global Energia.

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

## Environments

Deployments are handled by Netlify using GitHub Actions.

- **Staging** – pushes to the `stage` branch are deployed to a staging site.
- **Production** – pushes to the `main` branch are deployed to <https://globalenergia.netlify.app/>.

Configure the following repository secrets so the workflows can deploy:

- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_STAGING_SITE_ID`
- `NETLIFY_PROD_SITE_ID`
