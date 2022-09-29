const MovieMobile = ({ movie }) => {
  return (
    <div className="-mx-4 rounded-lg border border-dotted border-gray-200 p-4 md:-mx-5 md:px-5">
      <div className="flex gap-x-5">
        <div className="shrink-0">
          {movie.poster ? (
            <img
              src={movie.poster.path}
              alt={movie.title}
              className="w-20 rounded-md border border-gray-200 object-cover object-center md:w-[86px]"
            />
          ) : (
            <div className="aspect-[2/3] w-20 rounded-md border border-gray-200 bg-gray-50 md:w-[86px]" />
          )}
        </div>
        <div className="flex grow flex-col">
          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <div className="font-medium uppercase text-gray-800 line-clamp-2 md:line-clamp-1">
              {movie.title}
              <span className="pl-2.5 font-mono text-sm font-medium leading-6 text-gray-400">
                ({new Date(movie.release_date).getFullYear()})
              </span>
            </div>
            <div className="mt-2 font-mono text-md italic text-gray-500 line-clamp-1 md:mt-0">
              {movie.tagline}
            </div>
          </div>
          <div className="hidden grow md:block">
            <p className="mt-1.5 w-2/3 text-md leading-6 text-gray-500 line-clamp-2">
              {movie.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="mt-2.5 text-sm text-gray-400 md:mt-0 md:text-md md:line-clamp-1">
              Available in: 1080P, 2160P, 720P
            </div>
            <div className="hidden md:block">
              <span className="text-sm text-gray-500">Added by:</span>
              <span className="pl-1.5 text-md text-gray-800">Vukasin Vitorovic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieMobile
