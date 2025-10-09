import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const stats = [
    {
        value: '50+',
        title: 'Active Students',
        description: 'Talented individuals working on healthcare AI',
    },
    {
        value: '6+',
        title: 'Role Types',
        description: 'Diverse opportunities across tech disciplines',
    },
    {
        value: 'NHS',
        title: 'Global Impact',
        description: 'Supporting UK healthcare innovation',
    },
];

const CommunityStats: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

    return (
        <section ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
                className={`text-center transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-brand-charcoal">
                    Our Growing Community
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">
                    Nigerian students leading the charge in healthcare AI innovation.
                </p>
            </div>
            <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8">
                {stats.map((stat, index) => (
                    <div
                        key={stat.title}
                        className={`text-center relative px-8 transition-all duration-700 ease-out hover:scale-105 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${200 + index * 150}ms` }}
                    >
                        <p className="text-5xl sm:text-6xl font-extrabold font-sans text-brand-teal">{stat.value}</p>
                        <p className="mt-2 text-xl font-bold font-sans text-brand-charcoal">{stat.title}</p>
                        <p className="mt-2 text-base text-brand-gray">{stat.description}</p>
                        {index < stats.length - 1 && (
                            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-200" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CommunityStats;
