# Struktur Database Portofolio

Dokumen ini mencatat skema Supabase portofolio Bekti Ibrafirmansyah. URL
project dan publishable key disimpan di `.env.local`, yang diabaikan Git oleh
aturan `.env*` di `.gitignore`. Jangan menyimpan secret key di repository.

Secret key Supabase dan PIN halaman Kelola hanya disimpan sebagai environment
variable server (`SUPABASE_SECRET_KEY` dan `ADMIN_PIN`), tanpa awalan
`NEXT_PUBLIC_`.

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

RLS harus aktif tanpa policy baca publik. Form kontak tidak menyimpan pesan;
pengunjung diarahkan ke Buku Tamu.

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

## Tabel `buku_tamu`

Pesan publik dari halaman Buku Tamu.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu pesan dibuat, otomatis terisi |
| `nama` | `text` | Nama pengirim, wajib diisi |
| `pesan` | `text` | Isi pesan, wajib diisi |
| `disematkan` | `boolean` | Penanda pesan yang disematkan, bawaan `false` |

RLS aktif. Policy `Pengunjung boleh membaca buku tamu` dan
`Pengunjung boleh menulis buku tamu` memberi peran `anon` akses `select` dan
`insert`. Perubahan dan penghapusan dilakukan memakai klien admin di server.

SQL pembuatan tabel dan policy Minggu 15 tercatat di
[`supabase-minggu-15.sql`](./supabase-minggu-15.sql).
