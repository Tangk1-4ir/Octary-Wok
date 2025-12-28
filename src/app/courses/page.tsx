// app/courses/page.tsx → VERSI FINAL DEWA
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink, ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function FantasyBookCourses() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentBab, setCurrentBab] = useState(0); // 0 = daftar materi

  const babContent = [
    // Halaman 0: Daftar Materi
    {
      left: (
        <>
          <h2 className="text-4xl font-bold text-amber-900 mb-10 text-center">Daftar Materi</h2>
          <div className="space-y-4">
            {[
              { title: "Bab 1 - Website Development", desc: "Klik untuk membuka" },
              { title: "Bab 2 - Artificial Intelligence", desc: "Machine Learning & Deep Learning" },
              { title: "Bab 3 - Flutter Mobile", desc: "Bikin app Android & iOS" },
              { title: "Bab 4 - Database Mastery", desc: "SQL, NoSQL, Cloud DB" },
              { title: "Bab 5 - Cyber Security", desc: "Hacking & Pertahanan Digital" },
              { title: "Bab 6 - Game Development", desc: "Unity, Godot, Unreal" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-xl border-2 border-amber-300 hover:border-amber-500 cursor-pointer transition-all hover:scale-105"
                onClick={() => setCurrentBab(idx + 1)}
              >
                <h3 className="text-2xl font-bold text-amber-900">{item.title}</h3>
                <p className="text-amber-700 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </>
      ),
      right: (
        <div className="h-full flex flex-col justify-between">
          <div>
            <h2 className="text-5xl font-bold text-amber-900 mb-8">Petualangan Belajar RPL</h2>
            <p className="text-xl text-amber-800 leading-relaxed">
              Selamat datang di grimoire suci Rekayasa Perangkat Lunak.
              Pilih bab di sebelah kiri untuk memulai perjalananmu!
            </p>
          </div>
          <motion.a
            href="https://weboctary.hashnode.space/"
            target="_blank"
            whileHover={{ scale: 1.08 }}
            className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-2xl font-bold text-2xl shadow-2xl"
          >
            Kunjungi Guru Agung <ExternalLink className="inline ml-3 w-7 h-7" />
          </motion.a>
        </div>
      )
    },
    // Bab 1 sampai 6 (contoh isi, kamu ganti sesuka hati)
    { left: <div className="p-8"><h2 className="text-6xl font-bold text-amber-900">Bab 1</h2><p className="text-3xl mt-6 text-amber-800">Website Development</p><ul className="mt-10 space-y-4 text-xl"><li>• HTML5 Semantic</li><li>• CSS Grid & Flexbox</li><li>• JavaScript Modern</li><li>• React + Next.js 15</li><li>• Backend & Deployment</li></ul></div>, right: <div className="p-8 text-center"><div className="text-9xl">Code</div><p className="text-2xl mt-10">From zero to fullstack hero!</p></div> },
    { left: <div className="p-8 text-center"><h2 className="text-6xl font-bold text-amber-900">Bab 2</h2><p className="text-3xl mt-6">Artificial Intelligence</p></div>, right: <div className="p-8 text-center"><div className="text-9xl">Brain</div></div> },
    { left: <div className="p-8 text-center"><h2 className="text-6xl font-bold text-amber-900">Bab 3</h2><p className="text-3xl mt-6">Flutter Mobile</p></div>, right: <div className="p-8 text-center"><div className="text-9xl">Phone</div></div> },
    { left: <div className="p-8 text-center"><h2 className="text-6xl font-bold text-amber-900">Bab 4</h2><p className="text-3xl mt-6">Database Mastery</p></div>, right: <div className="p-8 text-center"><div className="text-9xl">Database</div></div> },
    { left: <div className="p-8 text-center"><h2 className="text-6xl font-bold text-red-700">Bab 5</h2><p className="text-3xl mt-6">Cyber Security</p></div>, right: <div className="p-8 text-center"><div className="text-9xl">Shield</div></div> },
    { left: <div className="p-8 text-center"><h2 className="text-6xl font-bold text-amber-900">Bab 6</h2><p className="text-3xl mt-6">Game Development</p></div>, right: <div className="p-8 text-center"><div className="text-9xl">Gamepad</div></div> },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6 overflow-hidden relative">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, animationDelay: `${Math.random()*6}s` }} />
          ))}
        </div>

        {/* BUKU TERTUTUP */}
        {!isOpen ? (
          <motion.div onClick={() => setIsOpen(true)} className="cursor-pointer">
            <div className="relative w-96 h-96 md:w-[500px] md:h-[620px] [transform-style:preserve-3d]">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-purple-900 rounded-xl shadow-2xl backface-hidden" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-700 via-pink-600 to-red-600 rounded-xl shadow-2xl flex items-center justify-center [transform:rotateY(180deg)] backface-hidden">
                <div className="text-center text-white p-10">
                  <BookOpen className="w-24 h-24 mx-auto mb-6" />
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">RPL Courses</h1>
                  <p className="text-xl opacity-90">Klik untuk membuka grimoire pengetahuan</p>
                  <motion.div animate={{ y: [0,10,0] }} transition={{ repeat: Infinity, duration: 2 }} className="mt-8 text-3xl">Tap Me</motion.div>
                </div>
              </div>
              <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-gray-900 to-gray-700 rounded-l-xl" />
            </div>
          </motion.div>
        ) : (
          <div className="relative">
            {/* Tombol Tutup Buku */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => { setIsOpen(false); setCurrentBab(0); }}
              className="absolute -top-6 -right-6 z-50 bg-red-600 hover:bg-red-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center"
            >
              <X className="w-10 h-10" />
            </motion.button>

            {/* TOMBOL PANAH KIRI (di luar buku) */}
            <AnimatePresence>
              {currentBab > 0 && (
                <motion.button
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  onClick={() => setCurrentBab(p => p - 1)}
                  className="fixed left-8 top-1/2 -translate-y-1/2 z-40 bg-white/20 backdrop-blur-lg p-5 rounded-full hover:bg-white/40 transition-all hover:scale-110 shadow-2xl"
                >
                  <ChevronLeft className="w-12 h-12 text-white" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* TOMBOL PANAH KANAN (di luar buku) */}
            <AnimatePresence>
              {currentBab < babContent.length - 1 && (
                <motion.button
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  onClick={() => setCurrentBab(p => p + 1)}
                  className="fixed right-8 top-1/2 -translate-y-1/2 z-40 bg-white/20 backdrop-blur-lg p-5 rounded-full hover:bg-white/40 transition-all hover:scale-110 shadow-2xl"
                >
                  <ChevronRight className="w-12 h-12 text-white" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* BUKU + PAGE FLIP */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBab}
                initial={{ rotateY: 180, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -180, opacity: 0 }}
                transition={{ duration: 1.2, type: "spring", stiffness: 70 }}
                className="flex gap-6 preserve-3d max-w-7xl mx-auto"
              >
                {/* Halaman Kiri */}
                <div className="w-full md:w-1/2 min-h-[620px] bg-gradient-to-br from-amber-50 to-yellow-50 rounded-l-3xl shadow-2xl p-12 border-r-8 border-amber-700">
                  {babContent[currentBab].left}
                </div>

                {/* Halaman Kanan */}
                <div className="w-full md:w-1/2 min-h-[620px] bg-gradient-to-bl from-amber-50 to-yellow-50 rounded-r-3xl shadow-2xl p-12 relative">
                  <div className="h-full flex flex-col justify-between">
                    {babContent[currentBab].right}

                    {/* Tombol Kembali ke Daftar (hanya muncul kalau bukan halaman 0) */}
                    {currentBab > 0 && (
                      <motion.button
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        onClick={() => setCurrentBab(0)}
                        className="mt-8 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-xl flex items-center justify-center gap-3 hover:scale-105 transition"
                      >
                        <ArrowLeft className="w-7 h-7" /> Kembali ke Daftar Materi
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Page Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
              {babContent.map((_, i) => (
                <div key={i} className={`h-3 w-3 rounded-full transition-all duration-500 ${i === currentBab ? 'bg-yellow-300 w-16' : 'bg-white/40'}`} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .perspective-1000 { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </>
  );
}