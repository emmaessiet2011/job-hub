
import React, { useState, useRef, useEffect } from 'react';
import { APPLY_LINK } from '../constants';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Blog', href: '#' },
];

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="sticky top-0 z-50 bg-brand-background/80 backdrop-blur-lg border-b border-black/5 animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-lg sm:text-xl font-bold font-sans text-brand-charcoal">
                            Nigeria Hub
                        </a>
                    </div>
                    
                    <div ref={menuRef} className="relative">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-full text-brand-charcoal transition-colors duration-200 hover:text-brand-teal hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-teal"
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
                                {menuItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block px-4 py-3 text-base font-medium text-brand-charcoal rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors duration-200"
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
                                    className="block w-full text-center px-4 py-3 text-base font-bold text-brand-charcoal bg-brand-gold hover:bg-brand-gold-dark transition-colors duration-200 rounded-lg"
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
