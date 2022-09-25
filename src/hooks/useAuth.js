import { getUser } from '../services/auth'
import useSWR from 'swr'

const useAuth = () => {
  const { data: user } = useSWR('user', () => getUser())
  return { user }
}
export default useAuth
