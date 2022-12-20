import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import { register } from '../../services/auth'

const Register = ({ setIsLoggedIn }) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    const body = new FormData()
    body.append('name', fullName)
    body.append('password', password)
    body.append('password_confirmation', passwordConfirmation)
    body.append('email', email)
    const response = await register(body)
    if (response && response.status === 204) {
      let now = new Date()
      now.setHours(now.getHours() + 2)
      localStorage.setItem('logoutTime', String(now))
      setIsLoggedIn(true)
    }
  }

  return (
    <main className="relative flex min-h-screen flex-1 flex-col overflow-hidden py-6 sm:px-4 md:px-6 lg:px-8">
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
      <div className="pb-18 relative flex flex-1 flex-col items-center justify-center">
        <Link to="/" className="mx-auto mb-[72px] w-auto" tabIndex={-1}>
          <Logo />
        </Link>
        <h1 className="sr-only">Registration form</h1>
        <form
          onSubmit={handleRegister}
          className="relative w-full border border-gray-200 bg-white sm:max-w-[29rem] sm:rounded-2xl">
          <div className="mt-9 px-9">
            <h2 className="text-lg font-medium text-gray-800">Register</h2>
            <p className="mt-2 text-md leading-5 text-gray-500">Get access to all we offer.</p>
          </div>
          <div className="mt-10 px-9">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              id="full_name"
              className="mt-2.5 sm:mt-3"
            />
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
          </div>
          <div className="mt-10 px-9">
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              id="password_confirmation"
              className="mt-2.5 sm:mt-3"
            />
          </div>
          <div className="mt-14 mb-10 px-9">
            <button type="submit" className="btn-primary block w-full">
              Reigster
            </button>
          </div>
          <div className="absolute inset-x-0 -bottom-6 -mx-[120px] h-px bg-gradient-to-r from-transparent via-black/[0.15] to-transparent"></div>
          <div className="absolute inset-x-0 -top-6 -mx-[120px] h-px bg-gradient-to-r from-transparent via-black/[0.15] to-transparent"></div>
          <div className="absolute inset-y-0 -right-6 -my-24 w-px bg-gradient-to-b from-transparent via-black/[0.15] to-transparent"></div>
          <div className="absolute inset-y-0 -left-6 -my-24 w-px bg-gradient-to-b from-transparent via-black/[0.15] to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 -mb-px flex h-8 w-full items-end overflow-hidden">
            <div className="-mb-px flex h-0.5 w-full">
              <div className="w-full flex-none bg-gradient-to-r from-violet-200/0 via-violet-500 to-violet-200/0 blur-[1px]"></div>
              <div className="w-full flex-none bg-gradient-to-r from-primary-200/0 via-primary-400 to-primary-200/0 blur-sm"></div>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Register
