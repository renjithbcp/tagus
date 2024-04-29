// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onClick }) => {
  const handleClick = () => {
    onClick(product);
    console.log("card-->",product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card" onClick={handleClick}>
      <img src={`/images/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Date: {product.date}</p>
    </Link>
  );
};

export default ProductCard;
