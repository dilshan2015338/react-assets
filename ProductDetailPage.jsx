import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Mock API call - will be replaced with real API
    const mockProducts = [
      { id: 1, name: "Wireless Bluetooth Headphones", description: "Premium noise-cancelling headphones with 30hr battery life. Perfect for travel and daily use.", price: 79.99, category: "Electronics", stock: 15, rating: 4.8, reviews: 127 },
      { id: 2, name: "Smart Fitness Watch", description: "Track your health with heart rate monitor, GPS, and sleep tracking. Water resistant to 50m.", price: 149.99, category: "Electronics", stock: 8, rating: 4.6, reviews: 89 },
    ];
    
    const found = mockProducts.find(p => p.id === parseInt(id));
    setProduct(found);
    setLoading(false);
  }, [id]);

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (!product) return <div className="text-center py-12">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="card">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center gap-4 mt-2">
            <span className="badge bg-green-100 text-green-700">★ {product.rating}</span>
            <span className="text-gray-500">({product.reviews} reviews)</span>
            <span className={`badge ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
            </span>
          </div>
          
          <p className="text-4xl font-bold text-blue-600 mt-4">
            ${product.price.toFixed(2)}
          </p>
          
          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.description}
          </p>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="btn-secondary px-4 py-2"
              >
                -
              </button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="btn-secondary px-4 py-2"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="mt-6 flex gap-4">
            <button className="btn-primary flex-1 text-lg">
              🛒 Add to Cart
            </button>
            <button className="btn-secondary">
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
