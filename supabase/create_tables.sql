-- ============================================
-- Run this in Supabase SQL Editor:
-- https://supabase.com/dashboard/project/vwuqvffcqrnttwoedsio/sql/new
-- ============================================

-- 1. Contact Messages Table
create table if not exists contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz default now()
);
alter table contact_messages enable row level security;
create policy "Allow public inserts" on contact_messages for insert to anon with check (true);
create policy "Allow authenticated reads" on contact_messages for select to authenticated using (true);

-- 2. Page Visits Table (Analytics)
create table if not exists page_visits (
  id uuid default gen_random_uuid() primary key,
  page text default '/',
  user_agent text,
  visited_at timestamptz default now()
);
alter table page_visits enable row level security;
create policy "Allow public inserts" on page_visits for insert to anon with check (true);
create policy "Allow authenticated reads" on page_visits for select to authenticated using (true);
