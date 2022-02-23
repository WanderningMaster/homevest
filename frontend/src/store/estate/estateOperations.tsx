import { api } from 'services'

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
