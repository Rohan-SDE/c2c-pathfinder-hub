
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const ContentFeed = () => {
  // Mock data for educational content
  const educationalContent = [
    {
      id: 1,
      title: "Building Your First Resume",
      category: "Resume",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      excerpt: "Learn the essentials of creating a standout resume that will get you noticed by recruiters.",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Mastering Technical Interviews",
      category: "Interviews",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      excerpt: "Prepare for technical interviews with practical tips and strategies from industry experts.",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Networking for College Students",
      category: "Networking",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      excerpt: "Discover how to build professional relationships that can lead to internship and job opportunities.",
      level: "Beginner"
    },
  ];

  // Mock data for internship opportunities
  const internshipOpportunities = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "TechCorp",
      location: "Remote",
      type: "Summer Internship",
      level: "First Year"
    },
    {
      id: 2,
      title: "Marketing Assistant",
      company: "Brand Solutions",
      location: "New York, NY",
      type: "Part-time",
      level: "Second Year"
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Analytics Pro",
      location: "San Francisco, CA",
      type: "Full-time",
      level: "Third Year"
    },
    {
      id: 4,
      title: "UI/UX Design Intern",
      company: "Creative Agency",
      location: "Remote",
      type: "Summer Internship",
      level: "Final Year"
    },
  ];

  // Filter state for internship level
  const [levelFilter, setLevelFilter] = useState<string>("All");

  // Filtered internships based on level filter
  const filteredInternships = levelFilter === "All" 
    ? internshipOpportunities 
    : internshipOpportunities.filter(internship => internship.level === levelFilter);

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      {/* Search and filter bar */}
      <div className="mb-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for articles, internships, or topics..." 
            className="w-full py-2 px-4 pl-10 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40"
          />
          <div className="absolute left-3 top-2.5 text-white/60">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main content area with tabs */}
      <Tabs defaultValue="learn" className="w-full">
        <TabsList className="w-full mb-6 bg-white/5 p-1">
          <TabsTrigger value="learn" className="flex-1 data-[state=active]:bg-white/10">Learn</TabsTrigger>
          <TabsTrigger value="internships" className="flex-1 data-[state=active]:bg-white/10">Internships</TabsTrigger>
          <TabsTrigger value="community" className="flex-1 data-[state=active]:bg-white/10">Community</TabsTrigger>
        </TabsList>
        
        {/* Learn tab content */}
        <TabsContent value="learn" className="space-y-6">
          <div className="glass-morphism p-6 rounded-xl mb-6">
            <h2 className="text-2xl font-bold text-gradient mb-4">Welcome to your learning path</h2>
            <p className="text-white/80 mb-4">Discover curated content tailored to your academic journey and career aspirations.</p>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white">
                Take Skills Assessment
              </Button>
              <Button className="bg-gradient-to-r from-c2c-purple to-c2c-vibrant-purple hover:from-c2c-vibrant-purple hover:to-c2c-purple text-white">
                Explore Content
              </Button>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-4">Recommended for you</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {educationalContent.map(content => (
              <Card key={content.id} className="glass-morphism overflow-hidden hover:shadow-glow transition-shadow duration-300">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={content.image} 
                    alt={content.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded">{content.category}</span>
                    <span className="text-c2c-purple text-xs">{content.level}</span>
                  </div>
                  <CardTitle className="text-white text-lg">{content.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 text-sm mb-4">{content.excerpt}</p>
                  <Button variant="link" className="text-c2c-purple p-0 h-auto">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white">
              Load More
            </Button>
          </div>
        </TabsContent>
        
        {/* Internships tab content */}
        <TabsContent value="internships" className="space-y-6">
          <div className="glass-morphism p-6 rounded-xl mb-6">
            <h2 className="text-2xl font-bold text-gradient mb-4">Find Your Perfect Internship</h2>
            <p className="text-white/80">Discover opportunities matched to your skills and experience level.</p>
          </div>
          
          {/* Internship filters */}
          <div className="flex overflow-x-auto scrollbar-none gap-2 pb-4">
            {["All", "First Year", "Second Year", "Third Year", "Final Year"].map((level) => (
              <Button
                key={level}
                variant={levelFilter === level ? "default" : "outline"}
                onClick={() => setLevelFilter(level)}
                className={levelFilter === level 
                  ? "bg-c2c-purple hover:bg-c2c-purple-dark whitespace-nowrap"
                  : "border-white/10 bg-white/5 hover:bg-white/10 text-white whitespace-nowrap"
                }
              >
                {level}
              </Button>
            ))}
          </div>
          
          {/* Internship listings */}
          <div className="space-y-4">
            {filteredInternships.map(internship => (
              <Card key={internship.id} className="glass-morphism hover:shadow-glow transition-shadow duration-300">
                <CardContent className="p-5">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{internship.title}</h3>
                      <p className="text-white/70">{internship.company}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-white/60 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          {internship.location}
                        </span>
                        <span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded">
                          {internship.type}
                        </span>
                        <span className="text-xs bg-c2c-purple/20 text-c2c-purple px-2 py-0.5 rounded">
                          {internship.level}
                        </span>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-c2c-purple to-c2c-vibrant-purple hover:from-c2c-vibrant-purple hover:to-c2c-purple text-white">
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white">
              Load More
            </Button>
          </div>
        </TabsContent>
        
        {/* Community tab content */}
        <TabsContent value="community" className="space-y-6">
          <div className="glass-morphism p-6 rounded-xl mb-6">
            <h2 className="text-2xl font-bold text-gradient mb-4">Connect with Peers & Mentors</h2>
            <p className="text-white/80">Share experiences, ask questions, and grow your professional network.</p>
          </div>
          
          {/* Community features coming soon */}
          <div className="flex flex-col items-center justify-center py-12">
            <div className="mb-4 bg-gradient-to-br from-c2c-purple to-c2c-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Community Features Coming Soon</h3>
            <p className="text-white/60 text-center max-w-md mb-6">We're building an engaging community platform where you can connect with peers, mentors, and industry professionals.</p>
            <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white">
              Join Waitlist
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentFeed;
