
// const jsonPost = data => ({
//     method: 'POST',
//     headers: new Headers({
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'x-access-token': `${localStorage.getItem('jwt')}`
//     }),
//     body: JSON.stringify(data)
// })

const basicGetHeaders = () => ({
  method: 'GET',
  headers: new Headers({'x-access-token': `${localStorage.getItem('jwt')}`}),
})

export const getTokens = fetch('/api/erc20List', basicGetHeaders())
export const getCurrentPrice = address => fetch(`/api/currentPrice/${address}`, basicGetHeaders())
export const getPriceHistory = address => fetch(`/api/priceHistory/${address}`, basicGetHeaders())
