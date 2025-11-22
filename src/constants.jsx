
  import React from 'react';
  import { 
    SiGithub,
    SiLinkedin,
    SiReact,
    SiTypescript, 
    SiJavascript, 
    SiNodedotjs, 
    SiTailwindcss, 
    SiHtml5, 
    SiCss3, 
    SiFigma 
  } from 'react-icons/si';

  export const SOCIAL_LINKS = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: <SiGithub className="h-6 w-6" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <SiLinkedin className="h-6 w-6" />,
    },
  ];

export const SKILLS = [
  { name: 'React', icon: <SiReact className="w-12 h-12 text-cyan-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-blue-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12 text-yellow-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="w-12 h-12 text-green-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12 text-cyan-500" /> },
  { name: 'HTML5', icon: <SiHtml5 className="w-12 h-12 text-orange-600" /> },
  { name: 'CSS3', icon: <SiCss3 className="w-12 h-12 text-blue-500" /> },
  { name: 'Figma', icon: <SiFigma className="w-12 h-12 text-red-500" /> },
];

  export const PROJECTS = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce website with product listings, a shopping cart, and a checkout process. Built with the MERN stack.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      imageUrl: '/techmart.png',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool that helps teams organize their work. Features include drag-and-drop boards and real-time updates.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      imageUrl: 'https://picsum.photos/seed/project2/400/300',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my skills and projects. Designed to be clean, modern, and fully responsive.',
      tags: ['React', 'TypeScript', 'Vite'],
      imageUrl: 'https://picsum.photos/seed/project3/400/300',
      repoUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that fetches and displays current weather data and forecasts for any city using a third-party API.',
      tags: ['JavaScript', 'HTML', 'CSS', 'API'],
      imageUrl: 'https://picsum.photos/seed/project4/400/300',
      liveUrl: '#',
      repoUrl: '#',
    },
  ];
