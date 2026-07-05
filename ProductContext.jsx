import React, { createContext, useContext } from 'react';
import {useProducts} from "../hooks/useProducts.js";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const cartHook = useProducts();
    return (
        <ProductContext.Provider value={cartHook}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useCartContext must be used within CartProvider');
    }
    return context;
};
