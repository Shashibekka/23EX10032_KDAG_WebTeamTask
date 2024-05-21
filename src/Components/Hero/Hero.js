import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>'Welcome to our platform!</h1>
        <p className='text-color'>
        “Welcome to A2Z Academy! 🚀 Learn coding languages and skills from industry experts. Whether you’re a beginner or an experienced developer, we’ve got you covered. Let’s code together!”

Feel free to customize it further to match your website’s tone and style! 😊👩‍💻
        </p>
        <div className="button-container">
          <button className="hero-button student-button">I am a Student</button>
          <button className="hero-button educator-button">I am an Educator</button>
        </div>
      </div>
      <div className="hero-background" />
    </div>
  );
};

export default Hero;