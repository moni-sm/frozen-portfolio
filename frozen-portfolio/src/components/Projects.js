import React, { useEffect, useState } from 'react';
import '../App.css'

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects from the backend
  useEffect(() => {
    fetch('https://meandmyself.onrender.com/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  // Filter projects by type
  const projectItems = projects.filter((project) => project.type === 'project');
  const practiceItems = projects.filter((project) => project.type === 'practice');

  return (
    <section className="projects">
      <h1>My Projects</h1>

      {/* Projects Row */}
      <div className="projects-row">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectItems.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => window.open(project.deployedUrl, '_blank')}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Projects Row */}
      <div className="projects-row">
        <h2>Practice Projects</h2>
        <div className="projects-grid">
          {practiceItems.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => window.open(project.deployedUrl, '_blank')}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
