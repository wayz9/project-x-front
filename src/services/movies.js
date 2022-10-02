import API from './axios'

export const getMovies = async (searchPhrase = '') => {
  const response = await API.get(
    `api/movies?include=poster,torrents,genres,languages&filter[search]=${searchPhrase}`
  )
  return response.data.data
}

export const getMovieById = async (id) => {
  try {
    const response = await API.get(`/api/movies/${id}`)
    return response.data.data
  } catch (err) {
    if (err.response.status === 404) {
      window.location.href = '/not-found'
    }
    return Promise.reject(err)
  }
}

export const getMovieTorrents = async (id) => {
  const response = await API.get(`/api/movies/${id}/torrents`)
  return response.data.data
}

export const deleteMovie = async (id) => {
  await API.delete(`/api/movies/${id}`)
}

export const addTorrentToMovie = async (movieId, body) => {
  const response = await API.post(`/api/movies/${movieId}/torrents`, body)
  return response
}

export const editMovieTorrent = async (movieId, torrentId, body) => {
  const response = await API.post(
    `/api/movies/${movieId}/torrents/${torrentId}?_method=PATCH`,
    body
  )
  return response
}
