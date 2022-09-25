import { useEffect, useState } from 'react'

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoadingAuth, setIsLoadingAuth] = useState(true)

  useEffect(() => {
    const logoutTime = localStorage.getItem('logoutTime')
    if (logoutTime) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
    setIsLoadingAuth(false)
  }, [setIsLoggedIn, isLoggedIn])
  return { isLoggedIn, setIsLoggedIn, isLoadingAuth }
}

export default useLogin
