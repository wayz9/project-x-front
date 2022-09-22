import { Pencil, Trash } from 'tabler-icons-react'

const Skeleton = () => {
  return (
    <div className="grid min-h-screen place-items-center justify-items-center">
      <div className="space-y-6">
        <div className="relative max-w-md overflow-hidden rounded-lg">
          <div className="flex items-center justify-between gap-x-8 rounded-lg border border-gray-200 py-3 pr-4 pl-8">
            <div>
              <div className="flex gap-x-1.5 text-gray-800">
                <span>XXXX XX</span>
                <span>&middot;</span>
                <span>XXXX</span>
                <span className="hidden md:inline">&middot;</span>
                <span className="hidden md:inline">XXXXX FPS</span>
              </div>
              <p className="overflow-anywhere mt-1 text-sm text-gray-400 line-clamp-1">
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <button className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                <Pencil strokeWidth={1.5} />
              </button>
              <button className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                <Trash strokeWidth={1.5} />
              </button>
            </div>
          </div>
          <div className="absolute inset-y-0 w-3.5 bg-green-500"></div>
        </div>
        <div className="relative max-w-md animate-pulse overflow-hidden rounded-lg bg-gray-50/25">
          <div className="flex items-center justify-between gap-x-8 rounded-lg border border-gray-200 py-3 pr-4 pl-8">
            <div className="grow">
              <div className="mb-2 h-5 w-3/4 rounded bg-gray-200/90"></div>
              <div className="h-5 w-full rounded bg-gray-200/90"></div>
            </div>
            <div className="mr-2 flex items-center gap-x-4">
              <div className="h-7 w-7 rounded-md bg-gray-200/60"></div>
              <div className="h-7 w-7 rounded-md bg-gray-200/60"></div>
            </div>
          </div>
          <div className="absolute inset-y-0 w-3.5 bg-gray-300/90"></div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
