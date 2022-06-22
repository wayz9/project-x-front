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
              <Dialog.Panel className="relative w-full max-w-[689px] transform overflow-hidden rounded-lg bg-neutral-900 text-left shadow-xl transition-all sm:my-16 md:rounded-xl">
                <div className="flex flex-col divide-y divide-neutral-900 bg-neutral-800/40">
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
                  <div id="results" className="flex flex-col gap-y-8 px-4 pt-5">
                    <div>
                      <div className="ml-2 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                        Movies (1)
                      </div>
                      <ul className="mt-2 grid gap-0.5">
                        <li>
                          <Link
                            to="movie/11"
                            className="flex cursor-pointer items-center justify-between rounded-md py-[18px] pl-2 pr-4 transition-colors hover:bg-neutral-800/70 focus:bg-neutral-800/70 focus:outline-none focus:ring-1 focus:ring-cyan-100/10">
                            <div className="flex items-center gap-3">
                              <div className="rounded bg-cyan-100/5 px-1.5 text-xs font-extrabold uppercase leading-[22px] tracking-wider text-sky-400">
                                Movie
                              </div>
                              <div className="flex items-baseline gap-2 text-base font-bold">
                                <p className="text-neutral-100">
                                  Avengers: Endgame <span className="text-neutral-400">(2019)</span>
                                </p>
                              </div>
                            </div>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-neutral-400">
                              <div>Enter</div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round">
                                  <polyline points="9 10 4 15 9 20"></polyline>
                                  <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                                </svg>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="ml-2 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                        Tv Shows (2)
                      </div>
                      <ul className="mt-2 grid gap-0.5">
                        <li>
                          <Link
                            to="movie/11"
                            className="flex cursor-pointer items-center justify-between rounded-md py-[18px] pl-2 pr-4 transition-colors hover:bg-neutral-800/70 focus:bg-neutral-800/70 focus:outline-none focus:ring-1 focus:ring-cyan-100/10">
                            <div className="flex items-center gap-3">
                              <div className="rounded bg-cyan-100/5 px-1.5 text-xs font-extrabold uppercase leading-[22px] tracking-wider text-sky-400">
                                TV Show
                              </div>
                              <div className="flex items-baseline gap-2 text-base font-bold">
                                <p className="text-neutral-100">
                                  Better Call Saul{' '}
                                  <span className="text-neutral-400">(2015-2022)</span>
                                </p>
                                <p className="font-medium text-neutral-400">(6 seasons)</p>
                              </div>
                            </div>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-neutral-400">
                              <div>Enter</div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round">
                                  <polyline points="9 10 4 15 9 20"></polyline>
                                  <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                                </svg>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="movie/11"
                            className="flex cursor-pointer items-center justify-between rounded-md py-[18px] pl-2 pr-4 transition-colors hover:bg-neutral-800/70 focus:bg-neutral-800/70 focus:outline-none focus:ring-1 focus:ring-cyan-100/10">
                            <div className="flex items-center gap-3">
                              <div className="rounded bg-cyan-100/5 px-1.5 text-xs font-extrabold uppercase leading-[22px] tracking-wider text-sky-400">
                                TV Show
                              </div>
                              <div className="flex items-baseline gap-2 text-base font-bold">
                                <p className="text-neutral-100">
                                  Mr. Robot <span className="text-neutral-400">(2015-2019)</span>
                                </p>
                                <p className="font-medium text-neutral-400">(4 seasons)</p>
                              </div>
                            </div>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-neutral-400">
                              <div>Enter</div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round">
                                  <polyline points="9 10 4 15 9 20"></polyline>
                                  <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                                </svg>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="ml-2 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                        Genres (1)
                      </div>
                      <ul className="mt-2 grid gap-0.5">
                        <li>
                          <Link
                            to="movie/11"
                            className="flex cursor-pointer items-center justify-between rounded-md py-[18px] pl-2 pr-4 transition-colors hover:bg-neutral-800/70 focus:bg-neutral-800/70 focus:outline-none focus:ring-1 focus:ring-cyan-100/10">
                            <div className="flex items-center gap-3">
                              <div className="rounded bg-cyan-100/5 px-1.5 text-xs font-extrabold uppercase leading-[22px] tracking-wider text-sky-400">
                                Genres
                              </div>
                              <div className="flex items-baseline gap-2 text-base font-bold">
                                <p className="text-neutral-100">
                                  Better Call Saul <span className="text-neutral-400">Horror</span>
                                </p>
                                <p className="font-medium text-neutral-400">(512 seasons)</p>
                              </div>
                            </div>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-neutral-400">
                              <div>Enter</div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round">
                                  <polyline points="9 10 4 15 9 20"></polyline>
                                  <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                                </svg>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-7 flex items-center justify-between px-6 pb-6">
                    <button type="button" className="text-sm font-semibold text-neutral-400">
                      Filters
                    </button>
                    <button type="button" className="text-sm font-semibold text-neutral-400">
                      Settings
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

export default Search
