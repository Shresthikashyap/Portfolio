import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const SocialLinks = () => {
  return (
    <div className="md:flex flex-col items-center fixed bottom-0 right-10 z-10">
      <ul className="flex flex-col items-center space-y-6 sm:mr-4">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.name}>
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light-slate hover:text-green transform hover:-translate-y-1 transition-all duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-px h-24 bg-light-slate mt-6"></div>
    </div>
  );
};

export default SocialLinks;
