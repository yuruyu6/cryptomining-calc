import React, { createContext, useEffect, useState } from 'react'
import { currentEthRate, earningsInfo } from '../types'
import { getCurrentEthRate, getEthEarningsInfo } from '../utils/API'
import { calcCryptoEarning } from '../utils/calculation'
import { Header } from './Header'
import { UserStatsDashboard } from './dashboardBlocks/UserStatsDashboardBlock'
import { StatsDashboard } from './dashboardBlocks/StatsDashboardBlock'
import { DASHBOARD_EXAMPLE_HASHRATE } from '../utils/constants'

interface DashboardState {
  isLoading: boolean
  calculatedEarning: number | undefined
  currentEthRate: currentEthRate | undefined
  earningsInfo: earningsInfo | undefined
}

interface DashboardContextProps {
  dashboardState: any
}

export const DashboardContext = createContext<Partial<DashboardContextProps>>(
  {}
)

const initialDashboardState = {
  isLoading: true,
  currentEthRate: undefined,
  earningsInfo: undefined,
  calculatedEarning: undefined,
}

export const Dashboard: React.FC = () => {
  const [dashboardState, setDashboardState] = useState<DashboardState>(
    initialDashboardState
  )

  const fetchData = async () => {
    setDashboardState(initialDashboardState)
    const currentEthRate = await getCurrentEthRate()
    const earningsInfo = await getEthEarningsInfo()
    setDashboardState({
      isLoading: false,
      currentEthRate: currentEthRate,
      earningsInfo: earningsInfo,
      calculatedEarning: calcCryptoEarning(
        currentEthRate.ethUsdRate,
        earningsInfo.expectedReward24H,
        DASHBOARD_EXAMPLE_HASHRATE
      ),
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <DashboardContext.Provider value={{ dashboardState }}>
      <Header onClickLastUpdateLabel={fetchData} />
      <div className="block lg:flex max-w-7xl space-x-0 lg:space-x-6 space-y-6 lg:space-y-0 justify-around mx-auto">
        <StatsDashboard />
        <UserStatsDashboard />
      </div>
    </DashboardContext.Provider>
  )
}
