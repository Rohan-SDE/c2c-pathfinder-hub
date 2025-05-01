
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center animated-gradient-bg p-4">
      <div className="glass-morphism max-w-md w-full p-8 rounded-xl text-center">
        <h1 className="text-7xl font-bold mb-6 text-gradient">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-white/60 mb-8">
          Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          className="bg-gradient-to-r from-c2c-purple to-c2c-vibrant-purple hover:from-c2c-vibrant-purple hover:to-c2c-purple text-white"
          asChild
        >
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
