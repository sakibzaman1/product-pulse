import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const BestSells = () => {
    const [products, setProducts] = useState();

    useEffect(()=> {
        fetch(`https://product-pulse-server-five.vercel.app/products`)
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[]);

    return (
        <div className='flex justify-between items-center'>
            <section className='w-[20%] space-y-10'>
                <h1 className='text-4xl font-bold'>Best Selling Plants</h1>
                <p className='text-gray-500 font-medium'>Easiest way to healthy life by buying your favorite plants</p>
                <Link to='/products'><button className='font-bold w-60 px-10 mt-8 py-6 h-2 bg-[#C1DCDC] flex justify-center items-center rounded-xl'>See More<IoIosArrowRoundForward size={30} className='ml-6' /></button></Link>
            </section>
            <section className='w-[80%] flex justify-end gap-20'>
                {
                    products?.slice(0,3).map(product=> <ProductCard product={product}></ProductCard>)
                }
            </section>
        </div>
    );
};

export default BestSells;