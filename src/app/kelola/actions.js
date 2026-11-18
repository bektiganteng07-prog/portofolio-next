"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sudahMasuk } from "@/lib/pin";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function masukKelola(stateSebelum, formData) {
  const pin = String(formData.get("pin") ?? "");
  if (!process.env.ADMIN_PIN || pin !== process.env.ADMIN_PIN) {
    return { error: "PIN salah. Coba lagi." };
  }

  const kue = await cookies();
  kue.set("pin_admin", pin, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 60 * 60,
  });
  return {};
}

export async function keluarKelola() {
  const kue = await cookies();
  kue.delete("pin_admin");
}

export async function sematkanPesan(formData) {
  if (!(await sudahMasuk())) {
    return;
  }

  const id = String(formData.get("id") ?? "");
  const disematkan = formData.get("sematkan") === "ya";
  if (!id) {
    throw new Error("ID pesan tidak valid.");
  }

  const { error } = await supabaseAdmin
    .from("buku_tamu")
    .update({ disematkan })
    .eq("id", id);
  if (error) {
    throw new Error(`Pesan gagal diperbarui: ${error.message}`);
  }

  revalidatePath("/kelola");
  revalidatePath("/buku-tamu");
}

export async function hapusPesan(formData) {
  if (!(await sudahMasuk())) {
    return;
  }

  const id = String(formData.get("id") ?? "");
  if (!id) {
    throw new Error("ID pesan tidak valid.");
  }

  const { error } = await supabaseAdmin
    .from("buku_tamu")
    .delete()
    .eq("id", id);
  if (error) {
    throw new Error(`Pesan gagal dihapus: ${error.message}`);
  }

  revalidatePath("/kelola");
  revalidatePath("/buku-tamu");
}

const daftarKategori = ["HTML", "CSS", "JavaScript", "Next.js"];

function bacaProyek(formData) {
  return {
    judul: String(formData.get("judul") ?? "").trim(),
    slug: String(formData.get("slug") ?? "").trim(),
    kategori: String(formData.get("kategori") ?? "").trim(),
    minggu: String(formData.get("minggu") ?? "").trim(),
    deskripsi: String(formData.get("deskripsi") ?? "").trim(),
    fitur: String(formData.get("fitur") ?? "")
      .split("\n")
      .map((fitur) => fitur.trim())
      .filter((fitur) => fitur !== ""),
    gambar_url: String(formData.get("gambar_url") ?? "").trim(),
  };
}

function cekProyek(proyek) {
  if (proyek.judul === "" || proyek.slug === "" || proyek.deskripsi === "") {
    return "Judul, slug, dan deskripsi wajib diisi.";
  }
  if (proyek.slug.includes(" ")) {
    return "Slug tidak boleh memakai spasi. Gunakan tanda hubung, contoh: buku-tamu.";
  }
  if (!daftarKategori.includes(proyek.kategori)) {
    return "Kategori harus HTML, CSS, JavaScript, atau Next.js.";
  }
  if (!proyek.gambar_url.startsWith("/proyek/")) {
    return "Alamat gambar harus diawali /proyek/, contoh: /proyek/proyek-buku-tamu.png.";
  }
  return "";
}

function perbaruiHalaman(slug) {
  revalidatePath("/");
  revalidatePath("/proyek");
  revalidatePath(`/proyek/${slug}`);
  revalidatePath("/kelola");
}

export async function tambahProyek(stateSebelum, formData) {
  const proyek = bacaProyek(formData);
  if (!(await sudahMasuk())) {
    return { error: "Masukkan PIN dulu di halaman Kelola.", proyek };
  }

  const pesanError = cekProyek(proyek);
  if (pesanError) {
    return { error: pesanError, proyek };
  }

  const { error } = await supabaseAdmin.from("projects").insert(proyek);
  if (error) {
    if (error.code === "23505") {
      return { error: "Slug sudah dipakai proyek lain.", proyek };
    }
    return { error: `Proyek gagal disimpan: ${error.message}`, proyek };
  }

  perbaruiHalaman(proyek.slug);
  redirect("/kelola");
}

export async function ubahProyek(stateSebelum, formData) {
  const proyek = bacaProyek(formData);
  const id = String(formData.get("id") ?? "");
  if (!(await sudahMasuk())) {
    return { error: "Masukkan PIN dulu di halaman Kelola.", proyek };
  }
  if (!id) {
    return { error: "ID proyek tidak valid.", proyek };
  }

  const pesanError = cekProyek(proyek);
  if (pesanError) {
    return { error: pesanError, proyek };
  }

  const { error } = await supabaseAdmin
    .from("projects")
    .update(proyek)
    .eq("id", id);
  if (error) {
    if (error.code === "23505") {
      return { error: "Slug sudah dipakai proyek lain.", proyek };
    }
    return { error: `Proyek gagal diubah: ${error.message}`, proyek };
  }

  perbaruiHalaman(proyek.slug);
  redirect("/kelola");
}

export async function hapusProyek(formData) {
  if (!(await sudahMasuk())) {
    return;
  }

  const id = String(formData.get("id") ?? "");
  if (!id) {
    throw new Error("ID proyek tidak valid.");
  }

  const { error } = await supabaseAdmin.from("projects").delete().eq("id", id);
  if (error) {
    throw new Error(`Proyek gagal dihapus: ${error.message}`);
  }

  revalidatePath("/");
  revalidatePath("/proyek");
  revalidatePath("/kelola");
}
