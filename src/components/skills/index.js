import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";

const Skills = () => {

  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const skillsRef = ref(db, "skills");
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      setSkills(data);
    });
  }, []);
  return (
    <section id="skills" className="section">
    <div className="container">
      <h2>{skills.title}</h2>
      <div className="skills-container">
        <div className="skill">
          <h3>{skills.text1}</h3>
          <p>{skills.text2}</p>
        </div>
        <div className="skill">
          <h3>{skills.text3}</h3>
          <p>{skills.text4}</p>
        </div>
        <div className="skill">
          <h3>{skills.text5}</h3>
          <p>{skills.text6}</p>
        </div>
        <div className="skill">
          <h3>{skills.text7}</h3>
          <p>{skills.text8}</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills