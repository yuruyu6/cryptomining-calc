import { DeviceInfo, DeviceVendor, StatPeriod } from '../types'

export const DASHBOARD_EXAMPLE_HASHRATE: number = 100
export const MAX_ITEMS_IN_REWARDS_HISTORY_TABLE: number = 200

export const STAT_PERIODS: StatPeriod[] = [
  { name: 'daily', value: 1 },
  { name: 'weekly', value: 7 },
  { name: 'monthly', value: 30 },
  { name: 'yearly', value: 360 },
]
export const DEFAULT_STAT_PERIOD: StatPeriod = STAT_PERIODS[0]

export const DEVICE_VENDOR: DeviceVendor[] = ['NVIDIA', 'AMD']
export const DEVICE_LIST: DeviceInfo[] = [
  { vendor: DEVICE_VENDOR[0], name: 'RTX 3060', hashrate: 50, isLHR: false },
  { vendor: DEVICE_VENDOR[0], name: 'RTX 3060', hashrate: 32, isLHR: true },
  { vendor: DEVICE_VENDOR[0], name: 'RTX 3060TI', hashrate: 60, isLHR: false },
  { vendor: DEVICE_VENDOR[0], name: 'RTX 3060TI', hashrate: 42, isLHR: true },
  { vendor: DEVICE_VENDOR[0], name: 'RTX 3070', hashrate: 64, isLHR: false },
  { vendor: DEVICE_VENDOR[0], name: 'RTX 3070', hashrate: 42, isLHR: true },
  { vendor: DEVICE_VENDOR[0], name: 'RTX 3070TI', hashrate: 58, isLHR: true },
  { vendor: DEVICE_VENDOR[0], name: 'RTX 3080', hashrate: 105, isLHR: false },
  { vendor: DEVICE_VENDOR[0], name: 'RTX 3080', hashrate: 65, isLHR: true },
  { vendor: DEVICE_VENDOR[0], name: 'RTX 3080TI', hashrate: 81, isLHR: true },
  { vendor: DEVICE_VENDOR[0], name: 'RTX 3090', hashrate: 115, isLHR: false },
  { vendor: DEVICE_VENDOR[1], name: 'TEST', hashrate: 30, isLHR: false },
]
