export interface currentEthRate {
  ethUsdRate: number
}

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