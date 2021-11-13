import { Transition } from '@headlessui/react'
import dayjs from 'dayjs'
import React from 'react'
import { earningsInfo } from '../../types'
import { CryptoPair } from '../../utils/calculation'
import { REWARDS_HISTORY_TABLE_EXAMPLE_HASHRATE } from '../../utils/constants'

interface RewardsHistoryTableTrProps {
  reward: earningsInfo
}

export const RewardsHistoryTableTr: React.FC<RewardsHistoryTableTrProps> = ({
  reward,
}) => {
  const cryptoPair = new CryptoPair(
    reward.expectedReward24H,
    reward.exchangeRate,
    REWARDS_HISTORY_TABLE_EXAMPLE_HASHRATE
  )

  return (
    <Transition.Child
      as="tr"
      className="bg-gray-700 hover:bg-gray-600 transition-colors odd:bg-gray-800"
      enter="transition-opacity ease-linear duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <td className="border border-gray-300 p-2">${reward.exchangeRate}</td>
      <td className="border border-gray-300 p-2">
        {reward.expectedReward24H.toFixed(5)} ETH
      </td>
      <td className="border border-gray-300 p-2">${cryptoPair.USDTEarning}</td>
      <td
        className="border border-gray-300 p-2"
        title={dayjs(reward.timestamp).format('HH:mm DD/MM/YYYY')}
      >
        {dayjs(reward.timestamp).format('DD/MM/YYYY')}
      </td>
    </Transition.Child>
  )
}
