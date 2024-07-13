import React from 'react'
import UserProfile from './UserProfile';

const NetworkList = () => {
    const users = [
        {
          name: 'Aryan Trivedi',
          avatar: '/member.png', // replace with the actual path
          title: 'Founder - Finzie | Ex Groww | BITS Pilani',
          location: 'Bengaluru',
        },
        {
          name: 'Aryan Trivedi22dfkldv',
          avatar: '/path/to/avatar.jpg', // replace with the actual path
          title: 'Founder - Finzie | Ex Groww | BITS Pilani',
          location: 'Bengaluru',
        },
        {
          name: 'Aryan Trivedi',
          avatar: '/path/to/avatar.jpg', // replace with the actual path
          title: 'Founder - Finzie | Ex Groww | BITS Pilani',
          location: 'Bengaluru',
        },
        {
          name: 'Aryan Trivedi',
          avatar: '/path/to/avatar.jpg', // replace with the actual path
          title: 'Founder - Finzie | Ex Groww | BITS Pilani',
          location: 'Bengaluru',
        },
      ];

  return (
    <div>
         <div className="max-w-md mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">My network</h2>
        <button className="p-2 border rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
    </div>
  )
}

export default NetworkList