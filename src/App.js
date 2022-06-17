import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ResetPassword from './pages/Auth/ResetPassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/movies" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
