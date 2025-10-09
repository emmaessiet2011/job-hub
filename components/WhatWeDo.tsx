import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import BuildingIcon from './icons/BuildingIcon';
import GraduationCapAltIcon from './icons/GraduationCapAltIcon';
import CheckCircleIcon from './icons/CheckCircleIcon';

const features = [
    {
        icon: <BuildingIcon />,
        iconBg: 'bg-brand-teal-light',
        title: 'Support NHS-Focused AI',
        points: [
            'Research and development for NHS radiology solutions',
            'AI prototyping and testing for healthcare applications',
            'Medical data preparation and analysis support',
        ],
    },
    {
        icon: <GraduationCapAltIcon />,
        iconBg: 'bg-brand-gold/20',
        title: 'Create Opportunities',
        points: [
            'Job creation for Nigerian IT and medical students',
            'Real-world experience in healthcare technology',
            'Global collaboration and innovation partnerships',
        ],
    },
];

const WhatWeDo: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

    return (
        <section ref={sectionRef}>
            <div
                className={`text-center transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-brand-charcoal">
                    What We Do
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">
                    Supporting healthcare innovation while building local talent.
                </p>
            </div>
            <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={feature.title}
                        className={`bg-brand-background rounded-3xl p-8 md:p-10 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-xl ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${200 + index * 150}ms` }}
                    >
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${feature.iconBg}`}>
                            {feature.icon}
                        </div>
                        <h3 className="mt-6 text-2xl font-bold font-sans text-brand-charcoal">{feature.title}</h3>
                        <ul className="mt-4 space-y-3 text-brand-gray">
                            {feature.points.map((point) => (
                                <li key={point} className="flex items-start">
                                    <CheckCircleIcon />
                                    <span className="ml-3 text-base">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatWeDo;
