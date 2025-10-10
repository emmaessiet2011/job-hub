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

const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Opportunities', href: '#job-listings' },
    { name: 'Resources', href: '#resources' },
];

interface FooterProps {
    id: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
    const footerRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(footerRef, { threshold: 0.1, triggerOnce: true });
    
    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        if (href.startsWith('#') && href.length > 1) {
            event.preventDefault();
            const element = document.getElementById(href.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else if (href === '#') {
             event.preventDefault();
             window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer
            id={id}
            ref={footerRef}
            className={`bg-nhs-charcoal text-white transition-opacity duration-1000 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            aria-labelledby="footer-heading"
        >
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16">
                    <div className="space-y-4 lg:col-span-4">
                        <img src="https://i.ibb.co/HLkQR7CQ/12.jpg" alt="RadAssist AI Logo" className="h-8 w-auto filter invert" />
                        <p className="text-sm text-gray-300 max-w-xs">
                            Innovating at the heart of healthcare, powered by Nigerian talent.
                        </p>
                        <div className="flex space-x-6 pt-2">
                            {socials.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                    <span className="sr-only">{item.name}</span>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-base font-semibold">Quick Links</h3>
                            <ul className="mt-4 space-y-3">
                                {quickLinks.map((item) => (
                                     <li key={item.name}>
                                        <a 
                                          href={item.href}
                                          onClick={(e) => handleScroll(e, item.href)}
                                          className="text-sm text-gray-300 hover:text-nhs-blue-light transition-colors duration-300"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold">Contact Us</h3>
                            <address className="mt-4 not-italic text-sm text-gray-300 space-y-3">
                                <p>7, Tony Fad Street, Agiliti, Mile 12 Lagos</p>
                                <p>
                                    <a href="tel:+234-706-866-0122" className="hover:text-nhs-blue-light transition-colors duration-300">
                                        +234-706-866-0122
                                    </a>
                                </p>
                                <p>
                                    <a href="mailto:info@radassist.ai" className="hover:text-nhs-blue-light transition-colors duration-300">
                                        info@radassist.ai
                                    </a>
                                </p>
                            </address>
                        </div>
                         <div>
                            <h3 className="text-base font-semibold">Legal</h3>
                            <ul className="mt-4 space-y-3">
                                <li>
                                    <a href="#" className="text-sm text-gray-300 hover:text-nhs-blue-light transition-colors duration-300">Privacy Policy</a>
                                </li>
                                 <li>
                                    <a href="#" className="text-sm text-gray-300 hover:text-nhs-blue-light transition-colors duration-300">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8">
                    <p className="text-sm text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} RadAssist AI - Nigeria Hub. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;