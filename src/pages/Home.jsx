import React from 'react';
import HeroSection from './HeroSection';
import ExpertiseSection from './ExpertiseSection';
import ContentSection from './ContentSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <ExpertiseSection />
            <ContentSection/>
        </div>
    );
};

export default Home;