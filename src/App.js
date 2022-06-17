import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
