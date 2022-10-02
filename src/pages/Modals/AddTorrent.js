import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { mutate } from 'swr'
import { addTorrentToMovie } from '../../services/movies'
// import { getTorrentQualities } from '../../services/torrents'

const AddTorrent = ({ isOpen, setIsOpen, movieId }) => {
  const [torrentQuality, setTorrentQuality] = useState('1080P')
  const [hash, setHash] = useState('')
  const [magnetURL, setMagnetURL] = useState('')
  const [size, setSize] = useState('')
  const [fps, setFps] = useState('')
  const cancelButtonRef = useRef(null)

  // const [torrentQualities, setTorrentQualities] = useState([])
  // useEffect(() => {
  //   const fetchTorrentQualities = async () => {
  //     const response = await getTorrentQualities()
  //     if (response && response.data && response.data) {
  //       setTorrentQualities(response.data)
  //     }
  //   }
  //   fetchTorrentQualities()
  // }, [])

  const handleAddTorrent = async () => {
    const body = new FormData()
    body.append('magnet_url', magnetURL)
    if (hash) body.append('hash', hash)
    body.append('size', size)
    body.append('fps', fps)
    body.append('quality', torrentQuality)
    try {
      const response = await addTorrentToMovie(movieId, body)
      if (response.status === 201) {
        mutate('torrents')
        setIsOpen(false)
        setHash('')
        setTorrentQuality('1080P')
        setMagnetURL('')
        setSize('')
        setFps('')
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message)
        console.log(err.response.data.message)
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
                <form className="p-6 md:px-8">
                  <div className="text-center sm:text-left">
                    <h5 className="font-medium uppercase leading-5 text-gray-900 sm:text-lg sm:leading-6 md:normal-case">
                      New Torrent
                    </h5>
                    <p className="mt-2 text-sm font-normal text-gray-500 sm:text-md">
                      Add new torrent to current movie.
                    </p>
                  </div>
                  <div className="mt-7 flex flex-col gap-y-6 md:mt-9 md:gap-y-7">
                    <div>
                      <label htmlFor="hash" className="block">
                        Hash <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="hash"
                        value={hash}
                        onChange={(e) => setHash(e.target.value)}
                        className="mt-2.5 sm:mt-3"
                        maxLength={255}
                      />
                    </div>
                    <div>
                      <label htmlFor="magnet" className="block">
                        Magnet
                      </label>
                      <textarea
                        type="text"
                        id="magnet"
                        rows={5}
                        value={magnetURL}
                        onChange={(e) => setMagnetURL(e.target.value)}
                        className="mt-2.5 resize-none break-all sm:mt-3"
                      />
                    </div>
                    <div className="grid gap-y-6 gap-x-5 md:grid-cols-2 md:gap-y-7">
                      <div>
                        <label htmlFor="quality" className="block">
                          Quality
                        </label>
                        <select
                          value={torrentQuality}
                          onChange={(e) => setTorrentQuality(e.target.value)}
                          id="quality"
                          className="mt-2.5 sm:mt-3">
                          <option value="1080P">1080P - Full HD</option>
                          <option value="2160P">2160P - Ultra HD</option>
                          <option value="3D">3D - 3D</option>
                          <option value="720P">720P - Only HD</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-x-5">
                        <div>
                          <label htmlFor="size" className="block">
                            Size
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="runtime"
                              className="mt-2.5 appearance-none md:mt-3"
                              value={size}
                              onChange={(e) => setSize(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                              <span className="text-xs font-medium uppercase text-gray-600">
                                mb
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="fps" className="block">
                            Fps
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="fps"
                              className="mt-2.5 appearance-none md:mt-3"
                              value={fps}
                              onChange={(e) => setFps(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                              <span className="text-xs font-medium uppercase text-gray-600">
                                Fps
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 flex items-center justify-between sm:mt-10">
                    <button
                      type="button"
                      ref={cancelButtonRef}
                      onClick={() => setIsOpen(false)}
                      className="btn-secondary">
                      Cancel
                    </button>
                    <button type="button" onClick={handleAddTorrent} className="btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AddTorrent
