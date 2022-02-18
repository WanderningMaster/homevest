import { all, fork } from 'redux-saga/effects'
import { estateWatcher } from 'store/estate/estateSaga'
import { makeInvestmentWatcher } from 'store/make-investment/makeInvestmentSaga'
import { watchLoginSaga } from 'store/user/sagas/user'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* rootWatcher() {
  yield all([
    fork(estateWatcher),
    fork(makeInvestmentWatcher),
    fork(watchLoginSaga),
  ])
}


