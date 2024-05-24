import React from 'react';
import Banner from './Banner/Banner';
import BestSells from './BestSells/BestSells';
import About from './About/About';

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
        </div>
    );
};

export default Home;