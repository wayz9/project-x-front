import Cookies from 'js-cookie'
import { useEffect } from 'react'
import API from '../services/axios'

const useXSRFCookie = () => {
  const XSRF_COOKIE = Cookies.get('XSRF-TOKEN')

  useEffect(() => {
    if (!XSRF_COOKIE) {
      const getCookieResponse = async () => {
        try {
          const response = await API.get('sanctum/csrf-cookie')
          return response
        } catch (err) {
          if (err.message) console.log(err.message)
        }
      }
      getCookieResponse()
    }
  }, [XSRF_COOKIE])

  return XSRF_COOKIE
}

export default useXSRFCookie
