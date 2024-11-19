import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);
  return (
    <footer>
    <div className="container">
      <p>{footer.title}</p>
      <div className="footer-links">
        <a href="#about">{footer.about}</a>
        <a href="#skills">{footer.kontak}</a>
        <a href="#projects">{footer.project}</a>
        <a href="#experience">{footer.experience}</a>
        <a href="#contact">{footer.contact}</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer;