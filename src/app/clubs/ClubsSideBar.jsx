"use client"
import ClubCard from '@/components/ClubCard';
import EventsCard from '@/components/EventsCard';
import React from 'react'
import { useState } from 'react';


const ClubsSideBar = () => {
    const [activeTab, setActiveTab] = useState('all');

  
    return (
      <div className="w-full max-w-md mx-auto mt-10">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 ${activeTab === 'all' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('all')}
          >
            All Clubs
          </button>
          <button
            className={`px-4 py-2 ml-4 ${activeTab === 'my' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('my')}
          >
            My Clubs
          </button>
        </div>
        <div>
          {activeTab === 'all' && (
            <div className='flex flex-col gap-[8px]'>
               <ClubCard />
               <ClubCard />
               <ClubCard />
               <ClubCard />
            </div>
          )}
          {activeTab === 'my' && (
            <div>
              Joined cards
            </div>
          )}
        </div>
      </div>
    );
}

export default ClubsSideBar