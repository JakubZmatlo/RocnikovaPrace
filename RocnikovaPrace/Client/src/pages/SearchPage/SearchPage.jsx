import React from 'react';
import { useAppContext } from '../../context/AppContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import './SearchPage.css'; // nezapomeň přidat CSS

const SearchPage = () => {
  const { products, searchQuery } = useAppContext();

  return (
    <div className="search-page-container">
      <h2 className="search-heading">
        Výsledky hledání: <span className="search-query-highlight">"{searchQuery}"</span>
      </h2>

      {products.length > 0 ? (
        <div className="search-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="search-empty">Žádné produkty nebyly nalezeny.</p>
      )}
    </div>
  );
};

export default SearchPage;