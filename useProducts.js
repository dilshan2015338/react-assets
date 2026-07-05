import { useState, useEffect, useMemo } from 'react';
import { productApi } from '../services/api';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const data = await productApi.getAll();
            setProducts(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const getProductById = async (id) => {
        try {
            return await productApi.getById(id);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const categories = useMemo(() => {
        return [...new Set(products.map(p => p.category))];
    }, [products]);

    return { products, loading, error, categories, loadProducts, getProductById };
};
