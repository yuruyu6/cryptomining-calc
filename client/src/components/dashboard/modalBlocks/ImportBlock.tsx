import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { userEarningInfo } from '../../../types'
import { XMark } from '../../svgs/XMark'
import { DashboardContext } from '../Dashboard'

interface ImportBlockProps {
  onClickCloseModalButton: () => void
}

interface FormValues {
  exportPhrase: string
}

export const ImportBlock: React.FC<ImportBlockProps> = ({
  onClickCloseModalButton,
}) => {
  const { t } = useTranslation()
  const { setUserData } = useContext(DashboardContext)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
  })

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    try {
      const parsedFormData: userEarningInfo = JSON.parse(formData.exportPhrase)
      setUserData(parsedFormData)
      onClickCloseModalButton()
    } catch (error) {
      setError('exportPhrase', {
        type: 'manual',
        message: t('Incorrect export phrase'),
      })
    }
  }

  return (
    <div>
      <div className="flex justify-end mb-2 text-gray-500 hover:text-black transition-colors">
        <button onClick={onClickCloseModalButton} title={t('Close')}>
          <XMark />
        </button>
      </div>
      <p className="text-black text-xl text-center my-2">{t('Import data')}</p>
      <p className="text-black text-sm text-center my-2">
        {t('ImportDescription')}
      </p>
      <form className="items-center" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="bg-white text-black w-full border rounded p-2"
          type="text"
          {...register('exportPhrase')}
        />
        {errors?.exportPhrase && (
          <p className="text-red-600">{errors.exportPhrase.message}</p>
        )}
        <button
          className="w-full rounded text-center mt-2 py-2 px-4 text-black hover:bg-gray-600 hover:text-white transition-colors"
          aria-label="Import data"
        >
          {t('Import')}
        </button>
      </form>
    </div>
  )
}
