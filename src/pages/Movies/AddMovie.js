import { Link } from 'react-router-dom'
import {
  Calendar,
  Clock,
  CodePlus,
  Components,
  Crown,
  Diamond,
  Dice,
  Focus2,
  Language,
  Photo,
  Stars
} from 'tabler-icons-react'

const AddMovie = () => {
  return (
    <div>
      <section className="bg-white bg-opacity-50 bg-grid bg-repeat py-5 px-6 md:px-9">
        <div className="flex items-center gap-4">
          <div>
            <div className="flex aspect-[2/3] h-[100px] items-center justify-center rounded-md border border-dotted border-gray-200 bg-gray-100 2xl:h-28">
              <Photo strokeWidth={1.5} className="text-gray-400" />
            </div>
          </div>
          <div className="grow items-center justify-between md:flex">
            <div>
              <div className="text-sm leading-5 text-gray-500 md:text-md">Creating</div>
              <h3 className="mt-2.5 w-4/5 font-medium uppercase text-gray-900 md:w-full 2xl:text-lg 2xl:leading-6">
                Title Placeholder
              </h3>
            </div>
            <div className="flex items-center gap-x-5">
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
              <label htmlFor="title">Movie Title</label>
              <input
                type="text"
                id="title"
                placeholder="eg. John Wick"
                className="mt-2.5 md:mt-3"
              />
            </div>
            <div>
              <label htmlFor="tagline">Tagline</label>
              <input
                type="text"
                placeholder="eg. Dont sent him off."
                id="tagline"
                className="mt-2.5 md:mt-3"
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="Short description, avoid spoilers and unwanted info."
                rows={5}
                className="mt-2.5 resize-none md:mt-3"
              />
            </div>
            <div>
              <label htmlFor="release_date">Release Date</label>
              <div className="relative">
                <input type="date" id="release_date" className="mt-2.5 appearance-none md:mt-3" />
                <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                  <Calendar strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-5">
              <div>
                <label htmlFor="rating">Rating</label>
                <div className="relative">
                  <input
                    type="text"
                    id="rating"
                    placeholder="0"
                    className="mt-2.5 appearance-none md:mt-3"
                  />
                  <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                    <Stars strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="runtime">Runtime</label>
                <div className="relative">
                  <input
                    type="text"
                    id="runtime"
                    placeholder="0"
                    className="mt-2.5 appearance-none md:mt-3"
                  />
                  <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                    <Clock strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="short_title">
                Short Title <span className="text-gray-400">(optional)</span>
              </label>
              <input type="text" id="short_title" className="mt-2.5 md:mt-3" />
            </div>
          </div>
        </div>
        <div className="bg-right bg-repeat-y 2xl:bg-dotted-pattern-vertical">
          <div className="sticky top-[72px] z-10 border-y border-gray-200 bg-gray-50 py-3.5 px-6 text-xs font-medium uppercase text-gray-900 md:hidden">
            Torrents
          </div>
          <div className="hidden items-center gap-x-4 px-9 pt-5 pb-1 md:flex">
            <div className="rounded-full bg-gray-100 p-2">
              <div className="rounded-full bg-gray-800 p-1.5 text-gray-200">
                <Dice />
              </div>
            </div>
            <h5 className="font-medium text-gray-900">Torrents</h5>
          </div>
          <div className="flex flex-col px-6 py-7 md:px-9">
            <div>
              <label>Available Torrents</label>
              <div className="mt-3.5 grid gap-4">{/* Torrents Here */}</div>
            </div>
            <button className="mt-7 flex w-full items-center justify-center gap-x-2 rounded-lg py-3 px-6 text-sm font-medium text-gray-800 ring-1 ring-gray-200 focus:outline-none focus:outline-1 focus:outline-primary-200 focus:ring-primary-300 2xl:mt-[52px]">
              <span className="text-gray-400">
                <CodePlus size={20} />
              </span>
              Add new torrent
            </button>
            <p className="mx-auto mt-7 w-full max-w-md px-4 text-center text-sm leading-6 text-gray-500 md:px-0 2xl:mx-auto 2xl:mt-9 2xl:text-left">
              <span className="font-medium uppercase text-gray-800">Warning: </span>When adding a
              torrent system will automatically prepare check for it's validity, it may take up to
              24 hours for new torrent to show up on the front.
            </p>
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
                  <input type="text" id="tmdb" className="mt-2.5 appearance-none md:mt-3" />
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
                  <input type="text" id="imdb" className="mt-2.5 appearance-none md:mt-3" />
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

export default AddMovie
