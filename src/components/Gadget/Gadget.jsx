import React from 'react';
import { NavLink } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const {product_id, product_title, product_image, price} = gadget;
    return (
        <div className="card bg-base-100 shadow-lg">
            <figure className="px-4 pt-4">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl w-72 h-44" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title w-full">{product_title}</h2>
                <p className='text-[#09080F99] w-full'>{`Price: ${price}k`}</p>
                <div className="card-actions w-full mt-4">
                    <NavLink to={`/product/${product_id}`} className="btn btn-outline text-[#9538E2] border border-[#9538E2] rounded-[32px]">View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Gadget;