import API from './axios'

export const register = async (body) => {
  try {
    const response = await API.post('register', body)
    return response
  } catch (err) {
    if (err.message) {
      console.log('Error', err.message)
      return err.message
    }
    return null
  }
}

export const login = async (body) => {
  try {
    const response = await API.post('login', body)
    return response
  } catch (err) {
    if (err.message) {
      console.log('Error', err.message)
      return err.message
    }
    return null
  }
}

export const logout = async () => {
  try {
    const response = await API.post('logout')
    localStorage.removeItem('logoutTime')
    return response
  } catch (err) {
    if (err.message) {
      console.log('Error', err.message)
      return err.message
    }
    return null
  }
}

export const getUser = async () => {
  const response = await API.get('api/user')
  return response.data.data
}

export const confirmTwoFactorAuth = async (body) => {
  try {
    const response = await API.post('two-factor-challenge', body)
    return response
  } catch (err) {
    if (err.message) {
      console.log('Error', err.message)
      return err.message
    }
    return null
  }
}
