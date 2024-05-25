import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
    return (
        <div className='flex justify-center gap-10 items-center my-10'>
            <section>
            <Link to='/products'>
                <img className='w-80 h-80 mx-auto mb-4' src="https://i.ibb.co/7bL9nnF/Monstera-Deliciosa1.webp" alt="" />
                <h1 className='font-bold text-6xl '>INDOOR PLANT</h1></Link>
            </section>
            <div className="divider lg:divider-horizontal"></div> 
            <section>
                <img  className='w-80 h-80 mx-auto mb-4' src="https://i.ibb.co/MRxKHLH/outdoor1.webp" alt="" />
                <h1 className='font-bold text-6xl'>OUTDOOR PLANT</h1>
            </section>
        </div>
    );
};

export default CategoryPage;