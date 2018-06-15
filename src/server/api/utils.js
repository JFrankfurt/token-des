const fetch = require('node-fetch')

module.exports = async ticker => {
    let {rawPairs} = await fetch('https://exchanges.balanc3.net/coins').then(x => x.json())
    const options = Object.keys(rawPairs)
        .reduce((acc, cur) => {
            let tickers = cur.split('_') // sold_bought (i.e., ETH price in USD is ETH_USD)
            acc.has(tickers[0])
            if (acc.has(tickers[0])) {
                acc.set(tickers[0], [...acc.get(tickers[0]), tickers[1]])
            } else {
                acc.set(tickers[0], [tickers[1]])
            }
            return acc
        }, new Map()).get(ticker)
    return options.includes('USD')
        ? 'USD'
        : options.includes('ETH')
            ? 'ETH'
            : options[0]
}
