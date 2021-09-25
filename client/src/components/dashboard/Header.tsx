import { Transition } from '@headlessui/react'
import dayjs from 'dayjs'
import React, { useContext } from 'react'
import ReactTooltip from 'react-tooltip'
import { Export } from '../svgs/Export'
import { Import } from '../svgs/Import'
import { DashboardContext } from './Dashboard'

interface HeaderProps {
  onClickLastUpdateLabel: () => void
  onClickImportButton: () => void
  onClickExportButton: () => void
}

export const Header: React.FC<HeaderProps> = ({
  onClickLastUpdateLabel,
  onClickImportButton,
  onClickExportButton,
}) => {
  const { dashboardState, userData } = useContext(DashboardContext)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  return (
    <section className="flex mt-8 mb-12 h-8 items-center justify-between">
      <div className="flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0">
        <div
          onClick={() => onClickLastUpdateLabel()}
          className="flex items-center text-gray-400 hover:underline cursor-pointer"
        >
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
          Last update:
          {dashboardState.isLoading ? (
            <div className="ml-1 bg-gray-500 rounded animate-pulse w-10 h-4"></div>
          ) : (
            <span className="ml-1 text-white">{dayjs().format('HH:mm')}</span>
          )}
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
          ETH/USDT Rate:
          {dashboardState.isLoading ? (
            <div className="ml-1 bg-gray-500 rounded animate-pulse w-16 h-4"></div>
          ) : (
            <span className="ml-1 text-white">
              $
              {(dashboardState.currentEthRate?.toFixed(2)) ??
                'Fetch error'}
            </span>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        <Transition
          as="button"
          aria-label="Export data"
          className="transition-colors text-gray-500 hover:text-gray-300 focus:outline-none"
          show={userData.length > 0}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          data-tip
          data-for="export-icon"
          onClick={onClickExportButton}
        >
          <Export />
          <ReactTooltip
            disable={isMobile}
            id="export-icon"
            type="light"
            effect="solid"
          >
            <span className="text-gray-800 text-center">Export</span>
          </ReactTooltip>
        </Transition>
        <button
          className="cursor-pointer transition-colors text-gray-500 hover:text-gray-300 focus:outline-none"
          aria-label="Import data"
          data-tip
          data-for="import-icon"
          onClick={onClickImportButton}
        >
          <Import />
          <ReactTooltip
            disable={isMobile}
            id="import-icon"
            type="light"
            effect="solid"
          >
            <span className="text-gray-800 text-center">Import</span>
          </ReactTooltip>
        </button>
      </div>
    </section>
  )
}
