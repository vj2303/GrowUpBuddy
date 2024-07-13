import React from 'react'
import Image from 'next/image'
import { Mail } from 'lucide-react'

const UserProfile = ({ user }) => {
  return (
 <div className="flex items-center p-4 border-b">
    <div className="relative w-12 h-12">
      <Image
        src={user.avatar}
        alt={user.name}
        className="rounded-full"
        width={48}
        height={48}
      />
      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
    </div>
    
   <div className='flex flex-col'>
   <div className="ml-4 flex-grow ">
      <h3 className="text-sm font-semibold">{user.name} <span className="text-gray-500">. 1st</span></h3>
      <p className="text-sm text-gray-500">{user.title}</p>
      <p className="text-sm text-gray-500">{user.location}</p>
    </div>
    <div className="flex items-center space-x-2">
      <button className="px-3 py-1 text-sm border rounded-full">View profile</button>
      <button className="p-2 border rounded-full">
           <Mail /> 
      </button>
    </div>
    </div> 
  </div>
  )
}

export default UserProfile