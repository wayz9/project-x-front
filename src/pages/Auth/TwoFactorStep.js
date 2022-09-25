const TwoFactorStep = () => {
  const handle2Fa = async (e) => {
    e.preventDefault()
    // Rest of the code
  }

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
        <h1 className="sr-only">Two factor step challenge</h1>
        <form
          onSubmit={handle2Fa}
          className="relative w-full border border-gray-200 bg-white sm:max-w-[29rem] sm:rounded-2xl">
          <div className="mt-9 px-9 text-center">
            <h2 className="text-lg font-medium text-gray-800">2FA Authorization Step</h2>
            <p className="mt-2 text-md leading-5 text-gray-500">
              Enter the current code from application.
            </p>
          </div>
          <div className="mt-12 px-9">
            <div className="flex items-center justify-center gap-x-4">
              <div className="aspect-square shrink-0">
                <input
                  type="text"
                  className="h-full w-12 text-center text-lg leading-6"
                  maxLength={1}
                />
              </div>
              <div className="aspect-square shrink-0">
                <input
                  type="text"
                  className="h-full w-12 text-center text-lg leading-6"
                  maxLength={1}
                />
              </div>
              <div className="aspect-square shrink-0">
                <input
                  type="text"
                  className="h-full w-12 text-center text-lg leading-6"
                  maxLength={1}
                />
              </div>
              <div className="aspect-square shrink-0">
                <input
                  type="text"
                  className="h-full w-12 text-center text-lg leading-6"
                  maxLength={1}
                />
              </div>
              <div className="aspect-square shrink-0">
                <input
                  type="text"
                  className="h-full w-12 text-center text-lg leading-6"
                  maxLength={1}
                />
              </div>
              <div className="aspect-square shrink-0">
                <input
                  type="text"
                  className="h-full w-12 text-center text-lg leading-6"
                  maxLength={1}
                />
              </div>
            </div>
          </div>
          <div className="mt-12 mb-9 px-9">
            <button type="submit" className="btn-primary block w-full">
              Confirm
            </button>
            <button className="ml-[25%] mt-4 text-center text-sm font-medium text-gray-600 hover:text-gray-800">
              Use recovery code instead?
            </button>
          </div>
          <div className="absolute inset-x-0 -bottom-6 -mx-[120px] h-px bg-gradient-to-r from-black/0 via-black/[0.15] to-black/0"></div>
          <div className="absolute inset-x-0 -top-6 -mx-[120px] h-px bg-gradient-to-r from-black/0 via-black/[0.15] to-black/0"></div>
          <div className="absolute inset-y-0 -right-6 -my-24 w-px bg-gradient-to-b from-black/0 via-black/[0.15] to-black/0"></div>
          <div className="absolute inset-y-0 -left-6 -my-24 w-px bg-gradient-to-b from-black/0 via-black/[0.15] to-black/0"></div>
          <div className="absolute inset-x-0 bottom-0 -mb-px flex h-8 w-full items-end overflow-hidden">
            <div className="-mb-px flex h-0.5 w-full">
              <div className="w-full flex-none bg-gradient-to-r from-violet-200/0 via-violet-500 to-violet-200/0 blur-[1px]"></div>
              <div className="w-full flex-none bg-gradient-to-r from-primary-200/0 via-primary-400 to-primary-200/0 blur-sm"></div>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default TwoFactorStep