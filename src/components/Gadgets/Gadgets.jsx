import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';
import Sidebar from '../Sidebar/Sidebar';

const Gadgets = () => {
    const gadgetsData = useLoaderData();
    const { category } = useParams();

    const filteredGadgets = !category || category === 'All Product'
        ? gadgetsData
        : gadgetsData.filter(gadget => gadget.category === category);

    return (
        <div className='w-11/12 2xl:w-4/5 mx-auto mt-20 pb-20'>
            <h2 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid md:grid-cols-4 gap-6 mt-10'>
                <div className='md:col-span-1 bg-white flex flex-col border border-[#dfdfe2] rounded-2xl h-[550px]'>
                    <Sidebar />
                </div>
                <div className='md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        filteredGadgets.map(gadget => (
                            <Gadget key={gadget.product_id} gadget={gadget} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
