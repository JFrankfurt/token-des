import {RECEIVE_TOKEN_DATA} from '../actions/tokens'


export const tokens = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TOKEN_DATA:
      return {
        ...state,
        ...action.tokens
      }
    default:
      return state
  }
}
