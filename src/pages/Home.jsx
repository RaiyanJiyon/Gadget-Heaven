import React from 'react';
import Banner from '../components/Banner/Banner';
import Gadgets from '../components/Gadgets/Gadgets';

const Home = () => {
    return (
        <div className='bg-[#f7f7f7]'>
            <Banner />
            <Gadgets />
        </div>
    );
};

export default Home;