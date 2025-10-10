
import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import SectionHeader from './SectionHeader';
import CheckCircleIcon from './icons/CheckCircleIcon';

const whyJoinUsPoints = [
    'Work on meaningful projects that directly impact healthcare delivery',
    'Learn from experienced professionals in AI and healthcare technology',
    'Access to Microsoft Azure cloud resources and training',
    'Be part of Nigeria\'s growing healthtech innovation ecosystem',
];

const WhatWeDo: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

    return (
        <section ref={sectionRef}>
            <SectionHeader
                title="About Nigeria Hub"
                subtitle="We're building a community of innovators, developers, and healthcare professionals working together to create AI-powered solutions that make healthcare safer, faster, and more accessible across Nigeria."
                className={`transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            />
            <div className="mt-16 max-w-7xl mx-auto space-y-20 md:space-y-28">
                {/* Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div
                        className={`transition-all duration-700 ease-out ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                        }`}
                        >
                        <img
                            src="https://i.ibb.co/gbg4pfDF/Generated-Image-October-10-2025-1-52-PM.png"
                            alt="A diverse team of professionals collaborating around a table, engaged in a discussion."
                            className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div
                        className={`transition-all duration-700 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                        >
                        <h3 className="text-3xl font-bold font-sans text-nhs-charcoal">Our Mission</h3>
                        <p className="mt-4 text-lg text-nhs-grey-dark leading-relaxed">
                            To empower Nigerian clinicians with simple, smart AI tools that enhance patient care, reduce diagnostic errors, and improve healthcare outcomes across the country.
                        </p>
                    </div>
                </div>

                {/* Why Join Us Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div
                        className={`lg:order-last transition-all duration-700 ease-out ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                        }`}
                        >
                        <img
                            src="https://i.ibb.co/JwXKsTMG/Generated-Image-October-10-2025-1-57-PM.png"
                            alt="A medical professional using an advanced AI-powered interface for diagnostics."
                            className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div
                        className={`lg:order-first transition-all duration-700 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                        >
                        <h3 className="text-3xl font-bold font-sans text-nhs-charcoal">Why Join Us?</h3>
                        <ul className="mt-4 space-y-4 text-nhs-grey-dark">
                            {whyJoinUsPoints.map((point) => (
                                <li key={point} className="flex items-start">
                                    <div className="flex-shrink-0 pt-1">
                                      <CheckCircleIcon />
                                    </div>
                                    <span className="ml-3 text-base">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div
                    className={`text-center transition-all duration-700 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '400ms' }}
                >
                    <div className="relative inline-block bg-white p-8 md:p-10 rounded-2xl border border-nhs-grey-light shadow-lg">
                         <h3 className="text-2xl font-bold font-sans text-nhs-charcoal">Our Vision</h3>
                        <blockquote className="mt-4 text-xl font-serif text-nhs-charcoal max-w-3xl mx-auto leading-relaxed">
                            "Safer, faster care happens when clinicians are empowered by simple, smart tools. We envision a future where every healthcare professional in Nigeria has access to AI-powered tools that enhance their expertise and improve patient outcomes."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;