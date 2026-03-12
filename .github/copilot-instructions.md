# Copilot Instructions — Portfolio

Personal portfolio site built with the MERN stack (MongoDB, Express, React, Node.js).

## Project Layout

```
portfolio/
├── client/          # React 19 + Vite frontend
│   └── src/
│       ├── App.jsx          # Root component — renders all sections in order
│       ├── components/      # One .jsx + .css file per section
│       └── assets/
└── server/          # Express 5 + Mongoose backend
    ├── index.js     # App entry — CORS, JSON middleware, MongoDB connect
    ├── routes/      # contact.js (POST /api/contact)
    └── models/      # Contact.js — Mongoose schema
```

## Commands

### Frontend (`client/`)
```bash
npm run dev       # Vite dev server on http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # ESLint
```

### Backend (`server/`)
```bash
node index.js     # Start Express server (no build step)
```

> Start **both** the frontend and backend simultaneously when developing locally. The backend defaults to port 5000.

## Environment Variables

Create `server/.env` (never commit it):
```
MONGO_URI=<mongodb-connection-string>   # Required — app won't start without it
PORT=5000                                # Optional, defaults to 5000
CLIENT_URL=http://localhost:5173         # Optional, controls CORS origin
```

## Architecture

- **Single-page layout**: `App.jsx` renders `<Navbar>` then all section components (`<Hero>`, `<Skills>`, `<Education>`, etc.) sequentially inside a `<main>` tag. Sections use `id` anchors for smooth-scroll nav links.
- **Stateless sections**: Most components are pure presentational (no state, no effects). Only `Navbar` and `Contact` hold local state.
- **Contact form**: `Contact.jsx` POSTs to `/api/contact` and tracks `status` (`null | 'sending' | 'success' | 'error'`) via `useState`.

## Component Conventions

- **One component per file** in `client/src/components/`.
- **Co-located CSS**: each `.jsx` file imports its own `.css` sibling (`import './Hero.css'`). No CSS framework — vanilla CSS only.
- **Container pattern**: wrap section content in `<div className="container">` inside `<section className="section" id="...">`.
- **Functional components** with hooks only (`useState`, `useEffect`). No class components, no external state library.
- **SVG icons** are inlined directly in JSX (no icon library dependency).

## Backend Conventions

- **Express 5** — async errors propagate to the default error handler; no need to call `next(err)` manually in async routes.
- **Validation first**: routes check required fields before hitting Mongoose; return `400` with `{ error: string }` on bad input.
- **Mongoose errors**: catch `ValidationError` separately for a cleaner 400 vs. generic 500 split.
- **Health check**: `GET /api/health` returns `{ status: 'ok' }` — useful for quick sanity checks.

## Known Pitfalls

- **No Vite proxy configured**: `Contact.jsx` fetches `/api/contact` as a relative URL, but `vite.config.js` has no proxy. In development the fetch will 404 unless you either add a proxy or run both servers behind a reverse proxy. To fix, add to `vite.config.js`:
  ```js
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  }
  ```
- **`server/.env` is required**: The Express server will fail to connect to MongoDB without `MONGO_URI` set. Ensure it exists before starting.
- **Run both servers**: The frontend alone is not functional — the contact form requires the backend to be running.
