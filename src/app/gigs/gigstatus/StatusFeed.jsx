import React from 'react'

const StatusFeed = () => {
  return (
    <>
    
    <div className="relative flex ml-[67px] mr-[91px] flex-col items-start p-4">
    <div className="flex justify-between mb-4">
      <div>
        <h3 className="text-2xl font-bold">Web Developer</h3>
        <p className="text-gray-500">Cat Group | India</p>
      </div>
      <img
        src="/member.png"
        alt="Company Logo"
        className="w-12 h-12"
      />
    </div>
    <div className="absolute left-4 top-0 h-full border-l-2 border-dotted border-gray-300"></div>
    
    <div className="relative flex flex-col items-start mb-8">
        <div className="absolute left-0 w-4 h-4 bg-white border-2 border-gray-300 rounded-full -ml-2"></div>
        <div className="ml-8">
            <h2 className="text-lg font-semibold">Projects</h2>
            <p className="text-gray-500">Make yourself stand out add your best projects</p>
            <button className="mt-2 px-4 py-2 border rounded-lg text-gray-600 border-gray-300">Add Projects</button>
        </div>
    </div>

    <div className="relative flex flex-col items-start">
        <div className="absolute left-0 w-4 h-4 bg-white border-2 border-gray-300 rounded-full -ml-2"></div>
        <div className="ml-8">
            <h2 className="text-lg font-semibold">Social Links</h2>
            <p className="text-gray-500">Add your social links</p>
            <button className="mt-2 px-4 py-2 border rounded-lg text-gray-600 border-gray-300">Add Links</button>
        </div>
    </div>
</div>

</>
  )
}

export default StatusFeed