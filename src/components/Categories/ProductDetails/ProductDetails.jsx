import React from 'react';
import Heading from '../../Heading/Heading';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();
    const {productId} = params;
    console.log(productId)
    // const 

    const productData = useLoaderData();

    // const {product_id, product_title, product_image, category, price, description, specification, availability, rating} = product;

    return (
        <div>
            <div className='bg-[#9538E2]'>
                <div className='w-1/2 mx-auto text-center pt-8'>
                    <h2 className='text-3xl font-bold text-white'>Product Details</h2>
                    <p className='text-sm font-light text-white mt-3 pb-32'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className='flex bg-white rounded-[32px]'>
                <div className='space-y-4 bg-[#ECECEC]'>
                    {product_image}
                </div>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold'>{product_title}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;