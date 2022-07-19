import { Splide, SplideSlide } from '@splidejs/react-splide'
import Img1 from '../assets/imgs/people/1.jpg'
import Img2 from '../assets/imgs/people/2.jpg'
import Img3 from '../assets/imgs/people/3.jpg'
import Img4 from '../assets/imgs/people/4.jpg'
import Img5 from '../assets/imgs/people/5.jpg'
import Img6 from '../assets/imgs/people/6.jpg'
import Img7 from '../assets/imgs/people/7.jpg'
import Img8 from '../assets/imgs/people/8.jpg'
import Img9 from '../assets/imgs/people/9.jpg'
import Img10 from '../assets/imgs/people/10.jpg'

const CarouselDemo = () => {
  return (
    <div className="bg-moovies min-h-screen font-lex antialiased">
      <div className="mx-auto max-w-screen-xl py-20  px-4">
        <div className="mb-10 text-xl font-medium">Carousel Demo</div>
        <Splide
          options={{
            type: 'loop',
            rewind: true,
            perPage: 5,
            gap: '28px',
            breakpoints: {
              1200: { perPage: 5 },
              1024: { perPage: 4 },
              768: { perPage: 3, gap: '20px' },
              640: { perPage: 2, gap: '20px' }
            }
          }}
          aria-label="My Favorite Images">
          <SplideSlide>
            <div className="flex flex-col items-center justify-center">
              <img src={Img1} alt="" className="rounded-xl border border-neutral-800" />
              <div className="mt-3.5 text-center font-medium text-neutral-200 line-clamp-1 sm:text-lg">
                Benedict Cumberbatch
              </div>
              <div className="mt-1 text-center text-sm text-neutral-400 sm:text-base">
                Dr. Stephen Strange
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col items-center justify-center">
              <img src={Img2} alt="" className="rounded-xl border border-neutral-800" />
              <div className="mt-3.5 text-center font-medium text-neutral-200 line-clamp-1 sm:text-lg">
                Charlize Theron
              </div>
              <div className="mt-1 text-center text-sm text-neutral-400 sm:text-base">Clea</div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col items-center justify-center">
              <img src={Img3} alt="" className="rounded-xl border border-neutral-800" />
              <div className="mt-3.5 text-center font-medium text-neutral-200 line-clamp-1 sm:text-lg">
                Rachel McAdams
              </div>
              <div className="mt-1 text-center text-sm text-neutral-400 sm:text-base">
                Dr. Christine Palmer
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col items-center justify-center">
              <img src={Img4} alt="" className="rounded-xl border border-neutral-800" />
              <div className="mt-3.5 text-center font-medium text-neutral-200 line-clamp-1 sm:text-lg">
                Chiwetel Ejiofor
              </div>
              <div className="mt-1 text-center text-sm text-neutral-400 sm:text-base">
                Baron Karl Mordo
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col items-center justify-center">
              <img src={Img5} alt="" className="rounded-xl border border-neutral-800" />
              <div className="mt-3.5 text-center font-medium text-neutral-200 line-clamp-1 sm:text-lg">
                Bruce Campbell
              </div>
              <div className="mt-1 text-center text-sm text-neutral-400 sm:text-base">
                Pizza Poppa
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col items-center justify-center">
              <img src={Img6} alt="" className="rounded-xl border border-neutral-800" />
              <div className="mt-3.5 text-center font-medium text-neutral-200 line-clamp-1 sm:text-lg">
                Hayley Atwell
              </div>
              <div className="mt-1 text-center text-sm text-neutral-400 line-clamp-1 sm:text-base">
                Peggy Carter / Captain Carter
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  )
}

export default CarouselDemo
