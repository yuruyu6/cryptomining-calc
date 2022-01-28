import { useTranslation } from 'react-i18next'
import { StatPeriod } from '../../../../types'
import { SwitchArrows } from '../../../svgs/SwitchArrows'

interface StatsPeriodSwitchProps {
  onClickSwitchPeriodField: () => void
  currentPeriod: StatPeriod
}

export const StatsPeriodSwitch: React.FC<StatsPeriodSwitchProps> = ({
  onClickSwitchPeriodField,
  currentPeriod,
}) => {
  const { t } = useTranslation()

  return (
    <button
      className="mx-auto flex items-center focus:outline-none relative transition-colors hover:text-gray-300"
      onClick={onClickSwitchPeriodField}
    >
      <SwitchArrows />
      <p className="ml-1 capitalize transition-colors hover:text-gray-300">
        {t(currentPeriod.name)}
      </p>
    </button>
  )
}
