---
name: portfolio-dev
description: "Use when creating or updating this portfolio's React sections, co-located CSS, responsive layouts, content blocks, and deployment workflow. Triggers for portfolio UI updates, section redesigns, skills/projects/education/experience edits, mobile responsiveness fixes, and GitHub Pages deployment."
---

# Portfolio Development Skill

## Use When

- Creating or updating React section components in `client/src/components/`
- Editing co-located CSS for portfolio sections
- Fixing responsive layout issues on mobile or tablet
- Updating content in Skills, Projects, Education, Experience, Certificates, Leadership, Vision, Hero, or Contact
- Preparing and deploying frontend changes to GitHub Pages

## Project Conventions

- Frontend lives in `client/` and backend lives in `server/`
- Use one component per file in `client/src/components/`
- Keep CSS co-located with each component and imported by its sibling JSX file
- Use the existing container pattern: section -> container -> bento/grid tiles
- Preserve the current visual language unless the task explicitly asks for a redesign
- Prefer minimal edits and keep class naming aligned with existing components

## Workflow

1. Read the target component and its CSS before editing
2. Reuse existing bento, tile, and section patterns where possible
3. Check mobile behavior when changing grids, code blocks, or card layouts
4. Run `npm run build` from `client/` after frontend edits
5. If the user asks to deploy, commit the changes, push `main`, then run `npm run deploy` in `client/`

## Repository-Specific Notes

- The frontend is a Vite app deployed to GitHub Pages
- The backend runs separately and is used by the contact form
- `vite.config.js` and `client/.env.production` control production frontend behavior
- Relative section anchors and navbar links should stay consistent when adding or renaming sections

## Common Tasks

- Add or update a portfolio section
- Refine a section's layout or styling
- Fix overflow or responsiveness issues
- Update portfolio content without changing the overall structure
- Build and deploy the frontend safely
