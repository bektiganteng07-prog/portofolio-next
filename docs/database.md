# Struktur Database Portofolio

Dokumen ini mencatat skema Supabase yang dituju untuk portofolio Bekti
Ibrafirmansyah. Project Supabase yang direncanakan bernama `portofolio-bekti`
dan menggunakan region Southeast Asia (Singapore). Status project, isi tabel,
dan policy perlu diverifikasi langsung di dasbor Supabase.

URL project dan publishable key disimpan di `.env.local`, yang diabaikan Git
oleh aturan `.env*` di `.gitignore`. Jangan menyimpan secret key di repository.

## Tabel `projects`

Daftar proyek portofolio.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu baris dibuat, otomatis terisi dengan `now()` |
| `slug` | `text` | Penanda unik proyek di alamat |
| `judul` | `text` | Judul proyek |
| `deskripsi` | `text` | Deskripsi singkat proyek |
| `kategori` | `text` | Kategori proyek, misalnya HTML, CSS, atau JavaScript |
| `minggu` | `text` | Minggu proyek dibuat |
| `fitur` | `text[]` | Daftar fitur atau hal yang dipelajari |
| `gambar_url` | `text` | Alamat gambar proyek, misalnya `/proyek/proyek-profil.png` |

RLS harus aktif. Policy `Pengunjung boleh membaca proyek` memberikan peran
`anon` akses `select` ke semua baris.

## Tabel `messages`

Pesan dari form kontak.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu baris dibuat, otomatis terisi dengan `now()` |
| `nama` | `text` | Nama pengirim |
| `email` | `text` | Email pengirim |
| `pesan` | `text` | Isi pesan |

RLS harus aktif tanpa policy baca. Policy `insert` untuk form kontak berada di
luar cakupan Minggu 13.

## Tabel `skills`

Daftar keahlian.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu baris dibuat, otomatis terisi dengan `now()` |
| `nama` | `text` | Nama keahlian |
| `level` | `text` | Tingkat keahlian: Dasar, Menengah, atau Mahir |

RLS harus aktif. Policy `Pengunjung boleh membaca keahlian` memberikan peran
`anon` akses `select` ke semua baris.

## Catatan seed data

Data pada repository saat ini belum sama dengan enam baris proyek yang
ditentukan dalam materi Minggu 13. `src/data/proyek.js` berisi tiga proyek
dengan slug `web-gita`, `mockup-koperline`, dan `porto-pribdi`; karena itu,
jumlah dan isi tabel `projects` tidak dinyatakan selesai di dokumen ini.

Materi Minggu 13 menyebut lima keahlian: HTML (Menengah), CSS (Menengah),
Git dan GitHub (Dasar), Desain poster dengan Canva (Mahir), dan JavaScript
(Dasar).
