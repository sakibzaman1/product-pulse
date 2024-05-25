import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Products = () => {
    const products = useLoaderData();
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [filterBrand, setFilterBrand] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(() => {
        let updatedProducts = [...products];

        // Apply filtering
        if (filterCategory) {
            updatedProducts = updatedProducts.filter(product => product.category === filterCategory);
        }
        if (filterBrand) {
            updatedProducts = updatedProducts.filter(product => product.brand === filterBrand);
        }

        // Apply sorting
        if (sortCriteria === 'price-asc') {
            updatedProducts.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'price-desc') {
            updatedProducts.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'rating-asc') {
            updatedProducts.sort((a, b) => a.average_rating - b.average_rating);
        } else if (sortCriteria === 'rating-desc') {
            updatedProducts.sort((a, b) => b.average_rating - a.average_rating);
        }

        setSortedProducts(updatedProducts);
    }, [products, sortCriteria, filterCategory, filterBrand]);

    // Calculate current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Pagination controls
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    return (
        <div>
            <div className="lg:flex justify-between my-10">
                <div className="lg:flex gap-4">
                    <select onChange={(e) => setSortCriteria(e.target.value)} className="select select-bordered">
                        <option value="">Sort by</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating-asc">Rating: Low to High</option>
                        <option value="rating-desc">Rating: High to Low</option>
                    </select>
                    <select onChange={(e) => setFilterCategory(e.target.value)} className="select select-bordered">
                        <option value="">Filter by Category</option>
                        <option value="Indoor Plant">Indoor Plant</option>
                        <option value="Outdoor Plant">Outdoor Plant</option>
                        {/* Add more categories as needed */}
                    </select>
                    <select onChange={(e) => setFilterBrand(e.target.value)} className="select select-bordered">
                        <option value="">Filter by Brand</option>
                        <option value="GreenHouse">GreenHouse</option>
                        <option value="Urban Jungle">Urban Jungle</option>
                        <option value="Natural Bliss">Natural Bliss</option>
                        <option value="Pure Plants">Pure Plants</option>
                        <option value="Green Essentials">Green Essentials</option>
                        <option value="Tropical Haven">Tropical Haven</option>
                        {/* Add more brands as needed */}
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 my-20'>
                {
                    currentProducts?.map(product => <ProductCard key={product?._id} product={product}></ProductCard>)
                }
            </div>
            <div className="flex justify-center my-10">
                <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                    disabled={currentPage === 1}
                    className="btn btn-outline"
                >
                    Previous
                </button>
                <p className="mx-4">Page {currentPage} of {totalPages}</p>
                <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                    disabled={currentPage === totalPages}
                    className="btn btn-outline"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Products;
