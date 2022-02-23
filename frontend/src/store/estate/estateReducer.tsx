import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReducerName } from 'common/enums'

export interface Actions {
  type: string
  payload?: IEstate[]
}

export interface IEstate {
  id: string
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
  images: string
  createdAt: string
  updatedAt: string
}

const initialState: IEstate[] = []

const fetchEstate = (): Actions => ({ type: 'FETCH_ESTATE' })

const { reducer, actions } = createSlice({
  name: ReducerName.ESTATE,
  initialState,
  reducers: {
    setEstate: (_, action: PayloadAction<IEstate[]>) => {
      return action.payload
    },
  },
})

const EstateActionsCreator = {
  ...actions,
  fetchEstate,
}

export { EstateActionsCreator, reducer }
