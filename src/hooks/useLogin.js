import { useEffect, useState } from 'react'

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const logoutTime = localStorage.getItem('logoutTime')
    if (logoutTime) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [setIsLoggedIn, isLoggedIn])
  return { isLoggedIn, setIsLoggedIn }
}

export default useLogin
