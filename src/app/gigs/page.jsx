import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import GigSidebar from './GigSidebar'
import GigDescription from './GigDescription'
import UserProfile from './UserProfile'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className='flex px-[80px]'>
              <GigSidebar />
              <GigDescription />
              <UserProfile />

        </div>
        <Footer />
    </div>
  )
}

export default page