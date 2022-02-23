/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios'
import { put, takeEvery, call } from 'redux-saga/effects'
import { EstateActionsCreator } from 'store/estate/estateReducer'
import { fetchEstateFromApi } from './estateOperations'

export { fetchEstateFromApi }

function* fetchEstateWorker() {
  try {
    const { data }: AxiosResponse = yield call(fetchEstateFromApi)
    yield put(EstateActionsCreator.setEstate(data))
  } catch (error) {
    console.log(error)
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* estateWatcher() {
  yield takeEvery(EstateActionsCreator.fetchEstate().type, fetchEstateWorker)
}

export { estateWatcher }
