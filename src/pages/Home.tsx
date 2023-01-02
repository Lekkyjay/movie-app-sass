import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from '../components/button/OutlineButton'
import HeroSlider from '../components/hero-slider/HeroSlider'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
                <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
