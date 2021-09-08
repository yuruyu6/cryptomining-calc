import { currentEthRate, userEarningInfo } from '../types'

export const calcCryptoEarning = (
  currentEthRate: number,
  reward24H: number,
  hashrate: number
) => {
  return (currentEthRate / 100) * reward24H * hashrate
}

export const calcArrayOfCryptoEarnings = (
  savedData: userEarningInfo[],
  currentEthRate: number,
  reward24H: number
) => {
  const summedHashrate = savedData.reduce(
    (acc, data) => acc + +data.hashrate,
    0
  )
  return {
    elements: savedData.reduce((acc, data) => acc + +data.quantity, 0),
    hashrate: summedHashrate,
    earningsEth: (reward24H / 100) * summedHashrate,
    earningsUsdt: calcCryptoEarning(currentEthRate, reward24H, summedHashrate),
  }
}

/* eslint-disable no-mixed-operators */
export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
