import Chaos from '../../components/Abstract/Chaos'
import Logo from '../../components/Logo'

const Movie = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-lex">
      <section className="mx-auto w-full max-w-screen-xl">
        <nav className="flex items-center justify-between px-8 pt-6">
          <div className="flex items-center gap-16">
            <div>
              <Logo className="h-7" />
            </div>
            <div className="flex items-center gap-8 text-[15px] font-medium leading-5 text-neutral-400"></div>
          </div>
          <div className="flex items-center gap-8"></div>
        </nav>
      </section>
      <section></section>
      <div className="absolute right-[40vw] -top-[150px] z-20 lg:-top-[290px]">
        <div>
          <Chaos className="h-[350%] w-[350%] opacity-30 lg:h-[600%] lg:w-[600%]" />
        </div>
      </div>
    </div>
  )
}

export default Movie
