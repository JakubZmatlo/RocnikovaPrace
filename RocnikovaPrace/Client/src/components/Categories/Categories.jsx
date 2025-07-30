import React from 'react'
import { useNavigate } from "react-router-dom";
import worldchampionship_logo from '../../assets/WorldChampionship_logo.png'
import nhl_logo from '../../assets/nhl_logo.png'
import extraliga_logo from '../../assets/extraliga_logo.png'
import accessories_logo from '../../assets/accesories_logo.jpg'
import './Categories.css'



const Categories = () => {

  const navigate = useNavigate();

  return (
    <div className='categories'>
      <p className='categories_p'>Categories</p>
      <div className='categories_logos'>

        <div className='categories_logo' 
        onClick={() => {navigate(`/products/worldchampionship`)}}>
            <img src={worldchampionship_logo} alt="" className='categories_logo_image'/>
            <p className='categories_logo_p'>World Championship</p>
        </div>

        <div className='categories_logo' 
        onClick={() => {navigate(`/products/nhl`)}}>
            <img src={nhl_logo} alt="" className='categories_logo_image_nhl'/>
            <p className='categories_logo_p'>NHL</p>
        </div>

        <div className='categories_logo' 
        onClick={() => {navigate(`/products/extraliga`)}}>
            <img src={extraliga_logo} alt="" className='categories_logo_image'/>
            <p className='categories_logo_p'>Extraliga</p>
        </div>

        <div className='categories_logo' 
        onClick={() => {navigate(`/products/accesories`)}}>
            <img src={accessories_logo} alt="" className='categories_logo_image'/>
            <p className='categories_logo_p'>Accesories</p>
        </div>

      </div>
    </div>
  )
}

export default Categories
