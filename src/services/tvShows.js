import API from './axios'

export const getTvShowById = async (id) => {
  const response = await API.get(`/api/tv-shows/${id}`)
  return response
}
