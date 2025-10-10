import React, { useState, useRef, useEffect } from 'react';
import { APPLY_LINK } from '../constants';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Opportunities', href: '#job-listings' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        if (href.startsWith('#') && href.length > 1) {
            event.preventDefault();
            const element = document.getElementById(href.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        setIsMenuOpen(false); // Close mobile menu on click
    };
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/5 animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" aria-label="RadAssist AI Homepage">
                           <img src="https://i.ibb.co/HLkQR7CQ/12.jpg" alt="RadAssist AI Logo" className="h-8 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-x-8">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className="text-base font-semibold text-nhs-grey-dark hover:text-nhs-blue transition-colors duration-200"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center">
                        <a
                            href={APPLY_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/button inline-flex items-center justify-center gap-2 px-6 py-2.5 font-bold text-white bg-nhs-blue rounded-full shadow-sm transition-all duration-300 hover:bg-nhs-blue-dark hover:shadow-md hover:scale-105"
                        >
                            <span>Apply Now</span>
                            <ArrowRightIcon className="transition-transform duration-200 group-hover/button:translate-x-1" />
                        </a>
                    </div>
                    
                    {/* Mobile Menu Button and Dropdown */}
                    <div ref={menuRef} className="relative lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-full text-nhs-charcoal transition-colors duration-200 hover:text-nhs-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nhs-blue"
                            aria-expanded={isMenuOpen}
                            aria-controls="main-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="transition-transform duration-300 ease-in-out">
                                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </div>
                        </button>
                        
                        <div
                             id="main-menu"
                             className={`absolute right-0 mt-3 w-56 origin-top-right bg-white rounded-2xl shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ease-out
                                ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`
                             }
                        >
                            <div className="p-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                {navLinks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => handleScroll(e, item.href)}
                                        className="block px-4 py-3 text-base font-medium text-nhs-charcoal rounded-lg hover:bg-nhs-blue-light hover:text-nhs-blue transition-colors duration-200"
                                        role="menuitem"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <div className="border-t border-gray-100 my-2"></div>
                                <a
                                    href={APPLY_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center px-4 py-3 text-base font-bold text-white bg-nhs-blue hover:bg-nhs-blue-dark transition-colors duration-200 rounded-lg"
                                    role="menuitem"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;