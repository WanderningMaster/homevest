/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  CREATE_ESTATE,
  REQUEST_ESTATE,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  IEstate,
} from './types'

export function createEstate(newEstate: IEstate) {
  return {
    type: CREATE_ESTATE,
    payload: newEstate,
  }
}

export function fetchEstate() {
  return { type: REQUEST_ESTATE }
}

export function showLoader() {
  return { type: SHOW_LOADER }
}
export function hideLoader() {
  return { type: HIDE_LOADER }
}

export function showAlert(text: string) {
  return (dispatch: (arg0: { type: string; payload?: string }) => void) => {
    dispatch({ type: SHOW_ALERT, payload: text })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 1000)
  }
}
export function hideAlert() {
  return { type: HIDE_ALERT }
}

// export function fetchEstate() {
//   return async (dispatch: any) => {
//     dispatch(showLoader)
//     const response = await fetch('')
//     const json = await response.json()
//     dispatch({ type: FETCH_ESTATE, payload: json })
//     dispatch(hideLoader)
//   }
// }

// return async (dispatch: any) => {
//   try {
//     dispatch(showLoader)
//     const data = await api.get('/appartments')
//     dispatch({ type: FETCH_ESTATE, payload: data })
//     dispatch(hideLoader)
//   } catch (error) {
//     console.log(error)
//     dispatch(showAlert('Something went wrong'))
//     dispatch(hideLoader())
//   }
// }
