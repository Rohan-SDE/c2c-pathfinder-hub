
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-c2c-dark animated-gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">About C2C</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We're on a mission to transform how college students navigate their career paths,
            making the journey from college to career seamless and personalized.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="glass-morphism p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
            <p className="text-lg text-white/70 mb-6">
              C2C aims to bridge the gap between academic education and industry requirements,
              providing students with year-appropriate resources, internship opportunities,
              and networking connections that prepare them for successful careers.
            </p>
            <p className="text-lg text-white/70">
              We believe every student deserves access to high-quality career guidance,
              regardless of their university or background.
            </p>
          </div>
          
          <div className="glass-morphism p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-white">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-c2c-purple to-c2c-blue rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Create Your Profile</h3>
                  <p className="text-white/70">Tell us about your academic background, skills, and career interests.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-c2c-vibrant-purple to-c2c-pink rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Explore Year-Based Content</h3>
                  <p className="text-white/70">Access resources tailored to your current academic year and career goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-c2c-pink to-c2c-blue-ocean rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Connect & Apply</h3>
                  <p className="text-white/70">Discover internships, connect with peers and mentors, and launch your career.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-morphism p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="mb-4 bg-gradient-to-br from-c2c-purple to-c2c-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Personalized Learning</h3>
              <p className="text-white/70">Content and resources customized to your academic year and career aspirations.</p>
            </div>

            <div className="text-center p-4">
              <div className="mb-4 bg-gradient-to-br from-c2c-vibrant-purple to-c2c-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Internship Matches</h3>
              <p className="text-white/70">Discover internship opportunities that match your skills and experience level.</p>
            </div>

            <div className="text-center p-4">
              <div className="mb-4 bg-gradient-to-br from-c2c-pink to-c2c-blue-ocean rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Community Network</h3>
              <p className="text-white/70">Connect with peers, mentors, and industry professionals to grow your network.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button 
              asChild
              className="bg-gradient-to-r from-c2c-purple to-c2c-vibrant-purple hover:from-c2c-vibrant-purple hover:to-c2c-purple text-white font-medium py-6 px-8 rounded-lg transition-all duration-300 shadow-glow"
            >
              <Link to="/auth">Create Account</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white py-6 px-8 rounded-lg transition-all duration-300"
              asChild
            >
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
