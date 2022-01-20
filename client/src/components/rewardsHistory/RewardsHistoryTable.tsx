import { Transition } from '@headlessui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { earningsInfo } from '../../types'
import { getEthEarningsInfo as getEarningsInfo } from '../../utils/API'
import {
  MAX_ITEMS_IN_REWARDS_HISTORY_TABLE,
  REWARDS_HISTORY_TABLE_EXAMPLE_HASHRATE,
  REWARDS_HISTORY_TABLE_SHOW_MORE_ITERATION,
} from '../../utils/constants'
import { Loader } from '../ui/Loader'
import { RewardsHistoryTableTr } from './RewardsHistoryTableTr'

export const RewardsHistoryTable: React.FC = () => {
  const { t } = useTranslation()
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
    if (rewardsCount <= MAX_ITEMS_IN_REWARDS_HISTORY_TABLE) {
      setRewardsCount(rewardsCount + REWARDS_HISTORY_TABLE_SHOW_MORE_ITERATION)
    }
  }

  return (
    <div>
      <h1
        className="flex justify-center items-center text-4xl font-bold group cursor-pointer"
        onClick={() => setIsShowing(!isShowing)}
        role="button"
      >
        {t('Rewards History')}
        <div className="text-gray-600 group-hover:text-gray-300 transition-colors ml-2">
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
      {isShowing && (
        <p className="text-center text-gray-300">
          {t('per')} {REWARDS_HISTORY_TABLE_EXAMPLE_HASHRATE} MH/s
        </p>
      )}
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
          <div className="text-2xl mt-6">
            <Loader />
          </div>
        ) : (
          rewardsList && (
            <div>
              <table className="table-auto text-xs md:text-xl w-full max-w-7xl my-4 mx-auto overflow-x-auto">
                <thead>
                  <tr className=" bg-gray-800">
                    <th className="px-1 sm:px-2 md:px-12 py-2">
                      {t('ETH/USDT Rate')}
                    </th>
                    <th className="px-1 sm:px-2 md:px-12 py-2">
                      ETH {t('Expected Reward')}
                    </th>
                    <th className="px-1 sm:px-2 md:px-12 py-2">
                      USD {t('Expected Reward')}
                    </th>
                    <th className="px-1 sm:px-2 md:px-12 py-2">{t('Date')}</th>
                  </tr>
                </thead>
                <tbody>
                  {rewardsList.map((reward, _) => (
                    <RewardsHistoryTableTr
                      reward={reward}
                      key={reward.timestamp}
                    />
                  ))}
                </tbody>
              </table>
              {rewardsCount <= MAX_ITEMS_IN_REWARDS_HISTORY_TABLE && (
                <div className="flex justify-center">
                  <button
                    className="text-center rounded py-2 px-4 hover:bg-gray-600 transition-colors"
                    onClick={() => onClickShowMoreButton()}
                  >
                    {t('Show More')}
                  </button>
                </div>
              )}
            </div>
          )
        )}
      </Transition>
    </div>
  )
}
