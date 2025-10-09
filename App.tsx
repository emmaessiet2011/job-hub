import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import JobListing from './components/JobListing';
import CommunityStats from './components/CommunityStats';
import WhatWeDo from './components/WhatWeDo';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen font-sans bg-brand-background">
            <Navigation />
            <div className="relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Header />
                </div>
            </div>

            <div className="py-16 sm:py-24">
                <CommunityStats />
            </div>

            <div className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <WhatWeDo />
                </div>
            </div>

            <main id="job-listings" className="bg-brand-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <JobListing />
                </div>
            </main>

            <CTA />
            
            <Footer />
        </div>
    );
};

export default App;