
import React from 'react';
import BriefcaseIcon from './icons/BriefcaseIcon';

const Header: React.FC = () => {
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
    <header className="flex flex-col items-center justify-center text-center min-h-[50vh] py-20 sm:py-24 lg:py-32">
      <div className="animate-fade-in-up max-w-4xl" style={{ opacity: 0 }}>
        <span className="text-white/90 font-semibold">RadAssist AI Nigeria Hub</span>
        <h1 className="mt-4 text-4xl font-sans font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Empowering Nigerian Students to Innovate at the Heart of Healthcare
        </h1>
        <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
          Join Nigeria's brightest minds in building cutting-edge AI solutions for the NHS. Gain real-world experience while contributing to global healthcare innovation.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#job-listings"
            onClick={handleScrollToJobs}
            className="group inline-flex items-center justify-center gap-x-2.5 px-8 py-4 text-base font-bold text-white bg-nhs-blue rounded-full shadow-lg transition-all duration-300 hover:bg-nhs-blue-dark hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nhs-blue"
          >
            <span>View Open Roles</span>
            <BriefcaseIcon className="transition-transform duration-300 group-hover:rotate-12" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
