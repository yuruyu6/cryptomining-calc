import React, { useContext } from 'react'
import { userEarningInfo } from '../../../types'
import { DashboardContext } from '../Dashboard'
import { UserEquipmentGridItem } from './UserEquipmentGridItem'

export const UserEquipmentGrid: React.FC = () => {
  const { dashboardState, userData, setUserData } = useContext(DashboardContext)

  const onClickDeleteButton = (recordUUID: string) => {
    const storedData: userEarningInfo[] = userData
    setUserData(storedData.filter((record) => record.uuid !== recordUUID) as [])
  }

  return (
    <div className="mt-8 mb-6">
      {!dashboardState.isLoading && userData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-4 md:gap-6">
          {userData
            .sort((a: userEarningInfo, b: userEarningInfo) => {
              if (+a.hashrate < +b.hashrate) return 1
              if (+a.hashrate > +b.hashrate) return -1
              return 0
            })
            .map((device: userEarningInfo) => (
              <UserEquipmentGridItem
                device={device}
                onClickDeleteButton={() => onClickDeleteButton(device.uuid)}
                key={device.uuid}
              />
            ))}
        </div>
      ) : null}
    </div>
  )
}
