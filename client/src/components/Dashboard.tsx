import React, { useEffect, useState } from 'react'
import { currentEthRate, earningsInfo } from '../types'
import { getCurrentEthRate, getEthEarningsInfo } from '../utils/API'
import { calcCryptoEarnings } from '../utils/calculation'
import { Header } from './Header'
import { EthereumSVG } from './svgs/Ethereum'
import { Loader } from './ui/Loader'

const DASHBOARD_EXAMPLE_HASHRATE: number = 100

export const Dashboard: React.FC = () => {
  const [isAppLoading, setIsAppLoading] = useState(true)
  const [currentEthRate, setCurrentEthRate] = useState<
    currentEthRate | undefined
  >()
  const [earningsInfo, setEarningsInfo] = useState<earningsInfo | undefined>()
  const [calculatedEarning, setCalculatedEarning] = useState(0)

  const fetchData = async () => {
    setIsAppLoading(true)
    setCurrentEthRate(await getCurrentEthRate())
    setEarningsInfo(await getEthEarningsInfo())
    setIsAppLoading(false)
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
        isLoading={isAppLoading}
        currentEthRate={currentEthRate}
        onClickLastUpdateLabel={fetchData}
      />
      <div className="rounded-2xl pb-8 md:pb-16 pt-6 md:pt-10 px-8 bg-gray-700 md:inline-block transition hover:opacity-90">
        <div className="flex items-center mb-6 opacity-50 select-none">
          <EthereumSVG />
          Ethereum
        </div>
        <div className="text-4xl block md:flex items-center md:space-x-4">
          <div className="text-center gap-4">
            Daily earnings per
            <div className="text-gray-300">
              {DASHBOARD_EXAMPLE_HASHRATE} MH/s
            </div>
          </div>
          <div className="mt-6 md:m-0 text-center">
            {isAppLoading ? (
              <Loader />
            ) : (
              <div>
                <div className="text-4xl md:text-7xl">${calculatedEarning.toFixed(2)}</div>
                <div className="text-base md:text-lg text-gray-300">
                  {earningsInfo?.expectedReward24H.toFixed(5)} ETH
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
