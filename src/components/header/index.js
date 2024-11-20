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
        <img src={`data:image/jpeg;base64,${header.image}`} alt="Foto Profil Reyvan Kalangi" />
      </div>
      <div className="header-info">
        <h1>{header.name}</h1>
        <p>{header.pendidikan}</p>
        <nav>
          <a href="#about">{header.tentang}</a>
          <a href="#skills">{header.skills }</a>
          <a href="#projects">{header.projects}</a>
          <a href="#experience">{header.experience}</a>
          <a href="#contact">{header.contact}</a>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header;