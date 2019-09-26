import { takeLatest, put } from 'redux-saga/effects'

import * as actions from './actions'

function* addCounterSaga(action) {
  yield put(actions.setCounter(action.payload))
}

export default function* () {
  yield takeLatest(actions.addCounter().type, addCounterSaga)
}
