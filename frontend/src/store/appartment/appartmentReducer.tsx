import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReducerName } from 'common/enums'

export interface Actions {
  type: string
  payload?: any
}
export interface IApartment {
  estateId: string
  nameOfBuilding: string
  numberOfRooms: string
  numberOfBathrooms: string
  typeOfParking: string
  priceForM2: string
  price: string
  location: string
  appartmentClass: string
  floors: string
  appartmentState: string
  currency: string
  yearOfOperation: string
  salesStatus: string
  investmentType: string
  lending: boolean
  installments: boolean
  mortgage: boolean
  images: string[]
}

export interface IApartmentState {
  isSubmitting: boolean
  submittingError?: string
}

const initialState: IApartmentState = {
  isSubmitting: false,
}

const submitApartment = (values: any): Actions => ({
  type: 'SUBMIT_APARTMENT',
  payload: values,
})

const { reducer, actions } = createSlice({
  name: ReducerName.APARTMENT,
  initialState,
  reducers: {
    submitApartmentPending: (state, action) => ({
      ...state,
      isSubmitting: true,
      submittingError: undefined,
    }),

    submitApartmentFulfilled: (state, { payload }) => ({
      state: { ...state, payload },
      isSubmitting: false,
    }),

    submitApartmentRejected: (state, action: PayloadAction<{ error: string }>) => ({
      ...state,
      submittingError: action.payload.error,
    }),
  },
})

const ApartmentActionsCreator = {
  ...actions,

  submitApartment,
}

export { ApartmentActionsCreator, reducer }
