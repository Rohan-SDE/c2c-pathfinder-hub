
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center animated-gradient-bg">
      <div className="max-w-4xl w-full px-4 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 text-gradient">
            C2C
          </h1>
          <div className="h-8 mb-8 overflow-hidden">
            <p className="text-xl md:text-2xl text-white/80">
              College to Career
            </p>
          </div>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Your personalized pathfinder for navigating from academics to your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button 
              asChild
              className="bg-gradient-to-r from-c2c-purple to-c2c-vibrant-purple hover:from-c2c-vibrant-purple hover:to-c2c-purple text-white font-medium py-6 px-8 rounded-lg transition-all duration-300 shadow-glow"
            >
              <Link to="/auth">Get Started</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white py-6 px-8 rounded-lg transition-all duration-300"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 glass-morphism p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
              <div className="mb-4 bg-gradient-to-br from-c2c-purple to-c2c-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8L12 12 14 14"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Year-Based Journey</h3>
              <p className="text-white/60">Personalized roadmaps based on your current academic year</p>
            </div>

            <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
              <div className="mb-4 bg-gradient-to-br from-c2c-vibrant-purple to-c2c-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12L3 12"></path>
                  <path d="M15 5L22 12 15 19"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Curated Internships</h3>
              <p className="text-white/60">Access to internships matching your skills and experience level</p>
            </div>

            <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
              <div className="mb-4 bg-gradient-to-br from-c2c-blue-ocean to-c2c-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Career Network</h3>
              <p className="text-white/60">Connect with peers, mentors, and potential employers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
