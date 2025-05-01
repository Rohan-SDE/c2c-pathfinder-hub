
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface UserData {
  name: string;
  email: string;
  university: string;
}

interface ProfileSidebarProps {
  userData: UserData;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ userData }) => {
  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="h-screen sticky top-0 p-4 glass-morphism overflow-y-auto scrollbar-none">
      <div className="flex flex-col items-center py-6">
        <Avatar className="h-20 w-20 mb-4 ring-2 ring-c2c-purple">
          <AvatarImage src="" alt={userData.name} />
          <AvatarFallback className="bg-gradient-to-br from-c2c-purple to-c2c-blue text-white text-xl">
            {getInitials(userData.name)}
          </AvatarFallback>
        </Avatar>
        
        <h2 className="text-lg font-semibold text-white">{userData.name}</h2>
        <p className="text-sm text-white/60 mb-2">{userData.university}</p>
        
        <div className="bg-white/5 rounded-lg p-3 w-full mt-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-white/80">Profile completion</span>
            <span className="text-xs text-c2c-purple">60%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5">
            <div className="bg-gradient-to-r from-c2c-purple to-c2c-blue h-1.5 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-white/80 text-sm font-medium mb-3">Your Progress</h3>
        <div className="space-y-3">
          {/* Progress items */}
          <div className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-white">Resume Builder</span>
              <span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded">40%</span>
            </div>
          </div>
          <div className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-white">Skills Assessment</span>
              <span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded">20%</span>
            </div>
          </div>
          <div className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-white">Interview Prep</span>
              <span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded">0%</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-2">
        <Button variant="outline" className="w-full justify-start border-white/10 bg-white/5 hover:bg-white/10 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          Edit Profile
        </Button>
        <Button variant="outline" className="w-full justify-start border-white/10 bg-white/5 hover:bg-white/10 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
