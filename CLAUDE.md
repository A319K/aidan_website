# School Club Website

A website for a school club with features like an events calendar, member signups, and a contact form.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Backend/Database:** Supabase (Postgres, Auth, Storage)
- **Deployment:** Vercel

## Project Goals

- Events calendar — display upcoming club events
- Member signups — allow students to join or RSVP to events
- Contact form — let visitors reach out to club organizers
- Clean, modern design appropriate for a school audience

## Conventions

- Use TypeScript
- Use the Next.js App Router (`app/` directory)
- Keep components in `components/`
- Keep Supabase queries in `lib/supabase/`
- Use Tailwind for all styling — no separate CSS files unless necessary
- Use Supabase Auth for any member login functionality
- Use server components where possible, client components only when needed (forms, interactivity)

## Environment Variables

Store secrets in `.env.local` (never commit this file):
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Getting Started

```bash
npm install
npm run dev
```
