/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  CREATE_ESTATE,
  FETCH_ESTATE,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  IEstate,
  Actions,
} from './types'

const initialState = {
  estate: {
    apartments: [],
  },
  fetchEstate: [],
  loading: false,
}

export const estateReducer = (state = { estate: [], fetchEstate: [], loading: false }, action) => {
  switch (action.type) {
    case CREATE_ESTATE:
      return { ...state, estate: state.estate.concat([action.payload]) }
    case FETCH_ESTATE:
      return { ...state, fetchEstate: action.payload }
    case SHOW_LOADER:
      return { ...state, loader: true }
    case HIDE_LOADER:
      return { ...state, loader: false }
    case SHOW_ALERT:
      return { ...state, alert: action.payload }
    case HIDE_ALERT:
      return { ...state, alert: null }

    default:
      return state
  }
}
