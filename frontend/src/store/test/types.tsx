export const CREATE_ESTATE = 'ESTATE/CREATE_ESTATE'
export const FETCH_ESTATE = 'ESTATE/FETCH_ESTATE'
export const SHOW_LOADER = 'ESTATE/SHOW_LOADER'
export const HIDE_LOADER = 'ESTATE/HIDE_LOADER'
export const SHOW_ALERT = 'ESTATE/SHOW_ALERT'
export const HIDE_ALERT = 'ESTATE/SHOW_ALERT'
export const REQUEST_ESTATE = 'ESTATE/REQUEST_ESTATE'

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

export interface Actions {
  type: string
  payload?: IEstate[]
}
