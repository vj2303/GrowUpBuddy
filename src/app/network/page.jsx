import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import NetworkList from './networkList'
import Invites from './Invites'


const page = () => {
  return (
    <main>
        <Navbar />
        <div className='flex px-[80px] max-w-[1250px] mx-auto'>
            <NetworkList />
            <Invites />
        </div>
        <Footer />
    </main>
  )
}

export default page


