"use client"
import React, {useState} from 'react'

const CompensationCheckBox = () => {
    const [noCompensation, setNoCompensation] = useState(false);

    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                id="noCompensation"
                checked={noCompensation}
                onChange={(e) => setNoCompensation(e.target.checked)}
                className="form-checkbox h-5 w-5 text-purple-600"
            />
            <label htmlFor="noCompensation" className="ml-2 text-gray-700">
                This Project has no compensation
            </label>
        </div>
    );
}

export default CompensationCheckBox