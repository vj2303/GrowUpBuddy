import React from 'react'

const GigDescription = () => {
  return (
    <div className="p-6 mb-4 pl-[66px] w-[40%] mr-[60px] overflow-y-auto max-h-[560px] bg-white custom-scrollbar ">
    <div className="flex justify-between mb-4">
        <h3 className="text-2xl font-bold">Web Developer</h3>
      <div className='flex'>
        <p className="text-gray-500">Cat Group | India</p>
      <img
        src="/logo.png"
        alt="Company Logo"
        className="w-12 h-12"
        />
     </div>
    </div>
    <div className="flex items-center space-x-4 mb-4 text-gray-600">
      <div className="flex items-center">
        <span className="mr-1">₹80000/month</span>
      </div>
      <div className="flex items-center">
        <span className="mr-1">3 Months</span>
      </div>
      <div className="flex items-center">
        <span className="mr-1">Remote</span>
      </div>
    </div>
    <div className="mb-4">
      <span className="px-3 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">
        Internship
      </span>
    </div>
    <div>
      <h4 className="text-xl font-semibold mb-2">About Position</h4>
      <h5 className="text-lg font-semibold mb-2">Description</h5>
      <p className="text-gray-700 mb-4">
        Seeking a talented UI/UX Designer to spearhead our mobile app’s design, creating intuitive and engaging user experiences. Work alongside product managers and engineers in a collaborative environment to translate our vision into a functional and visually appealing app.
      </p>
      <h5 className="text-lg font-semibold mb-2">Responsibilities</h5>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>5+ years of experience as a UI/UX Designer with hands on experience in Crafting wireframes, user stories, journeys, and mockups for a diverse range of devices.</li>
        <li>Solve design challenges with elegant solutions.</li>
        <li>Employ a user-centered approach to design, with a cycle of testing and iteration.</li>
        <li>Engage in collaborative problem-solving and idea generation.</li>
      </ul>
      <h5 className="text-lg font-semibold mb-2">What we offer</h5>
      <ul className="list-disc list-inside text-gray-700">
        <li>A competitive salary with performance incentives.</li>
        <li>A competitive salary with performance incentives.</li>
        <li>A competitive salary with performance incentives.</li>
        <li>A competitive salary with performance incentives.</li>
      </ul>
    </div>
  </div>
  )
}

export default GigDescription