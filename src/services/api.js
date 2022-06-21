import { API_URL } from '../constants/api'
import Cookies from 'js-cookie'

let XSRF_TOKEN = ''

const getCookieResponse = async () => {
  const response = await fetch(API_URL + 'sanctum/csrf-cookie', {
    headers: {
      'Content-Type': 'application/json',
      withCredentials: true
    },
    credentials: 'include'
  })
  if (response.ok) {
    XSRF_TOKEN = Cookies.get('XSRF-TOKEN')
  }
}

getCookieResponse()

const { fetch: originalFetch } = window

window.fetch = async (...args) => {
  let [resource, config] = args
  if (!config) config = {}
  config.headers = {
    ...config.headers,
    Accept: 'application/json',
    'X-XSRF-TOKEN': XSRF_TOKEN
  }
  config.credentials = 'include'
  resource = API_URL + resource

  const response = await originalFetch(resource, config)
  if (!response.ok && response.status === 404) {
    return Promise.reject(response)
  }
  if (response.status === 401) {
    localStorage.removeItem('token')
    window.location.href = '/login'
    return Promise.reject(response)
  }
  return response
}

export const register = async (body) => {
  const response = await fetch('register', {
    method: 'POST',
    body
  })
  return response
}

export const login = async (body) => {
  const response = await fetch('login', {
    method: 'POST',
    body
  })
  return response
}

export const logout = async () => {
  const response = await fetch('logout', {
    method: 'POST'
  })
  return response
}

export const getUser = async () => {
  const response = await fetch('api/user')
  return response
}
