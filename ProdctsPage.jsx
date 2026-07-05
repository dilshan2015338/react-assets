import React, {useState, useMemo, useEffect} from 'react';
import ProductCard from '../components/common/ProductCard';
import ProductFilters from '../components/products/ProductFilters';
import {useProductContext} from "../context/ProductContext.jsx";

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const { products, loading, error, loadProducts, getProductById } = useProductContext();


    // Mock data

    // const allProducts = [
    //     { id: 1, name: "Wireless Bluetooth Headphones", description: "Premium noise-cancelling...", price: 79.99, category: "Electronics", stock: 15, rating: 4.8, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
    //     { id: 2, name: "Smart Fitness Watch", description: "Track your health...", price: 149.99, category: "Electronics", stock: 8, rating: 4.6 , image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"},
    //     { id: 3, name: "Classic Leather Backpack", description: "Handcrafted genuine...", price: 59.99, category: "Fashion", stock: 20, rating: 4.3 , image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300"},
    //     { id: 4, name: "Smartphone 12 Pro", description: "Latest model with 5G...", price: 999.99, category: "Electronics", stock: 0, rating: 4.9 , image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300"},
    // ];

    //Get data from api
    useEffect(() => {
        if (!loading && products.length > 0) {
            const allProducts = [];
            for (let i = 0; i < products.length; i++) {
                allProducts.push(products[i]);
            }
            setAllProducts(allProducts);
            const categories = [...new Set(products.map(p => p.category))];
            setCategories(categories);
        }
    }, [products, loading]);

    useEffect(() => {
        let result = allProducts;

        if (searchTerm.trim()) {
            result = result.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (category !== 'all') {
            result = result.filter(p => p.category === category);
        }

        result = result.filter(p =>
            p.price >= priceRange.min && p.price <= priceRange.max
        );

        const filteredProducts = [];
        if (result.length > 0) {
            result.forEach(item => filteredProducts.push(item));
            setFilteredProducts(filteredProducts);
        }
    }, [products, loading, allProducts, searchTerm, category, priceRange]);

    return(
        <>
            {
                filteredProducts.length > 0 ?
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-bold text-gray-800">All Products</h1>
                            <span className="text-gray-500">{filteredProducts.length} products</span>
                        </div>

                        <ProductFilters
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            category={category}
                            setCategory={setCategory}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            categories={categories}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product}/>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-6xl mb-4">🔍</p>
                                    <p className="text-gray-500 text-lg">No products found</p>
                                    <p className="text-gray-400">Try adjusting your filters</p>
                                </div>
                            )}
                        </div>
                    </div>:<div className="text-center py-12">Loading products...</div>
            }
        </>
    );
};

export default ProductsPage;
