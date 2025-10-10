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
    <div className="group flex flex-col h-full bg-white border border-gray-200/80 rounded-xl p-6 shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
      <div className="flex-grow">
        <h3 className="text-xl font-bold font-sans text-nhs-charcoal">{job.title}</h3>
        <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <LocationIcon />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <ClockIcon />
            {job.type}
          </span>
        </div>
        <p className="mt-4 text-nhs-grey-dark text-base leading-relaxed">
          {job.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-nhs-blue-dark bg-nhs-blue-light rounded-full transition-all duration-200 hover:bg-nhs-blue hover:text-white hover:shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row gap-3">
        <a
          href={TRELLO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group/trello flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 font-semibold text-nhs-blue border border-nhs-grey rounded-full shadow-sm transition-all duration-200 hover:bg-nhs-blue-light hover:border-nhs-blue"
        >
          <TrelloIcon className="transition-transform duration-200 group-hover/trello:scale-110" />
          <span>View Tasks</span>
        </a>
        <a
          href={APPLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group/button flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 font-bold text-white bg-nhs-blue rounded-full shadow-sm transition-colors duration-200 hover:bg-nhs-blue-dark text-center"
        >
          <span>Submit Task</span>
          <ArrowRightIcon className="transition-transform duration-200 group-hover/button:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default JobCard;