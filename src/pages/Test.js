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
              <div className="divide-y divide-neutral-700/50">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3 flex items-center gap-5">
                    <div className="h-11 w-1 shrink-0 bg-green-500"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium text-neutral-200">Mio</div>
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
                    <div className="h-11 w-1 shrink-0 bg-yellow-500"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <div
                        className="font-medium text-neutral-200 line-clamp-1"
                        title="BingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingoBingo">
                        BingoBingoBingo BingoBingoBingo
                      </div>
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
                      <div className="font-medium text-neutral-200">Hero</div>
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
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
