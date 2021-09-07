import React, { useState } from 'react'
import { AddRecordForm } from './AddRecordForm'

export const UserStatsDashboard = () => {
  const [isFormActive, setIsFormActive] = useState(false)

  const onClickChangeViewButton = () => {
    setIsFormActive(!isFormActive)
  }

  return (
    <div className="rounded-2xl text-2xl pb-8 md:pb-4 pt-6 md:pt-10 px-8 bg-gray-700 transition hover:opacity-90">
      {!isFormActive ? (
        <AddRecordForm onClickChangeViewButton={onClickChangeViewButton} />
      ) : (
        <button onClick={() => onClickChangeViewButton()} className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-1/4 w-1/4 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>    
          Add your powers for tracking rewards
        </button>
      )}
    </div>
  )
}
