import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BrandAsana, Components, Crown, Diamond, Focus2, Language, Stars } from 'tabler-icons-react'
import SeasonAccordion from '../../components/SeasonAccordion'
import { getTvShowById } from '../../services/api'

const UpdateTvShow = () => {
  const { id } = useParams()
  const [tvShow, setTvShow] = useState()

  useEffect(() => {
    const fetchTvShow = async () => {
      const response = await getTvShowById(id)
      if (response && response.data && response.data.data) {
        setTvShow(response.data.data)
      }
    }
    fetchTvShow()
  }, [id])

  return (
    <div>
      <section className="bg-white bg-opacity-50 bg-grid bg-repeat py-5 px-6 md:px-9">
        <div className="flex items-center gap-4">
          <div>
            <img
              className="h-[100px] rounded-md border border-gray-200 drop-shadow-lg 2xl:h-28"
              src={tvShow && tvShow.poster.path}
              alt={tvShow && tvShow.name}
            />
          </div>
          <div className="grow items-center justify-between md:flex">
            <div>
              <div className="text-sm leading-5 text-gray-500 md:text-md">Updating</div>
              <h3 className="mt-2.5 w-4/5 font-medium uppercase text-gray-900 lg:w-full 2xl:text-lg 2xl:leading-6">
                {tvShow && tvShow.name}
              </h3>
              <p className="mt-2 hidden text-md leading-5 text-gray-400 md:block xl:hidden">
                Updated at: <span className="font-medium text-gray-500">26. May 2022</span>
              </p>
            </div>
            <div className="flex items-center gap-x-5">
              <div className="hidden items-center gap-x-5 xl:flex">
                <p className="text-md leading-5 text-gray-400">
                  Updated at: <span className="font-medium text-gray-500">26. May 2022</span>
                </p>
                <div className="h-0.5 w-6 rounded-full bg-gray-400"></div>
              </div>
              <div className="hidden flex-col gap-x-6 gap-y-3.5 md:flex xl:flex-row">
                <button className="rounded-lg py-2.5 px-4 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-300 transition-all hover:bg-white focus:outline-none ">
                  Save as Draft
                </button>
                <button className="rounded-lg bg-gray-900 py-2.5 px-4 text-sm font-medium text-gray-100 transition-all hover:bg-gray-800 focus:bg-gray-800 focus:outline-none">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid-cols-3 divide-gray-100 bg-dotted-pattern bg-top bg-repeat-x md:divide-y 2xl:grid">
        <div className="bg-right bg-repeat-y 2xl:bg-dotted-pattern-vertical">
          <div className="sticky top-[72px] z-10 border-y border-gray-200 bg-gray-50 py-3.5 px-6 text-xs font-medium uppercase text-gray-900 md:hidden">
            Base Information
          </div>
          <div className="hidden items-center gap-x-4 px-9 pt-5 pb-1 md:flex">
            <div className="rounded-full bg-gray-100 p-2">
              <div className="rounded-full bg-gray-800 p-1.5 text-gray-200">
                <Diamond />
              </div>
            </div>
            <h5 className="font-medium text-gray-900">Base Information</h5>
          </div>
          <div className="flex flex-col gap-y-6 px-6 py-7 pb-10 md:gap-y-7 md:px-9">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="mt-2.5 md:mt-3"
                defaultValue={tvShow && tvShow.name}
              />
            </div>
            <div>
              <label htmlFor="tagline">Tagline</label>
              <input
                type="text"
                id="tagline"
                className="mt-2.5 md:mt-3"
                defaultValue={tvShow && tvShow.tagline}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows={5}
                className="mt-2.5 resize-none md:mt-3"
                defaultValue={tvShow && tvShow.description}
              />
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-2">
                <label htmlFor="short_name">
                  Short name <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  id="short_name"
                  className="mt-2.5 md:mt-3"
                  placeholder='E.g. "Avengers: IF"'
                  defaultValue={tvShow && tvShow.short_name}
                />
              </div>
              <div>
                <label htmlFor="rating">Rating</label>
                <div className="relative">
                  <input
                    type="text"
                    id="rating"
                    defaultValue="224"
                    className="mt-2.5 appearance-none md:mt-3"
                  />
                  <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                    <Stars strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-right bg-repeat-y 2xl:bg-dotted-pattern-vertical">
          <div className="sticky top-[72px] z-10 border-y border-gray-200 bg-gray-50 py-3.5 px-6 text-xs font-medium uppercase text-gray-900 md:hidden">
            Seasons & Episodes
          </div>
          <div className="hidden items-center gap-x-4 px-9 pt-5 pb-1 md:flex">
            <div className="rounded-full bg-gray-100 p-2">
              <div className="rounded-full bg-gray-800 p-1.5 text-gray-200">
                <BrandAsana />
              </div>
            </div>
            <h5 className="font-medium text-gray-900">Seasons & Episodes</h5>
          </div>
          <div className="px-6 py-7 md:px-9">
            <label htmlFor="seasons">Seasons</label>
            <div className="mt-2.5 flex flex-col gap-y-5 md:mt-3">
              {tvShow && tvShow.seasons
                ? tvShow.seasons.map((season) => (
                    <SeasonAccordion key={season.id} season={season} />
                  ))
                : null}
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-[72px] z-10 border-y border-gray-200 bg-gray-50 py-3.5 px-6 text-xs font-medium uppercase text-gray-900 md:hidden">
            Other Relations
          </div>
          <div className="hidden items-center gap-x-4 px-9 pt-5 pb-1 md:flex">
            <div className="rounded-full bg-gray-100 p-2">
              <div className="rounded-full bg-gray-800 p-1.5 text-gray-200">
                <Components />
              </div>
            </div>
            <h5 className="font-medium text-gray-900">Other Relations</h5>
          </div>
          <div className="flex flex-col gap-y-6 px-6 py-7 md:gap-y-7 md:px-9">
            <div>
              <label htmlFor="genres">Genres</label>
              <div className="relative">
                <input type="text" id="genres" className="mt-2.5 md:mt-3" />
                <div className="absolute inset-y-0 left-4">
                  <div className="flex items-center gap-x-2.5 py-1.5">
                    <div className="rounded-full bg-gray-100 py-0.5 px-3 text-sm font-medium leading-6 text-gray-600">
                      Action
                    </div>
                    <div className="rounded-full bg-gray-100 py-0.5 px-3 text-sm font-medium leading-6 text-gray-600">
                      Thriller
                    </div>
                    <div className="rounded-full bg-gray-100 py-0.5 px-3 text-sm font-medium leading-6 text-gray-600">
                      Sci-Fi
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="languages">Languages</label>
              <div className="relative">
                <input type="text" id="languages" className="mt-2.5 md:mt-3" />
                <div className="absolute inset-y-0 left-4">
                  <div className="flex items-center gap-x-2.5 py-1.5">
                    <div className="rounded-full bg-gray-100 py-0.5 px-3 text-sm font-medium leading-6 text-gray-600">
                      English
                    </div>
                    <div className="rounded-full bg-gray-100 py-0.5 px-3 text-sm font-medium leading-6 text-gray-600">
                      Russian
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-5">
              <div>
                <label htmlFor="tmdb">TMDB ID</label>
                <div className="relative">
                  <input
                    type="text"
                    id="tmdb"
                    defaultValue={tvShow && tvShow.tmdb_id}
                    className="mt-2.5 appearance-none md:mt-3"
                  />
                  <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                    <Crown strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="imdb">
                  IMDB ID <span className="text-gray-400">(optional)</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="imdb"
                    defaultValue="tt0137523"
                    className="mt-2.5 appearance-none md:mt-3"
                  />
                  <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                    <Crown strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-2 block 2xl:my-4" />
            <div>
              <p className="pr-4 text-sm leading-6 text-gray-500">
                <span className="font-medium uppercase text-gray-800">TMDB_ID: </span>
                This serves purpose of fetching backdrops, trailers, some reviews and other media
                corresponding to title.
              </p>
              <p className="mt-5 pr-4 text-sm leading-6 text-gray-500">
                <span className="font-medium uppercase text-gray-800">IMDB_ID: </span>
                One and only purpose of for the rating, might consider fetching more data in the
                future.
              </p>
            </div>
            <div className="mt-3 flex flex-col items-start gap-y-4 2xl:mt-4">
              <div>
                <Link to="/" className="flex items-center gap-x-3">
                  <span>
                    <Focus2 strokeWidth={1.5} className="text-gray-400" />
                  </span>
                  <div className="text-sm font-medium leading-6 text-primary-500 hover:text-primary-400">
                    View All Genres
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/" className="flex items-center gap-x-3">
                  <span>
                    <Language strokeWidth={1.5} className="text-gray-400" />
                  </span>
                  <div className="text-sm font-medium leading-6 text-primary-500 hover:text-primary-400">
                    View All Languages
                  </div>
                </Link>
              </div>
            </div>
            <hr className="my-4 block md:hidden" />
            <div className="flex items-center justify-between md:hidden">
              <button className="btn-secondary">Save as Draft</button>
              <div className="h-0.5 w-6 rounded-full bg-gray-400"></div>
              <button className="btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UpdateTvShow
