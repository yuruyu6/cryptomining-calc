import { DeviceInfo, DeviceVendor as DV, StatPeriod } from '../types'

export const DASHBOARD_EXAMPLE_HASHRATE: number = 100
export const REWARDS_HISTORY_TABLE_EXAMPLE_HASHRATE: number = 100
export const MAX_ITEMS_IN_REWARDS_HISTORY_TABLE: number = 200

export const STAT_PERIODS: StatPeriod[] = [
  { name: 'daily', value: 1 },
  { name: 'weekly', value: 7 },
  { name: 'monthly', value: 30 },
  { name: 'yearly', value: 360 },
]
export const DEFAULT_STAT_PERIOD: StatPeriod = STAT_PERIODS[0]

export const DEVICE_LIST: DeviceInfo[] = [
  { vendor: DV.NVIDIA, name: 'RTX 3060', hashrate: 50, isLHR: false },
  { vendor: DV.NVIDIA, name: 'RTX 3060', hashrate: 32, isLHR: true },
  { vendor: DV.NVIDIA, name: 'RTX 3060TI', hashrate: 60, isLHR: false },
  { vendor: DV.NVIDIA, name: 'RTX 3060TI', hashrate: 42, isLHR: true },
  { vendor: DV.NVIDIA, name: 'RTX 3070', hashrate: 64, isLHR: false },
  { vendor: DV.NVIDIA, name: 'RTX 3070', hashrate: 42, isLHR: true },
  { vendor: DV.NVIDIA, name: 'RTX 3070TI', hashrate: 58, isLHR: true },
  { vendor: DV.NVIDIA, name: 'RTX 3080', hashrate: 100, isLHR: false },
  { vendor: DV.NVIDIA, name: 'RTX 3080', hashrate: 65, isLHR: true },
  { vendor: DV.NVIDIA, name: 'RTX 3080TI', hashrate: 90, isLHR: true },
  { vendor: DV.NVIDIA, name: 'RTX 3090', hashrate: 115, isLHR: false },
  { vendor: DV.AMD, name: 'RX 5500XT', hashrate: 26, isLHR: false },
  { vendor: DV.AMD, name: 'RX 5600XT', hashrate: 40, isLHR: false },
  { vendor: DV.AMD, name: 'RX 5700/XT', hashrate: 55, isLHR: false },
  { vendor: DV.AMD, name: 'RX 6600/XT', hashrate: 33, isLHR: false },
  { vendor: DV.AMD, name: 'RX 6700XT', hashrate: 48, isLHR: false },
  { vendor: DV.AMD, name: 'RX 6800/XT', hashrate: 64, isLHR: false },
  { vendor: DV.AMD, name: 'RX 6900XT', hashrate: 64, isLHR: false },
]
