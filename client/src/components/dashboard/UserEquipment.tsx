import React, { useContext } from 'react'
import { userEarningInfo } from '../../types'
import { calcCryptoEarning } from '../../utils/calculation'
import { DashboardContext } from './Dashboard'
import { Trashcan } from '../svgs/Trashcan'

export const UserEquipment: React.FC = () => {
  const { dashboardState, userData, setUserData } = useContext(DashboardContext)

  const onClickDeleteButton = (recordUUID: string) => {
    const storedData: userEarningInfo[] = userData
    setUserData(storedData.filter((record) => record.uuid !== recordUUID) as [])
  }

  const getCalculatedEarningInUSDT = (hashrate: number) => {
    if (dashboardState.currentEthRate && dashboardState.earningsInfo) {
      return calcCryptoEarning(
        dashboardState.currentEthRate,
        dashboardState.earningsInfo.expectedReward24H,
        hashrate,
        dashboardState.period.value
      ).toFixed(2)
    }
  }

  const getCalculatedEarningInETH = (hashrate: number) => {
    if (dashboardState.earningsInfo) {
      return (
        (dashboardState.earningsInfo.expectedReward24H / 100) *
        hashrate
      ).toFixed(5)
    }
  }

  return (
    <div className="mt-8 mb-6">
      {!dashboardState.isLoading && userData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-4 md:gap-6 ">
          {userData
            .sort((a: userEarningInfo, b: userEarningInfo) => {
              if (+a.hashrate < +b.hashrate) return 1
              if (+a.hashrate > +b.hashrate) return -1
              return 0
            })
            .map((device: userEarningInfo) => (
              <div key={device.uuid}>
                <div className="py-3 px-4 bg-gray-700 rounded hover:opacity-90">
                  <div className="">
                    <div className="flex justify-between items-center opacity-50 truncate">
                      {device.name} - {device.hashrate} MH/s
                      <button
                        onClick={() => onClickDeleteButton(device.uuid)}
                        aria-label="Delete record"
                      >
                        <Trashcan />
                      </button>
                    </div>
                    <div>
                      <p>${getCalculatedEarningInUSDT(device.hashrate)}</p>
                      <p>{getCalculatedEarningInETH(device.hashrate)} ETH</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : null}
    </div>
  )
}
