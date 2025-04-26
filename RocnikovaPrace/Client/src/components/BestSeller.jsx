import React from 'react'
import ProductCard from './Cards/ProductCard'

const BestSeller = () => {
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best sellers</p>
      <div>
        <ProductCard/>
      </div>
    </div>
  )
}

export default BestSeller
