import { useState, useEffect } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import tmdbApi, { movieType } from '../../api/tmdbApi'
import { IMovieItem } from '../../interfaces'
import HeroSliderItem from './HeroSliderItem'
import TrailerModal from './TrailerModal'
import './heroslider.scss'

export default function HeroSlider() {
  SwiperCore.use([Autoplay])

  const [movieItems, setMovieItems] = useState<IMovieItem[]>([])

  useEffect(() => {
    const getMovies = async () => {
      const params = {page: 1}
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, params)
        setMovieItems(response.data.results.slice(1, 4))
        console.log(response)
      } catch(err) {
        console.log(err)
      }
    }
    getMovies()
  }, [])

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{delay: 3000}}
      >
        {
          movieItems.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <HeroSliderItem item={item} className={`${isActive ? 'active' : ''}`} />
              )}
            </SwiperSlide>
          ))
        }
      </Swiper>
      {
          movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)
      }
    </div>
  )
}
