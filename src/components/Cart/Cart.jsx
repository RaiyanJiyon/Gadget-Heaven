import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getToCart } from '../../utilities/AddToDb';
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
    const [cartList, setCartList] = useState([])
    const [totalCost, setTotalCost] = useState(0);

    const allCart = useLoaderData();
    console.log(allCart)

    useEffect(() => {
        const storedCart = getToCart();

        const filterCartList = allCart.filter(cart => (
            storedCart.includes(cart.product_id)
        ))

        setCartList(filterCartList);

        const total = filterCartList.reduce((acc, cartItem) => acc + cartItem.price, 0)
        setTotalCost(total)

    }, [allCart])

    console.log(cartList);



    return (
        <div className='w-11/12 mx-auto mt-12'>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-bold'>Cart</h2>
                <div className='flex justify-center items-center gap-4'>

                <h2 className='text-xl font-bold'>Total cost: {totalCost}</h2>
                <button className='btn btn-outline text-[#9538E2] font-semibold border border-[#9538E2] rounded-[32px]'>Sort by Price</button>
                <button className='btn bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold border-none rounded-[32px]'>Purchase</button>
                </div>
            </div>

            <div className='mt-8 space-y-6'>
                {
                    cartList.map(cart => (
                        <div className='flex justify-between items-center gap-4 bg-white rounded-2xl'>
                            <div className='w-1/5'>
                            <img className='w-48' src={cart.product_image} alt={`${cart.product_image} image`} />
                            </div>
                            <div className='w-4/5'>
                            <div className='flex justify-between text-xl font-bold'>
                                {cart.product_title}
                                <TiDeleteOutline className='text-red-400 text-3xl mr-16 cursor-pointer' />
                                </div>
                            <p className='text-sm text-[#09080F99]'>{cart.description}</p>
                            <h4 className='font-bold'>{`Price: $${cart.price}`}</h4>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;