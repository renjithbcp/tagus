// ProductSearchPage.js
import React, { useState } from 'react';
import ProductCard from './ProductCard.js';
import ProductDetailsPage from './productDetailsPage.js';
import productsData from './Product.js';

const ProductSearchPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    console.log("selected product",product);
    setSelectedProduct(product);
  };

  return (
    <div className="product-search-page">
      <div className="filters">
        {/* Filter inputs */}
      </div>
      <div className="product-list">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleProductClick}
          />
        ))}
      </div>
      {selectedProduct && <ProductDetailsPage product={selectedProduct} />}
      
    </div>
  );
};

export default ProductSearchPage;
