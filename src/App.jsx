
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SocialLinks />
      <main className="container  px-6 md:px-12 lg:px-24 flex-grow">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
