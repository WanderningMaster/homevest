export const CREATE_APARTMENT = 'ESTATE/CREATE_APARTMENT'
// export const REQUEST_APARTMENTS = 'ESTATE/REQUEST_APARTMENTS'
export const FETCH_APARTMENTS = 'ESTATE/FETCH_APARTMENTS'
export const FETCH_APARTMENTS_FILTER = 'FETCH_APARTMENTS_FILTERS'
export const POST_NEW_APARTMENT = 'SUBMIT_APARTMENT'
// export const SHOW_LOADER = 'APP/SHOW_LOADER'
// export const HIDE_LOADER = 'APP/HIDE_LOADER'
// export const SHOW_ALERT = 'APP/SHOW_ALERT'
// export const HIDE_ALERT = 'APP/SHOW_ALERT'

export interface IEstateApartment {
  id?: string
  estateId?: string
  nameOfBuilding?: string
  numberOfRooms?: string
  numberOfBathrooms?: string
  typeOfParking?: string
  priceForM2?: string
  price?: string
  location?: string
  appartmentClass?: string
  floors?: string
  appartmentState?: string
  currency?: string
  yearOfOperation?: string
  salesStatus?: string
  investmentType?: string
  lending?: boolean
  installments?: boolean
  mortgage?: boolean
  images?: string
  createdAt?: string
  updatedAt?: string
}

export interface Actions {
  type: string
  payload?: IEstateApartment[]
}
