-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/vwuqvffcqrnttwoedsio/sql

create table if not exists contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table contact_messages enable row level security;

-- Allow anyone to INSERT (send a message)
create policy "Allow public inserts"
  on contact_messages
  for insert
  to anon
  with check (true);

-- Only authenticated users (you) can read messages
create policy "Allow authenticated reads"
  on contact_messages
  for select
  to authenticated
  using (true);
