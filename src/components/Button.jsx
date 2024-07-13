import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;