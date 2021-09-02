import React from 'react'
import dayjs from 'dayjs'
import { Loader } from './ui/Loader'
import { currentEthRate } from '../types'

interface HeaderProps {
  isLoading: boolean
  currentEthRate: currentEthRate | undefined
}

export const Header: React.FC<HeaderProps> = ({ isLoading, currentEthRate }) => {
  return (
    <section className="my-4">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex space-x-2">
          <div className="flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Last update
            <span className="ml-1 text-white">{dayjs().format('HH:mm')}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            ETH Rate
            <span className="ml-1 text-white">${(currentEthRate && currentEthRate.ethUsdRate.toFixed(2)) ?? 'Fetch error'}</span>
          </div>
        </div>
      )}
    </section>
  )
}
