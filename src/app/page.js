import Hero from "./component/Hero";
import SkillCard from "./component/skillCard";
import Footer from "./component/footer.jsx";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const jadwal = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Rabu", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
  { hari: "Jumat", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
];



export default function Home() {
  return (
    <>
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="bekti ibrafirmansyah"
        tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />
      <section className="mt-10 rounded-xl bg-white p-6 shadow">
        <h2 className="mb-2 text-xl font-bold text-utama">Tentang Saya</h2>
        <p className="text-sm  text-slate-700">
          Saya tinggal di kota pasuruan, jawa timur, dan saya adalah mahasiswa
          smkn 1 pasuruan jurusan RPL
        </p>
      </section>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-2 text-xl font-bold text-utama">Hobi</h2>
          <ul className="list-decimal pl-5 text-sm text-slate-600">
            <li>mendengarkan musik</li>
            <li>menonton film</li>
            <li>bermain game</li>
            <li>lari</li>
            <li>berenang</li>
          </ul>
        </section>

        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-2 text-xl font-bold text-utama">Cita-cita</h2>
          <ul className="list-decimal pl-5 text-sm text-slate-600">
            <li>Mengumrohkan kedua orang tua</li>
            <li>membahagiakan orang tua</li>
            <li>membuat aplikasi yang bermanfaat</li>
          </ul>
        </section>
      </div>
      <section className="mt-6 rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </section>
      <section className="mt-6 rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-bold text-utama">Jadwal Belajar</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-utama text-white">
              <tr>
                <th className="px-3 py-2">Hari</th>
                <th className="px-3 py-2">Waktu</th>
                <th className="px-3 py-2">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((item) => (
                <tr key={item.hari} className="border-b border-slate-200">
                  <td className="px-3 py-2 text-slate-700">{item.hari}</td>
                  <td className="px-3 py-2 text-slate-700">{item.waktu}</td>
                  <td className="px-3 py-2 text-slate-700">{item.kegiatan}</td>
                </tr>
              ))}
 </tbody>
 </table>
 </div>
 </section>
 </main>
<Footer />
  </>
);
}
