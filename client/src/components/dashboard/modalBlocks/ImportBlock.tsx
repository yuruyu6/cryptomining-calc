import React, { useRef } from 'react'
import { XMark } from '../../svgs/XMark'

interface ImportBlockProps {
  onClickCloseModalButton: () => void
}

export const ImportBlock: React.FC<ImportBlockProps> = ({
  onClickCloseModalButton,
}) => {
  const importInput = useRef<HTMLInputElement>(null)

  return (
    <div>
      <div className="flex justify-end mb-2 text-gray-500 hover:text-black transition-colors">
        <button onClick={() => onClickCloseModalButton()} title="Close">
          <XMark />
        </button>
      </div>
      <p className="text-black text-xl text-center my-2">Import data</p>
      <p className="text-black text-sm text-center my-2">
        Paste saved string into the text field below to import your data
      </p>
      <div className="relative items-center">
        <input
          ref={importInput}
          className="bg-white text-black w-full border rounded p-2"
          type="text"
        />
      </div>
    </div>
  )
}
