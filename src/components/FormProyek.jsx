"use client";

import { useActionState } from "react";
import TombolKirim from "@/components/TombolKirim";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function FormProyek({ aksi, proyek, teksTombol }) {
  const [state, formAction] = useActionState(aksi, { proyek });
  const nilai = state.proyek ?? proyek;

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="id" value={proyek.id ?? ""} />
      <div className="space-y-2">
        <Label htmlFor="judul">Judul</Label>
        <Input
          id="judul"
          name="judul"
          defaultValue={nilai.judul}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          name="slug"
          defaultValue={nilai.slug}
          placeholder="buku-tamu"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="kategori">Kategori</Label>
        <Input
          id="kategori"
          name="kategori"
          defaultValue={nilai.kategori}
          placeholder="HTML, CSS, JavaScript, atau Next.js"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="minggu">Dibuat di</Label>
        <Input id="minggu" name="minggu" defaultValue={nilai.minggu} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="deskripsi">Deskripsi singkat</Label>
        <Textarea
          id="deskripsi"
          name="deskripsi"
          defaultValue={nilai.deskripsi}
          rows={2}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="fitur">Yang saya pelajari</Label>
        <Textarea
          id="fitur"
          name="fitur"
          defaultValue={(nilai.fitur ?? []).join("\n")}
          rows={3}
        />
        <p className="text-sm text-muted-foreground">
          Tulis satu poin di setiap baris.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="gambar_url">Alamat gambar</Label>
        <Input
          id="gambar_url"
          name="gambar_url"
          defaultValue={nilai.gambar_url}
          placeholder="/proyek/proyek-buku-tamu.png"
        />
      </div>
      <TombolKirim teks={teksTombol} />
      {state.error && <p className="text-sm text-aksen">{state.error}</p>}
    </form>
  );
}
