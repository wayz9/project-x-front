import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CalendarPlus, Minus, PlusSmall, QuestionCircle, Star1 } from 'react-swm-icon-pack'

const CreateModal = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-neutral-900 bg-opacity-[0.35] transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center px-4 py-8 text-center sm:items-center sm:p-0 2xl:pl-28">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative w-full max-w-[1360px] transform overflow-hidden rounded-lg bg-neutral-900 text-left shadow-xl transition-all sm:my-16 md:rounded-xl">
                <div className="bg-neutral-800/40 p-6 xl:p-12">
                  <form action="">
                    <div className="grid 2xl:grid-cols-3 2xl:gap-10">
                      <div className="2xl:col-span-2">
                        <div className="grid gap-8 lg:grid-cols-3 2xl:gap-11">
                          <div>
                            <div className="flex flex-col items-center justify-center gap-y-5 rounded-lg border border-dashed border-neutral-700 bg-neutral-800/[0.55] py-[140px] text-neutral-500 lg:py-24">
                              <div>
                                <svg
                                  width="60"
                                  height="60"
                                  viewBox="0 0 60 60"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M36 53H5C4.448 53 4 52.552 4 52V27C4 26.448 4.448 26 5 26H36C36.552 26 37 26.448 37 27V52C37 52.552 36.552 53 36 53Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M52 18H55C55.552 18 56 18.448 56 19V44C56 44.552 55.552 45 55 45H40"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M16 23V8C16 7.448 16.448 7 17 7H48C48.552 7 49 7.448 49 8V33C49 33.552 48.552 34 48 34H40.004"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M24.6014 42.601L18.0004 36L8.39941 45.601"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M32.6014 41.601L27.0004 36L24.3994 38.601"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                  />
                                  <path d="M46 10H44V12H46V10Z" fill="currentColor" />
                                  <path d="M42 10H40V12H42V10Z" fill="currentColor" />
                                  <path d="M38 10H36V12H38V10Z" fill="currentColor" />
                                </svg>
                              </div>
                              <div className="block text-center text-[15px] font-semibold leading-5 text-neutral-400 md:hidden">
                                Tap to choose<br></br> a poster.
                              </div>
                              <div className="hidden text-center text-[15px] font-semibold leading-5 text-neutral-400 md:block">
                                Drag your poster<br></br> image in here.
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-y-8 lg:col-span-2 2xl:gap-y-11">
                            <div className="flex flex-col gap-y-2">
                              <label
                                htmlFor="title"
                                className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                                Moovie Title
                              </label>
                              <div>
                                <input
                                  type="text"
                                  autoComplete="off"
                                  id="title"
                                  placeholder="Enter movie title..."
                                  className="block w-full rounded-md bg-neutral-800/[0.55] py-3 px-5 text-base font-semibold text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                                />
                              </div>
                            </div>
                            <div className="flex flex-grow flex-col gap-y-2">
                              <label
                                htmlFor="description"
                                className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                                Description
                              </label>
                              <div className="h-full flex-grow">
                                <textarea
                                  id="description"
                                  placeholder="A little bit about the movie, keep it short..."
                                  rows="6"
                                  className="block h-full w-full resize-none rounded-md bg-neutral-800/[0.55] py-3 px-5 text-base font-semibold text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid gap-8 lg:grid-cols-3 2xl:mt-11 2xl:grid-cols-2 2xl:gap-11">
                          <div className="grid grid-cols-2 gap-5 2xl:gap-11">
                            <div className="flex flex-col gap-y-2">
                              <label
                                htmlFor="duration"
                                className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                                Duration
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  autoComplete="off"
                                  id="duration"
                                  placeholder="0"
                                  className="block w-full rounded-md bg-neutral-800/[0.55] py-3 px-5 text-base font-semibold text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                                />
                                <div className="absolute inset-y-0 right-5 flex items-center justify-center text-sm font-medium text-neutral-400">
                                  minutes
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <label
                                htmlFor="release_date"
                                className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                                Release Date
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  autoComplete="off"
                                  id="release_date"
                                  placeholder="Select"
                                  className="block w-full rounded-md bg-neutral-800/[0.55] py-3 px-5 pl-[52px] text-base font-semibold text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                                />
                                <div className="absolute inset-y-0 left-4 flex items-center justify-center text-sm font-medium text-neutral-400">
                                  <CalendarPlus set="curved" color="currentColor" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="lg:col-span-2 2xl:col-span-1">
                            <div className="flex flex-col gap-y-2">
                              <label
                                htmlFor="short_name"
                                className="flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                                <span>Short Name</span>
                                <span>
                                  <QuestionCircle
                                    size="16"
                                    strokeWidth="3"
                                    set="curved"
                                    color="currentColor"
                                  />
                                </span>
                              </label>
                              <div>
                                <input
                                  type="text"
                                  autoComplete="off"
                                  id="short_name"
                                  placeholder="Leave empty if you don't need..."
                                  className="block w-full rounded-md bg-neutral-800/[0.55] py-3 px-5 text-base font-semibold text-neutral-200 placeholder:italic placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid gap-8 lg:grid-cols-3 2xl:grid-cols-2 2xl:gap-11">
                          <div className="grid grid-cols-2 gap-5 2xl:gap-11">
                            <div className="flex flex-col gap-y-2">
                              <label
                                htmlFor="tmdb_id"
                                className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                                TMDB_ID
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  autoComplete="off"
                                  id="tmdb_id"
                                  placeholder="ID"
                                  className="block w-full rounded-md bg-neutral-800/[0.55] py-3 px-5 text-base font-semibold text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                                />
                                <div className="absolute inset-y-0 right-5 flex items-center justify-center text-sm font-medium text-neutral-500">
                                  <Minus set="curved" color="currentColor" />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <label
                                htmlFor="release_date"
                                className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                                Release Date
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  autoComplete="off"
                                  id="release_date"
                                  placeholder="0 - 100"
                                  className="block w-full rounded-md bg-neutral-800/[0.55] py-3 px-5 pl-[52px] text-base font-semibold text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                                />
                                <div className="absolute inset-y-0 left-4 flex items-center justify-center text-sm font-medium text-neutral-400">
                                  <Star1 set="curved" color="currentColor" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="lg:col-span-2 2xl:col-span-1">
                            <div className="flex flex-col gap-y-2">
                              <label
                                htmlFor="tagline"
                                className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                                Tagline
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  autoComplete="off"
                                  id="tagline"
                                  placeholder="It's nice to have it."
                                  className="block w-full rounded-md bg-neutral-800/[0.55] py-3 px-5 text-base font-semibold text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                                />
                                <div className="absolute inset-y-0 right-5 flex items-center justify-center">
                                  <div className="text-sm font-semibold text-neutral-200">
                                    <span className="text-neutral-400">0</span> / 100
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mt-8 grid gap-y-8 2xl:mt-0 2xl:gap-y-11">
                          <div className="flex flex-col gap-y-2">
                            <label
                              htmlFor="genres"
                              className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                              Genres
                            </label>
                            <div>
                              <input
                                type="text"
                                autoComplete="off"
                                id="genres"
                                placeholder="Click to add genres.."
                                className="block w-full rounded-md bg-neutral-800/[0.55] py-3 px-5 text-base font-semibold text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-y-2">
                            <label
                              htmlFor="languages"
                              className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                              Languages
                            </label>
                            <div>
                              <input
                                type="text"
                                autoComplete="off"
                                id="languages"
                                placeholder="Click to add languages.."
                                className="block w-full rounded-md bg-neutral-800/[0.55] py-3 px-5 text-base font-semibold text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-y-2">
                            <label className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                              Torrent magnets
                            </label>
                            <div id="res">
                              {/* <div
                                id="empty"
                                className="text-base font-semibold italic leading-[26px] text-neutral-400">
                                No resources found.
                              </div> */}
                              <ul className="grid gap-3 lg:grid-cols-2 2xl:grid-cols-1">
                                <li className="grid grid-cols-3 rounded-md bg-neutral-800/[0.55] py-3 px-5">
                                  <div>
                                    <div className="inline-block rounded bg-cyan-100/5 px-1.5 text-xs font-extrabold uppercase leading-[22px] tracking-wider text-yellow-400">
                                      720p
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <button
                                      type="button"
                                      className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 focus:outline-none">
                                      Edit Magnet
                                    </button>
                                  </div>
                                  <div className="text-end text-[15px] font-extrabold uppercase leading-6 text-neutral-200">
                                    0.75GB
                                  </div>
                                </li>
                                <li className="grid grid-cols-3 rounded-md bg-neutral-800/[0.55] py-3 px-5">
                                  <div>
                                    <div className="inline-block rounded bg-cyan-100/5 px-1.5 text-xs font-extrabold uppercase leading-[22px] tracking-wider text-green-400">
                                      1080p
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <button
                                      type="button"
                                      className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 focus:outline-none">
                                      Edit Magnet
                                    </button>
                                  </div>
                                  <div className="text-end text-[15px] font-extrabold uppercase leading-6 text-neutral-200">
                                    2.22GB
                                  </div>
                                </li>
                                <li className="grid grid-cols-3 rounded-md bg-neutral-800/[0.55] py-3 px-5">
                                  <div>
                                    <div className="inline-block rounded bg-cyan-100/5 px-1.5 text-xs font-extrabold uppercase leading-[22px] tracking-wider text-violet-400">
                                      2160p
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <button
                                      type="button"
                                      className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 focus:outline-none">
                                      Edit Magnet
                                    </button>
                                  </div>
                                  <div className="text-end text-[15px] font-extrabold uppercase leading-6 text-neutral-200">
                                    6.49GB
                                  </div>
                                </li>
                                <li className="grid grid-cols-3 rounded-md bg-neutral-800/[0.55] py-3 px-5">
                                  <div>
                                    <div className="inline-block rounded bg-cyan-100/5 px-1.5 text-xs font-extrabold uppercase leading-[22px] tracking-wider text-blue-400">
                                      3D
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <button
                                      type="button"
                                      className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 focus:outline-none">
                                      Edit Magnet
                                    </button>
                                  </div>
                                  <div className="text-end text-[15px] font-extrabold uppercase leading-6 text-neutral-200">
                                    2.49GB
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <button
                              type="button"
                              className="mt-6 flex w-full items-center justify-center gap-1 rounded-md bg-neutral-800/80 py-3.5 text-[12px] font-extrabold uppercase leading-4 tracking-wider text-neutral-300 transition-colors hover:bg-neutral-800 focus:outline-none 2xl:mt-8">
                              <div className="-mt-0.5">
                                <PlusSmall
                                  set="curved"
                                  size="20"
                                  strokeWidth="3"
                                  color="currentColor"
                                />
                              </div>
                              <div>Add New Source</div>
                            </button>
                            <div className="relative mt-3">
                              <p className="text-sm font-semibold leading-6 text-neutral-400 2xl:absolute 2xl:text-center">
                                <span className="font-extrabold uppercase text-neutral-300">
                                  Warning:&nbsp;
                                </span>
                                When adding a torrent system will automatically prepare check for
                                it's validity, it may take up to 24 hours for new torrent to show up
                                on the front.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-16 flex flex-col items-center gap-y-6 2xl:mt-20">
                      <button
                        type="button"
                        className="block w-full rounded-md bg-neutral-800 py-4 text-[13px] font-extrabold uppercase leading-4 tracking-wider text-neutral-300 transition-colors hover:bg-neutral-700/60 focus:outline-none 2xl:inline-block 2xl:max-w-md">
                        Save & Continue
                      </button>
                      <div className="lg:hidden">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="inline-block text-[13px] font-extrabold uppercase leading-4 tracking-wider text-red-400">
                          Cancel & Exit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default CreateModal
