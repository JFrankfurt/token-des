const express = require('express')
const {resolve} = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const hmr = require('webpack-hot-middleware')
const dev = require('../../webpack.dev')
const prod = require('../../webpack.prod')
let config = process.env.NODE_ENV === 'production' ? prod : dev
const apiRouter = require('./api/apiRouter')

const compiler = webpack(config)
const app = express()
app
  .use(hmr(compiler))
  .use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
  .use('/api', apiRouter)
  .use('/*', express.static(resolve(`${__dirname}/index.html`)))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
