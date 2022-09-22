import API from './axios'

export const getMovies = async (searchPhrase = '') => {
  const response = await API.get(
    `api/movies?include=poster,torrents,genres,languages&filter[search]=${searchPhrase}`
  )
  return response
}

export const getMovieById = async (id) => {
  try {
    const response = await API.get(`/api/movies/${id}`)
    return response.data.data
  } catch (err) {
    if (err.response.status === 404) {
      window.location.href = '/'
    }
  }
}
