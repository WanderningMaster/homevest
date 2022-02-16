import { all } from 'redux-saga/effects'

import { builderWatcher } from './builders/buildersGenerate'
import { estateWatcher } from 'store/estate/estateSaga'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* rootWatcher() {
  yield all([builderWatcher(), estateWatcher()])
}
