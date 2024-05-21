import React, { useState } from 'react';
import './SkillsModule.css';

const SkillsModule = ({ skill, image, description, weekPlan }) => {
  const [showWeekPlan, setShowWeekPlan] = useState(false);

  return (
    <div className="skills-module-container">
     
      <div className="skills-module-content">
      <div className="skills-module-background">
        <img src="./assets/html.png" alt="" />
      </div>
        <h2 className="skill-title">HTML</h2>
        <p className="skill-description">Learn the fundamental concepts of HTML, the markup language used to create the basic structure of web pages.</p>
        <button
          className="week-plan-toggle-button"
          onClick={() => setShowWeekPlan(!showWeekPlan)}
        >
          {showWeekPlan ? 'Hide Weekly Plan' : 'Weekly Plan'}
        </button>
        {showWeekPlan && (
          <div className="week-plan-container">
            <h3>Weekly Plan</h3>
            <ul className="week-plan-list">
              {weekPlan.map((day, index) => (
                <li key={index}>Day {index + 1}: {day}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
     
      <div className="skills-module-content">
      <div className="skills-module-background">
        <img src="./assets/css.png" alt="" />
      </div>
        <h2 className="skill-title">CSS</h2>
        <p className="skill-description">Explore styling and layout customization with CSS, which enhances the visual appeal of websites.</p>
        <button
          className="week-plan-toggle-button"
          onClick={() => setShowWeekPlan(!showWeekPlan)}
        >
          {showWeekPlan ? 'Hide Weekly Plan' : 'Weekly Plan'}
        </button>
        {showWeekPlan && (
          <div className="week-plan-container">
            <h3>Weekly Plan</h3>
            <ul className="week-plan-list">
              {weekPlan.map((day, index) => (
                <li key={index}>Day {index + 1}: {day}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    
      <div className="skills-module-content">
      <div className="skills-module-background">
        <img src="./assets/javascript.png" alt="" />
      </div>
        <h2 className="skill-title">JAVASCRIPT</h2>
        <p className="skill-description">Understand how to add interactivity and dynamic functionality to web pages using JavaScript.</p>
        <button
          className="week-plan-toggle-button"
          onClick={() => setShowWeekPlan(!showWeekPlan)}
        >
          {showWeekPlan ? 'Hide Weekly Plan' : 'Weekly Plan'}
        </button>
        {showWeekPlan && (
          <div className="week-plan-container">
            <h3>Weekly Plan</h3>
            <ul className="week-plan-list">
              {weekPlan.map((day, index) => (
                <li key={index}>Day {index + 1}: {day}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="skills-module-content">
      <div className="skills-module-background">
        <img src="./assets/react.png" alt="" />
      </div>
        <h2 className="skill-title">REACT</h2>
        <p className="skill-description">Dive into building dynamic web applications with React, a popular JavaScript library for creating user interfaces and components.</p>
        <button
          className="week-plan-toggle-button"
          onClick={() => setShowWeekPlan(!showWeekPlan)}
        >
          {showWeekPlan ? 'Hide Weekly Plan' : 'Weekly Plan'}
        </button>
        {showWeekPlan && (
          <div className="week-plan-container">
            <h3>Weekly Plan</h3>
            <ul className="week-plan-list">
              {weekPlan.map((day, index) => (
                <li key={index}>Day {index + 1}: {day}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
    </div>
    
  );
};

export default SkillsModule;