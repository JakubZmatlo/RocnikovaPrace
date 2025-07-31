import React from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard/ProductCard'

const SearchPage = () => {
  const { products, searchQuery } = useAppContext()

  return (
    <div className='mt-16'>
      <h2 className='text-2xl font-medium mb-4'>
        Výsledky hledání: <span className='text-primary'>"{searchQuery}"</span>
      </h2>

      {products.length > 0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className='text-xl text-gray-500'>Žádné produkty nebyly nalezeny.</p>
      )}
    </div>
  )
}

export default SearchPage