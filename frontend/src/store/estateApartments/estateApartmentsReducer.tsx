/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReducerName } from 'common/enums'
import {
  IEstateApartment,
  FETCH_APARTMENTS,
  FETCH_APARTMENTS_FILTER,
  POST_NEW_APARTMENT,
  IActions,
  IInitialState,
  IFilter,
} from 'store/estateApartments/types'

const initialState: IInitialState = {
  apartments: [],
  newApartment: {},
  filters: [],
  isLoading: false,
  error: null,
}

const fetchEstate = (): IActions => ({ type: FETCH_APARTMENTS })
const submitApartment = (values: any): IActions => ({
  type: POST_NEW_APARTMENT,
  payload: values,
})
const fetchApartmentsFilters = (filter: any): IActions => ({
  type: FETCH_APARTMENTS_FILTER,
  payload: filter,
})

const { reducer, actions } = createSlice({
  name: ReducerName.ESTATE,
  initialState,
  reducers: {
    setApartments: (state, action: PayloadAction<IEstateApartment[]>) => ({
      ...state,
      apartments: action.payload,
    }),
    createApartment: (state, action) => ({
      ...state,
      apartments: [...state.apartments, action.payload],
      newApartment: action.payload,
    }),
    setFilters: (state, action: PayloadAction<IFilter>) => ({
      ...state,
      filters: action.payload,
    }),
    showLoader: state => ({
      ...state,
      isLoading: true,
    }),
    hideLoader: state => ({
      ...state,
      isLoading: false,
    }),
    showError: (state, action: PayloadAction<string>) => ({
      ...state,
      error: action.payload,
    }),
    hideError: state => ({
      ...state,
      error: null,
    }),
  },
})

const EstateApartmentsActionsCreator = {
  ...actions,
  fetchEstate,
  submitApartment,
  fetchApartmentsFilters,
}

export { EstateApartmentsActionsCreator, reducer }
