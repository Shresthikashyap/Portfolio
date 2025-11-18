
import React from 'react';
import { SKILLS } from '../constants';
import { FaUser, FaCode, FaFolderOpen, FaEnvelope } from "react-icons/fa"; // example icons

const SectionTitle = ({ title }) => (
    <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate mb-10 w-full">
        {title}
        <span className="flex-grow h-px bg-lightest-navy ml-4"></span>
    </h2>
);

const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-light-navy rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-green/20">
    <div className="w-16 h-16 mb-3 text-green">{skill.icon}</div>
    <span className="font-mono text-lightest-slate">{skill.name}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <SectionTitle title="My Skills"/>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
