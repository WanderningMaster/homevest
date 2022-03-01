/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeEvery, put, call } from 'redux-saga/effects'
import { REQUEST_ESTATE, FETCH_ESTATE } from 'store/estate/test/types'
import { hideLoader, showLoader, showAlert } from 'store/estate/test/estateActions'
import { api } from 'services'

export function* estateWatcher() {
  yield takeEvery(REQUEST_ESTATE, estateWorker)
}

function* estateWorker() {
  try {
    yield put(showLoader())
    const { data } = yield call(fetchEstateFromApi)
    yield put({ type: FETCH_ESTATE, data })
    yield call(hideLoader())
  } catch (error) {
    console.log(error)
    yield put(showAlert('Something went wrong'))
    yield put(hideLoader())
  }
}

async function fetchEstateFromApi() {
  const data = await api.get('/appartments')
  console.log(data)
  return data
}
