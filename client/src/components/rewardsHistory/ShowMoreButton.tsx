import React from 'react'
import { useTranslation } from 'react-i18next'

interface ShowMoreButtonProps {
  onClickShowMoreButton: () => void
  isPending: boolean
}

export const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({
  onClickShowMoreButton,
  isPending,
}) => {
  const { t } = useTranslation()

  return (
    <button
      className="flex justify-center items-center text-center rounded py-2 px-4 hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={isPending}
      onClick={() => onClickShowMoreButton()}
    >
      {isPending && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {t('Show More')}
    </button>
  )
}
