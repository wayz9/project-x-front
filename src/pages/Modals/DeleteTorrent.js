import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowNarrowRight, Dice } from 'tabler-icons-react'
import { deleteTorrent } from '../../services/torrents'
import { useParams } from 'react-router-dom'
import { useSWRConfig } from 'swr'

const DeleteTorrent = ({ isOpen, setIsOpen, torrent }) => {
  const { id: movieId } = useParams()
  const { mutate } = useSWRConfig()
  const cancelButtonRef = useRef(null)

  const handleDeleteTorrent = async () => {
    try {
      await mutate('torrents', () => deleteTorrent(movieId, torrent.id))
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
          <div className="flex min-h-full items-start justify-center px-4 py-8 sm:items-center sm:p-0">
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
                      Do you wnat to permanently delete <br className="sm:hidden" /> this torrent?
                    </p>
                  </div>
                  <div className="mt-6 hidden items-center gap-4 sm:flex">
                    <div className="rounded-full bg-gray-100 p-2">
                      <div className="rounded-full bg-gray-800 p-1.5 text-gray-200">
                        <Dice />
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-x-1.5 font-medium text-gray-800">
                        <span>{torrent.converted_size}</span>
                        <span>&middot;</span>
                        <span>{torrent.quality}</span>
                        {torrent.fps ? (
                          <>
                            <span>&middot;</span>
                            <span>{torrent.fps} FPS</span>
                          </>
                        ) : null}
                      </div>
                      <p className="overflow-anywhere mt-1 text-sm text-gray-400 line-clamp-1">
                        {torrent.hash ? torrent.hash : 'No hash found'}
                      </p>
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
                      onClick={() => handleDeleteTorrent()}
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

export default DeleteTorrent
