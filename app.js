'use strict'

require('dotenv').config()
const path = require('path')
const AutoLoad = require('fastify-autoload')
const Cors = require('fastify-cors')
const Cron = require('fastify-cron')
const Mysql = require('fastify-mysql')
const Axios = require('fastify-axios')
const Sensible = require('fastify-sensible')
const Static = require('fastify-static')
const Helmet = require('fastify-helmet')

module.exports = async function (fastify, opts) {
  fastify.register(Cors, { origin: process.env.FRONTEND_URL })
  fastify.register(Mysql, {
    connectionString: `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_SCHEMA}`,
  })
  fastify.register(Sensible)
  fastify.register(Helmet)
  fastify.register(Axios)
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({ prefix: '/api' }, opts),
  })
  if (process.env.SERVER_ONLY) {
    fastify.setNotFoundHandler((_, res) => {
      res.send('Hello World!')
    })
  } else {
    fastify.register(Static, {
      root: path.join(__dirname, './client', 'build'),
    })
    fastify.setNotFoundHandler((_, res) => {
      res.sendFile('index.html')
    })
  }

  fastify.register(Cron, {
    jobs: [
      {
        cronTime: '0 */3 * * *',
        onTick: () =>
          fastify.hasDecorator('updateHistoryJob')
            ? fastify.updateHistoryJob()
            : {},
        startWhenReady: true,
      },
    ],
  })
}
