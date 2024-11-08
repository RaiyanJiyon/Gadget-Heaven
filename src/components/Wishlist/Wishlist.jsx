import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getToWishList } from '../../utilities/AddToDb';
import { TiDeleteOutline } from 'react-icons/ti';

const Wishlist = () => {
    const [wishList, setWishList] = useState([]);
    const allWishList = useLoaderData();

    useEffect(() => {
        const storedWishList = getToWishList();

        const filterStoredWishList = allWishList.filter(wishList => (
            storedWishList.includes(wishList.product_id)
        ))

        setWishList(filterStoredWishList);

    }, [allWishList])


    return (
        <div className='w-11/12 mx-auto mt-8 space-y-6'>
            {
                wishList.map(wishList => (
                    <div className='flex justify-between items-center gap-4 bg-white rounded-2xl'>
                        <div className='w-1/5'>
                            <img className='w-48' src={wishList.product_image} alt={`${wishList.product_image} image`} />
                        </div>
                        <div className='w-4/5'>
                            <div className='flex justify-between text-xl font-bold'>
                                {wishList.product_title}
                                <TiDeleteOutline className='text-red-400 text-3xl mr-16 cursor-pointer' />
                            </div>
                            <p className='text-sm text-[#09080F99]'>{wishList.description}</p>
                            <h4 className='font-bold'>{`Price: $${wishList.price}`}</h4>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Wishlist;