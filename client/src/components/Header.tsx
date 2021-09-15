import React, { useContext } from 'react'
import dayjs from 'dayjs'
import { Loader } from './ui/Loader'
import { DashboardContext } from './Dashboard'
import { Export } from './svgs/Export'
import { Import } from './svgs/Import'
import ReactTooltip from 'react-tooltip'

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
  const { dashboardState } = useContext(DashboardContext)

  return (
    <section className="flex my-8 h-8 items-center justify-between">
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
            <Loader micro={true} />
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
            <Loader micro={true} />
          ) : (
            <span className="ml-1 text-white">
              $
              {(dashboardState.currentEthRate &&
                dashboardState.currentEthRate.ethUsdRate.toFixed(2)) ??
                'Fetch error'}
            </span>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          className="cursor-pointer transition-colors text-gray-500 hover:text-gray-300 focus:outline-none"
          data-tip
          data-for="export-icon"
          onClick={onClickExportButton}
        >
          <Export />
          <ReactTooltip id="export-icon" type="light" effect="solid">
            <span className="text-gray-800 text-center">Export</span>
          </ReactTooltip>
        </button>

        <button
          className="cursor-pointer transition-colors text-gray-500 hover:text-gray-300 focus:outline-none"
          data-tip
          data-for="import-icon"
          onClick={onClickImportButton}
        >
          <Import />
          <ReactTooltip id="import-icon" type="light" effect="solid">
            <span className="text-gray-800 text-center">Recovery</span>
          </ReactTooltip>
        </button>
      </div>
    </section>
  )
}
