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

export const twoFactorChallenge = async (body) => {
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

export const getConfirmedPasswordStatus = async () => {
  const response = await API.get('user/confirmed-password-status')
  return response.data
}

export const enableTwoFactorAuth = async () => {
  const response = await API.post('user/two-factor-authentication')
  return response.data
}

export const disableTwoFactorAuth = async () => {
  const response = await API.delete('user/two-factor-authentication')
  return response
}

export const confirmPassword = async (body) => {
  try {
    const response = await API.post('user/confirm-password', body)
    return response
  } catch (err) {
    if (err.message) {
      console.log('Error', err.message)
      return err.message
    }
    return null
  }
}

export const getQRCode = async () => {
  const response = await API.get('user/two-factor-qr-code')
  return response.data
}

export const getRecoveryCodes = async () => {
  const response = await API.get('user/two-factor-recovery-codes')
  return response.data
}

export const confirmTwoFactorAuth = async (body) => {
  const response = await API.post('user/confirmed-two-factor-authentication', body)
  return response
}
