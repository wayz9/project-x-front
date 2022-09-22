import API from './axios'

export const getTorrentQualities = async () => {
  const response = await API.get(`/api/torrents-qualities`)
  return response
}
