/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IEstateApartment, IFilter } from './types'
import { createSelector } from '@reduxjs/toolkit'

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

export const getFilter = (state: { estate: { filters: { filters: any } } }) =>
  state.estate.filters.filters

export const getVisibleEstate = createSelector(
  [getDeveloperEstate, getFilter],
  (estate, filter) => {
    if (!filter) {
      return estate
    }

    const filteredArray: IEstateApartment[] = []

    estate.map((obj: any) => {
      for (const key in obj) {
        const estateValue: string = obj[key]

        for (const key in filter) {
          if (filter[key].includes(estateValue)) {
            // console.log(obj)
            filteredArray.push(obj)
          }
        }
      }
    })

    console.log(filteredArray)
    return filteredArray
  },
)
