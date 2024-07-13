import React from 'react'

const GigListing = ({ status }) => {
  
    return (
        <div className="flex items-center p-4 mb-4 gap-4 border rounded-lg shadow-sm">
          
        
            <img src='./member.png' alt='img' />
         <div className="flex-grow">
            <h3 className="text-[16px] leading-[21px] font-semibold">Web Developer</h3>
            <p className="text-sm text-gray-600">Company name | India</p>
            <p className="text-xs text-gray-400">1hr ago</p>
          </div>
        
          <div>
            <span className={`px-[9px] py-[3px] text-[10px] font-medium ${status === 'Applied' ? 'text-green-800 bg-green-200' : 'text-gray-800 bg-gray-200'} rounded-full`}>
              {status ? status : 'Internship'}
            </span>
          </div>
        </div>

  )
}

export default GigListing