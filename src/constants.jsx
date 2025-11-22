
  import React from 'react';
  import { 
    SiGithub,
    SiLinkedin,
    SiReact,
    SiNextdotjs,
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
  { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-black dark:text-white" /> },
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
    title: 'Expensify',
    description: 'A smart and intuitive app to track, categorize, and manage your expenses for better financial control.',
    tags: ['React', 'Redux Toolkit', 'Firebase', 'MongoDB', 'Express', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
    liveUrl: 'https://expensify-j424.onrender.com',
    repoUrl: 'https://github.com/Shresthikashyap/Expensify/tree/master',
  },
  {
    title: 'Circle',
    description: 'A vibrant group chat app designed to keep your conversations close, connected, and effortlessly fun.',
    tags: ['React', 'Socket.io', 'MySQL', 'Sequelize', 'Express', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
    liveUrl: 'https://circle-aj73.onrender.com',
    repoUrl: 'https://github.com/Shresthikashyap/Circle/tree/main',
  },
  {
    title: 'Techmart',
    description: 'TechMart is your one-stop online destination for cutting-edge gadgets, electronics, and smart lifestyle solutions.',
    tags: ['Next.js', 'Prisma', 'MySQL', 'TypeScript', 'Zustand'],
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
    liveUrl: 'https://techmart-6690.onrender.com',
    repoUrl: 'https://github.com/Shresthikashyap/Techmart/tree/main',
  },
  {
    title: 'Vibify',
    description: 'A sleek music streaming app that brings your favorite vibes to life—anytime, anywhere.',
    tags: ['React', 'Socket.io', 'MongoDB', 'Express', 'Clerk Auth'],
    imageUrl: 'https://picsum.photos/seed/project4/400/300',
    liveUrl: 'https://vibify-xx3f.onrender.com',
    repoUrl: 'https://github.com/Shresthikashyap/Vibify/tree/master',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects. Designed to be clean, modern, and fully responsive.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
    liveUrl: 'https://portfolio-7cdw.onrender.com',
    repoUrl: 'https://github.com/Shresthikashyap/Portfolio/tree/main',
  },
  {
    title: 'Stock Tracker App',
    description: 'A sleek music streaming app that brings your favorite vibes to life—anytime, anywhere.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/project4/400/300',
    liveUrl: 'https://stock-tracker-app.onrender.com',
    repoUrl: 'https://github.com/Shresthikashyap/Stock-Tracker-App-mern-/tree/main',
  },
];
