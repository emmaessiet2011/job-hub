import React from 'react';
import { APPLY_LINK } from '../constants';

const CTA: React.FC = () => {
    return (
        <section className="mt-20 sm:mt-28 animate-fade-in-up" style={{ animationDelay: '1.2s', opacity: 0 }}>
            <div className="relative isolate overflow-hidden bg-brand-white rounded-3xl p-8 md:p-12 border border-brand-green/20 shadow-2xl shadow-black/20">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-brand-green-darker sm:text-4xl">
                        Don't see a role for you?
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        We are always looking for talented people to join our team. Send us your resume and we'll get in touch if a suitable role opens up.
                    </p>
                    <div className="mt-8">
                        <a
                            href={APPLY_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-lg bg-brand-green px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green transition-transform duration-300 hover:scale-105"
                        >
                            Submit Your CV
                        </a>
                    </div>
                </div>
                 {/* Background Glow */}
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-green/20 rounded-full blur-3xl" aria-hidden="true" />
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-green/20 rounded-full blur-3xl" aria-hidden="true" />
            </div>
        </section>
    );
};

export default CTA;