import React, { useEffect, useState } from 'react'
import { currentEthRate, earningsInfo } from '../types'
import { getCurrentEthRate, getEthEarningsInfo } from '../utils/API'
import { calcCryptoEarnings } from '../utils/calculation'
import { Header } from './Header'
import { UserStatsDashboard } from './dashboardBlocks/UserStatsDashboardBlock'
import { StatsDashboard } from './dashboardBlocks/StatsDashboardBlock'
import { DASHBOARD_EXAMPLE_HASHRATE } from '../utils/constants'

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
        calcCryptoEarnings(
          currentEthRate.ethUsdRate,
          earningsInfo.expectedReward24H,
          DASHBOARD_EXAMPLE_HASHRATE
        )
      )
    }
  }, [currentEthRate, earningsInfo])

  return (
    <>
      <Header
        isLoading={isLoading}
        currentEthRate={currentEthRate}
        onClickLastUpdateLabel={fetchData}
      />
      <div className="block lg:flex max-w-7xl space-x-0 lg:space-x-6 space-y-6 lg:space-y-0 justify-around mx-auto">
        <StatsDashboard
          isLoading={isLoading}
          calculatedEarning={calculatedEarning}
          earningsInfo={earningsInfo}
        />
        <UserStatsDashboard />
      </div>
    </>
  )
}
