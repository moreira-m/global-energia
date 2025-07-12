# Global Energia

This repository contains the React application for Global Energia.

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

To preview a build locally:

```bash
npm run build
npm run preview
```

## Environments

Deployments are handled by Netlify using GitHub Actions.

- **Staging** – pushes to the `stage` branch are deployed to a staging site.
- **Production** – pushes to the `main` branch are deployed to <https://globalenergia.netlify.app/>.

The staging URL uses a Netlify alias, typically `https://staging--<site>.netlify.app`.

Workflows also support manual runs through the GitHub Actions UI:

- **Deploy Staging** – run the `Deploy Staging` workflow to push the latest code
  on the `stage` branch, or trigger a manual deployment.
- **Deploy Production** – run the `Deploy Production` workflow to deploy the
  `main` branch.

You can also trigger manual deployments locally:

```bash
npm run deploy:stage    # deploys current build to the staging URL
npm run deploy:prod     # deploys to production
```

Configure the following repository secrets so the workflows can deploy:

- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_STAGING_SITE_ID`
- `NETLIFY_PROD_SITE_ID`
