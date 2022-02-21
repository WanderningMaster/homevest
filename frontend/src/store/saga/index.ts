import { all } from 'redux-saga/effects'
import { estateWatcher } from 'store/estate/estateSaga'
import { authWatcher } from 'store/user/userSaga'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* rootWatcher() {
  yield all([
    estateWatcher(),
    authWatcher(),
  ])
}
