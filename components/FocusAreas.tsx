import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { TRELLO_LINK, APPLY_LINK } from '../constants';
import ArrowRightIcon from './icons/ArrowRightIcon';
import TrelloIcon from './icons/TrelloIcon';
import CheckCircleIcon from './icons/CheckCircleIcon';

const healthcareSolutions = [
    'Medical imaging analysis',
    'Clinical decision support',
    'Patient data optimization',
    'Diagnostic assistance tools',
];

const techDevelopment = [
    'Cloud infrastructure (Azure)',
    'Mobile and web applications',
    'Data analytics platforms',
    'API development',
];

const FocusAreas: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

    return (
        <section
            ref={sectionRef}
            className="relative bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('https://i.ibb.co/YBB9KC0N/Generated-Image-October-10-2025-2-04-PM.png')" }}
        >
            <div className="absolute inset-0 bg-white/95" aria-hidden="true"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                {/* Partnership Opportunities */}
                <div
                    className={`bg-nhs-blue-light/60 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center shadow-lg transition-all duration-700 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h2 className="text-3xl font-bold font-sans text-nhs-charcoal">Partnership Opportunities</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-nhs-grey-dark">
                        We collaborate with healthcare institutions, technology companies, and educational organizations to advance AI in healthcare across Nigeria.
                    </p>
                    <div className="mt-6">
                        <a
                            href="#"
                            className="group/button inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-white bg-nhs-blue rounded-full shadow-sm transition-all duration-300 hover:bg-nhs-blue-dark hover:shadow-md hover:scale-105"
                        >
                            <span>Explore Partnerships</span>
                            <ArrowRightIcon className="transition-transform duration-200 group-hover/button:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="mt-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left side: Focus Areas */}
                    <div
                        className={`transition-all duration-700 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <h3 className="text-3xl font-bold font-sans text-nhs-charcoal">Current Focus Areas</h3>
                        <div className="mt-8 grid sm:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg text-nhs-charcoal">Healthcare AI Solutions</h4>
                                <ul className="mt-4 space-y-3">
                                    {healthcareSolutions.map(item => (
                                        <li key={item} className="flex items-start">
                                            <div className="flex-shrink-0 pt-1">
                                                <CheckCircleIcon />
                                            </div>
                                            <span className="ml-3 text-base text-nhs-grey-dark">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-nhs-charcoal">Technology Development</h4>
                                <ul className="mt-4 space-y-3">
                                    {techDevelopment.map(item => (
                                        <li key={item} className="flex items-start">
                                            <div className="flex-shrink-0 pt-1">
                                                <CheckCircleIcon />
                                            </div>
                                            <span className="ml-3 text-base text-nhs-grey-dark">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Join Us */}
                    <div
                        className={`bg-white/60 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-lg transition-all duration-700 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <h3 className="text-3xl font-bold font-sans text-nhs-charcoal">Ready to Join Our Mission?</h3>
                        <p className="mt-4 text-lg text-nhs-grey-dark">
                            Apply now to be part of Nigeria's healthcare technology revolution. We use streamlined platforms to make application easy and efficient.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href={TRELLO_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/trello flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 font-semibold text-nhs-blue border-2 border-nhs-blue rounded-full shadow-sm transition-all duration-200 hover:bg-nhs-blue hover:text-white"
                            >
                                <TrelloIcon className="transition-transform duration-200 group-hover/trello:scale-110" />
                                <span>View Tasks</span>
                            </a>
                            <a
                                href={APPLY_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/button flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 font-bold text-white bg-nhs-blue rounded-full shadow-sm transition-colors duration-200 hover:bg-nhs-blue-dark text-center"
                            >
                                <span>Submit Task</span>
                                <ArrowRightIcon className="transition-transform duration-200 group-hover/button:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FocusAreas;