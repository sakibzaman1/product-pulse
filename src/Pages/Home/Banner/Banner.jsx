import React from 'react';
import { IoSearch } from 'react-icons/io5';
import Search from '../../../Components/Search/Search';
import bannerImg from '../../../assets/Banner1-removebg-preview.png'

const Banner = () => {
    return (
        <div className='bg-[#C1DCDC] rounded-xl flex justify-between'>
            <section className='w-[40%] space-y-10 my-10 px-10 pt-10 pb-6'>
                <div>
                    <h1 className='text-6xl font-bold'>
                        Buy your dream plants
                    </h1>
                </div>
                <div className='flex items-center justify-start gap-20 font-semibold'>
                    <div>
                        <h3>50+</h3>
                        <p>Plant Species</p>
                    </div>
                    <div className="divider lg:divider-horizontal"></div> 
                    <div>
                    <h3>50+</h3>
                        <p>Customers</p>
                    </div>
                </div>
                <div className=''>
                {/* <textarea placeholder="What are you looking for?" className="pt-2 pl-4 border-2 rounded-xl h-10 w-full" ><IoSearch className='' size={30} color='black' /></textarea> */}
                <Search></Search>
                </div>
            </section>
            <section className='pr-32 '>
                <img className='' src={bannerImg} alt="" />
            </section>
        </div>
    );
};

export default Banner;