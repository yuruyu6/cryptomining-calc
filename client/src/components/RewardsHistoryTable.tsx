import dayjs from 'dayjs'
import React, { useCallback, useEffect, useState } from 'react'
import { earningsInfo } from '../types'
import { getEthEarningsInfo as getEarningsInfo } from '../utils/API'
import { calcCryptoEarnings } from '../utils/calculation'
import { Loader } from './ui/Loader'

export const RewardsHistoryTable: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
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
      {isLoading ? (
        <Loader />
      ) : (
        rewardsList && (
          <div>
            <h1 className="text-4xl font-bold text-center mt-8">Rewards History Table</h1>
            <table className="table-auto text-xs md:text-xl my-4 mx-auto overflow-x-auto">
              <thead className="">
                <tr className=" bg-gray-800">
                  <th className="px-1 sm:px-2 md:px-12 py-2">ETH/USDT Rate</th>
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
                  <tr
                    key={reward.timestamp}
                    className={
                      index % 2
                        ? 'bg-gray-700 hover:bg-gray-600 transition-colors'
                        : 'bg-gray-800 hover:bg-gray-600 transition-colors'
                    }
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
                      title={dayjs(reward.timestamp).format('HH:mm DD/MM/YYYY')}
                    >
                      {dayjs(reward.timestamp).format('DD/MM/YYYY')}
                    </td>
                  </tr>
                ))}
                {rewardsCount <= 99 && (
                  <tr className="cursor-pointer hover:border hover:border-blue-900" onClick={() => onClickShowMoreButton()}>
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
    </div>
  )
}
