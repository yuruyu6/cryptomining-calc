import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormValues {
  name: string
  hashrate: number
}

export const AddRecordForm = () => {
  const { register, handleSubmit, watch, setValue, getValues } = useForm<FormValues>({
    mode: 'onSubmit',
  })
  const watchAllFields = watch();
  
  useEffect(() => {
    if (getValues('hashrate') < 1) {
      setValue('hashrate', 1)
    }
    if (getValues('name').length > 20) {
      setValue('name', getValues('name').slice(0, 20))
    }    
  }, [getValues, setValue, watchAllFields])

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <div className="rounded-2xl text-2xl pb-8 md:pb-16 pt-6 md:pt-10 px-8 bg-gray-700 transition hover:opacity-90">
      <div className="cursor-pointer text-lg flex items-center opacity-50 transition-opacity hover:opacity-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </div>
      <div className="flex">
        <input
          className="flex-grow my-3 py-2"
          {...register('name')}
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="flex relative items-center">
        <input
          className="flex-grow mb-3 py-2"
          {...register('hashrate')}
          type="number"
          defaultValue="100"
          placeholder="Hashrate"
        />
        <span className="absolute top-2 right-0">MH/s</span>
      </div>
      <br />

      <div className="flex justify-end">
        <button
          className="opacity-50 transition-opacity hover:opacity-75"
          onClick={handleSubmit(onSubmit)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
