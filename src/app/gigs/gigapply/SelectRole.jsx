"use client"
import React, { useState } from 'react'


const SelectRole = () => {
    const [selectedRole, setSelectedRole] = useState('Freelance');

    return (
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Role Type
            </label>
            {['Freelance', 'Contract', 'Collaboration', 'Internship'].map((role) => (
                <button
                    key={role}
                    className={`w-full py-2 mb-2 text-left rounded-lg ${
                        selectedRole === role ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}
                    onClick={() => setSelectedRole(role)}
                >
                    {role}
                </button>
            ))}
        </div>
    );
}

export default SelectRole