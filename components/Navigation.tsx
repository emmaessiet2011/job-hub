import React from 'react';
import { APPLY_LINK } from '../constants';

const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Blog', href: '#' },
];

const Navigation: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 bg-brand-background/80 backdrop-blur-lg border-b border-black/5 animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-lg sm:text-xl font-bold font-sans text-brand-charcoal">
                            Nigeria Hub
                        </a>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-6">
                        {menuItems.map((item) => (
                            <a key={item.name} href={item.href} className="group relative text-sm sm:text-base text-brand-charcoal font-semibold transition-colors duration-300 hover:text-brand-teal">
                                {item.name}
                                <span className="absolute bottom-0 left-0 h-0.5 bg-brand-gold w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                            </a>
                        ))}
                         <a
                            href={APPLY_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-brand-charcoal border-2 border-brand-gold rounded-full transition-all duration-300 hover:bg-brand-gold hover:shadow-lg"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
