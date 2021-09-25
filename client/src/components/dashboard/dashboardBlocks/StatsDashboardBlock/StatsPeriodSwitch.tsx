import { StatPeriod } from '../../../../types'

interface StatsPeriodSwitchProps {
  onClickSwitchPeriodField: () => void
  currentPeriod: StatPeriod
}

export const StatsPeriodSwitch: React.FC<StatsPeriodSwitchProps> = ({
  onClickSwitchPeriodField,
  currentPeriod,
}) => {
  return (
    <button
      className="mx-auto flex items-center focus:outline-none relative transition-colors hover:text-gray-300"
      onClick={onClickSwitchPeriodField}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-7 h-6 w-6"
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
      <p className="ml-1 capitalize transition-colors hover:text-gray-300">{currentPeriod.name}</p>
    </button>
  )
}
