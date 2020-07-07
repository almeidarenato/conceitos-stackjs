import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";

import background from "./assets/background.jpeg";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end web",
  ]);

  const handleProject = () => {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    console.log(projects);
  };

  return (
    <>
      <Header title="Homepage" />

      <img src={background} alt="Background" />
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={handleProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
