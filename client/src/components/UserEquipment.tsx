import React, { useContext } from 'react'
import { userEarningInfo } from '../types'
import { DashboardContext } from './Dashboard'
import { Trashcan } from './svgs/Trashcan'

export const UserEquipment: React.FC = () => {
  const { userData, setUserData } = useContext(DashboardContext)

  const onClickDeleteButton = (recordUUID: string) => {
    const storedData: userEarningInfo[] = userData
    setUserData(storedData.filter((record) => record.uuid !== recordUUID) as [])
  }

  return userData.length > 0 ? (
    <div className="grid grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row gap-6 my-12 justify-items-stretch">
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
                  {device.name}
                  <button onClick={() => onClickDeleteButton(device.uuid)}>
                    <Trashcan />
                  </button>
                </div>

                <div>
                  <p>{device.hashrate} MH/s</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  ) : null
}
