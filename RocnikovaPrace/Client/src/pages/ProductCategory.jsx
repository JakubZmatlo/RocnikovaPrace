import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories } from '../assets/assets'

const ProductCategory = () => {
  const { category } = useParams()
  const [categoryProducts, setCategoryProducts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true)
        const res = await fetch(`http://localhost:4000/products?category=${category}`)
        const data = await res.json()
        setCategoryProducts(data.payload || [])
      } catch (err) {
        console.error("Chyba při načítání kategorií:", err)
        setCategoryProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchCategoryProducts()
  }, [category])

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  )

  if (loading) {
    return (
      <div className='flex items-center justify-center h-[60vh]'>
        <p className='text-2xl font-medium text-primary'>Loading products...</p>
      </div>
    )
  }

  if (!categoryProducts || categoryProducts.length === 0) {
    return (
      <div className='flex items-center justify-center h-[60vh]'>
        <p className='text-2xl font-medium text-primary'>
          No products found in this category.
        </p>
      </div>
    )
  }

  return (
    <div className='mt-16'>
      {searchCategory && (
        <div className='flex flex-col items-end w-max'>
          <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
          <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>
      )}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {categoryProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductCategory