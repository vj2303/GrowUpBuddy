import React from 'react'

const Invites = () => {
    const invites = [
        {
          name: "Aryan Trivedi",
          role: "Founder - Finzie | Ex Groww | BITS Pilani",
          location: "Bengaluru",
          summary: "Hi, I am Aryan - Founder at...",
          avatar: "/member.png",
        },
        {
          name: "Cameron Williamson",
          role: "Founder - Finzie | Ex Groww | BITS Pilani",
          location: "Bengaluru",
          summary: "Hi, I am Aryan - Founder at...",
          avatar: "/member.png",
        },
        {
          name: "Aryan Trivedi",
          role: "Founder - Finzie | Ex Groww | BITS Pilani",
          location: "Bengaluru",
          summary: "Hi, I am Aryan - Founder at...",
          avatar: "/member.png",
        },
      ];

  return (
    <div>
         <div className="bg-white p-8 rounded ">
      <h2 className="text-2xl font-semibold mb-4">Invites</h2>
      <div>
        {invites.map((invite, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img src={invite.avatar} alt={invite.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-medium">{invite.name}</h3>
                <p className="text-gray-500">{invite.role}</p>
                <p className="text-gray-500">{invite.location}</p>
                <p className="text-gray-400">{invite.summary}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-full">✖</button>
              <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full">Accept</button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-4">
        <a href="#" className="text-blue-500">See all</a>
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Near My Network</h2>
      <div className="grid grid-cols-3 gap-4">
        {invites.map((invite, index) => (
          <div key={index} className="bg-white p-4 rounded-md border text-center">
            <img src={invite.avatar} alt={invite.name} className="w-12 h-12 rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-medium">{invite.name}</h3>
            <p className="text-gray-500">{invite.role}</p>
            <p className="text-gray-500">{invite.location}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Invites