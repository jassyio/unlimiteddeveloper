import React, { useContext } from 'react';
import './CertificatesAndAwards.css';
import Tetris from './tetris'; // Assuming Tetris component is imported correctly
import { Theme } from './theme'; // Assuming Theme context is imported correctly

function CertificatesAndAwards() {
  const { theme } = useContext(Theme);

  return (
    <section id="certificates-awards" className={`certificates-awards ${theme}`}>
      <h2>Certificates and Awards</h2>
      <div className="content">
        <div className="certificates">
          <h3>Certificates</h3>
          <ul>
            <li>Fullstack Software Engineering - ALX School</li>
            <li>Frontend Specialization - ALX School</li>
            <li>JavaScript Certificate - Udemy</li>
            <li>Web Design Certificate - Udemy</li>
          </ul>
        </div>
        <div className="awards">
          <h3>Awards</h3>
          <ul>
            <li>Creativity Award - Most Creative Developer in Class</li>
            <li>Geeks Award - Novice Developer, ALX Community</li>
          </ul>
        </div>
      </div>
      <Tetris />
    </section>
  );
}

export default CertificatesAndAwards;