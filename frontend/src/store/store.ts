import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { ReducerName } from 'common/enums'
import { estateReducer } from 'store/slices/'
import { userReducer } from 'store/slices'
import { rootWatcher } from 'store/saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = configureStore({
  reducer: {
    [ReducerName.ESTATE]: estateReducer,
    [ReducerName.USERS]: userReducer,
  },
  middleware: [...middleware],
})

sagaMiddleware.run(rootWatcher)

export { store }
