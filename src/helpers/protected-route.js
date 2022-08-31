/* import { Navigate, Outlet } from 'react-router-dom'
import { LOGIN } from '../constants/routes'
import Nav from '../components/Nav' */

import { Menu2 } from 'tabler-icons-react'
import { Search } from 'react-swm-icon-pack'

const ProtectedRoute = () => {
  const data = [
    {
      id: 1,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg',
      title: 'The Batman',
      year: '2021',
      availability: '1080P, 2160P, 720P',
      tagline: 'Unmask the truth.',
      description:
        "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
    },
    {
      id: 2,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2MiG2aG2OrOgnPpbv8xnuS984xQ.jpg',
      title: 'Thor: Love and Thunder',
      year: '2022',
      availability: '1080P, 2160P, 720P',
      tagline: 'The one is not the only.',
      description:
        'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.'
    },
    {
      id: 3,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
      title: 'Doctor Strange in the Multiverse of Madness',
      year: '2022',
      availability: '1080P, 2160P, 3D',
      tagline: 'Enter a new dimension of Strange.',
      description:
        'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.'
    }
  ]

  return (
    <div>
      <section className="flex items-center justify-between bg-bottom bg-repeat-x py-4 px-6 md:bg-dotted-pattern md:px-9">
        <div className="flex items-center gap-x-3">
          <button className="-ml-2 rounded-full p-2 text-gray-600 hover:bg-gray-50 focus:text-gray-800">
            <Menu2 strokeWidth={1.5} />
          </button>
          <h5 className="font-medium text-gray-900">
            <span className="md:hidden">Movies</span>
            <span className="hidden md:inline">Welcome, Vukašin Vitorović</span>
          </h5>
        </div>
        <div>
          <button className="rounded-full focus:ring-1 focus:ring-gray-300">
            <img
              className="h-10 w-10 rounded-full object-cover object-center"
              src="https://avatars.cloudflare.steamstatic.com/36f85e68d703bd07b32aa7773aa7cf7dd4df5ee6_full.jpg"
              alt="Avatar"
            />
          </button>
        </div>
      </section>
      <main>
        <section className="hidden items-center justify-between px-9 py-7 md:flex">
          <div>
            <h4 className="text-lg font-medium leading-6 text-gray-900">Movies</h4>
            <p className="mt-2.5 text-md text-gray-500">Add or update existing movies.</p>
          </div>
          <button className="rounded-lg bg-gray-900 py-2.5 px-4 text-sm font-medium text-gray-100 transition-all hover:bg-gray-800 focus:bg-gray-800 focus:outline-none">
            Add new movie
          </button>
        </section>
        <section className="relative -mt-px w-full border-y border-gray-200 md:mt-0">
          <input
            type="text"
            className="block w-full py-5 px-6 pl-[54px] text-md focus:outline-none md:pl-[66px]"
            placeholder="Browse movies..."
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
        <section>
          <div className="py-5 px-6 md:px-9 md:py-4">
            <p className="text-gray-600">Results: </p>
            <div className="mt-4 grid grid-cols-1 gap-5 md:gap-7">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="-mx-4 rounded-lg border border-dotted border-gray-200 p-4 md:-mx-5 md:px-5">
                  <div className="flex gap-x-5">
                    <div className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 rounded-md border border-gray-200 object-cover object-center md:w-[86px]"
                      />
                    </div>
                    <div className="flex grow flex-col">
                      <div className="flex flex-col justify-between md:flex-row md:items-center">
                        <div className="font-medium uppercase text-gray-800 line-clamp-2 md:line-clamp-1">
                          {item.title}
                          <span className="pl-2.5 font-mono text-sm font-medium leading-6 text-gray-400">
                            ({item.year})
                          </span>
                        </div>
                        <div className="mt-2 font-mono text-md italic text-gray-500 line-clamp-1 md:mt-0">
                          {item.tagline}
                        </div>
                      </div>
                      <div className="hidden grow md:block">
                        <p className="mt-1.5 w-2/3 text-md leading-6 text-gray-500 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="mt-2.5 text-sm text-gray-400 md:mt-0 md:text-md md:line-clamp-1">
                          Available in: {item.availability}
                        </div>
                        <div className="hidden md:block">
                          <span className="text-sm text-gray-500">Added by:</span>
                          <span className="pl-1.5 text-md text-gray-800">Vukasin Vitorovic</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default ProtectedRoute
