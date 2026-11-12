import Kartu from "@/app/component/Kartu";

export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi, cita-cita, dan jadwal belajar Bekti Ibrafirmansyah.",
};

const hobi = ["mendegarkan musik", "menonton film", "bermain game", "lari", "berenang"];

const rencana = [
  "Mengumrohkan kedua orang tua",
  "membahagiakan orang tua",
  "membuat aplikasi yang bermanfaat",
];

const jadwal = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Rabu", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
  { hari: "Jumat", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
];

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Tentang Saya
      </h1>

      <div className="mt-6">
        <Kartu judul="Perkenalan">
          <p className="text-muted-foreground">
            Saya tinggal di kota pasuruan, jawa timur, dan saya adalah mahasiswa
            smkn 1 pasuruan jurusan RPL
          </p>
        </Kartu>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc pl-5 text-muted-foreground">
            {hobi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="text-muted-foreground">
            Membahagiakan <strong>Orang tua</strong>. Langkah yang saya
            rencanakan:
          </p>
          <ol className="mt-2 list-decimal pl-5 text-muted-foreground">
            {rencana.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Kartu>
      </div>

      <div className="mt-6">
        <Kartu judul="Jadwal Belajar">
          <table className="mt-3 w-full text-left text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="p-2">Hari</th>
                <th className="p-2">Waktu</th>
                <th className="p-2">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((j) => (
                <tr key={j.hari} className="border-b border-border">
                  <td className="p-2">{j.hari}</td>
                  <td className="p-2">{j.waktu}</td>
                  <td className="p-2">{j.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Kartu>
      </div>
    </main>
  );
}
