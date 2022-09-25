import { Link } from 'react-router-dom'
import { ArrowNarrowRight } from 'tabler-icons-react'

const Forbidden = () => {
  return (
    <main className="relative flex min-h-screen flex-1 flex-col overflow-hidden py-8 sm:px-4 md:px-6 lg:px-8">
      <div className="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-bg"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="100%"
              patternTransform="translate(0 -1)">
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-bg)"></rect>
        </svg>
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center pb-20 sm:pt-12">
        <div className="flex flex-col items-center justify-center">
          <span>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30 36L24.707 41.293C24.254 41.746 23.64 42 23 42C22.36 42 21.746 41.746 21.293 41.293L18.707 38.707C18.254 38.254 18 37.64 18 37C18 36.36 18.254 35.746 18.707 35.293L24 30L18.707 24.707C18.254 24.254 18 23.64 18 23C18 22.36 18.254 21.746 18.707 21.293L21.293 18.707C21.746 18.254 22.36 18 23 18C23.64 18 24.254 18.254 24.707 18.707L30 24L35.293 18.707C35.746 18.254 36.36 18 37 18C37.64 18 38.254 18.254 38.707 18.707L41.293 21.293C41.746 21.746 42 22.36 42 23C42 23.64 41.746 24.254 41.293 24.707L36 30L41.293 35.293C41.746 35.746 42 36.36 42 37C42 37.64 41.746 38.254 41.293 38.707L38.707 41.293C38.254 41.746 37.64 42 37 42C36.36 42 35.746 41.746 35.293 41.293L30 36Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M21.657 6H38.343C39.404 6 40.421 6.421 41.171 7.172L52.828 18.829C53.578 19.579 54 20.597 54 21.657V38.343C54 39.404 53.579 40.421 52.828 41.171L41.172 52.828C40.421 53.579 39.404 54 38.343 54H21.657C20.596 54 19.579 53.579 18.829 52.828L7.172 41.172C6.421 40.421 6 39.404 6 38.343V21.657C6 20.596 6.421 19.579 7.172 18.829L18.828 7.172C19.579 6.421 20.596 6 21.657 6V6Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path d="M51 29H49V31H51V29Z" fill="#4B5563" />
              <path d="M51 33H49V35H51V33Z" fill="#4B5563" />
              <path d="M51 37H49V39H51V37Z" fill="#4B5563" />
              <path d="M11 21H9V23H11V21Z" fill="#4B5563" />
              <path d="M11 25H9V27H11V25Z" fill="#4B5563" />
              <path d="M11 29H9V31H11V29Z" fill="#4B5563" />
              <path
                d="M52.4121 12.4121L55.6571 15.6571C57.1571 17.1571 58.0001 19.1921 58.0001 21.3141V25.0001"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M48.3999 8.3999L50.5999 10.5999"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M12.4121 7.588L15.6571 4.343C17.1571 2.843 19.1921 2 21.3141 2H25.0001"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M8.3999 11.5999L10.5999 9.3999"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M7.588 47.588L4.343 44.343C2.843 42.843 2 40.808 2 38.686V35"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M11.5999 51.5999L9.3999 49.3999"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M47.588 52.4121L44.343 55.6571C42.843 57.1571 40.808 58.0001 38.686 58.0001H35"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M51.5999 48.3999L49.3999 50.5999"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </span>
          <h1 className="mt-8 text-lg font-medium text-gray-800">Access Denied</h1>
          <p className="mt-4 text-center text-base text-gray-600">
            You dont have permission to <br /> access this page.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn-secondary flex items-center gap-x-1">
              <span>Back to home</span>
              <span>
                <ArrowNarrowRight size={20} className="text-gray-400" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Forbidden
