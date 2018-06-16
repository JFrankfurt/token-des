export const RECEIVE_TOKEN_DATA = 'RECEIVE_TOKEN_DATA'

export const receiveTokenData = ({tokens}) => ({
  type: RECEIVE_TOKEN_DATA,
  tokens
})
