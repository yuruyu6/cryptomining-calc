import dayjs from 'dayjs'
import React, { useCallback, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { earningsInfo } from '../types'
import { getEthEarningsInfo as getEarningsInfo } from '../utils/API'
import { calcCryptoEarning } from '../utils/calculation'
import { Loader } from './ui/Loader'

export const RewardsHistoryTable: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isShowing, setIsShowing] = useState(true)
  const [rewardsCount, setRewardsCount] = useState(10)
  const [rewardsList, setRewardsList] = useState<earningsInfo[]>()

  const fetchData = useCallback(async () => {
    setRewardsList(await getEarningsInfo(rewardsCount))
    setIsLoading(false)
  }, [rewardsCount])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const onClickShowMoreButton = () => {
    if (rewardsCount <= 99) {
      setRewardsCount(rewardsCount + 10)
    }
  }

  return (
    <div>
      <h1 className="flex justify-center items-center text-4xl font-bold mt-8">
        Rewards History
        <div
          className="text-gray-600 hover:text-gray-300 transition-colors cursor-pointer ml-2"
          onClick={() => setIsShowing(!isShowing)}
          role="button"
        >
          {isShowing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                clipRule="evenodd"
              />
              <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </h1>
      <Transition
        show={isShowing}
        appear={true}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {isLoading ? (
          <Loader />
        ) : (
          rewardsList && (
            <div>
              <table className="table-auto text-xs md:text-xl my-4 mx-auto overflow-x-auto">
                <thead className="">
                  <tr className=" bg-gray-800">
                    <th className="px-1 sm:px-2 md:px-12 py-2">
                      ETH/USDT Rate
                    </th>
                    <th className="px-1 sm:px-2 md:px-12 py-2">
                      ETH Expected Reward
                    </th>
                    <th className="px-1 sm:px-2 md:px-12 py-2">
                      USD Expected Reward
                    </th>
                    <th className="px-1 sm:px-2 md:px-12 py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {rewardsList.map((reward, index) => (
                    <Transition.Child
                      as="tr"
                      key={reward.timestamp}
                      className="bg-gray-700 hover:bg-gray-600 transition-colors odd:bg-gray-800"
                      enter="transition-opacity ease-linear duration-150"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity ease-linear duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <td className="border border-gray-300 p-2">
                        ${reward.exchangeRate}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {reward.expectedReward24H.toFixed(5)} ETH
                      </td>
                      <td className="border border-gray-300 p-2">
                        $
                        {calcCryptoEarning(
                          reward.expectedReward24H,
                          reward.exchangeRate,
                          100
                        ).toFixed(2)}
                      </td>
                      <td
                        className="border border-gray-300 p-2"
                        title={dayjs(reward.timestamp).format(
                          'HH:mm DD/MM/YYYY'
                        )}
                      >
                        {dayjs(reward.timestamp).format('DD/MM/YYYY')}
                      </td>
                    </Transition.Child>
                  ))}
                  {rewardsCount <= 99 && (
                    <tr
                      className="cursor-pointer hover:border hover:border-blue-900"
                      onClick={() => onClickShowMoreButton()}
                    >
                      <td
                        colSpan={4}
                        className="text-center py-4 hover:bg-blue-900 transition-colors"
                      >
                        Show More
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )
        )}
      </Transition>
    </div>
  )
}
