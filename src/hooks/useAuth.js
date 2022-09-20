import { useEffect, useState } from 'react'
import { getUser } from '../services/api'

const useAuth = () => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const isAuth = async () => {
      const response = await getUser()
      if (response && response.data && response.data.data) {
        setAuthUser(response.data.data)
      }
    }
    isAuth()
  }, [])

  return { authUser }
}
export default useAuth
