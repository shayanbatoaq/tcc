create extension if not exists "pgcrypto";

create type post_status as enum ('draft', 'pending_review', 'published', 'scheduled', 'archived');
create type submission_status as enum ('pending', 'approved', 'rejected', 'converted');

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null default '',
  created_at timestamptz not null default now()
);

create table public.authors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  bio text,
  image_url text,
  social_links jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  cover_image_url text,
  category_id uuid references public.categories(id) on delete set null,
  author_id uuid references public.authors(id) on delete set null,
  status post_status not null default 'draft',
  is_featured boolean not null default false,
  reading_time integer not null default 1,
  tags text[] not null default '{}',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  designation text,
  email text not null,
  phone text,
  story_type text not null,
  story_summary text not null,
  supporting_links text,
  media_urls text[] not null default '{}',
  status submission_status not null default 'pending',
  created_at timestamptz not null default now()
);

create table public.media (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  url text not null,
  alt_text text,
  mime_type text,
  size_bytes bigint,
  uploaded_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table public.homepage_settings (
  id integer primary key default 1 check (id = 1),
  hero_post_id uuid references public.posts(id) on delete set null,
  featured_post_ids uuid[] not null default '{}',
  section_order text[] not null default array[
    'featured_stories',
    'latest_insights',
    'coverage_categories',
    'editorial_integrity',
    'get_featured_cta'
  ],
  updated_at timestamptz not null default now()
);

create table public.site_settings (
  id integer primary key default 1 check (id = 1),
  logo_url text,
  social_links jsonb not null default '{}'::jsonb,
  seo_defaults jsonb not null default '{}'::jsonb,
  contact_email text,
  updated_at timestamptz not null default now()
);

create table public.user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('admin', 'editor', 'viewer')),
  created_at timestamptz not null default now()
);

alter table public.categories enable row level security;
alter table public.authors enable row level security;
alter table public.posts enable row level security;
alter table public.submissions enable row level security;
alter table public.media enable row level security;
alter table public.homepage_settings enable row level security;
alter table public.site_settings enable row level security;
alter table public.user_roles enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = auth.uid()
    and role in ('admin', 'editor')
  );
$$;

create policy "Public can read published posts" on public.posts
  for select using (status = 'published' or public.is_admin());

create policy "Public can read categories" on public.categories
  for select using (true);

create policy "Public can read authors" on public.authors
  for select using (true);

create policy "Anyone can submit stories" on public.submissions
  for insert with check (true);

create policy "Admins manage submissions" on public.submissions
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Admins manage posts" on public.posts
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Admins manage authors" on public.authors
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Admins manage media" on public.media
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Public reads homepage settings" on public.homepage_settings
  for select using (true);

create policy "Admins manage homepage settings" on public.homepage_settings
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Public reads site settings" on public.site_settings
  for select using (true);

create policy "Admins manage site settings" on public.site_settings
  for all using (public.is_admin()) with check (public.is_admin());

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;
