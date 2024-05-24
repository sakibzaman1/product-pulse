import React from 'react';
import { BsBox } from 'react-icons/bs';
import { PiPottedPlantDuotone } from 'react-icons/pi';
import { SlCallOut } from 'react-icons/sl';
import { VscCallOutgoing } from 'react-icons/vsc';

const About = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <section className='text-center '>
            <h1 className='text-4xl font-bold mb-10'>About Us</h1>
                <p className='text-gray-500 font-medium'>Order now and appreciate the beauty of nature</p>
            </section>
            <section className='flex mx-auto gap-20 justify-center text-center mt-12'>
            <div >
                <div className=' p-4 avatar rounded-full text-center bg-[#C1DCDC] mx-auto mb-6'>
                <PiPottedPlantDuotone  size={40} />
                </div>
                <h1 className='text-xl font-bold mb-10'>Large Assortment</h1>
                <p className='text-gray-500 font-medium text-sm'>We offer many different types of products with fewer variation in each category.</p>
                </div>
            <div>
                <div  className=' p-4 avatar rounded-full text-center bg-[#C1DCDC] mx-auto mb-6'>
                <BsBox size={40} />
                </div>
                <h1 className='text-xl font-bold mb-10'>Fast & Free Shipping</h1>
                <p className='text-gray-500 font-medium text-sm'>4-day or less delivery time, free shipping and expedited delivery option.</p>
                </div>
            <div>
                <div  className=' p-4 avatar rounded-full text-center bg-[#C1DCDC] mx-auto mb-6'>
                <VscCallOutgoing  size={40} />
                </div>
                <h1 className='text-xl font-bold mb-10'>24/7 Support</h1>
                <p className='text-gray-500 font-medium text-sm'>Answer to any business related nquiry 24/7 and real-time.</p>
                </div>
            </section>
        </div>
    );
};

export default About;