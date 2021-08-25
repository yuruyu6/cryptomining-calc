const fp = require('fastify-plugin')

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
})
