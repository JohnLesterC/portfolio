# John Lester Camit | Portfolio

Personal portfolio for an AI-assisted full-stack developer and systems & automation specialist based in the Philippines. The site presents selected business systems, workflow automation, web development services, and contact details.

**Live site:** https://johnlesterc.github.io/portfolio/

## Screenshot

<!-- Screenshot placeholder: add a current homepage image at docs/portfolio-screenshot.png. -->

## Features

- Responsive portfolio with light and dark themes
- Services, selected case studies, development process, skills, and contact sections
- Case studies identify problem, build, tools, and result
- Email and LinkedIn contact links that work on static hosting
- Search metadata, Open Graph tags, structured data, sitemap, and robots rules

## Tech Stack

- React 19 and Vite for the static frontend
- Vanilla CSS
- GitHub Pages for frontend hosting
- Optional Express 5, MongoDB/Mongoose, and Resend backend in `server/`

The portfolio contact action uses `mailto:` and does not require the backend. The Express server is retained as an optional API project.

## Run Locally

Prerequisites: Node.js and npm.

```bash
cd client
npm install
npm run dev
```

Vite prints the local URL after startup. To create and inspect a production build:

```bash
npm run build
npm run preview
```

Run lint checks from `client/` with `npm run lint`.

## Optional Backend

The Express API is not required to run or deploy the portfolio. To run it independently, install its dependencies in `server/`, configure `server/.env`, then start it with `node index.js`.

`RESEND_API_KEY` is required for the contact endpoint to send email. `CLIENT_URL` should be the exact frontend origin when making cross-origin requests. `MONGO_URI` is optional; without it, messages are not persisted. Never commit `.env` files or secret values.

## Repository Details

Suggested GitHub description: `Portfolio of John Lester Camit, an AI-assisted full-stack developer building business systems, automations, and websites for small businesses.`

Suggested website URL: https://johnlesterc.github.io/portfolio/

Suggested topics: `react`, `mern`, `portfolio`, `freelance`, `automation`.
