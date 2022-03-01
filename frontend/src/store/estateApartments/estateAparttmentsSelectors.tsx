/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IEstateApartment } from './types'

export const getDeveloperEstate = (state: { estate: { apartments: IEstateApartment[] } }) =>
  state.estate.apartments

export const getUniqueDeveloperEstate = (state: { estate: { apartments: any } }) => {
  const estate = state.estate.apartments
  const id = 'estateId'

  const estateUniqueById = [
    ...new Map(estate.map((item: { [x: string]: any }) => [item[id], item])).values(),
  ]
  return estateUniqueById
}
