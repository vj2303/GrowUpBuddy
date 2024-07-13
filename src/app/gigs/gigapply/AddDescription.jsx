"use client"
import React, {useState} from 'react'

const AddDescription = () => {
    const [description, setDescription] = useState('');
  return (
    <div className="bg-white p-8 rounded  w-full max-w-md">
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Add Description</h2>
      <p className="text-gray-500 mb-2">Provide the Description for your project <span className="text-gray-400">0/1200</span></p>
      <textarea
        className="border border-gray-300 p-4 w-full rounded h-32"
        placeholder="Type here"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
    
    <div className="mb-6">
      <button className="bg-purple-100 text-purple-500 px-4 py-2 rounded-full flex items-center justify-between w-full">
        <span>Generate a gig description using growth AI</span>
        <button className="bg-purple-500 text-white px-4 py-2 rounded">Auto generate</button>
      </button>
    </div>

    <div className="mb-6">
      <p className="text-gray-500 mb-2">Include these in your description</p>
      <ul className="list-disc list-inside text-purple-500">
        <li>Roles and responsibilities</li>
        <li>Qualifications or pre-requisites</li>
        <li>Perks of joining (if any)</li>
      </ul>
    </div>
    
    <div>
      <button className="bg-purple-500 text-white px-4 py-2 w-full rounded">Post</button>
    </div>
  </div>
  )
}

export default AddDescription