// components/ProfileCard.js
import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="p-4 mb-12  bg-white rounded-lg border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={user.image}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-3">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-gray-500">{user.summary}</p>
          </div>
        </div>
        <button className="px-2 py-1 text-white bg-gray-800 rounded">Edit</button>
      </div>
      <div className="mb-4 flex items-center">
        <h4 className="font-semibold">Skills</h4>
        <div className="flex flex-wrap">
          {user.skills.map((skill, index) => (
            <span key={index} className="px-[8px] py-[2px] m-1 text-[10px] text-gray-800 bg-[#F6F8FF] rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold">Professional</h4>
        <span className="px-2 py-1 text-sm text-gray-800 bg-gray-200 rounded-full">{user.professional}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
