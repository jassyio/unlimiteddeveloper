import React, { useContext } from 'react';
import './Home.css';
import Tetris from './tetris';
import { Theme } from './theme';

const Home = () => {
  const { theme } = useContext(Theme);

  return (
    <div className={`home ${theme}`}>
      <section className="welcome">
        <h1>Welcome to Unlimited Developer</h1>
        <p className="tagline">Your Partner in Crafting Exceptional Web Solutions!</p>
      </section>
      
      <section className="mission-vision">
        <div className="mission">
          <h2>Mission</h2>
          <p>To deliver innovative and reliable web solutions that exceed expectations and drive digital transformation.</p>
        </div>
        <div className="vision">
          <h2>Vision</h2>
          <p>To be a trailblazer in web development, setting benchmarks for creativity, reliability, and client satisfaction.</p>
        </div>
      </section>
      
      <section className="hire-me">
        <h2>Hire Me</h2>
        <p>Ready to elevate your digital presence? <a href="/contact">Contact me</a> to collaborate on your next project.</p>
      </section>
      
      {theme !== 'classic' && <Tetris />}
    </div>
  );
};

export default Home;
