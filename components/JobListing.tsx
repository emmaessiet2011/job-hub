import React, { useState, useEffect } from 'react';
import { JOB_ROLES, FILTER_OPTIONS } from '../constants';
import JobCard from './JobCard';
import { Job, FilterType } from '../types';
import JobCardSkeleton from './JobCardSkeleton';

const JobListing: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [activeFilter, setActiveFilter] = useState<FilterType>('All');

    useEffect(() => {
        // Simulate fetching data with a timeout
        const timer = setTimeout(() => {
            setJobs(JOB_ROLES);
            setIsLoading(false);
        }, 1500); // 1.5 second delay

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    const filteredJobs = jobs.filter(job =>
        activeFilter === 'All' ? true : job.type === activeFilter
    );

    return (
        <section id="job-listings" className="mt-20 sm:mt-28">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-green-darker">
                    Current Openings
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    We're looking for talented individuals to join our mission. Explore the roles below.
                </p>
            </div>

            <div className="mt-8 flex justify-center flex-wrap gap-2 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
                {FILTER_OPTIONS.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green ${
                            activeFilter === filter
                                ? 'bg-brand-green text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {isLoading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <JobCardSkeleton key={index} />
                    ))
                ) : (
                    filteredJobs.map((job, index) => (
                        <div key={job.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}>
                            <JobCard job={job} />
                        </div>
                    ))
                )}
            </div>
            {!isLoading && filteredJobs.length === 0 && (
                 <div className="mt-12 text-center text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                     <p className="text-lg font-semibold">No job openings found for "{activeFilter}".</p>
                     <p className="mt-2">Please check back later or view all openings.</p>
                 </div>
            )}
        </section>
    );
};

export default JobListing;