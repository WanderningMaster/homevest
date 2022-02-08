import {put, takeEvery} from 'redux-saga/effects';
import { CounterActionCreator } from 'store/slices';
const imitationDelay = (ms:number) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield imitationDelay(1000);  
    yield put(CounterActionCreator.increment());
}

function* decrementWorker() {
    yield imitationDelay(1000);
    yield put(CounterActionCreator.decrement());
}

function* counterWatcher() {
    yield takeEvery(CounterActionCreator.sagaAsyncIncrement().type, incrementWorker);
    yield takeEvery(CounterActionCreator.sagaAsyncDecrement().type, decrementWorker);

}

export {counterWatcher}