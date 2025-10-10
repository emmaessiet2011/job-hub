import React, { useState, useEffect, useRef } from 'react';
import { JOB_ROLES, FILTER_OPTIONS } from '../constants';
import JobCard from './JobCard';
import { Job, FilterType } from '../types';
import JobCardSkeleton from './JobCardSkeleton';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import SectionHeader from './SectionHeader';

const JobListing: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [activeFilter, setActiveFilter] = useState<FilterType>('All');
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.05, triggerOnce: true });

    useEffect(() => {
        const timer = setTimeout(() => {
            setJobs(JOB_ROLES);
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const filteredJobs = jobs.filter(job =>
        activeFilter === 'All' ? true : job.type === activeFilter
    );

    return (
        <section ref={sectionRef}>
            <SectionHeader
                title="Available Roles"
                subtitle="We're looking for talented individuals to join our mission. Explore the roles below."
                className={`transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            />

            <div
                className={`mt-10 border-b border-gray-200 transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
            >
                <div className="-mb-px flex justify-start space-x-6 sm:space-x-8 sm:justify-center overflow-x-auto" aria-label="Tabs">
                    {FILTER_OPTIONS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-semibold text-base transition-all duration-200 focus:outline-none transform hover:-translate-y-0.5 ${
                                activeFilter === filter
                                    ? 'border-nhs-blue text-nhs-blue'
                                    : 'border-transparent text-nhs-grey-dark hover:border-gray-300 hover:text-nhs-charcoal'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {isLoading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <JobCardSkeleton key={index} />
                    ))
                ) : (
                    filteredJobs.map((job, index) => (
                        <div
                            key={job.id}
                            className={`transition-all duration-500 ease-out ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <JobCard job={job} />
                        </div>
                    ))
                )}
            </div>
            {!isLoading && filteredJobs.length === 0 && (
                 <div
                    className={`mt-12 col-span-full text-center text-nhs-grey-dark transition-opacity duration-500 ease-out ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: '300ms' }}
                 >
                     <p className="text-lg font-semibold">No job openings found for "{activeFilter}".</p>
                     <p className="mt-2">Please check back later or view all openings.</p>
                 </div>
            )}
        </section>
    );
};

export default JobListing;