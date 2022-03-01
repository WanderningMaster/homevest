/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeEvery, put, call } from 'redux-saga/effects'

import { EstateApartmentsActionsCreator } from 'store/estateApartments/estateApartmentsReducer'
import {
  fetchEstateApartmentsFromApi,
  postNewAppartment,
} from 'store/estateApartments/estateApartmentsOperations'

function* fetchEstateWorker() {
  try {
    yield put(EstateApartmentsActionsCreator.hideError())
    yield put(EstateApartmentsActionsCreator.showLoader())
    const { data } = yield call(fetchEstateApartmentsFromApi)
    yield put(EstateApartmentsActionsCreator.setApartments(data))
    yield put(EstateApartmentsActionsCreator.hideLoader())
  } catch (err) {
    console.log(err)
    const error = err as Error
    yield put(EstateApartmentsActionsCreator.hideLoader())
    yield put(EstateApartmentsActionsCreator.showError(error.message))
  }
}

function* postEstateNewApartmentWorker(
  action: ReturnType<typeof EstateApartmentsActionsCreator.createApartment>,
) {
  //   console.log(action.payload)
  if (!action.payload) {
    return
  }
  try {
    yield put(EstateApartmentsActionsCreator.hideError())
    yield put(EstateApartmentsActionsCreator.showLoader())
    yield call(postNewAppartment, action.payload)
  } catch (err) {
    console.log(err)
    const error = err as Error
    yield put(EstateApartmentsActionsCreator.hideLoader())
    yield put(EstateApartmentsActionsCreator.showError(error.message))
  }
}

export function* estateApartmentsWatcher() {
  yield takeEvery(EstateApartmentsActionsCreator.fetchEstate().type, fetchEstateWorker)
  yield takeEvery(EstateApartmentsActionsCreator.submitApartment, postEstateNewApartmentWorker)
}
