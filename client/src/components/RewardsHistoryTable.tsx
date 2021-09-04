import dayjs from 'dayjs'
import React, { useCallback, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { earningsInfo } from '../types'
import { getEthEarningsInfo as getEarningsInfo } from '../utils/API'
import { calcCryptoEarnings } from '../utils/calculation'
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
          className="text-gray-500 hover:text-gray-300 transition-colors cursor-pointer ml-2"
          onClick={() => setIsShowing(!isShowing)}
          role="button"
        >
          {isShowing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
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
                      className={
                        index % 2
                          ? 'bg-gray-700 hover:bg-gray-600 transition-colors'
                          : 'bg-gray-800 hover:bg-gray-600 transition-colors'
                      }
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
                        {calcCryptoEarnings(
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
