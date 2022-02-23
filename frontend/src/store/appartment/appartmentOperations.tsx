/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { api } from 'services'

const postNewAppartment = async (newAppartmentData: any) => {
  // const pathname = window.location.pathname
  // console.log(pathname)

  try {
    // debugger

    console.log('apartmentOperations')
    const data = await api.post('/appartments', newAppartmentData)

    return data
  } catch (error) {
    console.log(error)
  }
}

export { postNewAppartment }
