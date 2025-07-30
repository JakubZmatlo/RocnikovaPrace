import React from 'react'
import { Link } from 'react-router-dom'
import banner_horizontal from '../../assets/banner_horizontal.png'
import banner_vertical from '../../assets/banner_vertical.png'
import './MainBanner.css'

const MainBanner = () => {
  return (
    <div className='banner'>
      <img src={banner_horizontal} alt="" className='banner_img' />
      <img src={banner_vertical} alt="" className='banner_img_vertical' />
      <div className='banner_content'>
        <h1 className='banner_content_slogan'>
          The best at what they do.</h1>


        <div className='banner_content_link'>
          <Link to={"/products"} className='banner_link'>
            Shop now
            <img className='banner_arrow' src="right-arrow.svg" alt="white-arrow" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
