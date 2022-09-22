import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { lazy, Suspense } from 'react'
import ProtectedRoute from './helpers/protected-route'
import useXSRFCookie from './hooks/useXSRFCookie'
import useLogin from './hooks/useLogin'
import UpdateTvShow from './pages/TvShows/UpdateTvShow'
import Skeleton from './pages/Public/Skeleton'
import useSWR, { SWRConfig } from 'swr'

const Admin = lazy(() => import('./pages/Admin'))
const Login = lazy(() => import('./pages/Auth/Login'))
const ResetPassword = lazy(() => import('./pages/Auth/ResetPassword'))
const Register = lazy(() => import('./pages/Auth/Register'))
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword'))
const Settings = lazy(() => import('./pages/Settings'))
const UpdateMovie = lazy(() => import('./pages/Movies/UpdateMovie'))
const Movies = lazy(() => import('./pages/Movies'))

function App() {
  const { isLoggedIn, setIsLoggedIn, isLoadingAuth } = useLogin()
  useXSRFCookie()

  if (isLoadingAuth) return <div>Loading...</div>

  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path={ROUTES.LOGIN}
              element={
                !isLoggedIn ? (
                  <Login setIsLoggedIn={setIsLoggedIn} />
                ) : (
                  <Navigate to={ROUTES.HOME} />
                )
              }
            />
            <Route
              path={ROUTES.REGISTER}
              element={
                !isLoggedIn ? (
                  <Register setIsLoggedIn={setIsLoggedIn} />
                ) : (
                  <Navigate to={ROUTES.HOME} />
                )
              }
            />
            <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
            <Route path="/skeleton" element={<Skeleton />} />

            <Route
              path={ROUTES.RESET_PASSWORD}
              element={<ResetPassword setIsLoggedIn={setIsLoggedIn} />}
            />

            <Route element={<ProtectedRoute auth={isLoggedIn} setAuth={setIsLoggedIn} />}>
              <Route path={ROUTES.HOME} element={<Admin />} />
              <Route path={ROUTES.SETTINGS} element={<Settings />} />
              <Route path={ROUTES.UPDATE_MOVIE} element={<UpdateMovie />} />
              <Route path={ROUTES.MOVIES} element={<Movies />} />
              <Route path={ROUTES.UPDATE_TV} element={<UpdateTvShow />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </SWRConfig>
  )
}

export default App
