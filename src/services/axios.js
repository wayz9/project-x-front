import axios from 'axios'
import { API_URL } from '../constants/api'
import Cookies from 'js-cookie'
import useXSRFCookie from '../hooks/useXSRFCookie'

const headers = {
  Accept: 'application/json'
}

const API = axios.create({
  baseURL: API_URL,
  headers
})

API.interceptors.request.use((config) => {
  config.withCredentials = true
  return config
})

API.interceptors.response.use(undefined, (err) => {
  const originalConfig = err.config
  if (err.response) {
    if (err.response.status === 401 && !originalConfig._retry) {
      localStorage.removeItem('logoutTime')
      originalConfig._retry = true
      window.location.href = '/login'
    }
    if (err.response.status === 419 && !originalConfig._retry) {
      originalConfig._retry = true
      Cookies.remove('XSRF-TOKEN')
      useXSRFCookie()
    }
    if (err.response.status === 423 && !originalConfig._retry) {
      originalConfig._retry = true
      window.location.href = '/confirm-password'
    }
    return Promise.reject(err)
  }
  return null
})

export default API
