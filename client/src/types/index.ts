import { Dispatch, SetStateAction } from 'react'

export type SetValue<T> = Dispatch<SetStateAction<T>>

export interface earningsInfo {
  idRewardHistoryRecord: number
  timestamp: string
  expectedReward24H: number
  meanExpectedReward24H: number
  exchangeRate: number
}

export interface userEarningInfoInput {
  name: string
  hashrate: number
}

export interface userEarningInfo extends userEarningInfoInput {
  uuid: string
  quantity: number
}

export interface StatPeriod {
  name: string
  value: number
}

export enum DeviceVendor {
  NVIDIA,
  AMD,
}

export interface DeviceInfo {
  vendor: DeviceVendor
  name: string
  hashrate: number
  isLHR: boolean
}
