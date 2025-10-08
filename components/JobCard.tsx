import React from 'react';
import { Job } from '../types';
import { TRELLO_LINK, APPLY_LINK } from '../constants';
import LocationIcon from './icons/LocationIcon';
import ClockIcon from './icons/ClockIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import TrelloIcon from './icons/TrelloIcon';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:border-brand-green hover:-translate-y-1 hover:shadow-xl">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-brand-green-darker">{job.title}</h3>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <LocationIcon />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <ClockIcon />
            {job.type}
          </span>
        </div>
        <p className="mt-4 text-gray-700 text-base leading-relaxed">
          {job.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-brand-green-darker bg-brand-green-light/60 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
        <a
          href={TRELLO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 font-semibold text-brand-green-dark bg-transparent border border-brand-green-dark rounded-lg shadow-sm transition-colors duration-200 hover:bg-brand-green/10"
        >
          <TrelloIcon />
          <span>View Details</span>
        </a>
        <a
          href={APPLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group/button flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 font-bold text-white bg-brand-green rounded-lg shadow-sm transition-colors duration-200 hover:bg-brand-green-dark"
        >
          <span>Apply Now</span>
          <ArrowRightIcon className="transition-transform duration-200 group-hover/button:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default JobCard;