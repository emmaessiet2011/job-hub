import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import { APPLY_LINK } from '../constants';

const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Blog', href: '#' },
];

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <nav className="sticky top-0 z-50 bg-brand-background/80 backdrop-blur-lg border-b border-black/5 animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold font-sans text-brand-charcoal">
                            Nigeria Hub
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <a key={item.name} href={item.href} className="group relative text-brand-charcoal font-semibold transition-colors duration-300 hover:text-brand-teal">
                                {item.name}
                                <span className="absolute bottom-0 left-0 h-0.5 bg-brand-gold w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                            </a>
                        ))}
                         <a
                            href={APPLY_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 text-sm font-bold text-brand-charcoal border-2 border-brand-gold rounded-full transition-all duration-300 hover:bg-brand-gold hover:shadow-lg"
                        >
                            Apply Now
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(true)}
                            aria-label="Open menu"
                            className="inline-flex items-center justify-center p-2 rounded-md text-brand-charcoal hover:bg-gray-100 focus:outline-none"
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-50 transform transition-all duration-500 ease-in-out ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <div
                    className="absolute inset-0 bg-brand-background/80 backdrop-blur-xl"
                    onClick={() => setIsOpen(false)}
                ></div>

                <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-white/90 shadow-2xl p-6">
                    <div className="flex items-center justify-between mb-12">
                         <a href="#" className="text-xl font-bold font-sans text-brand-charcoal">
                            Nigeria Hub
                        </a>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                            className="p-2 -mr-2 rounded-full text-brand-charcoal hover:bg-gray-100 focus:outline-none"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    <div className="flex flex-col space-y-8">
                         {menuItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-3xl font-serif font-bold text-brand-charcoal transition-transform duration-300 hover:translate-x-2"
                                style={{
                                    animation: isOpen ? `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s forwards` : 'none',
                                    opacity: 0,
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div style={{ animation: isOpen ? `fadeInUp 0.6s ease-out 0.5s forwards` : 'none', opacity: 0 }}>
                           <a
                                href={APPLY_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center px-6 py-4 text-lg font-bold text-brand-charcoal border-2 border-brand-gold rounded-full transition-all duration-300 hover:bg-brand-gold hover:shadow-lg"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
