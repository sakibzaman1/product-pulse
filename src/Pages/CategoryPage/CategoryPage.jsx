import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
    return (
        <div className='flex justify-center gap-10 items-center min-h-screen'>
            <section>
                <Link to='/products'><h1 className='font-bold text-6xl '>INDOOR PLANT</h1></Link>
            </section>
            <div className="divider lg:divider-horizontal"></div> 
            <section>
                <h1 className='font-bold text-6xl'>OUTDOOR PLANT</h1>
            </section>
        </div>
    );
};

export default CategoryPage;