import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import ClubsSideBar from './ClubsSideBar'
import Clubfeed from '@/components/Clubfeed'
import ClubsMember from './ClubsMember'

const page = () => {
  return (
    <main className='flex flex-col'>
        <Navbar />
          <div className='flex pl-[82px] pr-[31px] max-w-[1250px] mx-auto'>
              <ClubsSideBar />
              <div className='flex-grow flex'>
                 <Clubfeed />
                 <ClubsMember />
              </div>
          </div>
        <Footer />
    </main>
  )
}

export default page


