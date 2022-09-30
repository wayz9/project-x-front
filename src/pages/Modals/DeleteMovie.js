import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowNarrowRight } from 'tabler-icons-react'
import { deleteMovie } from '../../services/movies'
import { useSWRConfig } from 'swr'

const DeleteMovie = ({ isOpen, setIsOpen, movie }) => {
  const { mutate } = useSWRConfig()
  const cancelButtonRef = useRef(null)

  const handleDeleteMovie = async () => {
    try {
      await mutate('movies', () => deleteMovie(movie.id))
      setIsOpen(false)
    } catch (err) {
      //Todo toast message
      console.log(err.message)
    }
  }

  return (
    <Transition.Root appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/5 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center px-4 py-8 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative w-full max-w-xl transform overflow-hidden rounded-xl border border-gray-100 bg-white transition-all sm:my-16">
                <div className="p-6 md:px-8">
                  <div className="text-center sm:text-left">
                    <h5 className="font-medium uppercase leading-5 text-gray-900 sm:text-lg sm:leading-6 md:normal-case">
                      Are you sure?
                    </h5>
                    <p className="mt-2 text-sm font-normal text-gray-500 sm:text-md">
                      Do you want to remove <br className="sm:hidden" /> this movie?
                    </p>
                  </div>
                  <div className="mt-6 hidden items-center gap-5 sm:flex">
                    <div className="shrink-0">
                      {movie.poster ? (
                        <img
                          src={movie.poster.path}
                          alt=""
                          className="w-20 rounded-md border border-gray-200 object-cover object-center md:w-[67px]"
                        />
                      ) : (
                        <div className="aspect-[2/3] w-20 rounded-md border border-gray-200 bg-gray-50 md:w-[67px]" />
                      )}
                    </div>
                    <div className="flex flex-col items-start gap-y-1">
                      <div className="font-mono text-sm font-medium leading-6 text-gray-400">
                        ({new Date(movie.release_date).getFullYear()})
                      </div>
                      <div className="mb-1 text-lg font-medium uppercase leading-6 text-gray-800 line-clamp-2 md:line-clamp-1">
                        {movie.title}
                      </div>
                      <div className="text-left text-md leading-6 text-gray-600">
                        {movie.tagline}
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 flex items-center justify-between sm:mt-10">
                    <button
                      ref={cancelButtonRef}
                      onClick={() => setIsOpen(false)}
                      className="btn-secondary">
                      <span className="sm:hidden">Cancel</span>
                      <span className="hidden sm:inline">No I have changed my mind!</span>
                    </button>
                    <button
                      onClick={() => handleDeleteMovie()}
                      className="btn-primary flex items-center gap-1.5 sm:pr-3">
                      <span className="sm:hidden">Delete It</span>
                      <span className="hidden sm:inline">Yes, Delete It</span>
                      <ArrowNarrowRight className="hidden text-gray-400 sm:inline-flex" size={20} />
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default DeleteMovie
