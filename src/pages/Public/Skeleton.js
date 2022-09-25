const Skeleton = () => {
  return (
    <div className="relative animate-pulse overflow-hidden rounded-lg bg-gray-50/25">
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
  )
}

export default Skeleton
