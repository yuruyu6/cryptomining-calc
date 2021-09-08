import React, { createContext, useEffect, useState } from 'react'
import { currentEthRate, earningsInfo } from '../types'
import { getCurrentEthRate, getEthEarningsInfo } from '../utils/API'
import { calcCryptoEarning } from '../utils/calculation'
import { Header } from './Header'
import { UserStatsDashboard } from './dashboardBlocks/UserStatsDashboardBlock'
import { StatsDashboard } from './dashboardBlocks/StatsDashboardBlock'
import { DASHBOARD_EXAMPLE_HASHRATE } from '../utils/constants'

interface DashboardContextProps {
  isLoading: boolean
  currentEthRate: currentEthRate | undefined
  earningsInfo: earningsInfo | undefined
  calculatedEarning: any
}

export const DashboardContext = createContext<Partial<DashboardContextProps>>(
  {}
)

export const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentEthRate, setCurrentEthRate] = useState<
    currentEthRate | undefined
  >()
  const [earningsInfo, setEarningsInfo] = useState<earningsInfo | undefined>()
  const [calculatedEarning, setCalculatedEarning] = useState(0)

  const fetchData = async () => {
    setIsLoading(true)
    setCurrentEthRate(await getCurrentEthRate())
    setEarningsInfo(await getEthEarningsInfo())
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (currentEthRate && earningsInfo) {
      setCalculatedEarning(
        calcCryptoEarning(
          currentEthRate.ethUsdRate,
          earningsInfo.expectedReward24H,
          DASHBOARD_EXAMPLE_HASHRATE
        )
      )
    }
  }, [currentEthRate, earningsInfo])

  return (
    <DashboardContext.Provider
      value={{ isLoading, currentEthRate, earningsInfo, calculatedEarning }}
    >
      <Header onClickLastUpdateLabel={fetchData} />
      <div className="block lg:flex max-w-7xl space-x-0 lg:space-x-6 space-y-6 lg:space-y-0 justify-around mx-auto">
        <StatsDashboard />
        <UserStatsDashboard />
      </div>
    </DashboardContext.Provider>
  )
}
