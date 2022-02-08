import { all } from 'redux-saga/effects';
import { counterWatcher } from './counter/counterGenerate';
export function* rootWatcher() {
    yield all([counterWatcher()])
}