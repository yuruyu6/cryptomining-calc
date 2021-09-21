import React, { createContext, useCallback, useEffect, useState } from 'react'
import { currentEthRate, earningsInfo, StatPeriod } from '../../types'
import { getCurrentEthEarningsInfo, getCurrentEthRate } from '../../utils/API'
import { calcCryptoEarning } from '../../utils/calculation'
import {
  DASHBOARD_EXAMPLE_HASHRATE,
  DEFAULT_STAT_PERIOD,
  STAT_PERIODS,
} from '../../utils/constants'
import { useLocalStorage } from '../../utils/hooks/useLocalStorage'
import { Modal } from '../ui/Modal'
import { StatsDashboard } from './dashboardBlocks/StatsDashboardBlock'
import { UserStatsDashboard } from './dashboardBlocks/UserStatsDashboardBlock'
import { Header } from './Header'
import { ExportBlock } from './modalBlocks/ExportBlock'
import { ImportBlock } from './modalBlocks/ImportBlock'
import { UserEquipment } from './UserEquipment'

interface DashboardState {
  isLoading: boolean
  period: StatPeriod
  calculatedEarning: number | undefined
  currentEthRate: currentEthRate | undefined
  earningsInfo: earningsInfo | undefined
}

interface DashboardContextProps {
  dashboardState: any
  userData: any
  setUserData: any
}

interface ModalState {
  isShowing: boolean
  mode: modalStateMode
}

type modalStateMode = 'import' | 'export'

export const DashboardContext = createContext<Partial<DashboardContextProps>>(
  {}
)

const initialDashboardState = {
  isLoading: true,
  period: DEFAULT_STAT_PERIOD,
  currentEthRate: undefined,
  earningsInfo: undefined,
  calculatedEarning: undefined,
}

export const Dashboard: React.FC = () => {
  const [dashboardState, setDashboardState] = useState<DashboardState>(
    initialDashboardState
  )
  const [modalState, setModalState] = useState<ModalState>({
    isShowing: false,
    mode: 'import',
  })
  const [userData, setUserData] = useLocalStorage('crypto', [])

  const fetchData = useCallback(async () => {
    setDashboardState((prevState) => ({ ...prevState, isLoading: true }))
    const currentEthRate = await getCurrentEthRate()
    const earningsInfo = await getCurrentEthEarningsInfo()
    setDashboardState((prevState) => ({
      isLoading: false,
      currentEthRate: currentEthRate,
      earningsInfo: earningsInfo,
      period: prevState.period,
      calculatedEarning: calcCryptoEarning(
        currentEthRate.ethUsdRate,
        earningsInfo.expectedReward24H,
        DASHBOARD_EXAMPLE_HASHRATE,
        prevState.period.value
      ),
    }))
  }, [])

  const onClickImportButton = () => {
    setModalState({ isShowing: true, mode: 'import' })
  }

  const onClickExportButton = () => {
    setModalState({ isShowing: true, mode: 'export' })
  }

  const onClickCloseModalButton = () => {
    setModalState({ isShowing: false, mode: modalState.mode })
  }

  const onClickSwitchPeriodField = () => {
    const currentPeriodIndex = STAT_PERIODS.findIndex(
      (item) => item.name === dashboardState.period.name
    )
    const nextPeriodIndex =
      currentPeriodIndex >= STAT_PERIODS.length - 1 ? 0 : currentPeriodIndex + 1

    setDashboardState((prevState) => ({
      ...prevState,
      period: STAT_PERIODS[nextPeriodIndex],
      calculatedEarning: calcCryptoEarning(
        prevState?.currentEthRate?.ethUsdRate ?? 1,
        prevState?.earningsInfo?.expectedReward24H ?? 1,
        DASHBOARD_EXAMPLE_HASHRATE,
        STAT_PERIODS[nextPeriodIndex].value
      ),
    }))
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <DashboardContext.Provider
      value={{ dashboardState, userData, setUserData }}
    >
      <Header
        onClickLastUpdateLabel={fetchData}
        onClickImportButton={onClickImportButton}
        onClickExportButton={onClickExportButton}
      />
      <div className="block lg:flex max-w-7xl space-x-0 lg:space-x-6 space-y-6 lg:space-y-0 justify-around mx-auto">
        <StatsDashboard onClickSwitchPeriodField={onClickSwitchPeriodField} />
        <UserStatsDashboard />
      </div>
      <UserEquipment />
      <Modal isShowing={modalState.isShowing}>
        {modalState.mode === 'export' && (
          <ExportBlock onClickCloseModalButton={onClickCloseModalButton} />
        )}
        {modalState.mode === 'import' && (
          <ImportBlock onClickCloseModalButton={onClickCloseModalButton} />
        )}
      </Modal>
    </DashboardContext.Provider>
  )
}
