module.exports = async function (fastify, opts) {
  fastify.get('/', function (request, reply) {
    fastify.mysql.query('SELECT * FROM rewards_history', (error, result) => {
      reply.send(error || result)
    })
  })
}
