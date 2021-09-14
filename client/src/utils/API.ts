import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL || '/api'

export const getCurrentEthRate = async () => {
  const { data } = await axios.get('/rate')
  return data
}

export const getEthEarningsInfo = async (limit: number = 1) => {
  const { data } = await axios.get(`/${limit}`)
  if (limit === 1) {
    return data[0]
  }
  return data
}

export const getCurrentEthEarningsInfo = async () => {
  const { data } = await axios.get(`/ethEarnings`)
  return data
}
