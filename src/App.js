import React, { useEffect, useState } from 'react';
import './App.css';
import Portfolio from './components/Portfolio';

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const result = await fetch('/projects.json');
      const resultJson = await result.json();
      setProjects(resultJson);
    };
    fetchProjects();
  }, []);
  return <Portfolio projects={projects} />;
}

export default App;
