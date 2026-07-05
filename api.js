const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// Helper
const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || 'API request failed');
    }
    return response.json();
};

// Product API
export const productApi = {
    getAll: async () => {
        const response = await fetch(`${API_BASE_URL}/products`);
        return handleResponse(response);
    },
    getById: async (id) => {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        return handleResponse(response);
    },
    getByCategory: async (category) => {
        const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
        return handleResponse(response);
    },
};

// Cart API
export const cartApi = {
    getCart: async () => {
        const response = await fetch(`${API_BASE_URL}/cart`);
        return handleResponse(response);
    },
    addItem: async (productId, quantity) => {
        const response = await fetch(`${API_BASE_URL}/cart/items`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, quantity }),
        });
        return handleResponse(response);
    },
    updateItem: async (productId, quantity) => {
        const response = await fetch(`${API_BASE_URL}/cart/items/${productId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantity }),
        });
        return handleResponse(response);
    },
    removeItem: async (productId) => {
        const response = await fetch(`${API_BASE_URL}/cart/items/${productId}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Remove failed');
        return true;
    },
    clearCart: async () => {
        const response = await fetch(`${API_BASE_URL}/cart/clear`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Clear failed');
        return true;
    },
};

// Order API
export const orderApi = {
    createOrder: async (orderData) => {
        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData),
        });
        return handleResponse(response);
    },
    getOrders: async () => {
        const response = await fetch(`${API_BASE_URL}/orders`);
        return handleResponse(response);
    },
};
