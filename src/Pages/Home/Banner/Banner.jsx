import React, { useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import Search from '../../../Components/Search/Search';
import bannerImg from '../../../assets/Banner1-removebg-preview.png'

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Banner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    return (
        <div className='bg-[#C1DCDC] rounded-xl flex justify-between'>
            <section className='w-[40%] space-y-16 mt-10 px-10 pt-10 '>
                <div>
                    <h1 className='text-6xl font-bold'  data-aos="fade-left"
              data-aos-duration="2000">
                        Buy your dream plants
                    </h1>
                </div>
                <div className='flex items-center justify-start gap-20 font-semibold'>
                    <div  data-aos="fade-left"
              data-aos-duration="2000">
                        <h3>50+</h3>
                        <p>Plant Species</p>
                    </div>
                    <div className="divider lg:divider-horizontal"  data-aos="fade-up"
              data-aos-duration="2000"></div> 
                    <div  data-aos="fade-left"
              data-aos-duration="2000">
                    <h3>50+</h3>
                        <p>Customers</p>
                    </div>
                </div>
                <div className=''  data-aos="fade-up"
              data-aos-duration="2000">
                {/* <textarea placeholder="What are you looking for?" className="pt-2 pl-4 border-2 rounded-xl h-10 w-full" ><IoSearch className='' size={30} color='black' /></textarea> */}
                <Search></Search>
                </div>
            </section>
            <section className='pr-32 '  data-aos="fade-down"
              data-aos-duration="2000">
                <img className='' src={bannerImg} alt="" />
            </section>
        </div>
    );
};

export default Banner;