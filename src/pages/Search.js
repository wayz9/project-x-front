import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Search as SearchIcon } from 'react-swm-icon-pack'
import { Link } from 'react-router-dom'
import useHotkeys from '../hooks/useHotkeys'

const Search = ({ openSearch, setOpenSearch }) => {
  const cancelButtonRef = useRef(null)

  useHotkeys('k', true, () => setOpenSearch(true))

  return (
    <Transition.Root show={openSearch} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpenSearch}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-neutral-900 bg-opacity-[0.35] transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center px-4 py-8 text-center sm:items-center sm:p-0 2xl:pl-28">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative w-full max-w-[689px] transform overflow-hidden rounded-lg bg-neutral-800/40 text-left shadow-xl transition-all sm:my-16 md:rounded-xl">
                <div className="flex flex-col divide-y divide-neutral-900">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search something..."
                      aria-labelledby="Search input box"
                      className="block w-full bg-transparent py-[18px] pl-14 pr-16 text-base font-semibold text-neutral-200 placeholder:text-neutral-300 focus:outline-none"
                    />
                    <div className="absolute inset-y-0 left-5 flex items-center justify-center text-primary-400">
                      <SearchIcon set="curved" color="currentColor" size="26" />
                    </div>
                    <div className="absolute inset-y-0 right-[18px] flex items-center justify-center">
                      <div className="rounded-md bg-neutral-700/30 px-1.5 text-[13px] font-bold leading-[22px] text-neutral-300">
                        ESC
                      </div>
                    </div>
                  </div>
                  <div id="results" className="py-5 px-4">
                    <div>
                      <div className="ml-2 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                        Movies (1)
                      </div>
                      <ul className="grid gap-0.5">
                        <li>
                          <Link to="movie/11" className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="rounded bg-cyan-100/5 px-1.5 text-xs font-extrabold uppercase leading-[22px] tracking-wider text-sky-400">
                                Tv Show
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
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

export default Search
