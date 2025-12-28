'use client'; // Karena kita menggunakan state dan event handler

import { useState } from 'react';
import styles from './buku.module.css'; // File CSS terpisah untuk styling

export default function BukuDongeng() {
  const [currentPage, setCurrentPage] = useState(0);

  // Data cerita dongeng (bisa diganti dengan cerita Anda)
  const pages = [
    {
      title: "Halaman 1: Pengantar",
      text: "Dahulu kala, di sebuah hutan yang hijau, hiduplah seekor kelinci kecil bernama Kiki. Kiki sangat suka berpetualang.",
      image: "/images/kelinci.jpg", // Ganti dengan path gambar Anda
    },
    {
      title: "Halaman 2: Petualangan Dimulai",
      text: "Suatu hari, Kiki menemukan sebuah sungai misterius. 'Aku harus menyeberang!' kata Kiki dengan berani.",
      image: "/images/sungai.jpg",
    },
    {
      title: "Halaman 3: Pertemuan dengan Teman",
      text: "Di seberang sungai, Kiki bertemu dengan burung kecil yang ramah. Bersama-sama, mereka menjelajahi hutan.",
      image: "/images/burung.jpg",
    },
    {
      title: "Halaman 4: Akhir Cerita",
      text: "Akhirnya, Kiki pulang ke rumah dengan hati bahagia. Pelajaran dari cerita ini: Persahabatan membuat petualangan lebih menyenangkan!",
      image: "/images/rumah.jpg",
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.bookContainer}>
      <h1 className={styles.bookTitle}>Buku Dongeng Animasi</h1>
      <div className={styles.book}>
        <div className={`${styles.page} ${styles.leftPage}`}>
          {currentPage > 0 && (
            <button onClick={prevPage} className={styles.navButton}>
              ← Halaman Sebelumnya
            </button>
          )}
        </div>
        <div className={`${styles.page} ${styles.rightPage} ${styles.animate}`}>
          <h2>{pages[currentPage].title}</h2>
          <img src={pages[currentPage].image} alt="Ilustrasi" className={styles.image} />
          <p>{pages[currentPage].text}</p>
        </div>
        <div className={`${styles.page} ${styles.leftPage}`}>
          {currentPage < pages.length - 1 && (
            <button onClick={nextPage} className={styles.navButton}>
              Halaman Selanjutnya →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
