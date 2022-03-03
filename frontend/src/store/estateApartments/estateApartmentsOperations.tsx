/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import filters from 'components/common/filtes/filters'
import { api } from 'services'

async function fetchEstateApartmentsFromApi() {
  try {
    const data = await api.get('/appartments')
    return data
  } catch (error) {
    console.log(error)
  }
}

const postNewAppartment = async (newAppartmentData: string | any[]) => {
  // debugger
  if (!newAppartmentData || newAppartmentData.length > 1 || { newAppartmentData: { filters } }) {
    return
  }
  console.log({ newAppartmentData: { filters } })

  try {
    console.log('apartmentOperations', newAppartmentData)
    const data = await api.post('/appartments', newAppartmentData)

    return data
  } catch (error) {
    console.log(error)
  }
}

export { fetchEstateApartmentsFromApi, postNewAppartment }
