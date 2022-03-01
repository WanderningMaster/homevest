/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReducerName } from 'common/enums'
import { Actions } from 'store/test/types'
import {
  IEstateApartment,
  FETCH_APARTMENTS,
  FETCH_APARTMENTS_FILTER,
  POST_NEW_APARTMENT,
} from 'store/estateApartments/types'

export interface IActions {
  type: string
  payload?: any
}

export interface IInitialState {
  apartments: IEstateApartment[]
  newApartment: IEstateApartment | undefined
  filters: any
  isLoading: boolean
  error: string | null
}

const initialState: IInitialState = {
  apartments: [],
  newApartment: {},
  filters: null,
  isLoading: false,
  error: null,
}

const fetchEstate = (): IActions => ({ type: FETCH_APARTMENTS })
const submitApartment = (values: any): Actions => ({
  type: POST_NEW_APARTMENT,
  payload: values,
})
const fetchApartmentsFilters = (): IActions => ({ type: FETCH_APARTMENTS_FILTER })

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
