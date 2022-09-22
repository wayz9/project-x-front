import API from './axios'

export const getMovies = async (searchPhrase = '') => {
  const response = await API.get(
    `api/movies?include=poster,torrents,genres,languages&filter[search]=${searchPhrase}`
  )
  return response
}

export const getMovieById = async (id) => {
  const response = await API.get(`/api/movies/${id}`)
  return response
}
