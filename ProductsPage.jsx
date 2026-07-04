import React, { useState, useMemo } from 'react';
import ProductCard from '../components/common/ProductCard';
import ProductFilters from '../components/products/ProductFilters';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Mock data
  const allProducts = [
    { id: 1, name: "Wireless Bluetooth Headphones", description: "Premium noise-cancelling...", price: 79.99, category: "Electronics", stock: 15, rating: 4.8 },
    { id: 2, name: "Smart Fitness Watch", description: "Track your health...", price: 149.99, category: "Electronics", stock: 8, rating: 4.6 },
    { id: 3, name: "Classic Leather Backpack", description: "Handcrafted genuine...", price: 59.99, category: "Fashion", stock: 20, rating: 4.3 },
    { id: 4, name: "Smartphone 12 Pro", description: "Latest model with 5G...", price: 999.99, category: "Electronics", stock: 0, rating: 4.9 },
  ];

  const categories = [...new Set(allProducts.map(p => p.category))];

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = allProducts;
    
    if (searchTerm.trim()) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }
    
    result = result.filter(p => 
      p.price >= priceRange.min && p.price <= priceRange.max
    );
    
    return result;
  }, [allProducts, searchTerm, category, priceRange]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Products</h1>
        <span className="text-gray-500">{filteredProducts.length} products</span>
      </div>

      <ProductFilters 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        categories={categories}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-6xl mb-4">🔍</p>
            <p className="text-gray-500 text-lg">No products found</p>
            <p className="text-gray-400">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
