import { takeEvery } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'
import { action2Saga } from './actionCreator2Saga'

export function * watchActionCreator2 () {
  yield takeEvery(actionTypes.ACTION_2, action2Saga)
}
