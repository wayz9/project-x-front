import { useState } from 'react'
import { Collapse } from 'react-collapse'
import { Link } from 'react-router-dom'
import { ArrowNarrowRight, ChevronDown, Pencil } from 'tabler-icons-react'

const SeasonAccordion = ({ index, season, episodes }) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex h-16 w-[4.5rem] items-center justify-center text-center text-xl text-gray-400">
            <span>{season}</span>
          </div>
          <div>
            <p className="text-base font-medium text-gray-800">season_{index + 1}.0</p>
            <p className="mt-1 text-sm text-gray-400">10 episodes</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpened(!isOpened)}
          className="mr-5 rounded-md p-2 text-gray-600 hover:bg-gray-50 focus:text-gray-800">
          <ChevronDown className={isOpened ? 'rotate-180 transition-all' : 'transition-all'} />
        </button>
      </div>
      <Collapse isOpened={isOpened}>
        <div className="bg-dotted-pattern bg-top bg-repeat-x px-6 py-5">
          <ul className="flex flex-col gap-y-4">
            {episodes.map((episode) => (
              <li key={episode.id} className="flex items-center justify-between">
                <div className="flex items-center gap-x-5">
                  <button className="text-gray-400 transition-colors hover:text-gray-800">
                    <Pencil />
                  </button>
                  <p className="text-md leading-6 text-gray-800 line-clamp-1">{episode.title}</p>
                </div>
                <div className="whitespace-nowrap text-sm text-gray-400">{episode.watchtime}</div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between md:mt-8">
            <Link
              to="/tvShows/1"
              className="flex items-center text-sm font-medium text-gray-800 focus:outline-none">
              <span>Manage</span>
              <span className="text-gray-400">
                <ArrowNarrowRight size={20} />
              </span>
            </Link>
            <span className="text-sm">
              <span className="text-gray-400">Watchtime:</span>
              <span className="pl-2 font-medium text-gray-600">6h 47min</span>
            </span>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default SeasonAccordion
