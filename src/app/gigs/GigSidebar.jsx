"use client"
import SearchBar from '@/components/SearchBar'
import React from 'react'
import GigListing from './GigListing'
import SwitchBar from './SwitchBar'
import { useState } from 'react';

const GigSidebar = () => {
    const [filter, setFilter] = useState('All');

  const handleSelect = (option) => {
    setFilter(option);
  };


  return (
    <div>
        <div className="min-h-screen bg-[#F9FAFF]">
        <SearchBar />
      
        
      
      <main className="max-w-4xl mx-auto p-4">
      
        <div className="flex justify-between gap-2 overflow-x-auto mb-6">
          <button className="px-4 py-2 text-[#696969] text-[12px] bg-[#F2F2F2] rounded-full whitespace-nowrap">Domain</button>
          <button className="px-4 py-2 text-[12px] bg-[#F2F2F2] rounded-full whitespace-nowrap">Remote</button>
          <button className="px-4 py-2 text-[12px] bg-[#F2F2F2] rounded-full whitespace-nowrap">Hybrid</button>
          <button className="px-4 py-2 text-[12px] bg-[#F2F2F2] rounded-full whitespace-nowrap">Onsite</button>
          <button className="px-4 py-2 text-[12px] bg-[#F2F2F2] rounded-full whitespace-nowrap">Latest</button>
        </div>
        <div className='flex items-center justify-center'>
           <SwitchBar onSelect={handleSelect} />
        </div>
        <div className='overflow-y-auto max-h-[440px] custom-scrollbar'>
          <GigListing status="Internship" />
          <GigListing status="Applied" />
          <GigListing status="Internship" />
          <GigListing status="Internship" />
          <GigListing status="Internship" />
          <GigListing status="Internship" />
          <GigListing status="Internship" />
        </div>
        </main>
    </div>

    </div>
  )
}

export default GigSidebar