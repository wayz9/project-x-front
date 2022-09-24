import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import { login } from '../../services/auth'
import * as ROUTES from '../../constants/routes'
import { ArrowNarrowRight } from 'tabler-icons-react'

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const body = new FormData()
    body.append('email', email)
    body.append('password', password)

    const response = await login(body)
    if (response && response.status === 200) {
      let now = new Date()
      now.setHours(now.getHours() + 2)
      localStorage.setItem('logoutTime', String(now))
      setIsLoggedIn(true)
    }
  }

  return (
    <main className="relative flex min-h-screen flex-1 flex-col overflow-hidden py-8 sm:px-4 md:px-6 lg:px-8">
      <div className="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-bg"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="100%"
              patternTransform="translate(0 -1)">
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-bg)"></rect>
        </svg>
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center pb-20 sm:pt-12">
        <Link to="/" className="mx-auto mb-[72px] w-auto">
          <Logo />
        </Link>
        <h1 className="sr-only">Log in to your account</h1>
        <form
          onSubmit={handleLogin}
          className="relative w-full border border-gray-200 bg-white sm:max-w-[29rem] sm:rounded-2xl">
          <div className="mt-9 px-9">
            <h2 className="text-lg font-medium text-gray-800">Sign In</h2>
            <p className="mt-2 text-md leading-5 text-gray-500">Ready to make some changes!</p>
          </div>
          <div className="mt-10 px-9">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="mt-2.5 sm:mt-3"
            />
          </div>
          <div className="mt-10 px-9">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="mt-2.5 sm:mt-3"
            />
            <div className="mt-2 text-right">
              <Link
                to={ROUTES.FORGOT_PASSWORD}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className="mt-14 mb-10 px-9">
            <button type="submit" className="btn-primary block w-full">
              Sign in to account
            </button>
          </div>
          <div className="absolute inset-x-0 -bottom-6 -mx-[120px] h-px bg-gradient-to-r from-black/0 via-black/[0.15] to-black/0"></div>
          <div className="absolute inset-x-0 -top-6 -mx-[120px] h-px bg-gradient-to-r from-black/0 via-black/[0.15] to-black/0"></div>
          <div className="absolute inset-y-0 -right-6 -my-24 w-px bg-gradient-to-b from-black/0 via-black/[0.15] to-black/0"></div>
          <div className="absolute inset-y-0 -left-6 -my-24 w-px bg-gradient-to-b from-black/0 via-black/[0.15] to-black/0"></div>
          <div className="absolute inset-x-0 bottom-0 -mb-px flex h-8 w-full items-end overflow-hidden">
            <div className="-mb-px flex h-0.5 w-full">
              <div className="w-full flex-none bg-gradient-to-r from-violet-200/0 via-violet-500 to-violet-200/0 blur-[1px]"></div>
              <div className="w-full flex-none bg-gradient-to-r from-primary-200/0 via-primary-400 to-primary-200/0 blur-sm"></div>
            </div>
          </div>
        </form>
      </div>
      <footer className="relative shrink-0">
        <div className="flex items-center justify-center gap-x-4">
          <p className="text-sm font-medium text-gray-600">Don't have an account?</p>
          <Link className="btn-secondary flex items-center gap-x-1" to={ROUTES.REGISTER}>
            <span>Register Here</span>
            <span>
              <ArrowNarrowRight size={20} className="text-gray-400" />
            </span>
          </Link>
        </div>
      </footer>
    </main>
  )
}

export default Login
