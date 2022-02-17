// import axios from 'axios'
import { put, takeEvery, call } from 'redux-saga/effects'
import { EstateActionsCreator } from 'store/estate/estateReducer'

const fetchEstateFromApi = () => fetch('http://localhost:3001/api/v1/estate', { mode: 'no-cors' })

// export const fetchEstateFromApi = () => axios.get<IEstate[]>('http://localhost:3001/api/v1/estate')

function* fetchEstateWorker() {
  const { data } = yield call(fetchEstateFromApi)
  yield put(EstateActionsCreator.setEstate(data))
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* estateWatcher() {
  yield takeEvery(EstateActionsCreator.fetchEstate().type, fetchEstateWorker)
}

export { estateWatcher }
