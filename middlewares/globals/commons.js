const cors = require('cors')
const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const bodyparser = require('body-parser')

/** @param { import('express').Express} app */
module.exports = app => {
    app.use(cors())
    app.use(compression())
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({ extended: false }))
    app.use(helmet())
}