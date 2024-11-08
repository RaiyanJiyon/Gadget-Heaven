import React from 'react';
import Banner from '../components/Banner/Banner';
import Gadgets from '../components/Gadgets/Gadgets';
import Modal from '../components/Modal/Modal';

const Home = () => {
    return (
        <div className='bg-[#f7f7f7]'>
            <Banner />
            <Gadgets />
            <Modal />
        </div>
    );
};

export default Home;