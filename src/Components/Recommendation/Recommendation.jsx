import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Recommendation = () => {
    const [products, setProducts] = useState([]);
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        fetch('https://product-pulse-server-five.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setRandomProducts(getRandomProducts(data, 3));
            });
    }, []);

    const getRandomProducts = (products, count) => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    return (
        <div className='lg:flex justify-center gap-32 items-center'>
            {randomProducts.map(product => 
                <ProductCard key={product?._id} product={product}></ProductCard>
            )}
        </div>
    );
};

export default Recommendation;
