"use client"
import React, {useState} from 'react'

const Compensation = () => {
    const [type, setType] = useState('Monthly');
    const [payFrom, setPayFrom] = useState('');
    const [payTo, setPayTo] = useState('');

    return (
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Add Compensation
            </label>
            <p className="text-gray-500 text-xs mb-2">Provide the Pay amount to attract applicants</p>
            <h1>Type</h1>
            <div className="mb-4">
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="Monthly">Monthly</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Hourly">Hourly</option>
                </select>
            </div>
            <h1>Pay</h1>
            <div className="flex items-center space-x-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="₹1000"
                    value={payFrom}
                    onChange={(e) => setPayFrom(e.target.value)}
                />
                 <span className='px-[10px]'> To</span>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="₹1000"
                    value={payTo}
                    onChange={(e) => setPayTo(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Compensation