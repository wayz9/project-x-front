import { ReactComponent as MoviesLogo } from '../assets/logo/moovies.svg'
import { ChevronSmallDown } from 'react-swm-icon-pack'
import {
  Home1,
  Screen,
  Cam,
  ScreenShare,
  Crown1,
  UsersMore,
  Circle,
  ArrowSmallRight,
  Inbox,
  ChartVertical,
  Grid2Horizontal,
  Cardiology,
  Settings
} from 'react-swm-icon-pack'

const Nav = () => {
  return (
    <div className="hidden h-screen w-full max-w-[300px] overflow-y-scroll bg-neutral-800/30 scrollbar-thin 2xl:block">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-neutral-800">
            <MoviesLogo className="-ml-0.5" />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-base font-bold leading-5 text-neutral-100">moovies. LLC</p>
            <p className="text-xs font-medium text-neutral-400">Remaining free forever!</p>
          </div>
        </div>
        <div className="text-neutral-200">
          <ChevronSmallDown color="currentColor" set="curved" />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-y-11 pb-8">
        <div>
          <ul className="flex flex-col gap-y-5">
            <li>
              <a
                href="/"
                className="relative block pl-7 pr-6 before:absolute before:left-0 before:h-full before:w-1 before:rounded-r before:bg-primary-400">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <Home1 color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-100">
                      Dashboard
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <Screen color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-100">
                      Monitoring
                    </p>
                  </div>
                  <div className="rounded bg-cyan-100/5 px-1.5 text-xs font-extrabold uppercase leading-[22px] tracking-wider text-cyan-400">
                    new
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="ml-7 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
            Menu
          </div>
          <ul className="mt-6 flex flex-col gap-y-5">
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <Cam color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-100">Movies</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <ScreenShare color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-100">TV Shows</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <Crown1 color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-100">Genres</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <UsersMore color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-100">Members</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="ml-7 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
            Recent Updates
          </div>
          <ul className="mt-6 flex flex-col gap-y-5">
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <Circle color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-200">
                      Memory <span className="text-neutral-400">(2022)</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <Circle color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-200">
                      Morbius <span className="text-neutral-400">(2022)</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <Circle color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-200">
                      Better Call Saul <span className="text-neutral-400">(S06)</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="ml-16 flex items-center text-[15px] font-bold leading-6 text-neutral-400">
                <div>view more</div>
                <div className="text-primary-400">
                  <ArrowSmallRight color="currentColor" set="curved" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="ml-7 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
            Related
          </div>
          <ul className="mt-6 flex flex-col gap-y-5">
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <Inbox color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-100">Reports</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <ChartVertical color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-100">
                      Statistics
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <Grid2Horizontal color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-100">
                      Catalogs <span className="font-medium text-neutral-400">(lists)</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <Cardiology color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-100">
                      API Status
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <Settings color="currentColor" set="curved" />
                    </div>
                    <p className="text-[15px] font-semibold leading-6 text-neutral-100">
                      Acc Settings
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
