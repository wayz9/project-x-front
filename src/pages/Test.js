import { useState } from 'react'
import { Collapse } from 'react-collapse'
import { ArrowSmallRight, ChevronDown } from 'react-swm-icon-pack'

const ForgotPassword = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className="bg-moovies min-h-screen pt-20 font-lex antialiased">
      <div className="px-4">
        <div className="rounded-xl bg-neutral-800/75">
          <div className="flex items-center justify-between py-3.5 pl-6 pr-5">
            <div>
              <div className="mb-1 font-medium text-neutral-200">Season 1</div>
              <div className="text-sm text-neutral-400">Feb 8, 2015</div>
            </div>
            <div>
              <button className="text-neutral-400" onClick={() => setIsOpened(!isOpened)}>
                <ChevronDown
                  className={isOpened ? 'rotate-180 transition' : 'transition'}
                  color="currentColor"
                  set="outline"
                />
              </button>
            </div>
          </div>
          <Collapse isOpened={isOpened}>
            <div>
              <div className="grid grid-cols-4 gap-4 border-y border-neutral-700/50 text-sm text-neutral-400">
                <div className="col-span-3 flex py-3 pl-6">
                  <div className="pr-1.5">Name</div>
                  <div>Dur.</div>
                </div>
                <div className="py-3">Magnet</div>
              </div>
              <div className="divide-y divide-neutral-700/50 border-b border-neutral-700/50">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3 flex items-center gap-5">
                    <div className="h-11 w-1 shrink-0 bg-transparent"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium text-neutral-200">Uno</div>
                      <div className="font-medium text-neutral-400">&middot;</div>
                      <div className="shrink-0 text-neutral-400">1h 15min</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="flex items-center gap-1.5">
                      <div className="text-sm font-medium text-neutral-200">Get</div>
                      <div>
                        <ArrowSmallRight color="currentColor" set="duotone" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3 flex items-center gap-5">
                    <div className="h-11 w-1 shrink-0 bg-green-500"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium text-neutral-200">Mijo</div>
                      <div className="font-medium text-neutral-400">&middot;</div>
                      <div className="shrink-0 text-neutral-400">51 min</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="flex items-center gap-1.5">
                      <div className="text-sm font-medium text-neutral-200">Get</div>
                      <div>
                        <ArrowSmallRight color="currentColor" set="duotone" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3 flex items-center gap-5">
                    <div className="h-11 w-1 shrink-0 bg-violet-500"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium text-neutral-200 line-clamp-1" title="">
                        Hero
                      </div>
                      <div className="font-medium text-neutral-400">&middot;</div>
                      <div className="shrink-0 text-neutral-400">49 min</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="flex items-center gap-1.5">
                      <div className="text-sm font-medium text-neutral-200">Get</div>
                      <div>
                        <ArrowSmallRight color="currentColor" set="duotone" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3 flex items-center gap-5">
                    <div className="h-11 w-1 shrink-0 bg-violet-500"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium text-neutral-200">Alpine Boy</div>
                      <div className="font-medium text-neutral-400">&middot;</div>
                      <div className="shrink-0 text-neutral-400">52 min</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="flex items-center gap-1.5">
                      <div className="text-sm font-medium text-neutral-200">Get</div>
                      <div>
                        <ArrowSmallRight color="currentColor" set="duotone" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3 flex items-center gap-5">
                    <div className="h-11 w-1 shrink-0 bg-violet-500"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium text-neutral-200">Five-O</div>
                      <div className="font-medium text-neutral-400">&middot;</div>
                      <div className="shrink-0 text-neutral-400">58 min</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="flex items-center gap-1.5">
                      <div className="text-sm font-medium text-neutral-200">Get</div>
                      <div>
                        <ArrowSmallRight color="currentColor" set="duotone" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3 flex items-center gap-5">
                    <div className="h-11 w-1 shrink-0 bg-yellow-500"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium text-neutral-200">Bingo</div>
                      <div className="font-medium text-neutral-400">&middot;</div>
                      <div className="shrink-0 text-neutral-400">45 min</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="flex items-center gap-1.5">
                      <div className="text-sm font-medium text-neutral-200">Get</div>
                      <div>
                        <ArrowSmallRight color="currentColor" set="duotone" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3 flex items-center gap-5">
                    <div className="h-11 w-1 shrink-0 bg-yellow-500"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium text-neutral-200">RICO</div>
                      <div className="font-medium text-neutral-400">&middot;</div>
                      <div className="shrink-0 text-neutral-400">45 min</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="flex items-center gap-1.5">
                      <div className="text-sm font-medium text-neutral-200">Get</div>
                      <div>
                        <ArrowSmallRight color="currentColor" set="duotone" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3 flex items-center gap-5">
                    <div className="h-11 w-1 shrink-0 bg-violet-500"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium text-neutral-200">Pimento</div>
                      <div className="font-medium text-neutral-400">&middot;</div>
                      <div className="shrink-0 text-neutral-400">45 min</div>
                      <div className="rounded bg-violet-100/5 px-1.5 text-[10px] font-bold uppercase leading-5 tracking-wider text-violet-400">
                        new
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="flex items-center gap-1.5">
                      <div className="text-sm font-medium text-neutral-200">Get</div>
                      <div>
                        <ArrowSmallRight color="currentColor" set="duotone" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3 flex items-center gap-5">
                    <div className="h-11 w-1 shrink-0 bg-neutral-200"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium text-neutral-200">TBA</div>
                      <div className="font-medium text-neutral-400">&middot;</div>
                      <div className="shrink-0 text-neutral-400">- min</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-neutral-400">N.A.</div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-7 py-3.5 pl-6 pr-4">
                <div className="text-sm text-neutral-400">Legend</div>
                <div className="grid flex-grow grid-cols-2 gap-x-4 gap-y-3">
                  <div className="flex items-center gap-2 py-0.5">
                    <div className="h-1 w-5 rounded bg-yellow-500"></div>
                    <div className="text-sm font-medium uppercase text-neutral-200">720p</div>
                  </div>
                  <div className="flex items-center gap-2 py-0.5">
                    <div className="h-1 w-5 rounded bg-green-500"></div>
                    <div className="text-sm font-medium uppercase text-neutral-200">1080p</div>
                  </div>
                  <div className="flex items-center gap-2 py-0.5">
                    <div className="h-1 w-5 rounded bg-violet-500"></div>
                    <div className="text-sm font-medium uppercase text-neutral-200">2160p</div>
                  </div>
                  <div className="flex items-center gap-2 py-0.5">
                    <div className="h-1 w-5 rounded bg-blue-500">
                      <div className="h-full w-1/2 bg-red-500"></div>
                    </div>
                    <div className="text-sm font-medium uppercase text-neutral-200">3D</div>
                  </div>
                  <div className="col-span-2 flex items-center gap-2 py-0.5">
                    <div className="h-1 w-5 rounded bg-neutral-200"></div>
                    <div className="text-sm font-medium text-neutral-200">Not available</div>
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
