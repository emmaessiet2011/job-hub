import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';
import GithubIcon from './icons/GithubIcon';

const socials = [
    { name: 'LinkedIn', href: '#', icon: <LinkedInIcon /> },
    { name: 'Twitter', href: '#', icon: <TwitterIcon /> },
    { name: 'GitHub', href: '#', icon: <GithubIcon /> },
];

const Footer: React.FC = () => {
    const footerRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(footerRef, { threshold: 0.1, triggerOnce: true });

    return (
        <footer
            ref={footerRef}
            className={`bg-brand-charcoal text-white transition-opacity duration-1000 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            aria-labelledby="footer-heading"
        >
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-sans">Nigeria Hub</h3>
                        <p className="text-sm text-gray-300 max-w-xs">
                            Innovating at the heart of healthcare, powered by Nigerian talent.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-2">
                        <div className="md:col-span-1">
                            <h3 className="text-base font-semibold">Contact Us</h3>
                            <address className="mt-4 not-italic text-sm text-gray-300 space-y-2">
                                <p>7, Tony Fad Street, Agiliti, Mile 12 Lagos</p>
                                <p>
                                    <a href="tel:+234-706-866-0122" className="hover:text-brand-gold transition-colors duration-300">
                                        +234-706-866-0122
                                    </a>
                                </p>
                            </address>
                        </div>
                        <div className="md:col-span-1">
                            <h3 className="text-base font-semibold">Follow Us</h3>
                            <div className="mt-4 flex space-x-6">
                                {socials.map((item) => (
                                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                        <span className="sr-only">{item.name}</span>
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8">
                    <p className="text-sm text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} Nigeria Hub. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
