import { API_URL } from '../constants/api'
import Cookies from 'js-cookie'

let XSRF_TOKEN = ''

const getCookieResponse = async () => {
  const response = await fetch(API_URL + 'sanctum/csrf-cookie', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  if (response.ok) {
    XSRF_TOKEN = Cookies.get('XSRF-TOKEN')
    console.log(Cookies.get())
  }
}

getCookieResponse()

const { fetch: originalFetch } = window

// window.fetch = async (...args) => {
//   let [resource, config] = args
//   console.log(config)
//   resource = API_URL + resource

//   let XSRF_TOKEN = ''
//   const response = await getCookieResponse()
//   if (response.ok) {
//     XSRF_TOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, '$1')
//     console.log(XSRF_TOKEN)
//   }

//   return originalFetch(resource, config)
// }

export const register = async (body) => {
  const response = await fetch('register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body
  })
  return response
}
