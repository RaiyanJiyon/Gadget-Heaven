import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { addToCart, addToWishList } from '../../../utilities/AddToDb';

const ProductDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const productData = useLoaderData();

    const { product_id } = useParams();

    const productDetail = productData.find(product => product.product_id === product_id);
    console.log(productDetail);

    const { product_id: id, product_title, product_image, category, price, description, specification, availability, rating } = productDetail;

    const handleAddToCart = () => {
        console.log("handleAddToCart", id);
        addToCart(id);
    }

    const handleAddToWishList = () => {
        console.log("handleAddToWishList", id);
        addToWishList(id);
    }


    return (
        <div className='bg-[#f7f7f7] pb-24'>
            {/* heading div */}
            <div className='bg-[#9538E2]'>
                <h2 className='text-2xl font-bold text-white pt-8 text-center'>Product Details</h2>
                <p className='w-1/2 mx-auto text-sm font-light text-white mt-2 pb-40 text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            {/* details div */}
            <div className="w-11/12 mx-auto flex justify-center items-center hero bg-white rounded-3xl -mt-32 p-8">
                <div className='space-y-4 basis-[70%] w-2/5 h-full'>
                    <img className='' src={product_image} alt={`${product_image} image`} />
                </div>
                <div className='space-y-3 basis-[70%] w-3/5'>
                    <h2 className='text-2xl font-bold'>{product_title}</h2>
                    <h3 className='text-lg font-semibold text-[#09080FCC]'>Price: ${price}</h3>
                    <button className="btn btn-sm btn-outline bg-[#309C081A] text-[#309C08] text-sm font-medium rounded-[32px]">{availability === true ? "In Stock" : "Out Of Stock"}</button>
                    <p className='text-[#09080F99]'>{description}</p>
                    <p className='font-bold'>Specification:</p>
                    <ul className='pl-4'>
                        {
                            specification.map((specification, idx) => (
                                <li key={idx} className='text-[#09080F99] list-decimal'>{specification}</li>
                            ))
                        }
                    </ul>
                    <p className='font-bold'>Rating ⭐ :</p>
                    <div className='flex items-center gap-3'>
                        <ReactStars
                            count={5}
                            value={rating}
                            edit={false}
                            isHalf={true}
                            size={24}
                            activeColor="#F9C004"
                        />
                        <button className='btn btn-xs rounded-[32px]'>{rating}</button>
                    </div>

                    <div className='flex items-center gap-4 pb-8'>
                        <button onClick={() => handleAddToCart(id)} className='flex items-center btn bg-[#9538E2] text-white text-sm font-medium rounded-[32px]'>
                        Add To Card <BsCart3 />
                        </button>
                        <div onClick={() => handleAddToWishList(id)} className='flex justify-center items-center cursor-pointer w-8 h-8 bg-white rounded-full border border-[#dfdfe1]'>
                    <CiHeart className='text-lg' />
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;