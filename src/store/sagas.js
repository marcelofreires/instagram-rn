import { all } from 'redux-saga/effects'

import addCounterSaga from '~/components/Test/saga'

export default function* root() {
  yield all([
    addCounterSaga()
  ])
}
