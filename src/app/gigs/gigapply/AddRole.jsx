import React from 'react'
import SelectRole from './SelectRole'
import Compensation from './Compensation'
import CompensationCheckBox from './CompensationCheckBox'

const AddRole = () => {
  return (
    <div className='w-[30%]'>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                Add the Role
            </label>
            <p className="text-gray-500 text-xs mb-2">Mention the role you are looking for</p>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="role"
                type="text"
                placeholder="Web Designer"
                maxLength="120"
            />
            <p className="text-right text-gray-500 text-xs mt-1">0/120</p>
        </div>
        <SelectRole />
        <Compensation />
        <CompensationCheckBox />
    </div>
  )
}

export default AddRole