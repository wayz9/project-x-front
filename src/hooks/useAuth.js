import { useEffect, useState } from 'react'
// import { getAuth } from "../services/api";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoadingAuth, setIsLoadingAuth] = useState(true)
  const [authUserId, setAuthUserId] = useState(null)

  useEffect(() => {
    const isAuth = async () => {
      if (localStorage.getItem('token')) {
        // const response = await getAuth();
        // if (response.ok) {
        //   setIsAuthenticated(true);
        //   const { data } = await response.json();
        //   setAuthUserId(data.id);
        // }
        setIsAuthenticated(true)
        setAuthUserId(1)
      } else {
        localStorage.removeItem('token')
      }
      setIsLoadingAuth(false)
    }

    isAuth()
  }, [])

  return { isAuthenticated, setIsAuthenticated, isLoadingAuth, authUserId }
}
export default useAuth
