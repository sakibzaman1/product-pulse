import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Products = () => {
    const products = useLoaderData();
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    return (
        <div className='grid grid-cols-5 gap-6 my-20' >
            {
                products?.map(product=> <ProductCard key={product?._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Products;