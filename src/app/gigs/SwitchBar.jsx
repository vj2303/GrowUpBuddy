"use client"
import React, { useState } from 'react';

const SwitchBar = ({ onSelect }) => {
  const [active, setActive] = useState('All');

  const handleSelect = (option) => {
    setActive(option);
    onSelect(option);
  };

  const options = ['All', 'Freelance', 'Collaboration', 'Internship'];

  return (
    <div className="flex text-[12px] space-x-4 mb-6 ">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleSelect(option)}
          className={`pb-2 ${active === option ? 'border-b-2 border-blue-600  text-blue-600' : 'text-gray-600'}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SwitchBar;