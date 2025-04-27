import React from 'react'
import { useAppContext } from '../context/AppContext'

const Categories = () => {

  const {navigate} = useAppContext ()

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Categories</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>

        <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center' 
        onClick={() => {navigate(`/products/worldchampionship`)}}>
            <img src="ms.jpg" alt="" className='group-hover:scale-108 transition max-w-28'/>
            <p className='text-sm font-medium'>World Championship</p>
        </div>

        <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center' 
        onClick={() => {navigate(`/products/nhl`)}}>
            <img src="nhl.jpg" alt="" className='group-hover:scale-108 transition max-w-28'/>
            <p className='text-sm font-medium'>NHL</p>
        </div>

        <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center' 
        onClick={() => {navigate(`/products/extraliga`)}}>
            <img src="extraliga.jpg" alt="" className='group-hover:scale-108 transition max-w-28'/>
            <p className='text-sm font-medium'>Extraliga</p>
        </div>

        <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center' 
        onClick={() => {navigate(`/products/binders`)}}>
            <img src="binder.jpg" alt="" className='group-hover:scale-108 transition max-w-28'/>
            <p className='text-sm font-medium'>Binders</p>
        </div>

      </div>
    </div>
  )
}

export default Categories
