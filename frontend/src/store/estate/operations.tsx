/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios'
import { api } from 'services'
import { IEstate } from './estateReducer'

axios.defaults.baseURL = 'http://localhost:3001/api/v1/'

const fetchEstateFromApi = async () => {
  try {
    // const data = await axios.get<IEstate[]>('/appartments')
    const data = await api.get('/appartments')
    return data
  } catch (error) {
    console.log(error)
  }
}

export { fetchEstateFromApi }
