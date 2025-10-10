import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import JobListing from './components/JobListing';
import CommunityStats from './components/CommunityStats';
import WhatWeDo from './components/WhatWeDo';
import Resources from './components/Resources';
import FocusAreas from './components/FocusAreas';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen font-sans">
            <Navigation />
            <div
                className="relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('https://i.ibb.co/WvdRXrMM/Background.png')" }}
            >
                <div className="absolute inset-0 bg-nhs-charcoal bg-opacity-60" aria-hidden="true"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <Header />
                </div>
            </div>

            <div
                className="relative bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://i.ibb.co/YBB9KC0N/Generated-Image-October-10-2025-2-04-PM.png')" }}
            >
                <div className="absolute inset-0 bg-white/95" aria-hidden="true"></div>
                <div className="relative py-20 sm:py-28">
                    <CommunityStats />
                </div>
            </div>

            <div id="about" className="bg-nhs-grey-light relative overflow-hidden">
                 <div className="absolute inset-0 z-0" aria-hidden="true">
                    <svg className="absolute top-0 left-0 w-full h-full text-nhs-grey" fill="currentColor">
                        <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#pattern-circles)" opacity="0.1" />
                    </svg>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10">
                    <WhatWeDo />
                </div>
            </div>

            <div
                id="resources"
                className="relative bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://i.ibb.co/YBB9KC0N/Generated-Image-October-10-2025-2-04-PM.png')" }}
            >
                 <div className="absolute inset-0 bg-white/95" aria-hidden="true"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                    <Resources />
                </div>
            </div>

            <main id="job-listings" className="bg-nhs-grey-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                    <JobListing />
                </div>
            </main>

            <FocusAreas />

            <CTA />
            
            <Footer id="contact" />
        </div>
    );
};

export default App;