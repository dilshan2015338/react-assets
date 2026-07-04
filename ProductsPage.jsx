import React, { useState } from 'react';
import ProductCard from '../components/common/ProductCard';

const ProductsPage = () => {
  // Mock product data
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      description: "Premium noise-cancelling headphones with 30hr battery life",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
      category: "Electronics",
      stock: 15,
      rating: 4.8
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      description: "Track your health with heart rate monitor and GPS",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
      category: "Electronics",
      stock: 8,
      rating: 4.6
    },
    {
      id: 3,
      name: "Classic Leather Backpack",
      description: "Handcrafted genuine leather backpack for everyday use",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300",
      category: "Fashion",
      stock: 20,
      rating: 4.3
    },
    {
      id: 4,
      name: "Smartphone 12 Pro",
      description: "Latest model with 5G and professional camera system",
      price: 999.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300",
      category: "Electronics",
      stock: 0,
      rating: 4.9
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Products</h1>
        <span className="text-gray-500">{products.length} products</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
