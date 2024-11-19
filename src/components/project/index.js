import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";

const Project = () => {

  const [project, setProject] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const projectRef = ref(db, "project");
    onValue(projectRef, (snapshot) => {
      const data = snapshot.val();
      setProject(data);
    });
  }, []);
  return (
    <section id="projects" className="section">
    <div className="container">
      <h2>{project.title}</h2>
      <div className="project">
        <h3>{project.text1}</h3>
        <p>
          {project.text2}
        </p>
      </div>
      <div className="project">
        <h3>{project.text3}</h3>
        <p>
          {project.text4}
        </p>
      </div>
      <div className="project">
        <h3>{project.text5}</h3>
        <p>
         {project.text6}
        </p>
      </div>
    </div>
  </section>
  )
}

export default Project;