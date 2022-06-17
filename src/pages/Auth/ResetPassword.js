import { Link } from 'react-router-dom'
import { Key } from 'react-swm-icon-pack'
import Button from '../../components/Essentials/Button'
import Logo from '../../components/Logo'

const ResetPassword = () => {
  return (
    <div className="bg-moovies min-h-screen justify-items-center pt-20 antialiased sm:grid sm:place-items-center sm:pt-0">
      <div className="w-full sm:py-12">
        <Link to="/">
          <Logo className="mx-auto h-8" />
        </Link>
        <div className="mx-auto mt-10 w-full border-y border-neutral-800 bg-neutral-800/40 px-6 pt-6 pb-7 shadow-lg sm:mt-9 sm:max-w-lg sm:rounded-xl sm:border sm:px-9 sm:pt-8 sm:pb-9">
          <h1 className="text-xl font-extrabold text-neutral-200 sm:text-2xl">Reset Password</h1>
          <p className="mt-2.5 text-base font-semibold text-neutral-400 sm:mt-3">
            Reset your password with ease!
          </p>
          <form className="mt-8 block">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-neutral-300">
                Password
              </label>
              <div className="relative mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="New password"
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
                Oonfirm Password
              </label>
              <div className="relative mt-2">
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  placeholder="Repeat password"
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
            <Button name="Reset Password" />
            <div className="mt-6 text-center text-sm font-semibold text-neutral-400">
              Minimum 10 characters. Must contain upper and lowercase, numbers and symbols.{' '}
            </div>
          </form>
        </div>
        <div className="mt-4 text-center text-base font-semibold text-neutral-400">
          Looking for password tips?&nbsp;
          <Link
            to="/support/password#password_strength"
            className="font-bold text-primary-400 transition-colors hover:text-primary-500">
            Look here.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
