import axios from 'axios'
import { put, takeEvery, call } from 'redux-saga/effects'
import { BuildersActionsCreate } from 'store/slices'
import { IBuilder } from 'store/slices/builders/builders.slice'

const fetchAllBuildersFromApi = () => axios.get<IBuilder[]>('http://localhost:3000/builders')

function* getAllBuildersWorker() {
  const { data } = yield call(fetchAllBuildersFromApi)
  yield put(BuildersActionsCreate.getBuilders(data))
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* builderWatcher() {
  yield takeEvery(BuildersActionsCreate.AsyncGetBuilders().type, getAllBuildersWorker)
}

export { builderWatcher }
