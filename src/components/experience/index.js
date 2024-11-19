import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";

const Experience = () => {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const experienceref = ref(db, "experience");
    onValue(experienceref, (snapshot) => {
      const data = snapshot.val();
      setExperience(data);
    });
  }, []);
  return (
    <section id="experience" className="section">
    <div className="container">
      <h2>{experience.title}</h2>
      <div className="experience">
        <h3>{experience.text1}</h3>
        <p className="date">{experience.text3}</p>
        <p>
          {experience.text4}
        </p>
      </div>
    </div>
  </section>
  )
}

export default Experience;