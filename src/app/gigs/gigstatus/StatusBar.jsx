import React from 'react'

const StatusBar = () => {
  return (
<div className="p-4">
            <div className="mb-8">
                <h2 className="text-lg font-semibold">Your application status</h2>
                <div className="relative flex flex-col items-start mt-4">
                    {/* Dotted Line */}
                    <div className="absolute left-2 top-0 bottom-0 border-l-2 border-dotted border-gray-300"></div>

                    {/* Applied */}
                    <div className="relative flex items-center mb-8">
                        <div className="relative flex items-center justify-center w-4 h-4 bg-green-500 rounded-full -ml-2">
                            <div className="absolute w-full h-full border-2 border-white rounded-full"></div>
                        </div>
                        <div className="ml-6 p-2 bg-green-100 rounded-full text-green-700">Applied</div>
                    </div>

                    {/* Application Viewed */}
                    <div className="relative flex items-center mb-8">
                        <div className="relative flex items-center justify-center w-4 h-4 bg-gray-300 rounded-full -ml-2">
                            <div className="absolute w-full h-full border-2 border-white rounded-full"></div>
                        </div>
                        <div className="ml-6 p-2 bg-gray-100 rounded-full text-gray-400">Application Viewed</div>
                    </div>

                    {/* Shortlisted */}
                    <div className="relative flex items-center">
                        <div className="relative flex items-center justify-center w-4 h-4 bg-gray-300 rounded-full -ml-2">
                            <div className="absolute w-full h-full border-2 border-white rounded-full"></div>
                        </div>
                        <div className="ml-6 p-2 bg-gray-100 rounded-full text-gray-400">Shortlisted</div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold">Track your application</h2>
                <div className="relative flex flex-col items-start mt-4 p-4 border rounded-lg">
                    {/* Dotted Line */}
                    <div className="absolute left-2 top-0 bottom-0 border-l-2 border-dotted border-gray-300"></div>

                    {/* Application Sent to Recruiter */}
                    <div className="relative flex items-center mb-8">
                        <div className="relative flex items-center justify-center w-4 h-4 bg-green-500 rounded-full -ml-2">
                            <div className="absolute w-full h-full border-2 border-white rounded-full"></div>
                        </div>
                        <div className="ml-6 text-black">Application Sent to Recruiter</div>
                    </div>

                    {/* Application Viewed */}
                    <div className="relative flex items-center mb-8">
                        <div className="relative flex items-center justify-center w-4 h-4 bg-gray-300 rounded-full -ml-2">
                            <div className="absolute w-full h-full border-2 border-white rounded-full"></div>
                        </div>
                        <div className="ml-6 text-gray-400">Application Viewed</div>
                    </div>

                    {/* Profile Viewed */}
                    <div className="relative flex items-center">
                        <div className="relative flex items-center justify-center w-4 h-4 bg-gray-300 rounded-full -ml-2">
                            <div className="absolute w-full h-full border-2 border-white rounded-full"></div>
                        </div>
                        <div className="ml-6 text-gray-400">Profile Viewed</div>
                    </div>
                </div>
            </div>
        </div>   
)
}

export default StatusBar

