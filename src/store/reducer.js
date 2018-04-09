import * as actionTypes from './actions'

const initialState = {
  title: 'Default project setup works!'
}

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.ACTION) {
    return {
      title: action.val
    }
  }

  return state
}

export default reducer
