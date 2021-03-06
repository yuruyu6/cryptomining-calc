import React from 'react'
import ReactTooltip from 'react-tooltip'

interface HintProps {
  hintText: string
}

export const Hint: React.FC<HintProps> = ({ hintText }) => {
  return (
    <div>
      <div className="cursor-pointer" data-tip data-for="hint">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 opacity-50 transition-opacity hover:opacity-75"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <ReactTooltip id="hint" type="light" effect="solid">
        <span className="text-gray-800 text-center">{hintText}</span>
      </ReactTooltip>
    </div>
  )
}
