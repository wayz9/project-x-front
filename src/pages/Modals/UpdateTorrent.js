import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getTorrentQualities } from '../../services/torrents'

const UpdateTorrent = ({ isOpen, setIsOpen, torrent }) => {
  const [hash, setHash] = useState('')
  const [magnetURL, setMagnetURL] = useState('')
  const [size, setSize] = useState('')
  const [fps, setFps] = useState('')
  const [, setTorrentQualities] = useState([])

  useEffect(() => {
    if (torrent && torrent.hash) setHash(torrent.hash)
    if (torrent && torrent.magnet_url) setMagnetURL(torrent.magnet_url)
    if (torrent && torrent.size) setSize(torrent.size)
    if (torrent && torrent.fps) setFps(torrent.fps)
  }, [torrent])

  useEffect(() => {
    const fetchTorrentQualities = async () => {
      const response = await getTorrentQualities()
      if (response && response.data && response.data) {
        setTorrentQualities(response.data)
      }
    }
    fetchTorrentQualities()
  }, [])

  const cancelButtonRef = useRef(null)
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
                      Torrent Update
                    </h5>
                    <p className="mt-2 text-sm font-normal text-gray-500 sm:text-md">
                      Update currently selected torrent.
                    </p>
                  </div>
                  <div className="mt-7 flex flex-col gap-y-6 md:mt-9 md:gap-y-7">
                    <div>
                      <label htmlFor="hash" className="block text-left">
                        Hash <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={hash}
                        onChange={(e) => setHash(e.target.value)}
                        id="hash"
                        className="mt-2.5 sm:mt-3"
                        maxLength={255}
                      />
                    </div>
                    <div>
                      <label htmlFor="magnet" className="block text-left">
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
                        <label htmlFor="quality" className="block text-left">
                          Quality
                        </label>
                        <select defaultValue="1080p" id="quality" className="mt-2.5 sm:mt-3">
                          <option value="1080p">1080P - Full HD</option>
                          <option value="2160p">2160P - Ultra HD</option>
                          <option value="3d">3D - 3D</option>
                          <option value="720p">720P - Only HD</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-x-5">
                        <div>
                          <label htmlFor="size" className="block text-left">
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
                          <label htmlFor="fps" className="block text-left">
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
                      ref={cancelButtonRef}
                      onClick={() => setIsOpen(false)}
                      className="btn-secondary">
                      Cancel
                    </button>
                    <button onClick={() => setIsOpen(false)} className="btn-primary">
                      Save Changes
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

export default UpdateTorrent
