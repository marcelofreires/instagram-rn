import { takeLatest, put } from 'redux-saga/effects'

import { types } from './actions'

function* addCounterSaga({ payload }) {
  yield put({ type: types.SET_COUNTER, payload })
}

export default function* () {
  yield takeLatest(types.ADD_COUNTER, addCounterSaga)
}
