import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import ProductCard from '../ProductCard/ProductCard'
import './EditorsPick.css'

const EditorsPick = () => {
  const { products } = useAppContext()
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const shuffled = [...products].sort(() => 0.5 - Math.random())
      const selected = shuffled.slice(0, 5)
      setFeaturedProducts(selected)
    }
  }, [products])

  return (
    <div className='editors-pick'>
  <p className='editors-pick__title'>Editor’s Pick</p>
  <div className='editors-pick__row'>
    {featuredProducts.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
</div>
  )
}

export default EditorsPick