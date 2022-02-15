import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {reducer as userReducer} from "./slices/user"
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from "./sagas/index";

const rootReducer = combineReducers({
    user: userReducer
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

export {store};

