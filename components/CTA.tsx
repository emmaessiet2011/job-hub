import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { SUBMIT_CV_LINK } from '../constants';

const CTA: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3, triggerOnce: true });

    return (
        <section ref={sectionRef} className="bg-brand-teal text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div
                    className={`mx-auto max-w-3xl text-center transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h2 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">
                        Don't see a role for you?
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-teal-100">
                        We are always looking for talented people to join our team. Send us your resume and we'll get in touch if a suitable role opens up.
                    </p>
                    <div className="mt-10">
                        <a
                            href={SUBMIT_CV_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-full bg-brand-gold px-8 py-4 text-base font-semibold text-brand-charcoal shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-brand-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                        >
                            Submit Your CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;