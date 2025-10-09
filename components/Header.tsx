import React, { useState, useEffect } from 'react';
import BriefcaseIcon from './icons/BriefcaseIcon';
import HeroImage from './HeroImage';

const slidingWords = [
  'Heart of Care',
  'Health\'s Future',
  'Nexus of AI',
  'Patient Service',
];

const Header: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % slidingWords.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScrollToJobs = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const element = document.getElementById('job-listings');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 sm:py-24 lg:py-28">
      <div className="text-center lg:text-left animate-fade-in-up" style={{ opacity: 0 }}>
        <span className="text-brand-teal font-semibold">NIGERIA HUB</span>
        <h1 className="mt-4 text-4xl font-serif font-bold tracking-tight text-brand-charcoal sm:text-5xl md:text-6xl lg:text-7xl">
          Innovating at the
          <span className="block text-brand-teal h-[1.2em] overflow-hidden">
            <span
              key={currentWordIndex}
              className="flex justify-center lg:justify-start"
            >
              {slidingWords[currentWordIndex].split('').map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="animate-character-in inline-block"
                  style={{
                    opacity: 0,
                    animationDelay: `${50 * index}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </span>
        </h1>
        <p className="mt-6 text-lg text-brand-gray max-w-xl mx-auto lg:mx-0">
          Join Nigeria's brightest minds in building cutting-edge AI solutions for the NHS. Gain real-world experience while contributing to global healthcare innovation.
        </p>
        <div className="mt-10 flex justify-center lg:justify-start">
          <a
            href="#job-listings"
            onClick={handleScrollToJobs}
            className="group inline-flex items-center justify-center gap-x-2.5 px-8 py-4 text-base font-bold text-brand-charcoal bg-brand-gold rounded-full shadow-lg transition-all duration-300 hover:bg-brand-gold-dark hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold"
          >
            <span>View Open Roles</span>
            <BriefcaseIcon className="transition-transform duration-300 group-hover:rotate-12" />
          </a>
        </div>
      </div>
      <div className="hidden lg:block animate-hero-graphic-in" style={{ opacity: 0 }}>
        <HeroImage />
      </div>
    </header>
  );
};

export default Header;