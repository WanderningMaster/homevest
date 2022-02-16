import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReducerName } from 'common/enums'
import testImage from 'components/Dashboard/mock-data/image-2.png'
import testImage2 from 'components/Dashboard/mock-data/image-3.png'

export interface Actions {
  type: string
  payload?: IEstate[]
}

export interface IEstate {
  id: string
  name: string
  image: string
  price: string
  currency: string
  description: string
}

const initialState: IEstate[] = [
  {
    id: '1',
    name: 'RC Rainbow',
    image: testImage,
    price: '647 000',
    currency: 'uah',
    description: '1 is being built, 1 is build',
  },
  {
    id: '2',
    name: 'RC Rainbow',
    image: testImage2,
    price: '500 000',
    currency: 'usd',
    description: '1 is being built, 1 is build',
  },
  {
    id: '3',
    name: 'RC Rainbow',
    image: 'https://wallpaperaccess.com/full/1859246.jpg',
    price: '647 000',
    currency: 'uah',
    description: '1 is being built, 1 is build',
  },
  {
    id: '4',
    name: 'RC Rainbow',
    image: 'https://wallpaperaccess.com/full/1859246.jpg',
    price: '500 000',
    currency: 'usd',
    description: '1 is being built, 1 is build',
  },
]

// const setEstate = (): Actions => ({ type: 'SET_ESTATE' })
const fetchEstate = (): Actions => ({ type: 'FETCH_ESTATE' })

const { reducer, actions } = createSlice({
  name: ReducerName.ESTATE,
  initialState,
  reducers: {
    setEstate: (state, action: PayloadAction<IEstate[]>) => {
      return (state = action.payload)
    },
  },
})

const EstateActionsCreator = {
  ...actions,
  //   setEstate,
  fetchEstate,
}

export { EstateActionsCreator, reducer }
