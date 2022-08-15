const express = require('express')
const cors = require('cors')
const app = express()
const indexRouter = require('./modules/route')

app.use(cors())

app.use(express.json())

app.use('/api', indexRouter)

module.exports = app;