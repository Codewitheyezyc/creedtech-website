-- Create project_requests table for storing Start a Project submissions
create table public.project_requests (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    pillar text not null check (pillar in ('saas_companies', 'startup_growth', 'individuals_small_business', 'scaling_companies')),
    answers jsonb not null default '{}'::jsonb,
    contact_name text not null,
    contact_email text not null,
    contact_phone text,
    company_name text,
    status text not null default 'new' check (status in ('new', 'reviewed', 'replied')),
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.project_requests enable row level security;

-- Create policy to allow anonymous inserts (submissions from public form)
create policy "Allow public inserts" on public.project_requests
    for insert with check (true);

-- Create policy to allow authenticated users to select/read requests (admin dashboard)
create policy "Allow authenticated selects" on public.project_requests
    for select using (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update requests (updating status)
create policy "Allow authenticated updates" on public.project_requests
    for update using (auth.role() = 'authenticated');
