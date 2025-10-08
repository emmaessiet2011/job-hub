import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="mt-24 pb-8 text-center">
            <p className="text-sm text-brand-green-light/60">&copy; {new Date().getFullYear()} Nigeria Hub. All rights reserved.</p>
        </footer>
    );
};

export default Footer;