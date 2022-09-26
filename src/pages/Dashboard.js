import { Link } from 'react-router-dom'
import { ListDetails, PlayerPlay, PlayerStop, Stack2, Users } from 'tabler-icons-react'

const Dashboard = () => {
  const statistics = [
    {
      title: 'Movies',
      value: 12,
      icon: <PlayerPlay size={26} className="text-blue-500" />
    },
    {
      title: 'TV Shows',
      value: 12,
      icon: <PlayerStop size={26} className="text-red-500" />
    },
    {
      title: 'Members',
      value: 5,
      icon: <Users size={26} className="text-violet-500" />
    },
    {
      title: 'Reports',
      value: 0,
      icon: <Stack2 size={26} className="text-yellow-500" />
    }
  ]

  const recentlyUpdated = [
    {
      title: 'The Matrix',
      type: 'Movie',
      release_year: 1999,
      released: true
    },
    {
      title: 'The Matrix Reloaded',
      type: 'Movie',
      release_year: 2003,
      released: true
    },
    {
      title: 'The Matrix Revolutions',
      type: 'Movie',
      release_year: 2003,
      released: true
    },
    {
      title: 'John Wick: Chapter 2',
      type: 'Movie',
      release_year: 2017,
      released: true
    },
    {
      title: 'Person of Interest',
      type: 'TV Show',
      release_year: 2011,
      released: true
    },
    {
      title: 'Mr. Robot',
      type: 'TV Show',
      release_year: 2015,
      released: true
    }
  ]

  return (
    <>
      <section className="bg-white bg-opacity-50 bg-grid bg-repeat px-6 py-10 md:px-9">
        <div>
          <h1 className="font-medium text-gray-900 2xl:text-lg">Dashboard</h1>
          <p className="mt-1.5 text-md leading-5 text-gray-500 md:mt-2.5">
            Your personal specialized page.
          </p>
        </div>
      </section>
      <div className="w-full grid-cols-3 bg-dotted-pattern bg-top bg-repeat-x 2xl:grid">
        <div className="bg-dotted-pattern-vertical bg-right bg-repeat-y 2xl:col-span-2">
          <section className="bg-dotted-pattern bg-bottom bg-repeat-x px-6 pb-8 md:px-9">
            <h3 className="mt-7 text-base font-medium text-gray-800 md:mt-6">Statistics</h3>
            <ul className="mt-3 grid gap-4 md:mt-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
              {statistics.map((statistic, index) => (
                <li
                  key={index}
                  className="flex items-center gap-5 rounded-lg border border-gray-200 bg-white px-6 py-3.5 xl:flex-col xl:border-dashed xl:pt-8 xl:pb-7">
                  <span>{statistic.icon}</span>
                  <div className="xl:text-center">
                    <p className="text-sm uppercase text-gray-800 lg:text-base">
                      {statistic.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-5 text-gray-400 lg:text-md xl:mt-2.5">
                      {statistic.value} <span className="xl:hidden">new</span>{' '}
                      {statistic.title.toLocaleLowerCase()} added
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3 w-full items-center justify-between md:mt-4 md:flex">
              <p className="text-right text-[13px] leading-5 text-gray-400">
                Data Fetched: 15 mintues ago
              </p>
              <Link to="#" className="hidden text-sm font-medium text-gray-600 md:block">
                View all statistics here
              </Link>
            </div>
          </section>
          <section>
            <h3 className="mt-7 pl-4 text-base font-medium text-gray-800 md:pl-6">
              Recently Updated
            </h3>
            <div className="mt-6 h-px bg-dotted-pattern bg-bottom bg-repeat-x"></div>
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 bg-dotted-pattern bg-bottom bg-repeat-x">
                      <tr>
                        <th className="whitespace-nowrap py-2.5 pl-6 pr-4 text-left text-sm font-normal uppercase text-gray-700">
                          Name
                        </th>
                        <th className="whitespace-nowrap py-2.5 px-4 text-left text-sm font-normal uppercase text-gray-700">
                          Type
                        </th>
                        <th className="whitespace-nowrap py-2.5 px-4 text-left text-sm font-normal uppercase text-gray-700">
                          Released
                        </th>
                        <th className="whitespace-nowrap py-2.5 px-4 text-left text-sm font-normal uppercase text-gray-700">
                          Created At
                        </th>
                        <th className="whitespace-nowrap py-2.5 px-4 text-left text-sm font-normal uppercase text-gray-700">
                          Updated At
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentlyUpdated.map((item, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap py-3.5 px-6 text-md leading-5">
                            <span className="text-gray-700">{item.title}</span>
                            <span className="text-gray-400"> (2022)</span>
                          </td>
                          <td className="whitespace-nowrap py-3.5 px-4 text-md leading-5">
                            <span className="text-gray-700">{item.type}</span>
                          </td>
                          <td className="whitespace-nowrap py-3.5 px-4 text-md leading-5">
                            <span className="text-gray-700">{item.released ? 'Yes' : 'No'}</span>
                          </td>
                          <td className="whitespace-nowrap py-3.5 px-4 text-md leading-5">
                            <span className="text-gray-700">01 Aug 2019</span>
                          </td>
                          <td className="whitespace-nowrap py-3.5 px-4 text-md leading-5">
                            <span className="text-gray-700">02 Jan 2023</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="hidden 2xl:block">
          <h3 className="mt-7 pl-9 text-base font-medium text-gray-800 md:mt-6">Activity</h3>
          <div className="mt-6">
            <div className="relative grid grid-cols-3 bg-dotted-pattern bg-bottom bg-repeat-x">
              <button className="block w-full border-b border-transparent py-3 text-center text-md font-medium leading-5 text-gray-600 transition-all hover:border-primary-500 hover:text-primary-500">
                Movies & Shows
              </button>
              <button className="block w-full border-b border-transparent py-3 text-center text-md font-medium leading-5 text-gray-600 transition-all hover:border-primary-500 hover:text-primary-500">
                Seasons & Eps
              </button>
              <button className="block w-full border-b border-transparent py-3 text-center text-md font-medium leading-5 text-gray-600 transition-all hover:border-primary-500 hover:text-primary-500">
                Auth Based
              </button>
              <div className="absolute inset-x-0 h-px w-full bg-dotted-pattern bg-top bg-repeat-x"></div>
            </div>
            <div className="h-[calc(100vh-347px)] w-full overflow-y-auto">
              <div className="grid h-full place-items-center">
                <div className="flex flex-col items-center text-center">
                  <ListDetails size={32} strokeWidth={1.5} className="text-gray-400" />
                  <p className="mt-4 font-medium text-gray-800">No Activity Found</p>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    We sure hope something will <br />
                    come up here soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
