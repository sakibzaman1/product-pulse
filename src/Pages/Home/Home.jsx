import React from 'react';
import Banner from './Banner/Banner';
import BestSells from './BestSells/BestSells';
import About from './About/About';
import Categories from './Categories/Categories';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <section className='mb-20'>
                <Banner></Banner>
            </section>
            <section className='mb-20'>
                <BestSells></BestSells>
            </section>
            <section className='mb-20'>
                <About></About>
            </section>
            <section className='mb-20'>
                <Categories></Categories>
            </section>
            <section className='mb-20'>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default Home;