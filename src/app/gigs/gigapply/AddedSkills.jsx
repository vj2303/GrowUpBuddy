"use client"

import { useState } from 'react';

const skills = Array(7).fill('Flutter');

const AddedSkills = () => {
    const [addedSkills, setAddedSkills] = useState(skills);
    const [recommendedSkills, setRecommendedSkills] = useState(skills);
  
    return (
      <div className="bg-white p-8 rounded px-[40px] w-[60%] max-w-md">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills Added</h2>
          <div className="flex flex-wrap gap-2">
            {addedSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {skill}
                <button
                  className="text-blue-500"
                  onClick={() => setAddedSkills(addedSkills.filter((_, i) => i !== index))}
                >
                  ✖
                </button>
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Recommended Skills</h2>
          <div className="flex flex-wrap gap-2">
            {addedSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {skill}
                <button
                  className="text-blue-500"
                  onClick={() => setAddedSkills(addedSkills.filter((_, i) => i !== index))}
                >
                  ✖
                </button>
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills Recommended</h2>
          <div className="flex flex-wrap gap-2">
            {recommendedSkills.map((skill, index) => (
               <span
               key={index}
               className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm flex items-center gap-2"
             >
               {skill}
               <button
                 className="text-blue-500"
                 onClick={() => setAddedSkills(addedSkills.filter((_, i) => i !== index))}
               >
                 ✖
               </button>
             </span>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Add Skills</h2>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded"
            placeholder="Mention the skill set you are looking for"
          />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Add Workplace Location</h2>
          <div className="mb-4">
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Current location"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="text-blue-500 flex items-center gap-1">
              <span className="material-icons">gps_fixed</span>
              Auto-detect my city
            </button>
          </div>
          <div className="mt-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remote gig</span>
            </label>
          </div>
        </div>
      </div>
    );
}

export default AddedSkills