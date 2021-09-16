import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { currentEthRate, earningsInfo } from '../../types'
import { getCurrentEthEarningsInfo, getCurrentEthRate } from '../../utils/API'
import { calcCryptoEarning } from '../../utils/calculation'
import { DASHBOARD_EXAMPLE_HASHRATE } from '../../utils/constants'
import { useLocalStorage } from '../../utils/hooks/useLocalStorage'
import { Copy } from '../svgs/Copy'
import { XMark } from '../svgs/XMark'
import { Modal } from '../ui/Modal'
import { StatsDashboard } from './dashboardBlocks/StatsDashboardBlock'
import { UserStatsDashboard } from './dashboardBlocks/UserStatsDashboardBlock'
import { Header } from './Header'
import { UserEquipment } from './UserEquipment'

interface DashboardState {
  isLoading: boolean
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
  mode: modalStateMod
}

type modalStateMod = 'import' | 'export'

export const DashboardContext = createContext<Partial<DashboardContextProps>>(
  {}
)

const initialDashboardState = {
  isLoading: true,
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
    setDashboardState(initialDashboardState)
    const currentEthRate = await getCurrentEthRate()
    const earningsInfo = await getCurrentEthEarningsInfo()
    setDashboardState({
      isLoading: false,
      currentEthRate: currentEthRate,
      earningsInfo: earningsInfo,
      calculatedEarning: calcCryptoEarning(
        currentEthRate.ethUsdRate,
        earningsInfo.expectedReward24H,
        DASHBOARD_EXAMPLE_HASHRATE
      ),
    })
  }, [])

  const onClickImportButton = () => {
    console.log('onClickImportButton')
  }

  const onClickExportButton = () => {
    setModalState({ isShowing: true, mode: 'export' })
  }

  const onClickCloseModalButton = () => {
    setModalState({ isShowing: false, mode: modalState.mode })
  }

  const importInput = useRef<HTMLInputElement>(null)

  const onClickCopyButton = () => {
    if (importInput) {
      navigator.clipboard.writeText(importInput.current?.value || '[]')
      setModalState({ isShowing: false, mode: modalState.mode })
    }
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
        <StatsDashboard />
        <UserStatsDashboard />
      </div>
      <UserEquipment />
      <Modal isShowing={modalState.isShowing}>
        {modalState.mode === 'export' && (
          <div>
            <div className="flex justify-end mb-2 text-gray-500 hover:text-black transition-colors">
              <button onClick={() => onClickCloseModalButton()} title="Close">
                <XMark />
              </button>
            </div>
            <p className="text-black text-xl text-center my-2">Export data</p>
            <p className="text-black text-sm text-center my-2">Click the button below to save your data and use import function on another device</p>
            <div className="relative items-center">
              <input
                ref={importInput}
                className="bg-white text-black w-full border rounded pr-10 py-2 pl-2"
                type="text"
                readOnly
                defaultValue={JSON.stringify(userData)}
              />
              <button
                className="absolute z-10 top-2 right-2 text-gray-500 hover:text-black transition-colors"
                onClick={() => onClickCopyButton()}
                title="Copy"
              >
                <Copy />
              </button>
            </div>
          </div>
        )}
      </Modal>
    </DashboardContext.Provider>
  )
}
