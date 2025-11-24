import React from 'react';
import CuteCharacter from '../assets/cute-dev.png'; // replace with your actual image path

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row justify-center items-center pt-24 px-6"
    >
      {/* Background gradient + decorative blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
    
      <div className="md:w-2/3 relative max-w-3xl z-10 text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-lightest-slate tracking-tight animate-fadeInUp">
          Shresthi Kashyap
        </h1>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-green mt-4 animate-fadeInUp delay-200">
          Building End-to-End Web Applications
        </h2>
        <p className="text-slate text-lg mt-6 max-w-xl leading-relaxed animate-fadeInUp delay-400 mx-auto md:mx-0">
          I'm a full stack MERN developer passionate about designing and deploying modern web solutions.
          From crafting responsive front-end interfaces with React to architecting secure back-end APIs
          with Node.js and Express, I enjoy bringing ideas to life with clean, scalable code. With MongoDB
          powering data and a focus on performance, I aim to deliver seamless user experiences and robust
          applications. Always curious and driven, I'm eager to learn, adapt, and contribute to impactful
          projects.
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 px-8 py-4 border border-green text-green rounded-xl font-mono text-lg hover:bg-green hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-green/50 animate-fadeInUp delay-600"
        >
          Get In Touch
        </a>
      </div>
      
      <div className="hidden md:flex md:w-1/2 justify-center items-center z-10">
        <div className="w-96 h-full rounded-full overflow-hidden">
          <img
            src={CuteCharacter}
            alt="Cute character"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
