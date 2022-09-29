import API from './axios'

export const search = async (query) => {
  const response = await API.get(`/api/search?query=${query}`)
  return response.data.data
}
