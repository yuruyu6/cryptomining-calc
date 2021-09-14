const DB_LIMIT = 500

module.exports = async function (fastify, opts) {
  fastify.get('/rate', async function (request, reply) {
    try {
      const result = await fastify.getEthRate()
      reply.send({ ethUsdRate: result })
    } catch (error) {
      throw fastify.httpErrors.internalServerError()
    }
  })

  fastify.get('/ethEarnings', async function (request, reply) {
    try {
      const result = await fastify.getEthEarningsInfo()
      reply.send(result)
    } catch (error) {
      throw fastify.httpErrors.internalServerError()
    }
  })

  fastify.get('/:limit', function (request, reply) {
    const recordsLimit =
      +(request.params.limit > DB_LIMIT ? DB_LIMIT : request.params.limit) || 1
    fastify.mysql.query(
      'SELECT * FROM rewards_history ORDER BY idRewardHistoryRecord DESC LIMIT ?',
      [recordsLimit],
      (error, result) => {
        reply.send(error || result)
      }
    )
  })
}
