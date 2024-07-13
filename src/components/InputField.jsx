// components/InputField.js
import React from 'react';

const InputField = ({ label, placeholder, type = "text", icon }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-2 text-sm border rounded-lg ${icon ? 'pl-10' : ''} focus:outline-none focus:ring focus:border-blue-300`}
        />
      </div>
    </div>
  );
};

export default InputField;
