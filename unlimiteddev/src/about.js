import React, { useContext } from 'react';
import './About.css';
import { Theme } from './theme'; // Adjust import based on your folder structure
import Tetris from './tetris'; // Assuming Tetris component is already created

const About = () => {
  const { theme } = useContext(Theme); // Access current theme from context

  return (
    <div className={`about ${theme}`}>
      <h2>About Me</h2>
      <p>
      As a passionate web developer, I thrive on crafting elegant and functional web applications that exceed expectations. With a keen eye for design and a commitment to clean, efficient code, I specialize in creating seamless user experiences. My journey in software engineering has equipped me with expertise in HTML, CSS, JavaScript, React, and Node.js, complemented by a proficiency in Git and database management. I am dedicated to continuous learning, embracing new technologies to deliver innovative solutions. Ready to contribute creativity and technical acumen to your team, I am eager to tackle new challenges and drive digital excellence.
      </p>
      {theme !== 'classic' && <Tetris />} {/* Show Tetris if theme is not classic */}
    </div>
  );
};

export default About;
