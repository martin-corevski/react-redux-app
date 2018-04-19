import * as actionTypes from './actionTypes'

// In order to make the actions leaner, we can extract some code in separate
// functions
export const action2Leaner = value => {
  // Edit data here, before sending it to the reducer or do updates only in the
  // reducer. Example:
  // value *= 2
  return {
    type: actionTypes.ACTION_2_LEAN,
    num: value
  }
}

export const action2 = value => {
  // Async actions made available by redux-thunk
  // return (dispatch, getState) => {
  //   setTimeout(() => { dispatch(action2Leaner(value)) }, 2000)
  // }
  // Now with Redux Saga
  return {
    type: actionTypes.ACTION_2,
    value
  }
}
