---
name: deploy-helper
description: "Use when deploying this portfolio, publishing frontend changes to GitHub Pages, preparing build verification, committing deployment-ready changes, pushing main, or running the client deploy workflow. Triggers for deploy requests, GitHub Pages publishing, build-before-deploy checks, and release-style frontend updates."
---

# Deployment Helper Skill

## Use When

- The user says `deploy`
- Publishing frontend updates to GitHub Pages
- Verifying the Vite frontend build before release
- Committing and pushing deployment-ready changes to `main`
- Running the portfolio's frontend deployment workflow safely

## Project Deployment Conventions

- Frontend deployment happens from `client/`
- The frontend uses Vite and publishes to GitHub Pages
- `client/package.json` defines `predeploy` as `npm run build`
- `client/package.json` defines `deploy` as `gh-pages -d dist`
- The site homepage is configured for `https://JohnLesterC.github.io/portfolio`
- Deployments should not change unrelated files

## Workflow

1. Check the working tree and understand what changed before deploying
2. If deployment follows code changes, commit only the intended updates
3. Push `main` before publishing when the user expects source control to stay in sync
4. Run the frontend deployment from `client/` using `npm run deploy`
5. Report whether the deploy command completed successfully

## Safety Rules

- Do not make unrelated code changes during deployment-only tasks
- Do not use destructive git commands
- If there are unexpected changes that conflict with the request, stop and clarify
- Prefer the existing `npm run deploy` workflow over ad hoc publish commands
- Keep commit messages short and deployment-focused when a commit is necessary

## Repository-Specific Notes

- GitHub Pages is used for the frontend only
- The backend is separate and is not deployed through this workflow
- `client/.env.production` controls production frontend API configuration
- A successful deploy should end with `Published` from `gh-pages`

## Common Tasks

- Deploy the latest frontend changes
- Build and verify production output before publishing
- Commit and push source updates tied to a deploy
- Re-run GitHub Pages deployment after a frontend fix
