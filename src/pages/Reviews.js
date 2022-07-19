import { StarIcon } from '@heroicons/react/solid'

const Reviews = () => {
  return (
    <div className="bg-moovies min-h-screen pt-20 font-lex antialiased">
      <div className="px-4">
        <div className="my-10 text-xl">Reviews</div>
        <div className="w-full max-w-2xl">
          <div className="grid gap-y-5">
            <div
              id="top-review"
              className="overflow-hidden rounded-xl bg-neutral-800/75 pb-7 backdrop-blur">
              <div
                id="badge-top-review"
                className="rounded-br-xl bg-gradient-to-r from-green-500/70 via-purple-500/20 px-6 py-1 text-xs font-semibold uppercase tracking-widest text-neutral-100">
                Top Review
              </div>
              <div className="px-6 pt-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-0.5 rounded-full bg-neutral-700 py-1 pl-2 pr-2.5 text-[15px] leading-5 text-neutral-100">
                    <div className="inline-flex">
                      <StarIcon className="h-5 w-5 text-neutral-400" />
                    </div>
                    <div className="font-semibold">5.0</div>
                  </div>
                  <h3 className="text-base font-medium tracking-tight text-neutral-200 sm:text-lg">
                    Hmmmm. Not what I was expecting.
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-neutral-400 sm:text-base">
                  Great visuals and acting from the cast but can't say I'm not disappointed. They
                  tried bringing in so many characters to make future movies connect but by doing
                  that the whole thing turned messy.
                </p>
              </div>
            </div>
            <div
              id="bottom-review"
              className="relative overflow-hidden rounded-xl bg-neutral-800/75 px-6 pb-4 pt-6 backdrop-blur">
              <div className="absolute inset-x-0 top-0 h-1.5 w-full bg-neutral-600"></div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-neutral-200 sm:text-lg">
                  Not enough multiverse and maybe too much madness.
                </h3>
              </div>
              <p className="mt-2.5 text-sm leading-6 text-neutral-400 sm:text-base">
                Sam Raimi definitely put a splash of horror in this action film. Doctor Strange in
                the Multiverse of Madness is darker & more violent than any previous MCU movie,
                which could be considered a strength.
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div className="text-sm text-neutral-400">Source: TMDB</div>
                <div className="flex items-center gap-0.5 rounded-full bg-neutral-700 py-1 pl-2 pr-2.5 text-[15px] leading-5 text-neutral-100">
                  <div className="inline-flex">
                    <StarIcon className="h-5 w-5 text-neutral-400" />
                  </div>
                  <div className="font-semibold">6.2</div>
                </div>
                <div className="text-sm text-neutral-400">14 May 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
