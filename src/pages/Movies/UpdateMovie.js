import { useState } from 'react'
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
  Pencil,
  Stars,
  Trash
} from 'tabler-icons-react'
import UpdateTorrent from '../Modals/UpdateTorrent'
import DeleteTorrent from '../Modals/DeleteTorrent'

const UpdateMovie = () => {
  const data = [
    {
      id: 1,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg',
      title: 'The Batman',
      year: '2021',
      availability: '1080P, 2160P, 720P',
      tagline: 'Unmask the truth.',
      released_at: '06.05.2022',
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
      released_at: '11.12.2021',
      description:
        'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.'
    },
    {
      id: 3,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
      title: 'Doctor Strange: Multiverse of Madness',
      year: '2022',
      availability: '1080P, 2160P, 3D',
      tagline: 'Enter a new dimension of Strange.',
      released_at: '18.5.2023',
      description:
        'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.'
    },
    {
      id: 4,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
      title: 'Top Gun: Maverick',
      year: '2022',
      availability: '1080P, 720P, 3D',
      tagline: 'Feel the need... The need for speed.',
      released_at: '18.5.2022',
      description:
        'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.'
    },
    {
      id: 5,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/td5uOBW41ib1KGz3g1Kc33BdFyj.jpg',
      title: 'Next',
      year: '2007',
      availability: '2160P, 3D',
      tagline: 'If you can see the future, you can save it.',
      released_at: '18.5.2023',
      description:
        'Las Vegas showroom magician Cris Johnson has a secret which torments him: he can see a few minutes into the future. Sick of the examinations he underwent as a child and the interest of the government and medical establishment in his power, he lies low under an assumed name in Vegas, performing cheap tricks and living off small-time gambling "winnings." But when a terrorist group threatens to detonate a nuclear device in Los Angeles, government agent Callie Ferris must use all her wiles to capture Cris and convince him to help her stop the cataclysm.'
    },
    {
      id: 6,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
      title: 'Prey',
      year: '2022',
      availability: '1080P, 2160P, 3D',
      tagline: 'They hunt to live. It lives to hunt.',
      released_at: '18.5.2023',
      description:
        'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.'
    }
  ]
  const [updateTorrent, setUpdateTorrent] = useState(false)
  const [deleteTorrent, setDeleteTorrent] = useState(false)
  return (
    <div>
      <DeleteTorrent deleteTorrent={deleteTorrent} setDeleteTorrent={setDeleteTorrent} />
      <UpdateTorrent updateTorrent={updateTorrent} setUpdateTorrent={setUpdateTorrent} />
      <section className="bg-white bg-opacity-50 bg-grid bg-repeat py-5 px-6 md:px-9">
        <div className="flex items-center gap-4">
          <div>
            <img
              className="h-[100px] rounded-md border border-gray-200 drop-shadow-lg 2xl:h-28"
              src={data[0].image}
              alt={data[0].title}
            />
          </div>
          <div className="grow items-center justify-between md:flex">
            <div>
              <div className="text-sm leading-5 text-gray-500 md:text-md">Updating</div>
              <h3 className="mt-2.5 w-4/5 font-medium uppercase text-gray-900 lg:w-full 2xl:text-lg 2xl:leading-6">
                {data[0].title}
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
              <label htmlFor="title">Movie Title</label>
              <input
                type="text"
                id="title"
                className="mt-2.5 md:mt-3"
                defaultValue={data[0].title}
              />
            </div>
            <div>
              <label htmlFor="tagline">Tagline</label>
              <input
                type="text"
                id="tagline"
                className="mt-2.5 md:mt-3"
                defaultValue={data[0].tagline}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows={5}
                className="mt-2.5 resize-none md:mt-3"
                defaultValue={data[0].description}
              />
            </div>
            <div>
              <label htmlFor="release_date">Release Date</label>
              <div className="relative">
                <input
                  type="date"
                  id="release_date"
                  defaultValue="2022-01-01"
                  className="mt-2.5 appearance-none md:mt-3"
                />
                <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                  <Calendar strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-5">
              <div>
                <label htmlFor="runtime">Runtime</label>
                <div className="relative">
                  <input
                    type="text"
                    id="runtime"
                    defaultValue="87"
                    className="mt-2.5 appearance-none md:mt-3"
                  />
                  <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                    <Stars strokeWidth={1.5} />
                  </div>
                </div>
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
                    <Clock strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="title">
                Short Title <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                id="title"
                className="mt-2.5 md:mt-3"
                defaultValue={data[0].title}
              />
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
              <div className="mt-3.5 grid gap-4">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="flex items-center justify-between gap-x-8 rounded-lg border border-gray-200 py-3 pr-4 pl-8">
                    <div>
                      <div className="flex gap-x-1.5 text-gray-800">
                        <span>0,92GB</span>
                        <span>&middot;</span>
                        <span>720P</span>
                      </div>
                      <p className="overflow-anywhere mt-1 text-sm text-gray-400 line-clamp-1">
                        899475841c73391e1df52fdbfea0f18736489835
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <button
                        onClick={() => setUpdateTorrent(true)}
                        className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                        <Pencil strokeWidth={1.5} />
                      </button>
                      <button
                        onClick={() => setDeleteTorrent(true)}
                        className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                        <Trash strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 w-3.5 bg-yellow-500"></div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="flex items-center justify-between gap-x-8 rounded-lg border border-gray-200 py-3 pr-4 pl-8">
                    <div>
                      <div className="flex gap-x-1.5 font-medium text-gray-800">
                        <span>2,73GB</span>
                        <span>&middot;</span>
                        <span>1080P</span>
                        <span className="hidden md:inline">&middot;</span>
                        <span className="hidden md:inline">23.976 FPS</span>
                      </div>
                      <p className="overflow-anywhere mt-1 text-sm text-gray-400 line-clamp-1">
                        9289f24a3b5fd98f6542af72a6f8cf5f5dc7b8aa
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <button
                        onClick={() => setUpdateTorrent(true)}
                        className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                        <Pencil strokeWidth={1.5} />
                      </button>
                      <button
                        onClick={() => setDeleteTorrent(true)}
                        className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                        <Trash strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 w-3.5 bg-green-500"></div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="flex items-center justify-between gap-x-8 rounded-lg border border-gray-200 py-3 pr-4 pl-8">
                    <div>
                      <div className="flex gap-x-1.5 text-gray-800">
                        <span>4,62GB</span>
                        <span>&middot;</span>
                        <span>2160P</span>
                      </div>
                      <p className="overflow-anywhere mt-1 text-sm text-gray-400 line-clamp-1">
                        d9bce5187ff43d69954b140887d33e63f8ce407e
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <button
                        onClick={() => setUpdateTorrent(true)}
                        className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                        <Pencil strokeWidth={1.5} />
                      </button>
                      <button
                        onClick={() => setDeleteTorrent(true)}
                        className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                        <Trash strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 w-3.5 bg-primary-500"></div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="flex items-center justify-between gap-x-8 rounded-lg border border-gray-200 py-3 pr-4 pl-8">
                    <div>
                      <div className="flex gap-x-1.5 text-gray-800">
                        <span>1,44GB</span>
                        <span>&middot;</span>
                        <span>3D</span>
                      </div>
                      <p className="overflow-anywhere mt-1 text-sm text-gray-400 line-clamp-1">
                        4ae9d49545c2b1db3c297ea010d9b9553e166e78
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <button
                        onClick={() => setUpdateTorrent(true)}
                        className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                        <Pencil strokeWidth={1.5} />
                      </button>
                      <button
                        onClick={() => setDeleteTorrent(true)}
                        className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                        <Trash strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 w-3.5 bg-blue-500"></div>
                </div>
              </div>
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
                  <input
                    type="text"
                    id="tmdb"
                    defaultValue="25012351"
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
              <button className="bg-secondary">Save as Draft</button>
              <div className="h-0.5 w-6 rounded-full bg-gray-400"></div>
              <button className="btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UpdateMovie
