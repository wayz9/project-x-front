import { Link } from 'react-router-dom'
import { AtEmail, Key, User1 } from 'react-swm-icon-pack'
import Button from '../../components/Essentials/Button'
import Logo from '../../components/Logo'

const Register = () => {
  return (
    <div className="bg-moovies min-h-screen justify-items-center pt-20 antialiased sm:grid sm:place-items-center sm:pt-0">
      <div className="w-full pb-10 sm:py-12">
        <Link to="/">
          <Logo className="mx-auto h-8" />
        </Link>
        <div className="mx-auto mt-10 w-full border-y border-neutral-800 bg-neutral-800/40 px-6 pt-6 pb-7 shadow-lg sm:mt-9 sm:max-w-lg sm:rounded-xl sm:border sm:px-9 sm:pt-8 sm:pb-9">
          <h1 className="text-xl font-extrabold text-neutral-200 sm:text-2xl">Register</h1>
          <p className="mt-2.5 text-base font-semibold text-neutral-400 sm:mt-3">
            Register for better experience
          </p>
          <form className="mt-8 block">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-neutral-300">
                Name
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  id="name"
                  placeholder="Full name"
                  className="block w-full rounded-md bg-neutral-800/[0.55] py-3 pl-[50px] pr-6 text-base font-semibold 
                  text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                />
                <div className="absolute inset-y-0 left-3.5 flex items-center justify-center text-neutral-400">
                  <User1 color="currentColor" set="broken" />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-neutral-300">
                Email
              </label>
              <div className="relative mt-2">
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  autoComplete="off"
                  id="password"
                  placeholder="Password"
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
            <div className="mt-8">
              <label
                htmlFor="password_confirmation"
                className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-neutral-300">
                Confirm Password
              </label>
              <div className="relative mt-2">
                <input
                  type="password"
                  name="password_confirmation"
                  autoComplete="off"
                  id="password_confirmation"
                  placeholder="Confirm password"
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
            <Button name="Register" />
          </form>
        </div>
        <div className="mt-4 text-center text-base font-semibold text-neutral-400">
          Already have an account.&nbsp;
          <Link
            to="/login"
            className="font-bold text-primary-400 transition-colors hover:text-primary-500">
            Login here.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
