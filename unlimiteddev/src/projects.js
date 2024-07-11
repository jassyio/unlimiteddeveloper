import React, { useContext } from 'react';
import './Projects.css';
import Tetris from './tetris';
import { Theme } from './theme';

function Projects() {
  const { theme } = useContext(Theme);

  // Define your projects with GitHub links
  const projects = [
    {
      title: 'E-commerce Web App',
      description: 'A fully developed online gym apparel shop made with React, Node.js, MongoDB, and Tailwind CSS. Hosted on Vercel.',
      githubLink: 'https://github.com/yourusername/ecommerce-web-app'
    },
    {
      title: 'Weather Forecast Web App',
      description: 'A weather forecast web app made with React, CSS, and the OpenWeather API, localized in several languages.',
      githubLink: 'https://github.com/yourusername/weather-forecast-web-app'
    },
    {
      title: 'Football Website',
      description: 'A football website made with React, Node.js, and MySQL.',
      githubLink: 'https://github.com/yourusername/football-website'
    },
    {
      title: 'Dice Game',
      description: 'A dice game made with jQuery and CSS, hosted and working.',
      githubLink: 'https://github.com/yourusername/dice-game'
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className={`projects ${theme}`}>
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description} <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a></p>
          </div>
        ))}
      </div>
      <Tetris />
    </section>
  );
}

export default Projects;
