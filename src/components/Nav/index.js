import { Link } from 'react-router-dom'
import {
  Book2,
  Braces,
  BrandGithub,
  CircleSquare,
  Crown,
  Focus2,
  Ghost,
  HeartRateMonitor,
  LayersUnion,
  LetterM,
  Settings,
  Stack2,
  Users
} from 'tabler-icons-react'
import clsx from 'clsx'
import * as ROUTES from '../../constants/routes'
import Logo from '../../components/Logo'

const Nav = ({ headerOpen }) => {
  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 z-30 h-screen w-[300px] shrink-0 overflow-y-auto bg-white bg-dotted-pattern-vertical bg-right bg-repeat-y duration-150 md:w-80 lg:sticky lg:transform-none lg:overflow-hidden lg:opacity-100 lg:transition-none lg:hover:overflow-y-auto',
        {
          '-translate-x-full opacity-0 ease-out': !headerOpen,
          'translate-x-0 opacity-100 ease-in': headerOpen
        }
      )}>
      <div className="flex bg-dotted-pattern bg-bottom bg-repeat-x py-[18px] px-8 md:py-7">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col gap-y-7 py-8">
        <div>
          <ul>
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <Stack2 strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <HeartRateMonitor strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Monitoring</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="pl-8 text-xs uppercase text-gray-400">Main</span>
          <ul className="mt-3">
            <li>
              <Link
                to={ROUTES.MOVIES}
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <CircleSquare strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Movies</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <CircleSquare strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">TV Shows</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <Focus2 strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Genres</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <Users strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Members</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="pl-8 text-xs uppercase text-gray-400">Updates</span>
          <ul className="mt-3">
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <LayersUnion strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Doctor Strange 2</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <LayersUnion strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Better Call Saul</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <LayersUnion strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Thor: Love and Thunder</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="pl-8 text-xs uppercase text-gray-400">Realted</span>
          <ul className="mt-3">
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <Braces strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">API</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <Crown strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Roles</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <BrandGithub strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Github</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <LetterM strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Maintenance</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <Book2 strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Docs</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <Ghost strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">ToS</span>
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.SETTINGS}
                className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                <span>
                  <Settings strokeWidth={1.5} className="text-gray-600" />
                </span>
                <span className="text-md text-gray-900">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
