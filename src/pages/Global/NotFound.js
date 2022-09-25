import { Link } from 'react-router-dom'
import { ArrowNarrowRight } from 'tabler-icons-react'

const NotFound = () => {
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
                d="M50.859 34.197L55.073 41.516C55.663 42.542 56 43.731 56 45C56 48.866 52.866 52 49 52H11C7.134 52 4 48.866 4 45C4 43.73 4.338 42.539 4.929 41.512L23.929 8.512C25.138 6.413 27.404 5 30 5C32.594 5 34.858 6.411 36.067 8.507L47.142 27.743"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M53.5969 30.269L57.3019 36.704"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M46.6221 18.1541L52.1771 27.8021"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M48.5569 30.2L49.4769 31.7959"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M6.69092 29.7679L13.2729 18.3369"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M2.698 36.703L5.244 32.281"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M25.076 26.833L24.016 21.177C24.005 21.12 24 21.06 24 21C24 20.448 24.448 20 25 20H35C35.552 20 36 20.448 36 21C36 21.064 35.994 21.126 35.983 21.186L32.983 37.185C32.896 37.649 32.489 38 32 38H28C27.511 38 27.105 37.65 27.017 37.186L25.889 31.172"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path d="M13 55H11V57H13V55Z" fill="#4B5563" />
              <path d="M17 55H15V57H17V55Z" fill="#4B5563" />
              <path d="M21 55H19V57H21V55Z" fill="#4B5563" />
              <path
                d="M47.626 11.2151L52.523 19.7201"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M30 48C31.6569 48 33 46.6569 33 45C33 43.3431 31.6569 42 30 42C28.3431 42 27 43.3431 27 45C27 46.6569 28.3431 48 30 48Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </span>
          <h1 className="mt-8 text-lg font-medium text-gray-800">Page Not Found</h1>
          <p className="mt-4 text-center text-base text-gray-600">
            Page or a resource you are
            <br />
            looking for is not found.
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

export default NotFound
