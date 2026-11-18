create table public.buku_tamu (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  nama text not null,
  pesan text not null,
  disematkan boolean not null default false
);

alter table public.buku_tamu enable row level security;

create policy "Pengunjung boleh membaca buku tamu"
on public.buku_tamu
for select
to anon
using (true);

create policy "Pengunjung boleh menulis buku tamu"
on public.buku_tamu
for insert
to anon
with check (true);
