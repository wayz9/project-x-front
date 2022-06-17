import profileImage from '../assets/imgs/user.jpg'
import { Plus, Bell, Search, MenuHamburger, ChevronSmallDown } from 'react-swm-icon-pack'
import Nav from '../components/Nav'

const Admin = () => {
  return (
    <>
      <div className="bg-moovies min-h-screen antialiased">
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
                    <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary-400"></div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="rounded-md p-2 text-neutral-200 transition-colors hover:bg-neutral-800/50 focus:bg-neutral-800/60 focus:text-primary-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-neutral-700/40">
                      <Search color="currentColor" set="curved" strokeWidth="1.8" />
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin
