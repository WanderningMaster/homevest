import { all, fork } from 'redux-saga/effects'
import { estateWatcher } from 'store/estate/estateSaga'
import { makeInvestmentWatcher } from 'store/make-investment/makeInvestmentSaga'
import { authWatcher } from 'store/user/userSaga'

import { submitApartmentDataWatcher } from 'store/appartment/apartmentSaga'

import { estateNewWatcher } from 'store/estateNew/estateNewSaga'
import { apartmentWatcher } from 'store/apartment/appartmentSaga'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* rootWatcher() {
  yield all([
    fork(estateWatcher),
    fork(makeInvestmentWatcher),
    fork(authWatcher),
    fork(submitApartmentDataWatcher),
    estateNewWatcher(),
    apartmentWatcher(),
  ])
}
