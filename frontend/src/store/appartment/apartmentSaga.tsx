/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put, takeEvery } from 'redux-saga/effects'
import { ApartmentActionsCreator } from './appartmentReducer'
import { postNewAppartment } from './appartmentOperations'

function* submitApartmentDataWorker(
  action: ReturnType<typeof ApartmentActionsCreator.submitApartmentFulfilled>,
) {
  // debugger
  console.log(action.payload)
  // yield call(postNewAppartment, action.payload)

  try {
    // yield put(ApartmentActionsCreator.submitApartmentPending)
    yield call(postNewAppartment, action.payload)
  } catch (e) {
    const error = e as Error
    console.error(error)
    yield put(ApartmentActionsCreator.submitApartmentRejected({ error: error.message }))
    // yield call(() => alert('Submitted Error'))
    yield call(() => console.log('Submitted Error'))
  }
}

function* submitApartmentDataWatcher() {
  yield takeEvery(ApartmentActionsCreator.submitApartment, submitApartmentDataWorker)
}

export { submitApartmentDataWatcher }
