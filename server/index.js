require('dotenv').config()

const express = require('express')
const app = express()
const nuxt = require('./middleware/nuxt')

app.use('/health', (_, res) => res.sendStatus(200))

require('./models')()

nuxt(app)
