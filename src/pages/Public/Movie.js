import Chaos from '../../components/Abstract/Chaos'

const Movie = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <section className="h-screen w-full"></section>
      <section className="h-screen w-full"></section>
      <div className="absolute right-[42vw] -top-[250px] z-20">
        <div>
          <Chaos className="h-[350%] w-[350%] opacity-30 sm:h-[600%] sm:w-[600%]" />
        </div>
      </div>
    </div>
  )
}

export default Movie
