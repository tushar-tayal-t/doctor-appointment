# Doctor Appointment Backend

Production-ready backend for a doctor appointment application using Node.js, Express, TypeScript, and Prisma.

## Scripts

- `npm run dev` - Run development server with watch mode
- `npm run build` - Build TypeScript to `dist`
- `npm run start` - Run built production server
- `npm run typecheck` - Validate TypeScript types
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate:dev` - Run Prisma development migrations

## Folder Structure

```text
src/
  common/
    middlewares/
  config/
  modules/
    appointments/
    auth/
    health/
  routes/
  app.ts
  server.ts
```

## Core APIs

- `GET /api/v1/health` - Health check
- `POST /api/v1/auth/register` - Register user with role (`PATIENT`, `DOCTOR`, `ADMIN`)
- `POST /api/v1/auth/login` - Authenticate user
- `GET /api/v1/appointments` - Fetch appointments (authenticated; scoped by role)
- `POST /api/v1/appointments` - Create appointment (authenticated; `PATIENT` and `ADMIN`)

## Required Environment Variables

- `DATABASE_URL`
- `JWT_SECRET`
- `JWT_REFRESH_SECRET`

## Optional Environment Variables

- `PORT` (default: `5000`)
- `NODE_ENV` (`development`, `test`, `production`)
- `APP_NAME` (default: `doctor-appointment-backend`)
- `LOG_LEVEL` (default: `info`)
- `CORS_ORIGIN` (default: `*`)
- `TRUST_PROXY` (default: `1`)
- `SHUTDOWN_TIMEOUT_MS` (default: `10000`)
- `JWT_EXPIRES_IN` (default: `15m`)
- `JWT_REFRESH_EXPIRES_IN` (default: `7d`)
- `JWT_REFRESH_COOKIE_NAME` (default: `refreshToken`)

## Quick Start

1. Copy `.env.example` to `.env`
2. Install dependencies: `npm install`
3. Generate Prisma client: `npm run prisma:generate`
4. Run migrations: `npm run prisma:migrate:dev`
5. Start dev server: `npm run dev`
