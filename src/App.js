import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { lazy, Suspense } from 'react'
import ProtectedRoute from './helpers/protected-route'
import useXSRFCookie from './hooks/useXSRFCookie'
import useLogin from './hooks/useLogin'
import LoadingPage from './pages/Global/LoadingPage'
import NotFound from './pages/Global/NotFound'
import CreateMovie from './pages/Movies/CreateMovie'
/* import Forbidden from './pages/Global/Forbidden' */

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Login = lazy(() => import('./pages/Auth/Login'))
const ResetPassword = lazy(() => import('./pages/Auth/ResetPassword'))
const Register = lazy(() => import('./pages/Auth/Register'))
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword'))
const Settings = lazy(() => import('./pages/Auth/Settings'))
const UpdateMovie = lazy(() => import('./pages/Movies/UpdateMovie'))
const Movies = lazy(() => import('./pages/Movies'))
const UpdateTvShow = lazy(() => import('./pages/TvShows/UpdateTvShow'))
const ConfirmPassword = lazy(() => import('./pages/Auth/ConfirmPassword'))
const TwoFactorStep = lazy(() => import('./pages/Auth/TwoFactorStep'))

function App() {
  const { isLoggedIn, setIsLoggedIn, isLoadingAuth } = useLogin()
  useXSRFCookie()

  if (isLoadingAuth) return <div>Loading...</div>

  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route
            path={ROUTES.LOGIN}
            element={
              !isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate to={ROUTES.HOME} />
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

          <Route
            path={ROUTES.TWO_FACTOR_AUTH}
            element={isLoggedIn ? <TwoFactorStep /> : <Navigate to={ROUTES.LOGIN} />}
          />

          <Route
            path={ROUTES.FORGOT_PASSWORD}
            element={!isLoggedIn ? <ForgotPassword /> : <Navigate to={ROUTES.HOME} />}
          />

          <Route path={ROUTES.CONFIRM_PASSWORD} element={<ConfirmPassword />} />

          <Route
            path={ROUTES.RESET_PASSWORD}
            element={<ResetPassword setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route element={<ProtectedRoute auth={isLoggedIn} setAuth={setIsLoggedIn} />}>
            <Route path={ROUTES.HOME} element={<Dashboard />} />
            <Route path={ROUTES.SETTINGS} element={<Settings />} />
            <Route path={ROUTES.UPDATE_MOVIE} element={<UpdateMovie />} />
            <Route path={ROUTES.CREATE_MOVIE} element={<CreateMovie />} />
            <Route path={ROUTES.MOVIES} element={<Movies />} />
            <Route path={ROUTES.UPDATE_TV} element={<UpdateTvShow />} />
          </Route>

          <Route path="*" element={<NotFound />} status={404} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
