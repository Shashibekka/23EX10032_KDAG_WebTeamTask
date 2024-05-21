import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import SkillsModule from './Components/SkillsModule/SkillsModule';
import Page from './Components/Page/Page';

const skills = [
  {
    skill: 'HTML',
    image: 'html.png',
    description: 'Learn HTML basics and advanced topics',
    weekPlan: ['Introduction', 'HTML Basics', 'HTML Tables', 'HTML Forms', 'HTML Semantics', 'HTML Multimedia', 'HTML Canvas'], 
  }
]


function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <h2 className='courses'>Our Popular Courses</h2>
      <SkillsModule/>
      <Page/>
    </div>
  );
}

export default App;