// ProductSearchPage.js
import React, { useState } from 'react';
import ProductCard from './ProductCard.js';
import './ProductSearchPage.css';
import ProductDetailsPage from './productDetailsPage.js';
import productsData from './Product.js';

const ProductSearchPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    category: '',
    brand: '',
    size: '',
    color: '',
    material: '',
    availability: '',
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (filterName, value) => {
    setFilterOptions({
      ...filterOptions,
      [filterName]: value,
    });
  };

  const filteredProducts = productsData.filter((product) => {
    // Filter by search query
    const nameMatches = product.name.toLowerCase().includes(searchQuery.toLowerCase());
  
    // Add additional filtering logic based on filter options
    const categoryMatches = filterOptions.category ? product.category === filterOptions.category : true;
    const brandMatches = filterOptions.brand ? product.brand === filterOptions.brand : true;
  
    // Log product information to debug
    console.log('Product:', product);
  
    const sizeMatches = filterOptions.size ? (product.technicalSpecifications && product.technicalSpecifications.dimensions && product.technicalSpecifications.dimensions.width === parseInt(filterOptions.size)) : true;
const colorMatches = filterOptions.color ? (product.technicalSpecifications && product.technicalSpecifications.color === filterOptions.color) : true;
const materialMatches = filterOptions.material ? (product.technicalSpecifications && product.technicalSpecifications.material === filterOptions.material) : true;
    const availabilityMatches = filterOptions.availability ? product.availability === filterOptions.availability : true;
  
    return nameMatches && categoryMatches && brandMatches && sizeMatches && colorMatches && materialMatches && availabilityMatches;
  });
  
  

  // Extract unique values for each filter option
  const categories = [...new Set(productsData.map(product => product.category))];
  const brands = [...new Set(productsData.map(product => product.brand))];
  const sizes = [...new Set(productsData.map(product => product.technicalSpecifications.dimensions.width))];
  const colors = [...new Set(productsData.map(product => product.technicalSpecifications.color))];
  const materials = [...new Set(productsData.map(product => product.technicalSpecifications.material))];
  const availabilities = [...new Set(productsData.map(product => product.availability))];

  return (
    <div className="product-search-page">
      <div className="top-section">
        {/* Breadcrumbs, search bar, and sort dropdown */}
      </div>
      <div className="main-content">
        <div className="filters">
          <h2>Filtering Options</h2>
          <label>Category:</label>
          <select value={filterOptions.category} onChange={(e) => handleFilterChange('category', e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <label>Brand:</label>
          <select value={filterOptions.brand} onChange={(e) => handleFilterChange('brand', e.target.value)}>
            <option value="">All Brands</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          <label>Size:</label>
          <select value={filterOptions.size} onChange={(e) => handleFilterChange('size', e.target.value)}>
            <option value="">All Sizes</option>
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          <label>Color:</label>
          <select value={filterOptions.color} onChange={(e) => handleFilterChange('color', e.target.value)}>
            <option value="">All Colors</option>
            {colors.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
          <label>Material:</label>
          <select value={filterOptions.material} onChange={(e) => handleFilterChange('material', e.target.value)}>
            <option value="">All Materials</option>
            {materials.map(material => (
              <option key={material} value={material}>{material}</option>
            ))}
          </select>
          <label>Availability:</label>
          <select value={filterOptions.availability} onChange={(e) => handleFilterChange('availability', e.target.value)}>
            <option value="">All Availabilities</option>
            {availabilities.map(availability => (
              <option key={availability} value={availability}>{availability}</option>
            ))}
          </select>
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </div>
      {selectedProduct && <ProductDetailsPage product={selectedProduct} />}
    </div>
  );
};

export default ProductSearchPage;
