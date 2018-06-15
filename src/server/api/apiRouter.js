const express = require('express')
const fetch = require('node-fetch')
const getReferenceOptions = require('./utils')

module.exports = express.Router()
  .get('/erc20list', async (req, res) => {
    try {
      let {coins} = await fetch('https://exchanges.balanc3.net/coins').then(x => x.json())
      let tokens = Object.entries(coins)
        .filter(x => x[1].type === 'ERC20' && x[1].ETHAddress)
        .reduce((acc, cur) => ({
          ...acc,
          [cur[1].ETHAddress]: {
            address: cur[1].ETHAddress,
            ticker: cur[0],
            type: cur[1].type
          }
        }), {})
      res.status(200).json({tokens})
    } catch (error) {
      res.status(400).json(error)
    }
  })
  .get('/currentPrice/:address', async (req, res) => {
    try {
      const {address} = req.params
      let {coins} = await fetch('https://exchanges.balanc3.net/coins').then(x => x.json())
      let token = Object.entries(coins)
        .filter(x => x[1].type === 'ERC20' && x[1].ETHAddress && x[1].ETHAddress === address)
        .map(x => ({...x[1], ticker: x[0]}))[0]
      const quote = await getReferenceOptions(token.ticker)
      const prices = await fetch(`https://exchanges.balanc3.net/prices?from=${token.ticker}&to=${quote}&exchanges=hitbtc&exchanges=binance&exchanges=bittrex&exchanges=kraken&exchanges=poloniex&exchanges=cexio&exchanges=gdax&exchanges=bitmex&exchanges=gemini&autoConversion=false&summaryOnly=false`).then(x => x.json())
      res.status(200).json({prices})
    } catch (error) {
      res.status(400).json({error})
    }
  })
  .get('/priceHistory/:address', async (req, res) => {
    try {
      const {address} = req.params
      let {coins} = await fetch('https://exchanges.balanc3.net/coins').then(x => x.json())
      let token = Object.entries(coins)
        .filter(x => x[1].type === 'ERC20' && x[1].ETHAddress && x[1].ETHAddress === address)
        .map(x => ({...x[1], ticker: x[0]}))[0]
      const quote = await getReferenceOptions(token.ticker)
      const history = await fetch(`https://exchanges.balanc3.net/historical/hour?from=${token.ticker}&to=${quote}&exchange=all&start=2018-04-16T21%3A01%3A47.259Z&end=2018-05-16T21%3A01%3A47.259Z&autoConversion=false&offset=0&limit=100&extrapolate=false`).then(x => x.json())
      res.status(200).json({history})
    } catch (error) {
      res.status(400).json(error)
    }
  })
