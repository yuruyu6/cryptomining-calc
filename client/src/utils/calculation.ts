import { userEarningInfo } from '../types'

export class CryptoPair {
  pairRate: number | undefined
  reward24H: number | undefined
  hashrate: number
  period: number

  constructor(
    pairRate?: number,
    reward24H?: number,
    hashrate: number = 1,
    period: number = 1
  ) {
    this.pairRate = pairRate
    this.reward24H = reward24H
    this.hashrate = hashrate
    this.period = period
  }

  get USDTEarning(): string {
    if (!this.pairRate) {
      return 'Incorrect Pair Rate'
    }
    if (!this.reward24H) {
      return 'Incorrect Reward info'
    }
    return (
      (this.pairRate / 100) *
      this.reward24H *
      this.hashrate *
      this.period
    ).toFixed(2)
  }

  get cryptoEarning(): string {
    if (!this.reward24H) {
      return 'Incorrect Reward info'
    }
    return ((this.reward24H / 100) * this.hashrate * this.period).toFixed(5)
  }
}

export class CryptoPairList {
  earningsInfo: userEarningInfo[]
  pairRate: number | undefined
  reward24H: number | undefined
  period: number

  constructor(
    earningsInfo: userEarningInfo[],
    pairRate?: number,
    reward24H?: number,
    period: number = 1
  ) {
    this.earningsInfo = earningsInfo
    this.pairRate = pairRate
    this.reward24H = reward24H
    this.period = period
  }

  get summedHashrate() {
    return this.earningsInfo.reduce((acc, data) => acc + +data.hashrate, 0)
  }

  get USDTEarning(): string {
    if (!this.pairRate) {
      return 'Incorrect Pair Rate'
    }
    if (!this.reward24H) {
      return 'Incorrect Reward Info'
    }
    return (
      (this.pairRate / 100) *
      this.reward24H *
      this.summedHashrate *
      this.period
    ).toFixed(2)
  }

  get cryptoEarning(): string {
    if (!this.reward24H) {
      return 'Incorrect Reward Info'
    }
    return ((this.reward24H / 100) * this.summedHashrate * this.period).toFixed(
      5
    )
  }
}
