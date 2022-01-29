import { Transition } from '@headlessui/react'
import dayjs from 'dayjs'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import ReactTooltip from 'react-tooltip'
import { isMobile } from '../../utils'
import { Clock } from '../svgs/Clock'
import { Export } from '../svgs/Export'
import { Import } from '../svgs/Import'
import { Rate } from '../svgs/Rate'
import { DashboardContext } from './Dashboard'

interface HeaderProps {
  onClickLastUpdateLabel: () => void
  onClickImportButton: () => void
  onClickExportButton: () => void
}

export const Header: React.FC<HeaderProps> = ({
  onClickLastUpdateLabel,
  onClickImportButton,
  onClickExportButton,
}) => {
  const { t, i18n } = useTranslation()
  const { dashboardState, userData } = useContext(DashboardContext)

  const availableLanguages: string[] = Object.keys(i18n.store.data)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <section className="flex mt-8 mb-12 h-8 items-center justify-between">
      <div className="flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0">
        <div
          onClick={() => onClickLastUpdateLabel()}
          className="flex items-center text-gray-400 hover:underline cursor-pointer"
        >
          <Clock />
          {t('Last update:')}
          {dashboardState.isLoading ? (
            <div className="ml-1 bg-gray-500 rounded animate-pulse w-10 h-4"></div>
          ) : (
            <span className="ml-1 text-white">{dayjs().format('HH:mm')}</span>
          )}
        </div>
        <div className="flex items-center text-gray-400">
          <Rate />
          {t('ETH/USDT Rate')}:
          {dashboardState.isLoading ? (
            <div className="ml-1 bg-gray-500 rounded animate-pulse w-16 h-4"></div>
          ) : (
            <span className="ml-1 text-white">
              ${dashboardState.currentEthRate?.toFixed(2) ?? 'Fetch error'}
            </span>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        {availableLanguages.map((language) => (
          <button key={language} onClick={() => changeLanguage(language)}>
            {language.toUpperCase()}
          </button>
        ))}
        <Transition
          as="button"
          aria-label="Export data"
          className="transition-colors text-gray-500 hover:text-gray-300 focus:outline-none"
          show={userData.length > 0}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          data-tip
          data-for="export-icon"
          onClick={onClickExportButton}
        >
          <Export />
          <ReactTooltip
            disable={isMobile}
            id="export-icon"
            type="light"
            effect="solid"
          >
            <span className="text-gray-800 text-center">{t('Export')}</span>
          </ReactTooltip>
        </Transition>
        <button
          className="cursor-pointer transition-colors text-gray-500 hover:text-gray-300 focus:outline-none"
          aria-label="Import data"
          data-tip
          data-for="import-icon"
          onClick={onClickImportButton}
        >
          <Import />
          <ReactTooltip
            disable={isMobile}
            id="import-icon"
            type="light"
            effect="solid"
          >
            <span className="text-gray-800 text-center">{t('Import')}</span>
          </ReactTooltip>
        </button>
      </div>
    </section>
  )
}
