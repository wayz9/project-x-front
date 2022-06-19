import { ReactComponent as MoviesLogo } from '../../assets/logo/moovies.svg'
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
import NavLink from './NavLink'
import Label from './Label'

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
          <ChevronSmallDown color="currentColor" set="curved" strokeWidth="1.8" />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-y-11 pb-8">
        <div>
          <ul className="flex flex-col gap-y-5">
            <NavLink path="/1" linkText="Dashboard" Icon={Home1} />
            <NavLink path="/2" linkText="Monitoring" Icon={Screen}>
              <div className="rounded bg-cyan-100/5 px-1.5 text-xs font-extrabold uppercase leading-[22px] tracking-wider text-cyan-400">
                beta
              </div>
            </NavLink>
          </ul>
        </div>
        <div>
          <Label name="Menu" />
          <ul className="mt-6 flex flex-col gap-y-5">
            <NavLink path="/movies" Icon={Cam} linkText="Movies" />
            <NavLink path="/tv-shows" Icon={ScreenShare} linkText="TV Shows" />
            <NavLink path="/genres" Icon={Crown1} linkText="Genres" />
            <NavLink path="/members" Icon={UsersMore} linkText="Members" />
          </ul>
        </div>
        <div>
          <Label name="Recent Updates" />
          <ul className="mt-6 flex flex-col gap-y-5">
            <li>
              <a href="/" className="block pl-7 pr-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-400">
                      <Circle color="currentColor" set="curved" strokeWidth="1.8" />
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
                      <Circle color="currentColor" set="curved" strokeWidth="1.8" />
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
                      <Circle color="currentColor" set="curved" strokeWidth="1.8" />
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
                  <ArrowSmallRight color="currentColor" set="curved" strokeWidth="1.8" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Label name="Related" />
          <ul className="mt-6 flex flex-col gap-y-5">
            <NavLink path="/reports" Icon={Inbox} linkText="Reports" />
            <NavLink path="/statistics" Icon={ChartVertical} linkText="Statistics" />
            <NavLink path="/lists" Icon={Grid2Horizontal} linkText="Lists" />
            <NavLink path="/api-status" Icon={Cardiology} linkText="API Status" />
            <NavLink path="/settings" Icon={Settings} linkText="Acc. Settings" />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
