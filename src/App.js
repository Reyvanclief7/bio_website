import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Project />

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
