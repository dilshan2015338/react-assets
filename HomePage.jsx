import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to ShopHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover amazing products at unbeatable prices
          </p>
          <Link to="/products" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
            Start Shopping
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Electronics', 'Fashion', 'Books', 'Home'].map(category => (
              <div key={category} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition cursor-pointer">
                <span className="text-4xl block mb-2">
                  {category === 'Electronics' ? '📱' : 
                   category === 'Fashion' ? '👕' : 
                   category === 'Books' ? '📚' : '🏠'}
                </span>
                <h3 className="font-semibold">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
