import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const SectionTitle = ({ title }) => (
  <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate mb-10 w-full">
    {title}
    <span className="flex-grow h-px bg-lightest-navy ml-4"></span>
  </h2>
);

const ExperienceCard = ({ company, role, duration, location, highlights, technologies }) => (
  <div className="bg-light-navy rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:shadow-green/10 transition-all duration-300 group border border-slate/10">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-lightest-slate group-hover:text-green transition-colors mb-2">
          {role}
        </h3>
        <p className="text-green font-mono text-lg">{company}</p>
      </div>
      <div className="flex flex-col gap-2 md:text-right">
        <div className="flex items-center gap-2 text-slate font-mono text-sm">
          <FaCalendarAlt className="text-green" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-slate text-sm">
          <FaMapMarkerAlt className="text-green" />
          <span>{location}</span>
        </div>
      </div>
    </div>

    <div className="space-y-3 mb-6">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-start gap-3">
          <span className="text-green text-lg mt-1">▹</span>
          <p className="text-slate leading-relaxed">{highlight}</p>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate/20">
      {technologies.map((tech, index) => (
        <span 
          key={index} 
          className="text-green font-mono text-xs bg-green/10 px-3 py-1.5 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      company: 'Recurziv',
      role: 'Junior Developer',
      duration: 'Nov 2024 - Dec 2025',
      location: 'Panaji, Goa',
      highlights: [
        'Developed production React applications for disaster management and inventory systems serving active enterprise clients',
        'Built real-time inventory tracking interfaces and responsive dashboards with seamless API integration',
        'Resolved critical authentication bugs and implemented token refresh mechanisms for improved user experience',
        'Created custom WordPress solutions with dynamic content blocks and theme customizations'
      ],
      technologies: ['React', 'Javscript', 'Node.js', 'WordPress', 'REST APIs']
    }
  ];

  return (
    <section id="experience" className="py-24">
      <SectionTitle title="Work Experience" />
      <div className="max-w-4xl">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
