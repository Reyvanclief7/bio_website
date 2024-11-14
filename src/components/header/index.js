const header = () => {
  return (
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
  )
}

export default header;