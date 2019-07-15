const express = require('express')
const app = express()
const nuxt = require('./middleware/nuxt')

nuxt(app)
