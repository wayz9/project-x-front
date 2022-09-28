import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useHotkeys from '../../hooks/useHotkeys'
import { Link } from 'react-router-dom'
import { ArrowNarrowRight } from 'tabler-icons-react'

const Search = ({ isOpen, setIsOpen }) => {
  const searchInputRef = useRef(null)
  const refMovies = [
    {
      id: 2,
      title: 'John Wick: Chapter 2',
      year: 2017,
      genres: ['Action', 'Crime', 'Thriller'],
      poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kL99FVq572hNPfMyfQCT7tGFNeQ.jpg',
      runtime: '2h 2m'
    },
    {
      id: 1,
      title: 'John Wick',
      year: 2014,
      genres: ['Action', 'Crime', 'Thriller'],
      poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg',
      runtime: '2h 21m'
    },
    {
      id: 3,
      title: 'John Wick: Chapter 3 - Parabellum',
      year: 2019,
      genres: ['Action', 'Crime', 'Thriller'],
      poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg',
      runtime: '2h 11m'
    }
  ]

  const refTvShows = [
    {
      id: 1,
      title: 'Person of Interest',
      startYear: 2011,
      endYear: 2016,
      genres: ['Action', 'Crime', 'Drama'],
      poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f8aIvYk5h7Z8EP3dinCmVgQFYow.jpg',
      season_count: 5
    },
    {
      id: 2,
      title: 'Mr. Robot',
      startYear: 2015,
      endYear: 2019,
      genres: ['Crime', 'Drama', 'Thriller'],
      poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oKIBhzZzDX07SoE2bOLhq2EE8rf.jpg',
      season_count: 4
    }
  ]

  const refUsers = [
    {
      id: 1,
      name: 'Vukašin Vitorović',
      email: 'ventusblade1@gmail.com',
      role: 'Admin',
      avatar:
        'https://avatars.cloudflare.steamstatic.com/36f85e68d703bd07b32aa7773aa7cf7dd4df5ee6_full.jpg'
    },
    {
      id: 2,
      name: 'Ilija Radivojević',
      email: 'ilija.radivojevic237@gmail.com',
      role: 'Admin',
      avatar:
        'https://avatars.cloudflare.steamstatic.com/36f85e68d703bd07b32aa7773aa7cf7dd4df5ee6_full.jpg'
    }
  ]

  useHotkeys('k', true, () => setIsOpen(true))

  return (
    <Transition.Root appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={searchInputRef} onClose={setIsOpen}>
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
                      onClick={() => setIsOpen(false)}
                      className="rounded border border-gray-200 px-2 text-xs uppercase leading-[22px] text-gray-600 hover:border-gray-300 focus:outline-none">
                      Esc
                    </button>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <div className="flex flex-col gap-5 pb-8">
                    <div>
                      <div className="mt-5 ml-6 text-md font-medium leading-6 text-gray-600">
                        Movies
                      </div>
                      <ul className="mt-3.5 space-y-3.5 px-6">
                        {refMovies.map((movie) => (
                          <li key={movie.id} className="group">
                            <Link
                              to="/"
                              className="relative flex w-full rounded-lg border border-gray-100 from-gray-50 to-transparent py-2 pl-3.5 transition-all hover:border-gray-200 hover:bg-gradient-to-r focus:border-gray-300 focus:bg-gradient-to-r focus:outline-none">
                              <div className="flex grow items-center gap-x-4">
                                <div>
                                  <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="h-16 rounded border border-gray-200 object-cover object-center"
                                  />
                                </div>
                                <div>
                                  <h6 className="text-md font-medium leading-6 text-gray-600">
                                    {movie.title}
                                    <span className="pl-1 font-normal text-gray-400">
                                      ({movie.year})
                                    </span>
                                  </h6>
                                  <div className="mt-1 text-sm leading-6 text-gray-400">
                                    <span>{movie.genres.join(', ')}</span>
                                    <span className="px-1.5">&middot;</span>
                                    <span>{movie.runtime}</span>
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
                    <div>
                      <div className="mt-5 ml-6 text-md font-medium leading-6 text-gray-600">
                        TV Shows
                      </div>
                      <ul className="mt-3.5 space-y-3.5 px-6">
                        {refTvShows.map((tvShow) => (
                          <li key={tvShow.id} className="group">
                            <Link
                              to="/"
                              className="relative flex w-full rounded-lg border border-gray-100 from-gray-50 to-transparent py-2 pl-3.5 transition-all hover:border-gray-200 hover:bg-gradient-to-r focus:border-gray-300 focus:bg-gradient-to-r focus:outline-none">
                              <div className="flex grow items-center gap-x-4">
                                <div>
                                  <img
                                    src={tvShow.poster}
                                    alt={tvShow.title}
                                    className="h-16 rounded border border-gray-200 object-cover object-center"
                                  />
                                </div>
                                <div>
                                  <h6 className="text-md font-medium leading-6 text-gray-600">
                                    {tvShow.title}
                                    <span className="pl-1 font-normal text-gray-400">
                                      ({tvShow.startYear + ' - ' + tvShow.endYear})
                                    </span>
                                  </h6>
                                  <div className="mt-1 text-sm leading-6 text-gray-400">
                                    <span>{tvShow.genres.join(', ')}</span>
                                    <span className="px-1.5">&middot;</span>
                                    <span>{tvShow.season_count} seasons</span>
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
                    <div>
                      <div className="mt-5 ml-6 text-md font-medium leading-6 text-gray-600">
                        Members
                      </div>
                      <ul className="mt-3.5 space-y-3.5 px-6">
                        {refUsers.map((user) => (
                          <li key={user.id} className="group">
                            <Link
                              to="/"
                              className="flex w-full items-center gap-x-4 rounded-lg border border-gray-100 from-gray-50 to-transparent py-2 pl-3.5 transition-all hover:border-gray-200 hover:bg-gradient-to-r focus:border-gray-300 focus:bg-gradient-to-r focus:outline-none">
                              <div className="flex grow items-center gap-x-4">
                                <div>
                                  <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="aspect-square h-10 shrink-0 rounded-full border border-gray-200 object-cover object-center"
                                  />
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
                    {refUsers.length == 0 && (
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
