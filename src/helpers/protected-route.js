import { Navigate, Outlet } from 'react-router-dom'
import { LOGIN } from '../constants/routes'
import Nav from '../components/Nav'

import { Menu2 } from 'tabler-icons-react'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { toCommaSeparate } from './toCommaSeparate'
import AvatarDropdown from '../components/User/AvatarDropdown'
import Search from '../pages/Modals/Search'

const ProtectedRoute = ({ auth }) => {
  const [headerOpen, setHeaderOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const { user } = useAuth()

  return auth ? (
    <div className="relative flex min-h-screen antialiased">
      <Search isOpen={searchOpen} setIsOpen={setSearchOpen} />
      <Nav authUser={user} headerOpen={headerOpen} />
      <div className="relative flex max-w-full grow flex-col" onClick={() => setHeaderOpen(false)}>
        <section className="sticky top-0 z-20 flex items-center justify-between bg-white/80 bg-dotted-pattern bg-bottom bg-repeat-x py-4 px-6 backdrop-blur-lg md:px-9 lg:py-6">
          <div className="flex items-center gap-x-3">
            <button
              aria-label="Open Main Menu"
              onClick={(e) => {
                setHeaderOpen((headerOpen) => !headerOpen)
                e.stopPropagation()
              }}
              className="-ml-2 rounded-md p-2 text-gray-600 hover:bg-gray-50 focus:text-gray-800 lg:hidden">
              <Menu2 strokeWidth={1.5} size={22} />
            </button>
            <h5 className="font-medium text-gray-900">
              <span className="md:hidden">Movies</span>
              <span className="hidden md:inline">Welcome, {user ? user.name : null}</span>
            </h5>
          </div>
          <div className="flex items-center gap-x-9">
            <div className="hidden text-center md:block">
              <p className="text-sm text-gray-400">Role:</p>
              <p className="mt-1 text-md leading-5 text-gray-700">
                {user && toCommaSeparate(user.roles)}
              </p>
            </div>
            <AvatarDropdown />
          </div>
        </section>
        <Outlet context={[user]} />
      </div>
    </div>
  ) : (
    <Navigate to={LOGIN} />
  )
}
export default ProtectedRoute
