import Button from '@/components/Button';
import InputField from '@/components/InputField';
import ProfileCard from '@/components/ProfileCard';
import React from 'react'

const UserProfile = () => {
    const user = {
        name: 'Aryan Trivedi',
        summary: 'Hi, I am Aryan - Founder at...',
        image: '/member.png',
        skills: ['UX Research', 'UX Research', 'UX Research'],
        professional: 'UI/UX Designer',
      };
    
      return (
        <div className=" bg-white flex items-center justify-center">
         
          <main className="w-full max-w-md">
            <ProfileCard user={user} />
            <InputField
              label="Add Project Link"
              placeholder="https://uxabhi.com/"
              type="url"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M14.243 5.757a4 4 0 00-5.656 0L5.414 8.93a4 4 0 105.656 5.657l.828-.828a4 4 0 10-5.657-5.657l-1.415 1.415a1 1 0 101.414 1.414l1.415-1.415a2 2 0 012.828 2.828l-.828.828a2 2 0 11-2.828-2.828l1.415-1.415a1 1 0 011.414 0 1 1 0 01-.707 1.707 1 1 0 000 2 1 1 0 001.414 0 1 1 0 010-1.414 1 1 0 00-1.414-1.414z" clipRule="evenodd" /></svg>}
            />
            <InputField
              label="Upload CV/Resume"
              placeholder="Upload CV or Resume"
              type="file"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 00-1 1v4H6a1 1 0 100 2h2v4a1 1 0 001 1h4a1 1 0 001-1v-4h2a1 1 0 100-2h-2V3a1 1 0 00-1-1H9zM7 14v4a1 1 0 001 1h4a1 1 0 001-1v-4H7z" /></svg>}
            />
            <InputField
              label="Add Socials"
              placeholder="@username"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 7a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-3 0a1 1 0 012 0 1 1 0 01-2 0zm9-1a1 1 0 000 2h2a1 1 0 000-2h-2z" /></svg>}
            />
            <InputField
              placeholder="@username"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 7a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-3 0a1 1 0 012 0 1 1 0 01-2 0zm9-1a1 1 0 000 2h2a1 1 0 000-2h-2z" /></svg>}
            />
            <Button>Apply</Button>
          </main>
        </div>
      );
    
}

export default UserProfile