
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Ratings from './components/Ratings.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Features from './components/Features.tsx';
import ProblemsSolved from './components/ProblemsSolved.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import Pricing from './components/Pricing.tsx';
import CTA from './components/CTA.tsx';
import AiAssistant from './components/AiAssistant.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Ratings />
        <HowItWorks />
        <ProblemsSolved />
        <Features />
        <WhyChooseUs />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
};

export default App;
