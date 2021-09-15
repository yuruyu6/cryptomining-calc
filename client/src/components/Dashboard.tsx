import React, { createContext, useCallback, useEffect, useState } from 'react'
import { currentEthRate, earningsInfo } from '../types'
import { getCurrentEthEarningsInfo, getCurrentEthRate } from '../utils/API'
import { calcCryptoEarning } from '../utils/calculation'
import { DASHBOARD_EXAMPLE_HASHRATE } from '../utils/constants'
import { useLocalStorage } from '../utils/hooks/useLocalStorage'
import { StatsDashboard } from './dashboardBlocks/StatsDashboardBlock'
import { UserStatsDashboard } from './dashboardBlocks/UserStatsDashboardBlock'
import { Header } from './Header'
import { UserEquipment } from './UserEquipment'

interface DashboardState {
  isLoading: boolean
  calculatedEarning: number | undefined
  currentEthRate: currentEthRate | undefined
  earningsInfo: earningsInfo | undefined
}

interface DashboardContextProps {
  dashboardState: any
  userData: any
  setUserData: any
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
  const [userData, setUserData] = useLocalStorage('crypto', [])

  const fetchData = useCallback(async () => {
    setDashboardState(initialDashboardState)
    const currentEthRate = await getCurrentEthRate()
    const earningsInfo = await getCurrentEthEarningsInfo()
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
  }, [])

  const onClickImportButton = () => {
    console.log('import')
  }

  const onClickExportButton = () => {
    console.log('export')
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <DashboardContext.Provider
      value={{ dashboardState, userData, setUserData }}
    >
      <Header
        onClickLastUpdateLabel={fetchData}
        onClickImportButton={onClickImportButton}
        onClickExportButton={onClickExportButton}
      />
      <div className="block lg:flex max-w-7xl space-x-0 lg:space-x-6 space-y-6 lg:space-y-0 justify-around mx-auto">
        <StatsDashboard />
        <UserStatsDashboard />
      </div>
      <UserEquipment />
    </DashboardContext.Provider>
  )
}
