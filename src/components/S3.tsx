import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Bingung mulai dari mana? Di Octary, kami akan membimbing kamu langkah demi langkah. Kamu akan belajar dengan langsung membuat proyek nyata, dari aplikasi web sederhana sampai portofolio yang bisa kamu banggakan untuk bekal di dunia kerja.",
    name: "Dari Nol Sampai Punya Proyek",
    title: "Octary Member",
  },
  {
    quote:
      "Stuck sama error atau bingung soal konsep? Jangan khawatir! Kamu bisa bertanya langsung kepada mentor berpengalaman atau berdiskusi dengan teman-teman sesama siswa RPL. Kami percaya belajar bareng itu lebih seru dan efektif.",
    name: "Gak Sendirian, Ada Mentor & Teman",
    title: "Octary Member",
  },
  {
    quote:
      "Kurikulum kami dirancang khusus untuk kebutuhan industri saat ini. Kamu akan belajar HTML, CSS, JavaScript, React, Next.js, dan alat-alat lain yang akan membuatmu siap bersaing dan relevan saat lulus nanti.",
    name: "Teknologi Relevan dengan Industri",
    title: "Octary Member",
  },
  {
    quote: "Selain coding, kami juga akan membantumu mempersiapkan karir. Mulai dari cara membuat CV yang menarik, membangun portofolio online yang profesional, sampai tips dan trik untuk menghadapi wawancara kerja pertamamu.",
    name: "Persiapan Karir Sejak Dini",
    title: "Ocatry Member",
  },
];

export default function S3() {
    return (
        <section className="relative z-10 py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
            <div className="h-[40rem] flex flex-col items-center justify-center overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    );
  }