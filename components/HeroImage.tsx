import React from 'react';

const HeroImage: React.FC = () => {
    return (
        <div className="relative w-full max-w-lg mx-auto" aria-hidden="true">
            {/* Decorative background shapes */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-brand-gold rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 right-10 w-72 h-72 bg-brand-teal-light rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-8 left-20 w-56 h-56 bg-brand-gold/30 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob" style={{ animationDelay: '4s' }}></div>

            {/* Image itself */}
            <div className="relative">
                <img
                    className="relative w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
                    src="https://i.ibb.co/356R5Hvp/image.jpg"
                    alt="A healthcare professional working with advanced technology, representing the future of medicine in Nigeria."
                    width="480"
                    height="560"
                />
            </div>
        </div>
    );
};

export default HeroImage;
