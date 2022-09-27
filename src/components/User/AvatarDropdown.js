import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  BellRinging,
  ChevronDown,
  Devices2,
  Logout,
  MoonStars,
  Settings,
  Sun,
  ThreeDCubeSphere
} from 'tabler-icons-react'

const AvatarDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center gap-x-2">
          <img
            className="h-10 w-10 rounded-full object-cover object-center"
            src="https://avatars.cloudflare.steamstatic.com/36f85e68d703bd07b32aa7773aa7cf7dd4df5ee6_full.jpg"
            alt="Avatar"
          />
          <ChevronDown size={20} className="hidden text-gray-500 lg:inline" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col items-center justify-center pt-7">
            <img
              className="h-12 w-12 rounded-full object-cover object-center"
              src="https://avatars.cloudflare.steamstatic.com/36f85e68d703bd07b32aa7773aa7cf7dd4df5ee6_full.jpg"
              alt="Avatar"
            />
            <p className="mt-3.5 text-md font-medium leading-6 text-gray-800">
              Hi, Vukašin Vitorović
            </p>
            <p className="mt-2 text-sm text-gray-400">Role: Editor</p>
          </div>
          <div className="mt-7 mb-4 grid gap-y-5">
            <div>
              <span className="pl-5 text-xs uppercase text-gray-400">Main</span>
              <ul className="mt-2.5 text-md leading-5 text-gray-800">
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between py-2 px-5 transition-all hover:bg-gray-50">
                    <span>Notifications</span>
                    <BellRinging className="-mr-0.5 text-gray-400" size={20} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between py-2 px-5 transition-all hover:bg-gray-50">
                    <span>Achievements</span>
                    <ThreeDCubeSphere className="-mr-0.5 text-gray-400" size={20} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between py-2 px-5 transition-all hover:bg-gray-50">
                    <span>Settings</span>
                    <Settings className="-mr-0.5 text-gray-400" size={20} />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="pl-5 text-xs uppercase text-gray-400">Theme</span>
              <ul className="mt-2.5 text-md leading-5 text-gray-800">
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between py-2 px-5 transition-all hover:bg-gray-50">
                    <span>Dark</span>
                    <MoonStars className="-mr-0.5 text-gray-400" size={20} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between bg-gray-900 py-2 px-5 text-gray-100 transition-all">
                    <span>Light</span>
                    <Sun className="-mr-0.5 text-gray-400" size={20} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between py-2 px-5 transition-all hover:bg-gray-50">
                    <span>System</span>
                    <Devices2 className="-mr-0.5 text-gray-400" size={20} />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="pl-5 text-xs uppercase text-gray-400">Auth</span>
              <ul className="mt-2.5 text-md leading-5 text-gray-800">
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between py-2 px-5 transition-all hover:bg-gray-50">
                    <span>Logout</span>
                    <Logout className="-mr-0.5 text-gray-400" size={20} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default AvatarDropdown
