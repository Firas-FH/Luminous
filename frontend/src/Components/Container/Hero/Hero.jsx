import React from 'react';
import '../Hero/HeroStyle.css';

function Hero() {
  return (
    <section className="hero">
        <div className="hero-text">
          <h1>Shine brighter with Luminous</h1>
          <p>Your ultimate partner in crafting extraordinary events and unforgettable experiences.</p>
          <button className="get-started">Get Started
            <img src={'./Picture/Right-Up-Arrow.svg'} alt=''></img>
          </button>
        </div>
        <div className="hero-image">
          <img src={'./Picture/hero1.png'} alt="Balloon arch" />
          <img src={'./Picture/hero2.png'} alt="Balloon arch" />
        </div>
    </section>
  );
}

export default Hero;