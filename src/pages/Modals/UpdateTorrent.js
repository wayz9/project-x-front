import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const UpdateTorrent = ({ updateTorrent, setUpdateTorrent }) => {
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root appear show={updateTorrent} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setUpdateTorrent}>
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
                      Updatet currently selected torrent.
                    </p>
                  </div>
                  <div className="mt-7 flex flex-col gap-y-6 md:mt-9 md:gap-y-7">
                    <div>
                      <label htmlFor="hash" className="block text-left">
                        Hash <span className="text-gray-400">optional</span>
                      </label>
                      <input
                        type="text"
                        readOnly
                        value="63e8030048167a46930a9a72b5a870172c667879"
                        id="hash"
                        className="mt-2.5 sm:mt-3"
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
                        readOnly
                        className="mt-2.5 resize-none break-all sm:mt-3"
                        value="magnet:?xt=urn:btih:63E8030048167A46930A9A72B5A870172C667879&dn=Blackwood.2022.720p.WEBRip.800MB.x264-GalaxyRG&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce"
                      />
                    </div>
                    <div>
                      <label htmlFor="quality" className="block text-left">
                        Quality
                      </label>
                      <select id="quality" className="mt-2.5 sm:mt-3">
                        <option value="1080p">1080P - Full HD</option>
                        <option selected value="2160p">
                          2160P - Ultra HD
                        </option>
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
                            defaultValue="87"
                            className="mt-2.5 appearance-none md:mt-3"
                          />
                          <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                            <span className="text-xs font-medium uppercase text-gray-600">mb</span>
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
                            defaultValue="23.976"
                            className="mt-2.5 appearance-none md:mt-3"
                          />
                          <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                            <span className="text-xs font-medium uppercase text-gray-600">Fps</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 flex items-center justify-between sm:mt-10">
                    <button
                      ref={cancelButtonRef}
                      onClick={() => setUpdateTorrent(false)}
                      className="btn-secondary">
                      Cancel
                    </button>
                    <button onClick={() => setUpdateTorrent(false)} className="btn-primary">
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
