import { useState } from 'react'
import { Collapse } from 'react-collapse'
import { ArrowSmallRight } from 'react-swm-icon-pack'
import { FolderOpenIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const ForgotPassword = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className="bg-moovies min-h-screen pt-20 font-lex antialiased">
      <div className="px-4">
        <div className="rounded-xl bg-neutral-800/75">
          <div className="grid grid-cols-2 py-3.5 sm:grid-cols-3">
            <div className="pl-6 sm:pl-7">
              <div className="mb-1 font-medium text-neutral-200">Season 1</div>
              <div className="text-sm text-neutral-400">Feb 8, 2015</div>
            </div>
            <div className="hidden flex-col items-center justify-center gap-y-1.5 text-neutral-400 sm:flex">
              <div>
                <FolderOpenIcon strokeWidth="1.5" className="h-6 w-6" />
              </div>
              <div className="text-xs font-semibold uppercase">10 Episodes</div>
            </div>
            <div className="flex items-center justify-end pr-5 sm:pr-6">
              <button className="text-neutral-400" onClick={() => setIsOpened(!isOpened)}>
                <ChevronDownIcon
                  strokeWidth="1.5"
                  className={isOpened ? 'h-6 w-6 rotate-180 transition' : 'h-6 w-6 transition'}
                />
              </button>
            </div>
          </div>
          <Collapse isOpened={isOpened}>
            <div>
              <div className="grid grid-cols-4 border-y border-neutral-700/50 text-sm text-neutral-400 sm:grid-cols-5">
                <div className="col-span-3 flex py-3 pl-6 sm:col-span-2 sm:py-2.5 sm:pl-7">
                  <div className="pr-1.5">Name</div>
                  <div className="sm:hidden">Dur.</div>
                </div>
                <div className="hidden items-center justify-center text-sm text-neutral-400 sm:flex">
                  <div>Length</div>
                </div>
                <div className="flex items-center sm:col-start-5">
                  <div>Magnet</div>
                </div>
              </div>
              <div className="divide-y divide-neutral-700/50 border-b border-neutral-700/50">
                <div className="grid grid-cols-4 sm:grid-cols-5">
                  <div className="col-span-3 flex items-center gap-5 sm:col-span-2 sm:gap-6">
                    <div className="h-11 w-1 shrink-0 bg-transparent"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium text-neutral-200">Uno</div>
                      <div className="font-medium text-neutral-400 sm:hidden">&middot;</div>
                      <div className="shrink-0 text-neutral-400 sm:hidden">1h 15min</div>
                    </div>
                  </div>
                  <div className="hidden items-center justify-center text-sm text-neutral-400 sm:flex">
                    <div>54 min</div>
                  </div>
                  <div className="flex items-center sm:col-start-5">
                    <button className="flex items-center gap-1.5">
                      <div className="text-sm font-medium text-neutral-200 sm:hidden">Get</div>
                      <div className="hidden text-sm font-medium text-neutral-200 sm:block">
                        Download
                      </div>
                      <div className="text-neutral-400">
                        <ArrowSmallRight color="currentColor" set="duotone" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5">
                  <div className="col-span-3 flex items-center gap-5 sm:col-span-2 sm:gap-6">
                    <div className="h-11 w-1 shrink-0 bg-green-500"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium text-neutral-200">Mijo</div>
                      <div className="font-medium text-neutral-400 sm:hidden">&middot;</div>
                      <div className="shrink-0 text-neutral-400 sm:hidden">1h 15min</div>
                    </div>
                  </div>
                  <div className="hidden items-center justify-center text-sm text-neutral-400 sm:flex">
                    <div>1h 15min</div>
                  </div>
                  <div className="flex items-center sm:col-start-5">
                    <button className="flex items-center gap-1.5">
                      <div className="text-sm font-medium text-neutral-200 sm:hidden">Get</div>
                      <div className="hidden text-sm font-medium text-neutral-200 sm:block">
                        Download
                      </div>
                      <div className="text-neutral-400">
                        <ArrowSmallRight color="currentColor" set="duotone" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-7 py-3.5 pl-6 pr-4 sm:gap-10 sm:pl-7">
                <div className="text-sm text-neutral-400">Legend</div>
                <div className="grid flex-grow grid-cols-2 gap-x-4 gap-y-3 text-neutral-400 sm:flex sm:gap-x-7">
                  <div className="flex items-center gap-2 py-0.5">
                    <div className="h-1 w-5 rounded bg-yellow-500 sm:h-3 sm:w-3 sm:rounded-full"></div>
                    <div className="text-sm uppercase">720p</div>
                  </div>
                  <div className="flex items-center gap-2 py-0.5">
                    <div className="h-1 w-5 rounded bg-green-500 sm:h-3 sm:w-3 sm:rounded-full"></div>
                    <div className="text-sm uppercase">1080p</div>
                  </div>
                  <div className="flex items-center gap-2 py-0.5">
                    <div className="h-1 w-5 rounded bg-violet-500 sm:h-3 sm:w-3 sm:rounded-full"></div>
                    <div className="text-sm uppercase">2160p</div>
                  </div>
                  <div className="flex items-center gap-2 py-0.5">
                    <div className="h-1 w-5 overflow-hidden rounded bg-blue-500 sm:h-3 sm:w-3 sm:rounded-full">
                      <div className="h-full w-1/2 bg-red-500"></div>
                    </div>
                    <div className="text-sm uppercase">3D</div>
                  </div>
                  <div className="col-span-2 flex items-center gap-2 py-0.5">
                    <div className="h-1 w-5 rounded bg-neutral-200 sm:h-3 sm:w-3 sm:rounded-full"></div>
                    <div className="block text-sm sm:hidden">Not available</div>
                    <div className="hidden text-sm sm:block">Unavailable</div>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
