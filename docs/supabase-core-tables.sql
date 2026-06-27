create extension if not exists "uuid-ossp";

create table if not exists public.organizations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  logo text,
  created_at timestamp with time zone default now()
);

create table if not exists public.users (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references public.organizations(id) on delete cascade,
  name text not null,
  email text not null unique,
  role text not null default 'member'
);

create table if not exists public.companies (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references public.organizations(id) on delete cascade,
  company_name text not null,
  industry text,
  country text,
  status text not null default 'active'
);

create index if not exists idx_users_organization_id on public.users(organization_id);
create index if not exists idx_companies_organization_id on public.companies(organization_id);

alter table public.organizations enable row level security;
alter table public.users enable row level security;
alter table public.companies enable row level security;

create policy if not exists organizations_select_own
  on public.organizations
  for select
  using (true);

create policy if not exists organizations_insert_own
  on public.organizations
  for insert
  with check (true);

create policy if not exists organizations_update_own
  on public.organizations
  for update
  using (true)
  with check (true);

create policy if not exists users_select_own
  on public.users
  for select
  using (auth.uid() = id or auth.role() = 'authenticated');

create policy if not exists users_insert_own
  on public.users
  for insert
  with check (auth.role() = 'authenticated');

create policy if not exists users_update_own
  on public.users
  for update
  using (auth.uid() = id or auth.role() = 'authenticated')
  with check (auth.uid() = id or auth.role() = 'authenticated');

create policy if not exists companies_select_own
  on public.companies
  for select
  using (auth.role() = 'authenticated');

create policy if not exists companies_insert_own
  on public.companies
  for insert
  with check (auth.role() = 'authenticated');

create policy if not exists companies_update_own
  on public.companies
  for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');
