---
name: express-backend-dev
description: "Use when creating or updating this portfolio's Express backend, API routes, request validation, contact form handling, MongoDB persistence, Resend email flow, server environment variables, and backend debugging. Triggers for server/index.js changes, Express route edits, model updates, API error handling, contact endpoint work, and backend deployment-safe fixes."
---

# Express Backend Development Skill

## Use When

- Creating or updating Express routes in `server/routes/`
- Changing backend behavior in `server/index.js`
- Editing Mongoose models in `server/models/`
- Fixing the contact form backend flow
- Adding request validation, error handling, or API responses
- Working with `MONGO_URI`, `PORT`, `CLIENT_URL`, or `RESEND_API_KEY`

## Project Conventions

- Backend code lives in `server/`
- Express 5 is used with JSON middleware and CORS setup in `server/index.js`
- `GET /api/health` should keep returning `{ status: "ok" }`
- `POST /api/contact` validates input before any persistence logic
- MongoDB persistence is optional and should not block successful email delivery
- Resend email sending is part of the contact flow and failures should return a clean error response
- Keep input length limits and sanitization aligned with current backend behavior

## Workflow

1. Read `server/index.js` and the target route or model before editing
2. Preserve existing route structure and response shape unless the task requires a change
3. Validate required fields before calling external services or Mongoose
4. Keep backend changes minimal and avoid breaking the frontend contract
5. If backend behavior changes, verify whether the frontend contact form still matches the API

## Repository-Specific Notes

- The backend starts even without MongoDB; database persistence is optional
- The contact route sends email through Resend first, then attempts MongoDB persistence
- CORS uses `CLIENT_URL` and defaults to `http://localhost:5173`
- The server defaults to port `5000`
- This repo does not have a separate backend build step; the server runs directly with Node

## Common Tasks

- Add or update an Express endpoint
- Refine request validation and error messages
- Fix contact route email or persistence logic
- Adjust environment variable usage safely
- Debug backend issues without changing unrelated frontend code
