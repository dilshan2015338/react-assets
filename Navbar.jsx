import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <span className="text-xl font-bold text-blue-600">ShopHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-blue-600 transition">Products</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
          </div>

          {/* Cart & Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
            <button className="hidden md:block btn-primary text-sm px-4 py-2">
              Login
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
              <button className="btn-primary w-full">Login</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
