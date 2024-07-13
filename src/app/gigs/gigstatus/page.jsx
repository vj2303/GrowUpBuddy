import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import GigSidebar from '../GigSidebar'
import StatusFeed from './StatusFeed'
import StatusBar from './StatusBar'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className='flex px-[80px]'>
          <GigSidebar />
          <StatusFeed />
          <StatusBar />


        </div>
        <Footer />
    </div>
  )
}

export default page