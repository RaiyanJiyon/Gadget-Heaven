import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const gadgetsData = useLoaderData();
    // console.log(gadgetsData)

    return (
        <div className='w-11/12 mx-auto mt-20'>
            <h2 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-4 gap-6 mt-10'>
                <div className='col-span-1 border border-red-500'>Hello</div>
                <div className='col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        gadgetsData.map(gadget => (
                            <Gadget key={gadget.product_id} gadget={gadget} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;