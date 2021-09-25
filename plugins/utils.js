const fp = require('fastify-plugin')
const NodeCache = require('node-cache')
const memoryStorage = new NodeCache({
  stdTTL: 300,
  checkperiod: 150,
  useClones: false,
})

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('updateHistoryJob', async () => {
    const { data, status } = await fastify.axios.get(
      'https://hiveon.net/api/v1/stats/pool'
    )
    if (status === 200) {
      fastify.mysql.query(
        'INSERT INTO `crypto-mining-calculator`.`rewards_history` (`expectedReward24H`, `meanExpectedReward24H`, `exchangeRate`) VALUES (?, ?, ?)',
        [
          data.stats.ETH.expectedReward24H || 0,
          data.stats.ETH.meanExpectedReward24H || 0,
          data.stats.ETH.exchangeRates.USD || 0,
        ]
      ),
        console.log('sucessful update')
    } else {
      console.log('Cronjob ERROR >>> Server Not Accessible')
    }
  })

  fastify.decorate('getEthRate', async () => {
    const memoryEthRate = memoryStorage.get('ethRate')
    if (memoryEthRate === undefined) {
      const { data, status } = await fastify.axios.get(
        `https://rest.coinapi.io/v1/exchangerate/ETH/USDT?apikey=${process.env.COINAPI_API_KEY}`
      )
      if (status === 200) {
        const { rate } = data
        memoryStorage.set('ethRate', rate)
        return rate
      } else {
        throw new Error(
          'getEthRate API function ERROR >>> Server Not Accessible'
        )
      }
    } else {
      return memoryEthRate
    }
  })

  fastify.decorate('getEthEarningsInfo', async () => {
    const memoryEthRate = memoryStorage.get('ethEarningsInfo')
    if (memoryEthRate === undefined) {
      const { data, status } = await fastify.axios.get(
        'https://hiveon.net/api/v1/stats/pool'
      )
      if (status === 200) {
        const {
          stats: { ETH },
        } = data
        const result = {
          expectedReward24H: ETH.expectedReward24H,
          meanExpectedReward24H: ETH.meanExpectedReward24H,
          exchangeRate: await fastify.getEthRate(),
        }
        memoryStorage.set('ethEarningsInfo', result)
        return result
      } else {
        throw new Error(
          'getEthEarningsInfo API function ERROR >>> Server Not Accessible'
        )
      }
    } else {
      return memoryEthRate
    }
  })
})
