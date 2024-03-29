import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Copy, Dots, Edit, ListDetails, Trash } from 'tabler-icons-react'
import { MOVIES } from '../../constants/routes'

const RowContextMenu = ({ id, handleDelete }) => {
  return (
    <Menu as="div" className="relative inline-flex text-left">
      <Menu.Button className="rounded-md p-2 text-gray-600 hover:bg-gray-50 focus:text-gray-800">
        <Dots size={20} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 top-8 z-10 mt-2 w-[10.25rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className="py-2">
            <li>
              <Link
                to="#"
                className="flex gap-x-2.5 px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100">
                <span className="text-gray-400">
                  <ListDetails size={20} />
                </span>
                <span>View</span>
              </Link>
            </li>
            <li>
              <Link
                to={`${MOVIES}/${id}`}
                className="flex gap-x-2.5 px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100">
                <span className="text-gray-400">
                  <Edit size={20} />
                </span>
                <span>Edit</span>
              </Link>
            </li>
            <li>
              <button className="flex w-full gap-x-2.5 px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100">
                <span className="text-gray-400">
                  <Copy size={20} />
                </span>
                <span>Copy URL</span>
              </button>
            </li>
            <Menu.Item>
              <li>
                <button
                  onClick={handleDelete}
                  className="flex w-full gap-x-2.5 px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100">
                  <span className="text-gray-400">
                    <Trash size={20} />
                  </span>
                  <span>Delete</span>
                </button>
              </li>
            </Menu.Item>
          </ul>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default RowContextMenu
