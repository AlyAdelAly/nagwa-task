import React from 'react';

const Progress = ({ progressPercentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-400">
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full ease-in-out"
        style={{ width: progressPercentage + "%" }}
      >
        <span className='text-white fs-6 font-bold '> {progressPercentage}%</span>
      </div>
    </div>
  )
}

export default Progress;