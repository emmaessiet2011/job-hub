import React from 'react';
import { APPLY_LINK } from '../constants';
import ArrowRightIcon from './icons/ArrowRightIcon';

const Header: React.FC = () => {
  const handleScrollToJobs = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <header className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Build the Future of Tech in
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-green-light to-brand-green">
          Nigeria
        </span>
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg text-brand-green-light/80 sm:text-xl md:text-2xl">
        Join our innovative team and shape the next generation of digital experiences. We're looking for passionate individuals to grow with us.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#job-listings"
          onClick={handleScrollToJobs}
          className="inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto text-base font-bold text-brand-green-darker bg-brand-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-brand-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-white"
        >
          View Open Roles
        </a>
        <a
          href={APPLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group/button inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto text-base font-semibold text-brand-white bg-transparent border border-brand-green rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-brand-green/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green"
        >
          <span>Apply Generally</span>
          <ArrowRightIcon className="ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
        </a>
      </div>
    </header>
  );
};

export default Header;