import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './AllProducts.css'; // nezapomeň na CSS import

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/products');
        const json = await res.json();
        setProducts(json.payload || []);
      } catch (error) {
        console.error('Chyba při načítání produktů:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  if (!filteredProducts.length) {
    return (
      <div className="no-products">
        No available products.
      </div>
    );
  }

  return (
    <div className="all-products-container">
      <div className="all-products-header">
        <p className="all-products-title">All Products</p>
        <div className="all-products-underline"></div>
      </div>

      <div className="all-products-grid">
        {filteredProducts
          .filter(product => product.availability !== false)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;