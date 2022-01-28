import { Transition } from '@headlessui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { earningsInfo } from '../../types'
import { getEthEarningsInfo as getEarningsInfo } from '../../utils/API'
import {
  MAX_ITEMS_IN_REWARDS_HISTORY_TABLE,
  REWARDS_HISTORY_TABLE_EXAMPLE_HASHRATE,
  REWARDS_HISTORY_TABLE_SHOW_MORE_ITERATION
} from '../../utils/constants'
import { Eye } from '../svgs/Eye'
import { EyeOff } from '../svgs/EyeOff'
import { Loader } from '../ui/Loader'
import { RewardsHistoryTableTr } from './RewardsHistoryTableTr'
import { ShowMoreButton } from './ShowMoreButton'

export const RewardsHistoryTable: React.FC = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const [isPending, setIsPending] = useState(true)
  const [isShowing, setIsShowing] = useState(true)
  const [rewardsCount, setRewardsCount] = useState(10)
  const [rewardsList, setRewardsList] = useState<earningsInfo[]>()

  const fetchData = useCallback(async () => {
    setRewardsList(await getEarningsInfo(rewardsCount))
    setIsLoading(false)
    setIsPending(false)
  }, [rewardsCount])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const onClickShowMoreButton = () => {
    if (rewardsCount <= MAX_ITEMS_IN_REWARDS_HISTORY_TABLE) {
      setIsPending(true)
      setRewardsCount(rewardsCount + REWARDS_HISTORY_TABLE_SHOW_MORE_ITERATION)
    }
  }

  return (
    <section>
      <h1
        className="flex justify-center items-center text-4xl font-bold group cursor-pointer"
        onClick={() => setIsShowing(!isShowing)}
        role="button"
      >
        {t('Rewards History')}
        <div className="text-gray-600 group-hover:text-gray-300 transition-colors ml-2">
          {isShowing ? <EyeOff /> : <Eye />}
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
                  <ShowMoreButton
                    onClickShowMoreButton={onClickShowMoreButton}
                    isPending={isPending}
                  />
                </div>
              )}
            </div>
          )
        )}
      </Transition>
    </section>
  )
}
