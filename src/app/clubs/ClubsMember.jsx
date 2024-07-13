import React from 'react'

import MembersCard from '@/components/MembersCard';
import SearchBar from '@/components/SearchBar';


const ClubsMember = () => {
  return (
    <div>
        <h1>Members</h1>
          <SearchBar />
        <div className='mt-[44px]'>
             <MembersCard />
             <div  className='w-full h-[1px] bg-[#CCCCCC] my-[12px]' />
             <MembersCard />
             <div  className='w-full h-[1px] bg-[#CCCCCC] my-[12px]' />
             <MembersCard />
        </div>
    </div>
  )
}

export default ClubsMember