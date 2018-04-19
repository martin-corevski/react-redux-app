import * as actionTypes from '../actions/actionTypes'
// By using utility.js we make our switch cases leaner
import { updateObject } from '../utility'

const initialState = {
  numbers: [1]
}

// In order to have even leaner switch cases we can create functions that take
// care of the state update
const addNumber = (state, action) => {
  return updateObject(state, { numbers: state.numbers.concat(action.num) })
}

const reducer2 = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION_2_LEAN:
      return addNumber(state, action)
    default:
      return state
  }
}

export default reducer2
