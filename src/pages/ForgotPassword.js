import { Link } from 'react-router-dom'
import { AtEmail, Key } from 'react-swm-icon-pack'
import Logo from '../components/Logo'

const ForgotPassword = () => {
  return (
    <div className="bg-moovies min-h-screen justify-items-center pt-20 antialiased sm:grid sm:place-items-center sm:pt-0">
      <div className="w-full sm:py-12">
        <Logo className="mx-auto h-8" />
        <div className="mx-auto mt-10 w-full border-y border-neutral-800 bg-neutral-800/40 px-6 pt-6 pb-7 shadow-lg sm:mt-9 sm:max-w-lg sm:rounded-xl sm:border sm:px-9 sm:pt-8 sm:pb-9">
          <h1 className="text-xl font-extrabold text-neutral-200 sm:text-2xl">Forgot Password?</h1>
          <p className="mt-2.5 text-base font-semibold text-neutral-400 sm:mt-3">
            Enter your associated email address.
          </p>
          <form className="mt-8 block">
            <div>
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
                  <AtEmail color="currentColor" set="curved" />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="mt-12 block w-full rounded-md bg-primary-600 py-4 text-[13px] font-extrabold uppercase leading-4 tracking-wider transition-colors hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-800 sm:mt-14">
              Send Password Reset Email
            </button>
          </form>
        </div>
        <div className="mt-4 text-center text-base font-semibold text-neutral-400">
          Not receiveing emails from us?&nbsp;
          <Link
            to="/support/password#password_strength"
            className="font-bold text-primary-400 transition-colors hover:text-primary-500">
            Learn More.
          </Link>
        </div>
        <div className="mt-2 text-center">
          <Link
            to="/login"
            className="text-center text-sm font-bold text-primary-400 transition-colors hover:text-primary-500">
            Back to sign in.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
