export const calcCryptoEarnings = (
  currentEthRate: number,
  reward24H: number,
  hashrate: number
) => {
  return (currentEthRate / 100) * reward24H * hashrate
}
