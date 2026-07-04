import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card hover:shadow-xl transition hover:-translate-y-1">
      <div className="relative">
        <img 
          src={product.image || 'https://via.placeholder.com/300x200'} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        {product.stock <= 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            Out of Stock
          </span>
        )}
      </div>
      
      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg hover:text-blue-600 transition line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          <span className="badge bg-green-100 text-green-700">
            ★ {product.rating || 4.5}
          </span>
        </div>
        <button 
          className="btn-primary w-full mt-3 text-sm"
          disabled={product.stock <= 0}
        >
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
