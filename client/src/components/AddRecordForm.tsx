import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormValues {
  name: string
  quantity: number
  hashrate: number
}

export const AddRecordForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <div className="rounded-2xl pb-8 md:pb-16 pt-6 md:pt-10 px-8 bg-gray-700 transition hover:opacity-90">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="bg-gray-700 focus:outline-none"
          {...register('name')}
          type="text"
        />
        <input
          className="bg-gray-700 focus:outline-none"
          {...register('quantity')}
          type="number"
        />
        <input
          className="bg-gray-700 focus:outline-none"
          {...register('hashrate')}
          type="number"
        />
        <input type="submit" />
      </form>
    </div>
  )
}
