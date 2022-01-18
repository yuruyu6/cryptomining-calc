import React, { useContext, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Copy } from '../../svgs/Copy'
import { XMark } from '../../svgs/XMark'
import { DashboardContext } from '../Dashboard'

interface ExportBlockProps {
  onClickCloseModalButton: () => void
}

export const ExportBlock: React.FC<ExportBlockProps> = ({
  onClickCloseModalButton,
}) => {
  const { t } = useTranslation()
  const { userData } = useContext(DashboardContext)

  const textInput = useRef<HTMLInputElement>(null)

  const onClickModalCopyButton = () => {
    if (textInput) {
      navigator.clipboard.writeText(textInput.current?.value || '[]')
      onClickCloseModalButton()
    }
  }

  return (
    <div>
      <div className="flex justify-end mb-2 text-gray-500 hover:text-black transition-colors">
        <button onClick={onClickCloseModalButton} title={t('Close')}>
          <XMark />
        </button>
      </div>
      <p className="text-black text-xl text-center my-2">{t('Export data')}</p>
      <p className="text-black text-sm text-center my-2">
        {t('ExportDescription')}
      </p>
      <div className="relative items-center">
        <input
          ref={textInput}
          className="bg-white text-black w-full border rounded pr-10 py-2 pl-2"
          type="text"
          readOnly
          defaultValue={JSON.stringify(userData)}
        />
        <button
          className="absolute z-10 top-2 right-2 text-gray-500 hover:text-black transition-colors"
          onClick={onClickModalCopyButton}
          aria-label="Copy to clipboard"
          title={t('Copy')}
        >
          <Copy />
        </button>
      </div>
    </div>
  )
}
