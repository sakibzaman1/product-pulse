import React from 'react';
import { IoIosShareAlt } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center my-auto min-h-screen'>
        <h1 className='text-7xl'>Error 404</h1>
        <div className='flex items-center justify-around gap-2 mt-6'>
        <button className=""><IoIosShareAlt size={40}></IoIosShareAlt></button>
        <Link to='/'><h1 className='text-green-800 font-semibold'>Go to Home</h1></Link>
        </div>
    </div>
    );
};

export default ErrorPage;