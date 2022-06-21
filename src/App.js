import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { lazy, Suspense } from 'react'
import useAuth from './hooks/useAuth'
import ProtectedRoute from './helpers/protected-route'

const Admin = lazy(() => import('./pages/Admin'))
const Login = lazy(() => import('./pages/Auth/Login'))
const ResetPassword = lazy(() => import('./pages/Auth/ResetPassword'))
const Register = lazy(() => import('./pages/Auth/Register'))
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword'))

function App() {
  const { isAuthenticated, setIsAuthenticated, isLoadingAuth } = useAuth()

  if (isLoadingAuth) return <div>Loading...</div>

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={ROUTES.LOGIN}
            element={
              !isAuthenticated ? (
                <Login setAuth={setIsAuthenticated} />
              ) : (
                <Navigate to={ROUTES.HOME} />
              )
            }
          />
          <Route
            path={ROUTES.REGISTER}
            element={
              !isAuthenticated ? (
                <Register setAuth={setIsAuthenticated} />
              ) : (
                <Navigate to={ROUTES.HOME} />
              )
            }
          />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />

          <Route
            path={ROUTES.RESET_PASSWORD}
            element={<ResetPassword setAuth={setIsAuthenticated} />}
          />

          <Route element={<ProtectedRoute auth={isAuthenticated} setAuth={setIsAuthenticated} />}>
            <Route path={ROUTES.HOME} element={<Admin />} />
            <Route path={ROUTES.MOVIES} element={<Admin />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
