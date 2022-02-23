import { api } from 'services'

const postNewAppartment = async (newAppartmentData: any) => {
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
