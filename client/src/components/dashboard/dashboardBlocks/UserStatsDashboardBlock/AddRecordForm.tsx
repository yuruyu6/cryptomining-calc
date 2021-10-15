import React, { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DeviceInfo, userEarningInfoInput } from '../../../../types'
import { DEVICE_LIST } from '../../../../utils/constants'
import { useOnClickOutside } from '../../../../utils/hooks/useOnClickOutside'
import { DeviceSelector } from './DeviceSelector'

interface AddRecordFormProps {
  changeView: () => void
  onAddNewRecord: (record: userEarningInfoInput) => void
}

interface FormValues {
  name: string
  hashrate: number
}

const filterDeviceByName = (name: string): DeviceInfo[] => {
  return DEVICE_LIST.filter((device) =>
    new RegExp(name, 'i').test(device.name.toLowerCase())
  )
}

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

export const AddRecordForm: React.FC<AddRecordFormProps> = ({
  changeView,
  onAddNewRecord,
}) => {
  const [isVisibleDeviceSelector, setIsVisibleDeviceSelector] = useState(false)
  const [deviceList, setDeviceList] = useState<DeviceInfo[]>(DEVICE_LIST)
  const { register, handleSubmit, watch, setValue, setFocus, getValues } =
    useForm<FormValues>({
      mode: 'onSubmit',
    })
  const { name, hashrate } = watch()
  const inputNameRef = useRef<HTMLInputElement | null>(null)
  const { ref, ...rest } = register('name')

  useOnClickOutside(inputNameRef, () => setIsVisibleDeviceSelector(false))

  useEffect(() => {
    setFocus('name')
  }, [setFocus])

  useEffect(() => {
    if (hashrate < 1) {
      setValue('hashrate', 1)
    }
    if (name?.length > 17) {
      setValue('name', name.slice(0, 17))
    }
  }, [getValues, setValue, name, hashrate])

  useEffect(() => {
    setDeviceList(filterDeviceByName(name))
  }, [name])

  const onClickSelectorItem = (device: DeviceInfo) => {
    setValue('hashrate', device.hashrate)
    setValue('name', device.name)
    setIsVisibleDeviceSelector(false)
  }

  const onSubmit: SubmitHandler<FormValues> = (data: userEarningInfoInput) => {
    onAddNewRecord(data)
    changeView()
  }

  const scrollIntoInput = () => {
    isMobile && inputNameRef.current?.scrollIntoView()
  }

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="cursor-pointer text-lg flex items-center opacity-50 transition-opacity hover:opacity-75"
          onClick={() => changeView()}
        >
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
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <input
            className="w-full my-3 pb-2"
            type="text"
            placeholder="Name"
            //Share ref usage https://react-hook-form.com/faqs#Howtosharerefusage
            {...rest}
            name="name"
            ref={(e) => {
              ref(e)
              inputNameRef.current = e
            }}
            onClick={() => scrollIntoInput()}
            onFocus={() => {
              setIsVisibleDeviceSelector(true)
              scrollIntoInput()
            }}
          />
          {isVisibleDeviceSelector && deviceList.length > 0 && (
            <DeviceSelector
              deviceList={deviceList}
              onClickSelectorItem={onClickSelectorItem}
            />
          )}
        </div>
        <div className="relative items-center">
          <input
            className="w-full mb-3 py-2"
            {...register('hashrate')}
            type="number"
            defaultValue="100"
            placeholder="Hashrate"
          />
          <span className="absolute top-2 right-0">MH/s</span>
        </div>
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
                strokeWidth={1.3}
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}
