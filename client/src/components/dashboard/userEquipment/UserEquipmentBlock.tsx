import React, { useContext } from 'react'
import { userEarningInfo } from '../../../types'
import { CryptoPair } from '../../../utils/calculation'
import { Trashcan } from '../../svgs/Trashcan'
import { DashboardContext } from '../Dashboard'

interface DeviceInfoProps {
  device: userEarningInfo
  onClickDeleteButton: (uuid: string) => void
}

export const DeviceInfo: React.FC<DeviceInfoProps> = ({
  device,
  onClickDeleteButton,
}) => {
  const { dashboardState } = useContext(DashboardContext)

  const cryptoPair = new CryptoPair(
    dashboardState.currentEthRate,
    dashboardState.earningsInfo?.expectedReward24H,
    device.hashrate,
    dashboardState.period.value
  )

  return (
    <div
      className="py-3 px-4 bg-gray-700 rounded hover:opacity-90"
      key={device.uuid}
    >
      <div className="flex justify-between items-center opacity-50">
        {device.name} - {device.hashrate} MH/s
        <button
          onClick={() => onClickDeleteButton(device.uuid)}
          aria-label="Delete record"
        >
          <Trashcan />
        </button>
      </div>
      <div>
        <p>${cryptoPair.USDTEarning}</p>
        <p>{cryptoPair.cryptoEarning} ETH</p>
      </div>
    </div>
  )
}
