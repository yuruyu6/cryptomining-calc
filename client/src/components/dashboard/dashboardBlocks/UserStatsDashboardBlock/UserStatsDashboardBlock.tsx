import { Transition } from '@headlessui/react'
import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { userEarningInfo, userEarningInfoInput } from '../../../../types'
import { generateUUID } from '../../../../utils'
import { CryptoPairList } from '../../../../utils/calculation'
import { PlusCycle } from '../../../svgs/PlusCycle'
import { PlusCycleSolid } from '../../../svgs/PlusCycleSolid'
import { Loader } from '../../../ui/Loader'
import { DashboardContext } from '../../Dashboard'
import { AddRecordForm } from './AddRecordForm'

export const UserStatsDashboard: React.FC = () => {
  const { t } = useTranslation()
  const { dashboardState, userData, setUserData } = useContext(DashboardContext)
  const [isFormActive, setIsFormActive] = useState(false)

  const onClickChangeViewButton = () => {
    setIsFormActive(!isFormActive)
  }

  const onAddNewRecord = (newRecord: userEarningInfoInput) => {
    let storedData: userEarningInfo[] = userData
    const data: userEarningInfo = {
      name:
        newRecord.name !== '' ? newRecord.name : `Rig #${storedData.length}`,
      hashrate: newRecord.hashrate ?? 1,
      quantity: 1,
      uuid: generateUUID(),
    }
    storedData.push(data)
    setUserData(storedData as [])
  }

  const calculatedEarnings = new CryptoPairList(
    userData,
    dashboardState.currentEthRate,
    dashboardState.earningsInfo?.expectedReward24H,
    dashboardState.period.value
  )

  return (
    <div className="flex-1 rounded-2xl text-xl pb-8 md:pb-12 lg:pb-4 pt-6 md:pt-10 px-8 bg-gray-700 transition hover:bg-opacity-90">
      {isFormActive ? (
        <Transition
          show={isFormActive}
          appear={true}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <AddRecordForm
            changeView={onClickChangeViewButton}
            onAddNewRecord={onAddNewRecord}
          />
        </Transition>
      ) : (
        <div>
          {userData.length > 0 ? (
            <div>
              <div className="flex justify-between">
                <p className="text-center opacity-50 select-none">
                  {t('Summary')}
                </p>
                <button
                  className="cursor-pointer text-lg flex items-center opacity-50 transition-opacity hover:opacity-75"
                  onClick={() => onClickChangeViewButton()}
                >
                  <PlusCycleSolid />
                  {t('Add')}
                </button>
              </div>

              {dashboardState.isLoading ? (
                <div className="text-xl md:text-3xl py-8 md:py-14">
                  <Loader />
                </div>
              ) : (
                calculatedEarnings && (
                  <div className="text-center">
                    <p className="text-gray-300 mb-2">
                      {calculatedEarnings.summedHashrate
                        .toFixed(2)
                        .replace(/\.00$/, '')}{' '}
                      MH/s
                    </p>
                    <p className="text-4xl md:text-7xl">
                      ${calculatedEarnings.USDTEarning}
                    </p>
                    <p className="text-base md:text-lg text-gray-300">
                      {calculatedEarnings.cryptoEarning} ETH
                    </p>
                  </div>
                )
              )}
            </div>
          ) : (
            <button
              className="flex flex-col mx-auto items-center text-center"
              onClick={() => onClickChangeViewButton()}
            >
              <PlusCycle />
              {t('Add your equipment for tracking earnings')}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
