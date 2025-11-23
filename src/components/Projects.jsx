import React from 'react';
import { PROJECTS } from '../constants';
import { SiGithub } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

const SectionTitle = ({ title }) => (
    <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate mb-10 w-full">
        {title}
        <span className="flex-grow h-px bg-lightest-navy ml-4"></span>
    </h2>
);

const ProjectCard = ({ project }) => (
  <div className="bg-light-navy rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-green/10 group">
    <div className="relative">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity" />
      {/* <div className="absolute inset-0 bg-navy/50"></div> */}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-lightest-slate group-hover:text-green transition-colors mb-4">{project.title}</h3>
      <p className="text-slate mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="text-green font-mono text-sm bg-green/10 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-4 text-light-slate pt-4 border-t border-slate/20">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">
          <SiGithub className="w-6 h-6" />
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">
            <FaExternalLinkAlt className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <SectionTitle title="My Projects" />
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
