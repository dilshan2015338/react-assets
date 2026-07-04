import React from 'react';

const ProductFilters = ({ 
  searchTerm, 
  setSearchTerm, 
  category, 
  setCategory,
  priceRange,
  setPriceRange,
  categories 
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search Products
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="🔍 Search..."
            className="input-field"
          />
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-field"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
      </div>
    </div>
  );
};

export default ProductFilters;
