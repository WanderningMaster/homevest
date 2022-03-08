import axios from "axios";
import { put, takeEvery, call } from 'redux-saga/effects';
import { api } from "services";
import { ApartmentActionCreator } from "./apartmentReducer";

// const fetchGetApartment = () => axios.get('http://localhost:3001/api/v1/appartments').then(res => res).catch(e => e)
const fetchGetApartment = () => api.get('/appartments');

function* getApartmentAsyncWorker() {
    try {
        const { data } = yield call(fetchGetApartment);
        yield put(ApartmentActionCreator.getApartments(data));
        yield put(ApartmentActionCreator.loading(false));
    } catch (e) {
        yield put(ApartmentActionCreator.error('Upss...Load apartment is error.'));
        yield put(ApartmentActionCreator.loading(false));
    }
}

function* apartmentIsLoadingWorker() {
    yield put(ApartmentActionCreator.loading(true));
    yield put(ApartmentActionCreator.AsyncIsLoading());
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* apartmentWatcher() {
    yield takeEvery(ApartmentActionCreator.AsyncGetApartments().type, apartmentIsLoadingWorker);
    yield takeEvery(ApartmentActionCreator.AsyncIsLoading().type, getApartmentAsyncWorker)
}