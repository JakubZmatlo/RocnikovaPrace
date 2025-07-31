import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams(); // zachytíme /products/:category
  const isAll = category === "all";

  useEffect(() => {
    const url = isAll
      ? 'http://localhost:4000/products'
      : `http://localhost:4000/products?category=${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.payload) {
          setProducts(data.payload);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => console.error('Chyba při načítání produktů:', err));
  }, [category]);

  return (
    <div>
      <h2>{isAll ? 'Všechny produkty' : `Kategorie: ${category}`}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '12px', width: '200px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>{product.category}</p>

            {}
            {Array.isArray(product.description) && product.description.length > 0 && (
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                {product.description[0]}
              </p>
            )}

            <strong>{product.price} $</strong>
          </div>
        ))}

        {products.length === 0 && <p>No products in this category.</p>}
      </div>
    </div>
  );
};

export default Products;