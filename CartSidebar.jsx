import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartSidebar = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, updateQuantity } = useCartContext();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50">
            {/* Overlay */}
            <div className="fixed inset-0 z-40" onClick={onClose}>

            {/* Sidebar */}
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold">🛒 Your Cart</h2>
                    <button onClick={onClose} className="text-2xl hover:text-gray-600">✕</button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-4">
                    {cart.items.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-6xl mb-4">🛒</p>
                            <p className="text-gray-500">Your cart is empty</p>
                            <button onClick={onClose} className="btn-primary mt-4">Continue Shopping</button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.items.map(item => (
                                <div key={item.productId} className="flex gap-4 border-b pb-4">
                                    <img src={item.image || 'https://via.placeholder.com/80'} alt={item.name}
                                         className="w-20 h-20 object-cover rounded"/>
                                    <div className="flex-1">
                                        <h4 className="font-semibold">{item.name}</h4>
                                        <p className="text-blue-600 font-bold">${item.price.toFixed(2)}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <button
                                                onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                                                className="btn-secondary px-2 py-1 text-sm"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                                className="btn-secondary px-2 py-1 text-sm"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item.productId)}
                                                className="text-red-500 hover:text-red-700 ml-auto"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cart.items.length > 0 && (
                    <div className="border-t p-4">
                        <div className="flex justify-between mb-4">
                            <span className="font-bold">Total:</span>
                            <span className="font-bold text-xl text-blue-600">${cart.total.toFixed(2)}</span>
                        </div>
                        <Link to="/checkout" className="btn-primary w-full text-center">
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </div>
</div>
)
    ;
};

export default CartSidebar;
