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
      <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
        Tentang Saya
      </h1>

      <section className="mt-6 rounded-xl bg-white dark:bg-gray-800 p-5 shadow-sm">
        <h2 className="text-xl font-bold text-utama dark:text-sky-200">Perkenalan</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Saya tinggal di kota pasuruan, jawa timur, dan saya adalah mahasiswa
          smkn 1 pasuruan jurusan RPL
        </p>
      </section>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow-sm">
          <h2 className="text-xl font-bold text-utama dark:text-sky-200">Hobi</h2>
          <ul className="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
            {hobi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow-sm">
          <h2 className="text-xl font-bold text-utama dark:text-sky-200">Cita-cita</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Membahagiakan <strong>Orang tua</strong>. Langkah yang saya
            rencanakan:
          </p>
          <ol className="mt-2 list-decimal pl-5 text-gray-700 dark:text-gray-300">
            {rencana.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
      </div>

      <section className="mt-6 rounded-xl bg-white dark:bg-gray-800 p-5 shadow-sm">
        <h2 className="text-xl font-bold text-utama dark:text-sky-200">Jadwal Belajar</h2>
        <table className="mt-3 w-full text-left text-sm">
          <thead className="bg-utama text-white">
            <tr>
              <th className="p-2">Hari</th>
              <th className="p-2">Waktu</th>
              <th className="p-2">Kegiatan</th>
            </tr>
          </thead>
          <tbody>
            {jadwal.map((j) => (
              <tr key={j.hari} className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">{j.hari}</td>
                <td className="p-2">{j.waktu}</td>
                <td className="p-2">{j.kegiatan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
