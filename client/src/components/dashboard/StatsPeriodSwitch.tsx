import { useState } from 'react'
import { STAT_PERIODS } from '../../utils/constants'

interface Props {}

export const StatsPeriodSwitch = (props: Props) => {
  const [currentPeriod, setCurrentPeriod] = useState(STAT_PERIODS[0])

  const onClickSwitchField = () => {
    const currentPeriodIndex = STAT_PERIODS.findIndex(
      (item) => item.name === currentPeriod.name
    )
    const nextPeriodIndex =
      currentPeriodIndex >= STAT_PERIODS.length - 1 ? 0 : currentPeriodIndex + 1

    setCurrentPeriod(STAT_PERIODS[nextPeriodIndex])
  }

  return (
    <button
      className="flex items-center focus:outline-none"
      onClick={() => onClickSwitchField()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
      <p className="ml-1 uppercase">{currentPeriod.name}</p>
    </button>
  )
}
