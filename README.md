# The Corporate Corner

Premium corporate publication and admin dashboard for Pakistan's business ecosystem.

## Stack

- Next.js App Router with TypeScript
- Tailwind CSS v4
- Framer Motion
- Supabase Auth, database, and storage
- TipTap rich text editor
- Next Image optimization

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Supabase

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Optionally run `supabase/seed.sql`.
4. Create the first admin user in Supabase Auth.
5. Insert a role:

```sql
insert into public.user_roles (user_id, role)
values ('AUTH_USER_ID', 'admin');
```

The schema includes:

- `posts`
- `categories`
- `authors`
- `submissions`
- `media`
- `homepage_settings`
- `site_settings`
- `user_roles`

## Routes

Public:

- `/`
- `/about`
- `/categories`
- `/categories/[slug]`
- `/articles/[slug]`
- `/get-featured`
- `/submit-your-story`
- `/contact`

Admin:

- `/admin/login`
- `/admin`
- `/admin/create`
- `/admin/posts`
- `/admin/submissions`
- `/admin/media`
- `/admin/authors`
- `/admin/homepage`
- `/admin/settings`

## Notes

The current build ships with polished dummy content so the site can be reviewed immediately. Supabase helper clients are included in `lib/supabase.ts`; wire server actions or route handlers to persist posts, submissions, media uploads, and settings.
