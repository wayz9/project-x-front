import API from './axios'

export const getTorrentQualities = async () => {
  const response = await API.get(`/api/torrents-qualities`)
  return response
}

export const deleteTorrent = async (movieId, torrentId) => {
  await API.delete(`/api/movies/${movieId}/torrents/${torrentId}`)
}
