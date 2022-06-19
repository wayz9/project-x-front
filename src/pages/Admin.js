import profileImage from '../assets/imgs/user.jpg'
import {
  Plus,
  Bell,
  Search as SearchIcon,
  MenuHamburger,
  ChevronSmallDown
} from 'react-swm-icon-pack'
import Nav from '../components/Nav'
import { useState } from 'react'
import CreateModal from './Movies/CreateModal'
import Search from './Search'

const Admin = () => {
  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  return (
    <>
      <div className="bg-moovies min-h-screen">
        <div className="flex">
          <Nav />
          <div className="flex-grow py-4 pr-5 pl-4 lg:pl-5 lg:pr-6 2xl:py-6 2xl:pl-14 2xl:pr-[52px]">
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <button
                  type="button"
                  className="block rounded-md p-2 text-neutral-200 transition-colors hover:bg-neutral-800/50 focus:bg-neutral-800/60 focus:text-primary-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-neutral-700/40 2xl:hidden">
                  <MenuHamburger color="currentColor" set="curved" strokeWidth="1.8" />
                </button>
                <div className="hidden lg:block">
                  <p className="text-base font-medium text-neutral-400 ">API Vers 1.0.0</p>
                  <p className="mt-0.5 text-[17px] font-semibold leading-7 text-neutral-300">
                    Welcome back, <span className="font-bold text-neutral-100">Vukašin</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 lg:gap-7 2xl:gap-8">
                <div className="flex items-center gap-5 2xl:gap-6">
                  <div>
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="rounded-md p-2 text-neutral-200 transition-colors hover:bg-neutral-800/50 focus:bg-neutral-800/60 focus:text-primary-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-neutral-700/40">
                      <Plus color="currentColor" set="curved" strokeWidth="1.8" />
                    </button>
                  </div>
                  <div className="relative hidden lg:block">
                    <button
                      type="button"
                      className="rounded-md p-2 text-neutral-200 transition-colors hover:bg-neutral-800/50 focus:bg-neutral-800/60 focus:text-primary-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-neutral-700/40">
                      <Bell color="currentColor" set="curved" strokeWidth="1.8" />
                    </button>
                    <div className="absolute top-1 right-1 inline-flex h-2 w-2 rounded-full bg-primary-400">
                      <div className="relative h-2 w-2 animate-ping rounded-full bg-primary-400"></div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => setOpenSearch(true)}
                      className="rounded-md p-2 text-neutral-200 transition-colors hover:bg-neutral-800/50 focus:bg-neutral-800/60 focus:text-primary-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-neutral-700/40">
                      <SearchIcon color="currentColor" set="curved" strokeWidth="1.8" />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-full transition-all hover:blur-[0.5px] focus:outline-none focus:ring-1 focus:ring-inset focus:ring-neutral-700/40 focus:blur-none">
                      <img
                        src={profileImage}
                        alt="Vukasin Vitorovic"
                        className="inline h-10 w-10 rounded-full object-cover object-center"
                      />
                    </button>
                    <ChevronSmallDown
                      color="currentColor"
                      className="hidden text-neutral-400 lg:inline"
                      set="curved"
                      strokeWidth="1.8"
                    />
                  </div>
                </div>
              </div>
            </nav>
            <main className="px-1.5 pb-8 pt-8 sm:px-0 xl:pt-12 2xl:pt-14">
              <div>
                <h1 className="text-3xl font-extrabold text-neutral-200 xl:text-4xl">
                  Catalogs <span className="text-neutral-400">(lists)</span>
                </h1>
                <p className="mt-1.5 block font-semibold text-neutral-400 md:hidden">
                  Manage users catalogs aka lists.
                </p>
                <p className="mt-2 hidden max-w-2xl text-base font-semibold text-neutral-400 md:mt-3 md:block">
                  Catalogs or better said lists are all displayed here, either private or public an
                  admin or permissioned user can see them, manage and delete them accordingly.
                </p>
              </div>
              <div className="mt-10 grid auto-rows-fr gap-x-7 gap-y-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                <div className="bg-catalog-card flex h-full flex-col justify-between gap-y-10 rounded-lg py-5 px-6 transition-transform hover:cursor-pointer md:hover:-translate-y-2">
                  <div className="flex-grow pt-5 text-center">
                    <div className="small-caps text-sm font-black tracking-wider text-violet-400">
                      private
                    </div>
                    <h2 className="mt-1 text-xl font-black uppercase text-neutral-200 line-clamp-2">
                      Marvel Collection
                    </h2>
                    <p className="mt-2 px-8 text-base font-semibold text-neutral-400 line-clamp-2">
                      Marvel movies in chronological watching order.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-neutral-300">17 items</span>
                    <span className="text-sm font-semibold text-neutral-400">
                      By: Vukašin Vitorović
                    </span>
                  </div>
                </div>
                <div className="bg-catalog-card flex h-full flex-col justify-between gap-y-10 rounded-lg py-5 px-6 transition-transform hover:cursor-pointer md:hover:-translate-y-2">
                  <div className="flex-grow pt-5 text-center">
                    <div className="small-caps text-sm font-black tracking-wider text-yellow-400">
                      public
                    </div>
                    <h2 className="mt-1 text-xl font-black uppercase text-neutral-200 line-clamp-2">
                      Random Movies
                    </h2>
                    <p className="mt-2 px-8 text-base font-semibold text-neutral-400 line-clamp-2">
                      Just a random collection.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-neutral-300">4 items</span>
                    <span className="text-sm font-semibold text-neutral-400">
                      By: Vukašin Vitorović
                    </span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <CreateModal open={open} setOpen={setOpen} />
        <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
      </div>
    </>
  )
}

export default Admin
