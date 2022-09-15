import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Copy, Edit, Pencil, TrashX } from 'tabler-icons-react'

const ShowTorrents = ({ showTorrent, setShowTorrent }) => {
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root appear show={showTorrent} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setShowTorrent}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/5 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center px-4 py-8 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative w-full max-w-2xl transform overflow-hidden rounded-xl border border-gray-100 bg-white transition-all sm:my-16">
                <div className="p-6 md:px-8">
                  <div className="text-center sm:text-left">
                    <h5 className="font-medium uppercase leading-5 text-gray-900 sm:text-lg sm:leading-6 md:normal-case">
                      Torrents
                    </h5>
                    <p className="mt-2 text-sm font-normal text-gray-500 sm:text-md">
                      Available torrents for this movie.
                    </p>
                  </div>
                  <ul className="mt-7 flex flex-col gap-y-4 md:mt-8">
                    <li className="relative flex flex-col items-center justify-center gap-x-9 overflow-hidden rounded-lg border border-gray-200 px-10 pt-2.5 pb-3 md:flex-row md:justify-between md:pl-[26px] md:pr-5">
                      <div className="flex flex-col items-center justify-center md:block">
                        <div className="flex gap-x-1.5 text-md font-medium leading-5 text-gray-800 md:text-base">
                          <span>2,42GB</span>
                          <span>&middot;</span>
                          <span>720P</span>
                          <span>&middot;</span>
                          <span>23.976 FPS</span>
                        </div>
                        <p
                          title="a2b700b71393af92640483c3e8ae5e08a2b700b71393af92640483c3e8ae5e08"
                          className="overflow-anywhere mt-1.5 text-left text-sm normal-case text-gray-400 line-clamp-1">
                          a2b700b71393af92640483c3e8ae5e08a2b700b71393af92640483c3e8ae5e08
                        </p>
                      </div>
                      <div className="hidden items-center gap-x-1 md:flex">
                        <button className="flex items-center gap-1.5 rounded-md py-1.5 pl-2.5 pr-3 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                          <span>
                            <Copy size={20} strokeWidth={1.5} />
                          </span>
                          <span className="text-gray-500">Copy</span>
                        </button>
                        <button className="flex items-center gap-1.5 rounded-md py-1.5 pl-2.5 pr-3 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                          <span>
                            <Pencil size={20} strokeWidth={1.5} />
                          </span>
                          <span className="text-gray-500">Edit</span>
                        </button>
                        <button className="flex items-center gap-1.5 rounded-md py-1.5 pl-2.5 pr-3 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                          <span>
                            <TrashX size={20} strokeWidth={1.5} />
                          </span>
                          <span className="text-gray-500">Delete</span>
                        </button>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-[3px] w-full bg-yellow-500 md:inset-y-0 md:h-full md:w-2.5"></div>
                    </li>
                    <li className="relative flex flex-col items-center justify-center gap-x-9 overflow-hidden rounded-lg border border-gray-200 px-10 pt-2.5 pb-3 md:flex-row md:justify-between md:pl-[26px] md:pr-5">
                      <div className="flex flex-col items-center justify-center md:block">
                        <div className="flex gap-x-1.5 text-md font-medium leading-5 text-gray-800 md:text-base">
                          <span>3,64GB</span>
                          <span>&middot;</span>
                          <span>1080P</span>
                          <span>&middot;</span>
                          <span>23.976 FPS</span>
                        </div>
                        <p
                          title="a2b700b71393af92640483c3e8ae5e08a2b700b71393af92640483c3e8ae5e08"
                          className="overflow-anywhere mt-1.5 text-left text-sm normal-case text-gray-400 line-clamp-1">
                          a2b700b71393af92640483c3e8ae5e08a2b700b71393af92640483c3e8ae5e08
                        </p>
                      </div>
                      <div className="hidden items-center gap-x-1 md:flex">
                        <button className="flex items-center gap-1.5 rounded-md py-1.5 pl-2.5 pr-3 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                          <span>
                            <Copy size={20} strokeWidth={1.5} />
                          </span>
                          <span className="text-gray-500">Copy</span>
                        </button>
                        <button className="flex items-center gap-1.5 rounded-md py-1.5 pl-2.5 pr-3 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                          <span>
                            <Pencil size={20} strokeWidth={1.5} />
                          </span>
                          <span className="text-gray-500">Edit</span>
                        </button>
                        <button className="flex items-center gap-1.5 rounded-md py-1.5 pl-2.5 pr-3 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                          <span>
                            <TrashX size={20} strokeWidth={1.5} />
                          </span>
                          <span className="text-gray-500">Delete</span>
                        </button>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-[3px] w-full bg-green-500 md:inset-y-0 md:h-full md:w-2.5"></div>
                    </li>
                    <li className="relative flex flex-col items-center justify-center gap-x-9 overflow-hidden rounded-lg border border-gray-200 px-10 pt-2.5 pb-3 md:flex-row md:justify-between md:pl-[26px] md:pr-5">
                      <div className="flex flex-col items-center justify-center md:block">
                        <div className="flex gap-x-1.5 text-md font-medium leading-5 text-gray-800 md:text-base">
                          <span>6,49GB</span>
                          <span>&middot;</span>
                          <span>2160P</span>
                          <span>&middot;</span>
                          <span>23.976 FPS</span>
                        </div>
                        <p
                          title="a2b700b71393af92640483c3e8ae5e08a2b700b71393af92640483c3e8ae5e08"
                          className="overflow-anywhere mt-1.5 text-left text-sm normal-case text-gray-400 line-clamp-1 md:mt-0.5">
                          a2b700b71393af92640483c3e8ae5e08a2b700b71393af92640483c3e8ae5e08
                        </p>
                      </div>
                      <div className="hidden items-center gap-x-1 md:flex">
                        <button className="flex items-center gap-1.5 rounded-md py-1.5 pl-2.5 pr-3 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                          <span>
                            <Copy size={20} strokeWidth={1.5} />
                          </span>
                          <span className="text-gray-500">Copy</span>
                        </button>
                        <button className="flex items-center gap-1.5 rounded-md py-1.5 pl-2.5 pr-3 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                          <span>
                            <Pencil size={20} strokeWidth={1.5} />
                          </span>
                          <span className="text-gray-500">Edit</span>
                        </button>
                        <button className="flex items-center gap-1.5 rounded-md py-1.5 pl-2.5 pr-3 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                          <span>
                            <TrashX size={20} strokeWidth={1.5} />
                          </span>
                          <span className="text-gray-500">Delete</span>
                        </button>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-[3px] w-full bg-primary-500 md:inset-y-0 md:h-full md:w-2.5"></div>
                    </li>
                  </ul>
                  <div className="mt-9 flex items-center justify-between sm:mt-10">
                    <button
                      onClick={() => setShowTorrent(false)}
                      className="btn-primary block w-full">
                      Dismis
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ShowTorrents
