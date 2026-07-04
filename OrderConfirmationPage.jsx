import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="card max-w-lg mx-auto">
        <p className="text-6xl mb-4">✅</p>
        <h1 className="text-3xl font-bold text-green-600 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
        <p className="text-sm text-gray-500 mb-6">An email confirmation has been sent to your email address.</p>
        <Link to="/products" className="btn-primary inline-block">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
