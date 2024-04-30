import React, { useState } from 'react';
import './ProductSearchBar.css';

const ProductSearchBar = ({ onSearchInputChange, onSortChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('newest'); // Default sort option

  // Function to debounce the search input change
  let debounceTimer;
  const handleSearchChange = (event) => {
    const query = event.currentTarget.value;
    setSearchQuery(query);

    // Clear the previous debounce timer
    clearTimeout(debounceTimer);

    // Set a new debounce timer
    debounceTimer = setTimeout(() => {
      onSearchInputChange(query);
    }, 300); // Adjust the delay as needed (e.g., 300 milliseconds)
  };

  const handleSortChange = (event) => {
    if (event && event.target && event.target.value !== undefined) {
      const option = event.target.value;
      setSortOption(option);
      console.log("event->",event);
      console.log("event.target.value->",event.target.value);
      console.log("Option-->",option);
      onSortChange(option);
    } else {
      console.error('Event object or target value is undefined.');
    }
  };
  

  return (
    <div className="product-search-bar">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        {/* Breadcrumbs content */}
      </div>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search Products..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* Sort dropdown */}
      <select value={sortOption} onChange={handleSortChange}>
        <option value="newest">Newest First</option>
        <option value="rating">Rating</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default ProductSearchBar;
