import React, { useContext } from 'react'
import { DASHBOARD_EXAMPLE_HASHRATE } from '../../../utils/constants'
import { DashboardContext } from '../Dashboard'
import { EthereumSVG } from '../../svgs/Ethereum'
import { Hint } from '../../ui/Hint'
import { Loader } from '../../ui/Loader'

export const StatsDashboard: React.FC = () => {
  const { dashboardState } = useContext(DashboardContext)

  return (
    <div className="flex-1 rounded-2xl pb-8 md:pb-16 pt-6 md:pt-10 px-8 bg-gray-700 transition hover:opacity-90">
      <div className="flex justify-between items-start md:mb-6">
        <div className="flex items-center opacity-50 select-none">
          <EthereumSVG />
          Ethereum
        </div>
        <Hint hintText="Information provided by HiveOn Pool" />
      </div>
      <div className="text-xl md:text-3xl block md:flex items-center justify-center md:space-x-4">
        <div className="text-center gap-4">
          Daily earnings per
          <div className="text-gray-300">{DASHBOARD_EXAMPLE_HASHRATE} MH/s</div>
        </div>
        <div className="mt-2 md:m-0 text-center">
          {dashboardState.isLoading ? (
            <Loader />
          ) : (
            <div>
              <div className="text-4xl md:text-7xl">
                ${dashboardState.calculatedEarning.toFixed(2)}
              </div>
              <div className="text-base md:text-lg text-gray-300">
                {dashboardState.earningsInfo.expectedReward24H.toFixed(5)} ETH
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
