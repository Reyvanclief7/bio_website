import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>{about.title}</h2>
        <p>{about.subtitle}</p>
      </div>
    </section>
  );
};

export default About;
