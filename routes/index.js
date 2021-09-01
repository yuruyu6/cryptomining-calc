module.exports = async function (fastify, opts) {
  fastify.get('/rate', async function (request, reply) {
    try {
      const result = await fastify.getEthRate()
      reply.send({ ethUsdRate: result })
    } catch (error) {
      throw fastify.httpErrors.internalServerError()
    }
  })

  fastify.get('/:limit', function (request, reply) {
    const recordsLimit =
      +(request.params.limit > 100 ? 100 : request.params.limit) || 1
    fastify.mysql.query(
      'SELECT * FROM rewards_history ORDER BY idRewardHistoryRecord DESC LIMIT ?',
      [recordsLimit],
      (error, result) => {
        reply.send(error || result)
      }
    )
  })
}
