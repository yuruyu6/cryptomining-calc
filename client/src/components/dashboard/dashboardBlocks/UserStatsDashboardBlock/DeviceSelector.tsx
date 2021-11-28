import React from 'react'
import { DeviceInfo, DeviceVendor } from '../../../../types'
import { AMD } from '../../../svgs/AMD'
import { Nvidia } from '../../../svgs/Nvidia'

interface DeviceSelectorProps {
  deviceList: DeviceInfo[]
  onClickSelectorItem: (device: DeviceInfo) => void
}

const VendorIcon: React.FC = ({ children }) => {
  return children === DeviceVendor.NVIDIA ? <Nvidia /> : <AMD />
}

export const DeviceSelector: React.FC<DeviceSelectorProps> = ({
  deviceList,
  onClickSelectorItem,
}) => {
  return (
    <div className="absolute rounded bg-gray-600 max-h-72 -mx-5 py-5 inset-x-0 -bottom-13 z-10 text-base overflow-auto">
      {deviceList.map((device) => (
        <button
          className="flex items-center w-full px-5 transition-colors hover:bg-gray-500"
          key={device.name + Number(device.isLHR)}
          onClick={() => onClickSelectorItem(device)}
        >
          <VendorIcon>{device.vendor}</VendorIcon>
          <div className="flex items-center w-44">
            <div className="ml-2">{device.name}</div>
            {device.isLHR && (
              <div className="text-black text-xs bg-gray-300 px-1 ml-1">
                LHR
              </div>
            )}
          </div>
          <div className="ml-2">{device.hashrate} MH/s</div>
        </button>
      ))}
    </div>
  )
}
