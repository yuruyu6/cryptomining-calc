export const calcCryptoEarnings = (
  currentEthRate: number,
  reward24H: number,
  hashrate: number
) => {
  return (currentEthRate / 100) * reward24H * hashrate
}

/* eslint-disable no-mixed-operators */
export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
