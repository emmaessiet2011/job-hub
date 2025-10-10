import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className }) => {
    return (
        <div className={`text-center ${className || ''}`}>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-nhs-charcoal relative inline-block pb-4">
                {title}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-nhs-blue rounded-full"></span>
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-nhs-grey-dark">
                {subtitle}
            </p>
        </div>
    );
};

export default SectionHeader;
