import React, { useContext } from 'react';
import './Skills.css';
import Tetris from './tetris'; // Assuming Tetris component is imported correctly
import { Theme } from './theme'; // Assuming Theme context is imported correctly

function Skills() {
  const { theme } = useContext(Theme);

  return (
    <section id="skills" className={`skills ${theme}`}>
      <h2>Skills</h2>
      <div className="skills-list">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>React</li>
          <li>jQuery</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>Git and GitHub</li>
          <li>Python AI</li>
        </ul>
      </div>
      <p>I also have experience in various frameworks and tools, and I am a continuous learner to stay updated.</p>
      <Tetris />
    </section>
  );
}

export default Skills;
