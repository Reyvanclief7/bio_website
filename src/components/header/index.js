import { getDatabase, ref, onValue } from "firebase/database";
import React,{ useEffect, useState } from "react";

const Header = () => {

  const [header, setHeader] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  return (
    <header>
    <div className="container header-container">
      <div className="profile-pic">
        <img src="images/profile.jpg" alt="Foto Profil Reyvan Kalangi" />
      </div>
      <div className="header-info">
        <h1>{header.name}</h1>
        <p>{header.pendidikan}</p>
        <nav>
          <a href="#about">{header.nav.tentang}</a>
          <a href="#skills">{header.nav.skills }</a>
          <a href="#projects">{header.nav.projects}</a>
          <a href="#experience">{header.nav.experience}</a>
          <a href="#contact">{header.nav.contact}</a>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header;