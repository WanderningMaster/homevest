/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios'
import { IApartmentState } from './appartmentReducer'

axios.defaults.baseURL = 'http://localhost:3001/api/v1/'

const postNewAppartment = async (newAppartmentData: any) => {
  const axiosConfig = {
    // body: JSON.stringify(newAppartmentData),
    // headers: {
    //   Authorization: `Bearer ${localStorage.getItem('token')}`,
    //   'Content-Type': 'application/json',
    // },
  }
  try {
    // debugger
    console.log('Operations')
    const data = await axios.post<IApartmentState>('/appartments', newAppartmentData, axiosConfig)
    return data
  } catch (error) {
    console.log(error)
  }
}

export { postNewAppartment }
