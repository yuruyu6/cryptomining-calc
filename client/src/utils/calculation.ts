export const calcCryptoEarnings = (currentEthRate: number, reward24H: number) =>
  currentEthRate * reward24H
