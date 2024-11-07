import React from 'react';
import bannerImg from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto border border-[#F6F6F6] p-2 rounded-[32px]'>
                <div className=" hero bg-[#9538E2]  rounded-[32px] pb-40">
                    <div className="hero-content text-center mt-10 rounded-[32px]">
                        <div className="w-4/5">
                            <h1 className="text-4xl text-white font-bold font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                            <p className="py-6 text-white">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <button className="btn rounded-[32px] bg-white text-[#9538E2]">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-3/5 mx-auto -mt-36 rounded-3xl border-2 border-white bg-[#b574eb]'>
                <div>
                    {
                        <img className='rounded-3xl w-full h-[400px] object-fill p-3 ' src={bannerImg} alt="" />
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;