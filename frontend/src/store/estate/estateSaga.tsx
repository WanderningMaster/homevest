/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios'
import { put, takeEvery, call } from 'redux-saga/effects'
import { EstateActionsCreator } from 'store/estate/estateReducer'
import { fetchEstateFromApi } from './operations'

export { fetchEstateFromApi }

function* fetchEstateWorker() {
  const { data }: AxiosResponse = yield call(fetchEstateFromApi)
  console.log(data)
  yield put(EstateActionsCreator.setEstate(data))
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* estateWatcher() {
  yield takeEvery(EstateActionsCreator.fetchEstate().type, fetchEstateWorker)
}

export { estateWatcher }
