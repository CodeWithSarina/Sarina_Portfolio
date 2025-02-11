import React from 'react';
import './Project.css';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully-functional e-commerce website built with React, Node.js, and MongoDB for the backend.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      link: "https://github.com/your-project-link",
    },
    {
      title: "Fitness Tracker App",
      description: "A mobile app to track fitness goals, workouts, and nutrition built with React Native and Firebase.",
      technologies: ["React Native", "Expo", "Firebase"],
      link: "https://github.com/your-project-link",
    },
    {
      title: "Personal Portfolio",
      description: "A personal portfolio website built with React.js to showcase projects and skills.",
      technologies: ["React", "CSS", "HTML"],
      link: "https://github.com/your-project-link",
    },
    {
      title: "Blog Platform",
      description: "A blogging platform where users can create and manage posts, built with Node.js and MongoDB.",
      technologies: ["Node.js", "Express", "MongoDB", "Handlebars"],
      link: "https://github.com/your-project-link",
    },
    {
      title: "Chat Application",
      description: "A real-time chat application using WebSockets, React.js, and Node.js.",
      technologies: ["React", "Node.js", "WebSocket", "Express"],
      link: "https://github.com/your-project-link",
    },
  ];

  return (
    <div className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span className="tech" key={idx}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
