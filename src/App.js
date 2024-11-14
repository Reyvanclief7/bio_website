import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";



const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
