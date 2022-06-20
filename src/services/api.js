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
  console.log(config)
  config.headers = {
    ...config.headers,
    Accept: 'application/json',
    'X-XSRF-TOKEN': XSRF_TOKEN
  }
  resource = API_URL + resource

  return originalFetch(resource, config)
}

export const register = async (body) => {
  const response = await fetch('register', {
    method: 'POST',
    credentials: 'include',
    body
  })
  return response
}
