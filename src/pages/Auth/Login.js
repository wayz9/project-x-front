import Cookies from 'js-cookie'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AtEmail, Key } from 'react-swm-icon-pack'
import Button from '../../components/Essentials/Button'
import Logo from '../../components/Logo'
import { login } from '../../services/api'

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const body = new FormData()
    body.append('email', email)
    body.append('password', password)
    const response = await login(body)
    if (response.ok) {
      localStorage.setItem('token', Cookies.get('XSRF-TOKEN'))
      setAuth(true)
    } else {
      const { message } = await response.json()
      alert(message)
    }
  }

  return (
    <div className="bg-moovies min-h-screen justify-items-center pt-20 antialiased sm:grid sm:place-items-center sm:pt-0">
      <div className="w-full sm:py-12">
        <Link to="/">
          <Logo className="mx-auto h-8" />
        </Link>
        <div className="mx-auto mt-10 w-full border-y border-neutral-800 bg-neutral-800/40 px-6 pt-6 pb-7 shadow-lg sm:mt-9 sm:max-w-lg sm:rounded-xl sm:border sm:px-9 sm:pt-8 sm:pb-9">
          <h1 className="text-xl font-extrabold text-neutral-200 sm:text-2xl">Sign In</h1>
          <p className="mt-2.5 text-base font-semibold text-neutral-400 sm:mt-3">
            Login to manage your account.
          </p>
          <form className="mt-8 block" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-neutral-300">
                Email
              </label>
              <div className="relative mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  id="email"
                  placeholder="Email address"
                  className="block w-full rounded-md bg-neutral-800/[0.55] py-3 pl-[50px] pr-6 text-base font-semibold 
                  text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                />
                <div className="absolute inset-y-0 left-3.5 flex items-center justify-center text-neutral-400">
                  <AtEmail color="currentColor" set="broken" />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor="password"
                className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-neutral-300">
                Password
              </label>
              <div className="relative mt-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  id="password"
                  placeholder="Your password"
                  className="relative z-0 block w-full rounded-md bg-neutral-800/[0.55] py-3 pl-[50px] pr-6 text-base font-semibold 
                  text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                />
                <div className="absolute inset-y-0 left-3.5 flex items-center justify-center text-neutral-400">
                  <Key color="currentColor" set="broken" />
                </div>
                <div className="absolute inset-y-0 right-4 z-10 flex items-center justify-center text-sm font-bold text-neutral-400 hover:cursor-pointer">
                  Show
                </div>
              </div>
            </div>
            <Button name="Sign In" type="submit" />
          </form>
        </div>
        <div className="mt-4 text-center text-base font-semibold text-neutral-400">
          Don't have an account.&nbsp;
          <Link
            to="/register"
            className="font-bold text-primary-400 transition-colors hover:text-primary-500">
            Register here.
          </Link>
        </div>
        <div className="mt-2 text-center">
          <Link
            to="/forgot-password"
            className="text-center text-sm font-bold text-primary-400 transition-colors hover:text-primary-500">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
