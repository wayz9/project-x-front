import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CalendarPlus, Minus, PlusSmall, QuestionCircle, Star1 } from 'react-swm-icon-pack'

const Modal = ({ open, setOpen }) => {
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
          <div className="flex min-h-full items-start justify-center px-6 py-8 text-center sm:items-center sm:p-0 2xl:ml-[300px]">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative w-full max-w-[1360px] transform overflow-hidden rounded-lg bg-neutral-900 text-left shadow-xl transition-all sm:my-8 md:rounded-xl">
                <div className="bg-neutral-800/40 px-6 py-6">
                  <form action="">
                    <div className="grid gap-8 lg:grid-cols-3">
                      <div>
                        <div className="flex flex-col items-center justify-center gap-y-5 rounded-lg border border-dashed border-neutral-700 bg-neutral-800/[0.55] py-[140px] text-neutral-500">
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
                          <div className="text-center text-[15px] font-semibold leading-5 text-neutral-400">
                            Tap to choose<br></br> a poster.
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-8 lg:col-span-2">
                        <div>
                          <label
                            htmlFor="title"
                            className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                            Moovie Title
                          </label>
                          <div className="mt-2">
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
                    <div className="mt-8 grid gap-8 lg:grid-cols-3">
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="duration"
                            className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                            Duration
                          </label>
                          <div className="relative mt-2">
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
                        <div>
                          <label
                            htmlFor="release_date"
                            className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                            Release Date
                          </label>
                          <div className="relative mt-2">
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
                      <div className="lg:col-span-2">
                        <div>
                          <div className="relative inline-block text-neutral-400">
                            <label
                              htmlFor="short_name"
                              className="text-xs font-extrabold uppercase tracking-wider">
                              Short Name
                            </label>
                            <div className="absolute inset-y-0 top-0.5 -right-5 flex items-center justify-center">
                              <QuestionCircle
                                size="16"
                                strokeWidth="3"
                                set="curved"
                                color="currentColor"
                              />
                            </div>
                          </div>
                          <div className="mt-2">
                            <input
                              type="text"
                              autoComplete="off"
                              id="short_name"
                              placeholder="Leave empty if you don't need..."
                              className="block w-full rounded-md bg-neutral-800/[0.55] py-3 px-5 text-base font-semibold text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 grid gap-8 lg:grid-cols-3">
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="tmdb_id"
                            className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                            TMDB_ID
                          </label>
                          <div className="relative mt-2">
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
                        <div>
                          <label
                            htmlFor="release_date"
                            className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                            Release Date
                          </label>
                          <div className="relative mt-2">
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
                      <div className="lg:col-span-2">
                        <div>
                          <label
                            htmlFor="tagline"
                            className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                            Tagline
                          </label>
                          <div className="relative mt-2">
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
                    <div className="mt-8 grid gap-y-8">
                      <div>
                        <label
                          htmlFor="genres"
                          className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                          Genres
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            autoComplete="off"
                            id="genres"
                            placeholder="Click to add genres.."
                            className="block w-full rounded-md bg-neutral-800/[0.55] py-3 px-5 text-base font-semibold text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="languages"
                          className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                          Languages
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            autoComplete="off"
                            id="languages"
                            placeholder="Click to add languages.."
                            className="block w-full rounded-md bg-neutral-800/[0.55] py-3 px-5 text-base font-semibold text-neutral-200 placeholder:text-neutral-400 focus:bg-neutral-800 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                          Torrent magnets
                        </label>
                        <div id="res" className="mt-2">
                          <div
                            id="empty"
                            className="text-base font-semibold italic leading-[26px] text-neutral-400">
                            No resources found.
                          </div>
                        </div>
                        <button
                          type="button"
                          className="mt-6 flex w-full items-center justify-center gap-1 rounded-md bg-neutral-800/80 py-3.5 text-[12px] font-extrabold uppercase leading-4 tracking-wider text-neutral-300 transition-colors hover:bg-neutral-800 focus:outline-none">
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
                        <p className="mt-5 text-sm font-semibold leading-6 text-neutral-400">
                          <span className="font-extrabold uppercase text-neutral-300">
                            Warning:&nbsp;
                          </span>
                          When adding a torrent system will automatically prepare check for it's
                          validity, it may take up to 24 hours for new torrent to show up on the
                          front.
                        </p>
                      </div>
                    </div>
                    <div className="mt-16 flex flex-col items-center gap-y-6">
                      <button
                        type="button"
                        className="block w-full rounded-md bg-neutral-800 py-4 text-[13px] font-extrabold uppercase leading-4 tracking-wider text-neutral-300 transition-colors hover:bg-neutral-700 focus:outline-none">
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

export default Modal
