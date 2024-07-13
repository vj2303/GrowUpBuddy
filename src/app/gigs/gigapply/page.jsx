import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import AddRole from './AddRole'
import AddedSkills from './AddedSkills'
import AddDescription from './AddDescription'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className='px-[80px] flex'>
            <AddRole />
            <AddedSkills />
            <AddDescription />
        </div>
        <Footer />
    </div>
  )
}

export default page