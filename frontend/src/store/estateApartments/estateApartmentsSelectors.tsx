/* eslint-disable no-fallthrough */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IEstateApartment, IFilter } from './types'
import { createSelector } from '@reduxjs/toolkit'
import { boolean } from 'webidl-conversions'

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

export const getFilterPrice = (state: { estate: { filters: { price: any } } }) => {
  const priceFilter = state.estate.filters.price
  return priceFilter
}

export const getVisibleEstate = createSelector(
  [getDeveloperEstate, getFilter, getFilterPrice],
  (estate, filter, priceFilter) => {
    const filteredArray: IEstateApartment[] = []
    const priceFilteredArray: IEstateApartment[] = []
    if (filter || priceFilter) {
      filter && mapFilterArray(estate, filter, filteredArray)

      priceFilter && filteredArray.length < 1
        ? mapPriceArray(estate, priceFilter, filteredArray)
        : mapPriceArray(filteredArray, priceFilter, priceFilteredArray)

      return (filter && !priceFilter) || (priceFilter && !filter)
        ? filteredArray
        : priceFilteredArray
    }

    return estate
  },
)

function mapFilterArray(arr: any[], filters: any, arrFiltered: any[]) {
  arr.map((obj: any) => {
    for (const key in obj) {
      const estateValue: string = obj[key]

      for (const key in filters) {
        if (filters[key].includes(estateValue)) {
          if (!arrFiltered.find(({ id }: any) => id === obj.id)) {
            arrFiltered.push(obj)
          }
        }
      }
    }
  })
}

function mapPriceArray(arr: any[], priceFilter: any, arrFiltered: any[]) {
  if (!priceFilter) {
    return
  }
  const { currency } = priceFilter
  arr.map((obj: any) => {
    for (const key in obj) {
      const estateValue: any = obj[key]

      for (const keyPrice in priceFilter) {
        const filterValue = priceFilter[keyPrice]
        if ((key === keyPrice && filterValue === estateValue) || currency?.includes(estateValue)) {
          if (!arrFiltered.find(({ id }) => id === obj.id)) {
            arrFiltered.push(obj)
          }
        }
      }
    }
  })
}

// filteredArray.map((obj: any) => {
//   const { currency } = priceFilter
//   for (const key in obj) {
//     const estateValue: any = obj[key]

//     for (const keyPrice in priceFilter) {
//       const filterValue = priceFilter[keyPrice]
//       if ((key === keyPrice && filterValue === estateValue) || currency?.includes(estateValue)) {
//         if (!filteredArray.find(({ id }) => id === obj.id)) {
//           filteredArray.push(obj)
//         }
//       }
//     }
//   }
// })

// export const getFilter = (state: { estate: { filters: { filters: any } } }) =>
//   state.estate.filters.filters

// export const getVisibleEstate = createSelector(
//   [getDeveloperEstate, getFilter],
//   (estate, filter) => {
//     if (!filter) {
//       return estate
//     }

//     const filteredArray: IEstateApartment[] = []

//     estate.map((obj: any) => {
//       for (const key in obj) {
//         const estateValue: string = obj[key]

//         for (const key in filter) {
//           if (filter[key].includes(estateValue)) {
//             // console.log(obj)
//             filteredArray.push(obj)
//           }
//         }
//       }
//     })

//     console.log(filteredArray)
//     return filteredArray
//   },
// )

// PRICES

// if (priceFilter) {
//   estate.map((obj: any) => {
//     for (const key in obj) {
//       const estateValue: any = obj[key]

//       for (const keyPrice in priceFilter) {
//         const { priceRange, price, priceFormM2, currency, lending, installments, mortgage } =
//           priceFilter
//         const filterValue = priceFilter[keyPrice]
//         if ((key === keyPrice && filterValue === estateValue) || currency?.includes(estateValue)) {
//           if (!filteredArray.find(({ id }) => id === obj.id)) {
//             filteredArray.push(obj)
//           }
//         }
//       }
//     }
//   })
// }

// const { priceRange, price, priceFormM2, currency, lending, installments, mortgage } = priceFilter
