import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { lazy, Suspense } from 'react'
import ProtectedRoute from './helpers/protected-route'
import useXSRFCookie from './hooks/useXSRFCookie'
import useLogin from './hooks/useLogin'
import SplideTest from './pages/SplideTest'

const Admin = lazy(() => import('./pages/Admin'))
const Login = lazy(() => import('./pages/Auth/Login'))
const ResetPassword = lazy(() => import('./pages/Auth/ResetPassword'))
const Register = lazy(() => import('./pages/Auth/Register'))
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword'))
const Test = lazy(() => import('./pages/Test'))

function App() {
  const { isLoggedIn, setIsLoggedIn } = useLogin()
  useXSRFCookie()

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path="/test" element={<Test />} />
          <Route path="/splide-test" element={<SplideTest />} />

          <Route
            path={ROUTES.RESET_PASSWORD}
            element={<ResetPassword setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
            <Route path={ROUTES.HOME} element={<Admin />} />
            <Route path={ROUTES.MOVIES} element={<Admin />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
