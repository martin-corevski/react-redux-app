import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import * as actionCreators from '../actions'

export function * action2Saga (action) {
  yield call(delay, 2000)
  yield put(actionCreators.action2Leaner(action.value * 2))
}
