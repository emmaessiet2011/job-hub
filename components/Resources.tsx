import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import SectionHeader from './SectionHeader';
import ArrowRightIcon from './icons/ArrowRightIcon';
import AiIcon from './icons/AiIcon';
import CloudIcon from './icons/CloudIcon';
import NetworkIcon from './icons/NetworkIcon';

const resources = [
    {
        icon: <AiIcon />,
        title: 'AI in Healthcare Training',
        description: 'Access our curated resources and training materials on AI applications in healthcare, specifically tailored for the Nigerian context.',
        link: '#',
    },
    {
        icon: <CloudIcon />,
        title: 'Azure Cloud Learning Path',
        description: 'Microsoft Azure training resources and cloud computing fundamentals for healthcare technology applications.',
        link: '#',
    },
    {
        icon: <NetworkIcon />,
        title: 'Healthcare Innovation Network',
        description: 'Connect with other healthcare innovators, clinicians, and technology experts across Nigeria.',
        link: '#',
    },
];

const Resources: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

    return (
        <section ref={sectionRef}>
            <SectionHeader
                title="Resources & Learning"
                subtitle="Access learning materials, training resources, and join our community of healthcare technology innovators in Nigeria."
                className={`transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                    <div
                        key={resource.title}
                        className={`group flex flex-col h-full bg-white/80 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-white/40 hover:-translate-y-2 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${200 + index * 150}ms` }}
                    >
                        <div className="flex-grow">
                             <div className="flex items-center justify-center h-16 w-16 bg-nhs-blue-light rounded-full mb-6 group-hover:bg-nhs-blue transition-colors duration-300">
                                {React.cloneElement(resource.icon as React.ReactElement, { className: 'h-8 w-8 text-nhs-blue group-hover:text-white transition-colors duration-300' })}
                            </div>
                            <h3 className="text-xl font-bold font-sans text-nhs-charcoal">{resource.title}</h3>
                            <p className="mt-4 text-nhs-grey-dark text-base leading-relaxed">
                                {resource.description}
                            </p>
                        </div>
                        <div className="mt-6">
                            <a
                                href={resource.link}
                                className="group/button inline-flex items-center font-bold text-nhs-blue hover:text-nhs-blue-dark transition-colors duration-200"
                            >
                                <span>Explore Resources</span>
                                <ArrowRightIcon className="ml-2 transition-transform duration-200 group-hover/button:translate-x-1" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Resources;