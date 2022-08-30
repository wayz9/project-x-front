/* import { Navigate, Outlet } from 'react-router-dom'
import { LOGIN } from '../constants/routes'
import Nav from '../components/Nav' */

import { Menu2 } from 'tabler-icons-react'
import { Search } from 'react-swm-icon-pack'

const ProtectedRoute = () => {
  return (
    <div>
      <section className="flex items-center justify-between bg-dotted-pattern bg-bottom bg-repeat-x py-4 px-6">
        <div className="flex items-center gap-x-3">
          <button className="-ml-1 rounded-full p-2 text-gray-600 hover:bg-gray-50 focus:text-gray-800">
            <Menu2 strokeWidth={1.5} />
          </button>
          <h5 className="font-medium text-gray-900">Movies</h5>
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
        <div className="relative -mt-px w-full border-y border-gray-200">
          <input
            type="text"
            className="block w-full py-5 px-6 pl-[54px] text-md focus:outline-none"
            placeholder="Browse movies..."
          />
          <div className="absolute inset-y-0 left-6 flex items-center justify-center text-gray-400">
            <Search size={20} strokeWidth={1.5} />
          </div>
          <div className="absolute inset-y-0 right-6 flex items-center justify-center">
            <button className="text-sm leading-6 text-gray-800 transition-colors hover:text-gray-500">
              Filters
            </button>
          </div>
        </div>
        <section>
          <div className="py-5 px-6">
            <p className="text-gray-600">Results: </p>
            <div className="mt-4 grid grid-cols-1 gap-5">
              {[1, 2, 3, 4].map((item) => (
                <div className="rounded-lg border border-dotted border-gray-200 p-4">
                  <div className="flex gap-x-5">
                    <div className="shrink-0">
                      <img
                        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg"
                        alt="Batman"
                        className="w-20 rounded-md border border-gray-200 object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-x-2.5">
                        <div className="font-medium uppercase text-gray-800">The Batman</div>
                        <div className="font-mono text-sm font-medium leading-6 text-gray-400">
                          (2021)
                        </div>
                      </div>
                      <div className="mt-2 font-mono italic text-gray-500">Unmask the truth.</div>
                      <div className="mt-2.5 w-4/5 text-sm text-gray-400">
                        Available in: 1080P, 2160P, 720P, 3D
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
