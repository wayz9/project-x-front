import { Navigate, Outlet } from 'react-router-dom'
import { LOGIN } from '../constants/routes'
import Nav from '../components/Nav'

const ProtectedRoute = ({ auth, setAuth }) => {
  return auth ? (
    <div className="bg-moovies min-h-screen">
      <div className="flex">
        <Nav />
        <Outlet context={[auth, setAuth]} />
      </div>
    </div>
  ) : (
    <Navigate to={LOGIN} />
  )
}
export default ProtectedRoute
