import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import { categories } from '../../assets/assets'
import './ProductCategory.css'

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
        console.error("Error while loading categories:", err)
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
    return <div className="loading">Loading products...</div>;
  }
  
  if (!categoryProducts || categoryProducts.length === 0) {
    return <div className="no-products">No products found in this category.</div>;
  }
  
  return (
    <div className="product-category-container">
      {searchCategory && (
        <div className="category-header">
          <p className="category-title">{searchCategory.text.toUpperCase()}</p>
          <div className="category-underline"></div>
        </div>
      )}
  
      <div className="category-grid">
        {categoryProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductCategory