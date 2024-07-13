import React from 'react'
import ClubCard from './ClubCard'

const ClubsList = () => {
  return (
    <div className='flex flex-col '>
    <div className='flex justify-between'>
        <h1 className='font-semibold'>Clubs</h1>
        <p>view all</p>
    </div>
    <div className='flex flex-col gap-[10px]'>
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
    </div>
</div>
  )
}

export default ClubsList