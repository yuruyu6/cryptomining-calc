import { Transition } from '@headlessui/react'
import React, { useContext, useState } from 'react'
import { userEarningInfo, userEarningInfoInput } from '../../../types'
import {
  calcArrayOfCryptoEarnings,
  generateUUID
} from '../../../utils/calculation'
import { Loader } from '../../ui/Loader'
import { AddRecordForm } from '../AddRecordForm'
import { DashboardContext } from '../Dashboard'

export const UserStatsDashboard: React.FC = () => {
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

  let calculatedEarnings
  if (dashboardState.currentEthRate && dashboardState.earningsInfo) {
    calculatedEarnings = calcArrayOfCryptoEarnings(
      userData,
      dashboardState.currentEthRate.ethUsdRate,
      dashboardState.earningsInfo.expectedReward24H,
      dashboardState.period.value
    )
  }

  return (
    <div className="flex-1 rounded-2xl text-xl pb-8 md:pb-12 lg:pb-4 pt-6 md:pt-10 px-8 bg-gray-700 transition hover:opacity-90">
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
                <p className="text-center opacity-50 select-none">Summary</p>
                <button
                  className="cursor-pointer text-lg flex items-center opacity-50 transition-opacity hover:opacity-75"
                  onClick={() => onClickChangeViewButton()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add
                </button>
              </div>

              {dashboardState.isLoading ? (
                <div className="text-4xl my-4 md:mt-8">
                  <Loader />
                </div>
              ) : (
                calculatedEarnings && (
                  <div className="text-center">
                    <p className="text-gray-300 mb-2">
                      {calculatedEarnings.hashrate.toFixed(2).replace(/\.00$/, '')} MH/s
                    </p>
                    <p className="text-4xl md:text-7xl">
                      ${calculatedEarnings.earningsUsdt.toFixed(2)}
                    </p>
                    <p className="text-base md:text-lg text-gray-300">
                      {calculatedEarnings.earningsEth.toFixed(5)} ETH
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-1/4 w-1/4 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Add your equipment for tracking earnings
            </button>
          )}
        </div>
      )}
    </div>
  )
}
