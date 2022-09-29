import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useHotkeys from '../../hooks/useHotkeys'
import { Link } from 'react-router-dom'
import { ArrowNarrowRight } from 'tabler-icons-react'
import useSWR, { mutate } from 'swr'
import { search } from '../../services/essentials'
import { useState } from 'react'
import { useEffect } from 'react'
import { toCommaSeparate } from '../../helpers/toCommaSeparate'
import { MOVIES, TV_SHOWS } from '../../constants/routes'
import { choice } from '../../helpers/choice'

const Search = ({ isOpen, setIsOpen }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef(null)

  const { data: searchData } = useSWR(
    searchQuery.length > 3 ? 'search' : null,
    () => search(searchQuery),
    { revalidateOnFocus: false }
  )

  useEffect(() => {
    const handleSearch = () => {
      if (searchQuery.length > 3) {
        mutate('search', () => search(searchQuery), { revalidate: false })
      }
    }

    const delayDebounceFn = setTimeout(() => {
      handleSearch()
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [searchQuery])

  const handleCloseModal = () => {
    setIsOpen(false)
    setSearchQuery('')
  }

  useHotkeys('k', true, () => setIsOpen(true))

  return (
    <Transition.Root appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={searchInputRef}
        onClose={handleCloseModal}>
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
          <div className="flex min-h-full items-start justify-center px-4 py-8 sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all sm:my-24">
                <div className="relative">
                  <input
                    type="text"
                    autoComplete="off"
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search everything"
                    className="w-full rounded-b-none border-gray-200 py-5 pl-[3.875rem] pr-6 focus:outline-none focus:ring-0"
                  />
                  <div className="absolute inset-y-0 left-6 flex items-center justify-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-y-0 right-6 flex items-center justify-center">
                    <button
                      tabIndex={-1}
                      aria-label="Close"
                      onClick={handleCloseModal}
                      className="rounded border border-gray-200 px-2 text-xs uppercase leading-[22px] text-gray-600 hover:border-gray-300 focus:outline-none">
                      Esc
                    </button>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <div className="flex flex-col gap-5 pb-8">
                    {searchData && searchData.movies && searchData.movies.length > 0 && (
                      <div>
                        <div className="mt-5 ml-6 text-md font-medium leading-6 text-gray-600">
                          Movies
                        </div>
                        <ul className="mt-3.5 space-y-3.5 px-6">
                          {searchData.movies.map((movie) => (
                            <li key={movie.id} className="group">
                              <Link
                                to={`${MOVIES}/${movie.id}`}
                                onClick={handleCloseModal}
                                className="relative flex w-full rounded-lg border border-gray-100 from-gray-50 to-transparent py-2 pl-3.5 transition-all hover:border-gray-200 hover:bg-gradient-to-r focus:border-gray-300 focus:bg-gradient-to-r focus:outline-none">
                                <div className="flex grow items-center gap-x-4">
                                  <div>
                                    <img
                                      src={movie.poster.path}
                                      alt={movie.title}
                                      className="h-16 rounded border border-gray-200 object-cover object-center"
                                    />
                                  </div>
                                  <div>
                                    <h6 className="text-md font-medium leading-6 text-gray-600">
                                      {movie.title}
                                      <span className="pl-1 font-normal text-gray-400">
                                        ({new Date(movie.release_date).getFullYear()})
                                      </span>
                                    </h6>
                                    <div className="mt-1 text-sm leading-6 text-gray-400">
                                      <span>{toCommaSeparate(movie.genres)}</span>
                                      <span className="px-1.5">&middot;</span>
                                      <span>{movie.converted_runtime}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute inset-y-0 right-6 hidden items-center justify-center text-gray-400 transition-all group-hover:translate-x-2 md:flex">
                                  <ArrowNarrowRight />
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {searchData && searchData.tvShows && searchData.tvShows.length > 0 && (
                      <div>
                        <div className="mt-5 ml-6 text-md font-medium leading-6 text-gray-600">
                          TV Shows
                        </div>
                        <ul className="mt-3.5 space-y-3.5 px-6">
                          {searchData.tvShows.map((tvShow) => (
                            <li key={tvShow.id} className="group">
                              <Link
                                to={`${TV_SHOWS}/${tvShow.id}`}
                                onClick={handleCloseModal}
                                className="relative flex w-full rounded-lg border border-gray-100 from-gray-50 to-transparent py-2 pl-3.5 transition-all hover:border-gray-200 hover:bg-gradient-to-r focus:border-gray-300 focus:bg-gradient-to-r focus:outline-none">
                                <div className="flex grow items-center gap-x-4">
                                  <div>
                                    <img
                                      src={tvShow.poster.path}
                                      alt={tvShow.name}
                                      className="h-16 rounded border border-gray-200 object-cover object-center"
                                    />
                                  </div>
                                  <div>
                                    <h6 className="text-md font-medium leading-6 text-gray-600">
                                      {tvShow.name}
                                      <span className="pl-1 font-normal text-gray-400">
                                        ({2021 + ' - ' + 2022})
                                      </span>
                                    </h6>
                                    <div className="mt-1 text-sm leading-6 text-gray-400">
                                      <span>{toCommaSeparate(tvShow.genres)}</span>
                                      <span className="px-1.5">&middot;</span>
                                      <span>
                                        {choice(tvShow.seasons_count, ['season', 'seasons'])}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute inset-y-0 right-6 hidden items-center justify-center text-gray-400 transition-all group-hover:translate-x-2 md:flex">
                                  <ArrowNarrowRight />
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {searchData && searchData.users && searchData.users.length > 0 && (
                      <div>
                        <div className="mt-5 ml-6 text-md font-medium leading-6 text-gray-600">
                          Members
                        </div>
                        <ul className="mt-3.5 space-y-3.5 px-6">
                          {searchData.users.map((user) => (
                            <li key={user.id} className="group">
                              <Link
                                to="/"
                                className="flex w-full items-center gap-x-4 rounded-lg border border-gray-100 from-gray-50 to-transparent py-2 pl-3.5 transition-all hover:border-gray-200 hover:bg-gradient-to-r focus:border-gray-300 focus:bg-gradient-to-r focus:outline-none">
                                <div className="flex grow items-center gap-x-4">
                                  <div>
                                    {user.avatar && user.avatar.path ? (
                                      <img
                                        src={user.avatar.path}
                                        alt=""
                                        className="aspect-square h-10 shrink-0 rounded-full border border-gray-200 object-cover object-center"
                                      />
                                    ) : (
                                      <div className="aspect-square h-10 shrink-0 rounded-full border border-gray-200 bg-gray-50" />
                                    )}
                                  </div>
                                  <div className="truncate">
                                    <span className="text-md font-medium leading-6 text-gray-600">
                                      {user.name}
                                    </span>
                                    <span className="hidden px-1.5 md:inline">&middot;</span>
                                    <span className="hidden text-sm leading-6 text-gray-400 md:inline">
                                      {user.email}
                                    </span>
                                  </div>
                                </div>
                                <div className="pr-6 text-sm text-gray-400">{user.role}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {(!searchData ||
                      (searchData.movies &&
                        searchData.tvShows &&
                        searchData.users &&
                        searchData.movies.length < 1 &&
                        searchData.tvShows.length < 1 &&
                        searchData.users.length < 1)) && (
                      <div className="pt-20 pb-12 text-center text-md font-medium leading-6 text-gray-600">
                        No results found
                      </div>
                    )}
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
