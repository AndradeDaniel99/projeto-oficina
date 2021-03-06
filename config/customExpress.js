const express = require('express')
const consign = require('consign')
require('dotenv').config()
const cors = require('cors')
const compression = require('compression')


module.exports = () => {
    const app = express()

    consign({
        cwd: 'app',
        verbose: process.env.APP_DEBUG === 'true' || false,
        locale: 'pt-br'
    })
    .include('./middlewares/globals').then('../routes')
    .into(app)
    return app
}

