const App = () => {
  return (
    <div>
      <header>
        <div className="container header-container">
          <div className="profile-pic">
            <img src="images/profile.jpg" alt="Foto Profil Reyvan Kalangi" />
          </div>
          <div className="header-info">
            <h1>Reyvan Kalangi</h1>
            <p>Mahasiswa IT | Universitas Klabat | Semester 5</p>
            <nav>
              <a href="#about">Tentang</a>
              <a href="#skills">Keahlian</a>
              <a href="#projects">Proyek</a>
              <a href="#experience">Pengalaman</a>
              <a href="#contact">Kontak</a>
            </nav>
          </div>
        </div>
      </header>
      <section id="about" className="section">
        <div className="container">
          <h2>Tentang Saya</h2>
          <p>
            Saya Reyvan Kalangi, mahasiswa semester 5 jurusan Teknologi
            Informasi di Universitas Klabat. Saya memiliki minat besar dalam
            pengembangan *website* dan *game*, serta senang mengerjakan proyek
            yang melibatkan pemrograman dan desain. Saat ini saya terus belajar
            untuk memperdalam kemampuan teknis dalam dua bidang tersebut.
          </p>
        </div>
      </section>
      <section id="skills" className="section">
        <div className="container">
          <h2>Keahlian</h2>
          <div className="skills-container">
            <div className="skill">
              <h3>Pemrograman</h3>
              <p>PHP, C#, C++, HTML, CSS, JavaScript, Python</p>
            </div>
            <div className="skill">
              <h3>Pengembangan Website</h3>
              <p>Front-end &amp; Back-end Web Development</p>
            </div>
            <div className="skill">
              <h3>Game Development</h3>
              <p>Dasar-dasar Game Design dan Pengembangan</p>
            </div>
            <div className="skill">
              <h3>Basis Data</h3>
              <p>MySQL, Microsoft SQL Server</p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="section">
        <div className="container">
          <h2>Proyek</h2>
          <div className="project">
            <h3>Sistem Inventory Puskesmas</h3>
            <p>
              Membuat sistem inventaris sederhana untuk Puskesmas dengan
              menggunakan PHP dan MySQL. Sistem ini dirancang untuk memudahkan
              pencatatan stok obat, alat medis, dan kebutuhan operasional
              lainnya.
            </p>
          </div>
          <div className="project">
            <h3>Website Download Gambar</h3>
            <p>
              Mengembangkan website untuk mendownload gambar bebas, dengan
              berbagai kategori seperti alam, teknologi, dan seni. Website ini
              dilengkapi fitur pencarian, kategori gambar, serta sistem unduh
              yang cepat dan efisien. Proyek ini dirancang untuk memudahkan
              pengguna dalam mencari dan mendownload gambar berkualitas tinggi
              untuk berbagai keperluan.
            </p>
          </div>
          <div className="project">
            <h3>Website Booking Carwash</h3>
            <p>
              Membangun website pemesanan layanan *carwash* online sebagai
              bagian dari tugas kuliah, menggunakan HTML, CSS, dan PHP. Website
              ini memiliki fitur pemesanan, pilihan layanan, dan sistem
              notifikasi.
            </p>
          </div>
        </div>
      </section>
      <section id="experience" className="section">
        <div className="container">
          <h2>Pengalaman</h2>
          <div className="experience">
            <h3>Asisten Praktikum Pemrograman Dasar - Universitas Klabat</h3>
            <p className="date">September 2023 - Sekarang</p>
            <p>
              Membantu mahasiswa baru dalam memahami dasar-dasar pemrograman dan
              debugging. Memberikan panduan serta bimbingan teknis pada sesi
              praktikum, khususnya dalam penggunaan bahasa pemrograman seperti
              Python dan C++.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="section">
        <div className="container">
          <h2>Kontak</h2>
          <div className="contact-info">
            <p>
              Email:{" "}
              <a href="mailto:rey11van77@gmail.com">rey11van77@gmail.com</a>
            </p>
            <p>
              Telepon: <a href="tel:+6289612243171">+62 89612243171</a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>© 2024 Reyvan Kalangi. Semua hak cipta dilindungi.</p>
          <div className="footer-links">
            <a href="#about">Tentang</a>
            <a href="#skills">Keahlian</a>
            <a href="#projects">Proyek</a>
            <a href="#experience">Pengalaman</a>
            <a href="#contact">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
