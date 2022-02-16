import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { ReducerName } from 'common/enums'
import { buildersReducer } from 'store/slices/'
import { rootWatcher } from './saga'
import { estateReducer } from 'store/slices/'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = configureStore({
  reducer: {
    [ReducerName.BUILDERS]: buildersReducer,
    [ReducerName.ESTATE]: estateReducer,
  },
  middleware: [...middleware],
})

sagaMiddleware.run(rootWatcher)

export { store }
