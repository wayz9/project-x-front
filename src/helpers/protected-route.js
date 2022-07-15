import { Navigate, Outlet } from 'react-router-dom'
import { LOGIN } from '../constants/routes'
import Nav from '../components/Nav'

const ProtectedRoute = ({ isLoggedIn, setIsLoggedIn }) => {
  return isLoggedIn ? (
    <div className="bg-moovies min-h-screen">
      <div className="flex">
        <Nav />
        <Outlet context={[isLoggedIn, setIsLoggedIn]} />
      </div>
    </div>
  ) : (
    <Navigate to={LOGIN} />
  )
}
export default ProtectedRoute
