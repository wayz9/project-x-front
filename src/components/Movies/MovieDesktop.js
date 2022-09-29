import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowNarrowRight, Calendar, Copy } from 'tabler-icons-react'

import { formatDate } from '../../helpers/formatDate'
import { toCommaSeparate } from '../../helpers/toCommaSeparate'

import RowContextMenu from '../../pages/Modals/RowContextMenu'
import DeleteMovie from '../../pages/Modals/DeleteMovie'

const MovieDesktop = ({ movie, setShowTorrent }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <tr>
        <td>
          <DeleteMovie movie={movie} isOpen={isOpen} setIsOpen={setIsOpen} />
        </td>
      </tr>
      <tr className="bg-dotted-pattern bg-bottom bg-repeat-x">
        <td>
          <div className="flex w-96 items-center gap-7 py-5 pl-9">
            <div className="flex-shrink-0">
              {movie.poster ? (
                <img
                  src={movie.poster.path}
                  alt=""
                  className="w-20 rounded-md border border-gray-200 object-cover object-center"
                />
              ) : (
                <div className="aspect-[2/3] w-20 rounded-md border border-gray-200 bg-gray-50" />
              )}
            </div>
            <div>
              <div className="font-medium uppercase text-gray-800 line-clamp-2">{movie.title}</div>
              <div className="mt-1 text-md text-gray-500 line-clamp-1">{movie.tagline}</div>
              <div className="mt-3.5 flex flex-wrap items-center gap-2">
                <span className="rounded bg-yellow-500 py-0.5 px-1.5 text-[13px] font-semibold uppercase leading-4 text-yellow-50">
                  720p
                </span>
                <span className="rounded bg-green-500 py-0.5 px-1.5 text-[13px] font-semibold uppercase leading-4 text-green-50">
                  1080p
                </span>
                <span className="rounded bg-indigo-500 py-0.5 px-1.5 text-[13px] font-semibold uppercase leading-4 text-indigo-50">
                  2160p
                </span>
                <span className="rounded bg-blue-500 py-0.5 px-1.5 text-[13px] font-semibold uppercase leading-4 text-blue-50">
                  3D
                </span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex flex-col justify-center px-4">
            <p className="whitespace-nowrap text-gray-800">Vukasin Vitorovic</p>
            <p className="mt-1.5 whitespace-nowrap text-sm text-gray-500">Administrator</p>
          </div>
        </td>
        <td>
          <div className="flex flex-col items-center justify-center px-4">
            <p className="text-gray-700">Yes</p>
            <p className="mt-2 text-sm text-gray-500">2 torrents</p>
            <button
              onClick={() => setShowTorrent(true)}
              className="mt-1 flex items-center text-primary-500 hover:text-primary-400 focus:outline-none">
              <span className="text-sm font-medium">view all</span>
              <ArrowNarrowRight className="text-primary-400" size={20} />
            </button>
          </div>
        </td>
        <td>
          <div className="flex flex-col items-center justify-center px-4">
            <Calendar strokeWidth={1.5} className="text-gray-400" />
            <p className="mt-1 text-gray-700">{formatDate(movie.release_date)}</p>
          </div>
        </td>
        <td>
          <div className="flex flex-col items-center justify-center px-4">
            <button className="flex items-center gap-x-2">
              <span>
                <Copy className="text-gray-400" strokeWidth={1.5} />
              </span>
              <span className="text-gray-700">5912305</span>
            </button>
            <Link
              to="/"
              className="mt-2 text-sm font-medium text-primary-500 hover:text-primary-400">
              Validate
            </Link>
          </div>
        </td>
        <td>
          <div className="justify-ceenter flex flex-col items-center px-4 text-center">
            <p className="text-gray-700">{formatDate(movie.created_at)}</p>
            <p className="mt-1 text-gray-700">{formatDate(movie.updated_at)}</p>
          </div>
        </td>
        <td>
          <div className="mx-auto flex w-48 flex-col items-center justify-center text-gray-700">
            <div title={toCommaSeparate(movie.genres)} className="text-center line-clamp-1">
              {toCommaSeparate(movie.genres)}
            </div>
            <div
              title={toCommaSeparate(movie.languages)}
              className="mt-1.5 text-center line-clamp-1">
              {toCommaSeparate(movie.languages)}
            </div>
            <button className="mt-1 flex items-center text-primary-500 hover:text-primary-400 focus:outline-none">
              <span className="text-sm font-medium">view all</span>
              <ArrowNarrowRight className="text-primary-400" size={20} />
            </button>
          </div>
        </td>
        <td>
          <div className="flex items-center justify-center">
            <RowContextMenu id={movie.id} handleDelete={() => setIsOpen(true)} />
          </div>
        </td>
      </tr>
    </>
  )
}

export default MovieDesktop
