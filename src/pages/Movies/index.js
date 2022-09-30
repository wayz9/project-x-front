import { useEffect, useState } from 'react'
import { Search } from 'tabler-icons-react'
import { getMovies } from '../../services/movies'
import ShowTorrents from '../Modals/ShowTorrents'
import MovieMobile from '../../components/Movies/MovieMobile'
import MovieDesktop from '../../components/Movies/MovieDesktop'
import useSWR, { mutate } from 'swr'
import { CREATE_MOVIE } from '../../constants/routes'
import { Link } from 'react-router-dom'

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const { data: movies } = useSWR('movies', () => getMovies(searchTerm))
  const [showTorrent, setShowTorrent] = useState(false)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      mutate('movies')
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  return (
    <div className="w-full grow">
      <ShowTorrents showTorrent={showTorrent} setShowTorrent={setShowTorrent} />
      <section className="hidden items-center justify-between px-9 py-7 md:flex">
        <div>
          <h4 className="text-lg font-medium leading-6 text-gray-900">Movies</h4>
          <p className="mt-2.5 text-md text-gray-500">Add or update existing movies.</p>
        </div>
        <Link to={CREATE_MOVIE} className="btn-primary">
          Add new movie
        </Link>
      </section>
      <section className="relative -mt-px w-full border-y border-gray-200/50 md:mt-0">
        <input
          type="text"
          className="focus:ring-none !focus:ring-0 block w-full rounded-none py-5 px-6 pl-[54px] text-md focus:outline-none focus:ring-gray-200 focus:ring-offset-0 md:pl-[66px]"
          placeholder="Browse movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 left-6 flex items-center justify-center text-gray-400 md:left-9">
          <Search size={20} strokeWidth={1.5} color="currentColor" />
        </div>
        <div className="absolute inset-y-0 right-6 flex items-center justify-center md:right-9">
          <button className="text-sm leading-6 text-gray-800 transition-colors hover:text-gray-500">
            Filters
          </button>
        </div>
      </section>
      <section className="block lg:hidden">
        <div className="py-5 px-6 md:px-9 md:py-4">
          <p className="text-gray-600">Results: </p>
          <div className="mt-4 grid grid-cols-1 gap-5 md:gap-7">
            {movies && movies.map((movie) => <MovieMobile key={movie.id} movie={movie} />)}
          </div>
        </div>
      </section>
      <section className="hidden lg:grid">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden pb-40">
              <table className="min-w-full">
                <thead className="bg-dotted-pattern bg-bottom bg-repeat-x">
                  <tr>
                    <th className="whitespace-nowrap py-4 pl-9 pr-4 text-left text-sm font-normal uppercase text-gray-700">
                      Poster & Title
                    </th>
                    <th className="whitespace-nowrap py-4 px-4 text-left text-sm font-normal uppercase text-gray-700">
                      Added By
                    </th>
                    <th className="whitespace-nowrap py-4 px-4 text-center text-sm font-normal uppercase text-gray-700">
                      Available
                    </th>
                    <th className="whitespace-nowrap py-4 px-4 text-center text-sm font-normal uppercase text-gray-700">
                      Released At
                    </th>
                    <th className="whitespace-nowrap py-4 px-4 text-center text-sm font-normal uppercase text-gray-700">
                      Tmdb_Id
                    </th>
                    <th className="whitespace-nowrap py-4 px-4 text-center text-sm font-normal uppercase text-gray-700">
                      Created At <br /> Updated At
                    </th>
                    <th className="whitespace-nowrap py-4 px-4 text-center text-sm font-normal uppercase text-gray-700">
                      Genres <br /> Languages
                    </th>
                    <th className="whitespace-nowrap py-4 pl-4 pr-9 text-center text-sm font-normal uppercase text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {movies &&
                    movies.map((movie) => (
                      <MovieDesktop key={movie.id} movie={movie} setShowTorrent={setShowTorrent} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Movies
