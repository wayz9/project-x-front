const index = () => {
  return (
    <main className="w-full grow">
      <section className="hidden items-center justify-between px-9 py-7 md:flex">
        <div>
          <h4 className="text-lg font-medium leading-6 text-gray-900">Movies</h4>
          <p className="mt-2.5 text-md text-gray-500">Add or update existing movies.</p>
        </div>
        <button className="rounded-lg bg-gray-900 py-2.5 px-4 text-sm font-medium text-gray-100 transition-all hover:bg-gray-800 focus:bg-gray-800 focus:outline-none">
          Add new movie
        </button>
      </section>
      <section className="relative -mt-px w-full border-y border-gray-200/50 md:mt-0">
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
      <section className="block lg:hidden">
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
      <section className="hidden lg:grid">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
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
                  {data.map((item) => (
                    <tr key={item.id} className="bg-dotted-pattern bg-bottom bg-repeat-x">
                      <td>
                        <div className="flex w-96 items-center gap-7 py-5 pl-9">
                          <div className="flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-20 rounded-md border border-gray-200 object-cover object-center"
                            />
                          </div>
                          <div>
                            <div className="font-medium uppercase text-gray-800 line-clamp-2">
                              {item.title}
                            </div>
                            <div className="mt-1 text-md text-gray-500 line-clamp-1">
                              {item.tagline}
                            </div>
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
                          <p className="mt-1.5 whitespace-nowrap text-sm text-gray-500">
                            Administrator
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col items-center justify-center px-4">
                          <p className="text-gray-700">Yes</p>
                          <p className="mt-2 text-sm text-gray-500">2 torrents</p>
                          <button className="mt-1 flex items-center text-primary-500 hover:text-primary-400 focus:outline-none">
                            <span className="text-sm font-medium">view all</span>
                            <ArrowNarrowRight className="text-primary-400" size={20} />
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col items-center justify-center px-4">
                          <Calendar strokeWidth={1.5} className="text-gray-400" />
                          <p className="mt-1 text-gray-700">{item.released_at}</p>
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
                          <p className="text-gray-700">04.07.2022</p>
                          <p className="mt-1 text-gray-700">06.07.2022</p>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col items-center justify-center text-gray-700">
                          <div className="text-center line-clamp-1">Crime, Mystery</div>
                          <div className="mt-1.5 text-center line-clamp-1">English, Espanol</div>
                          <button className="mt-1 flex items-center text-primary-500 hover:text-primary-400 focus:outline-none">
                            <span className="text-sm font-medium">view all</span>
                            <ArrowNarrowRight className="text-primary-400" size={20} />
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          <button className="rounded-md p-2 text-gray-600 hover:bg-gray-50 focus:text-gray-800">
                            <Dots size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default index
