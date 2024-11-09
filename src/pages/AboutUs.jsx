import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const AboutUs = () => {
    useEffect(() => {
        document.title = "About | Gadget Heaven"
    }, []);

    const allTeams = useLoaderData();
    console.log(allTeams);

    return (
        <div className='bg-[#f7f7f7] pb-24'>
            {/* heading div */}
            <div className='bg-[#9538E2] mb-10'>
                <h2 className='text-2xl font-bold text-white pt-8 text-center'>Meet Our Beautiful Teams</h2>
                <p className='w-1/2 mx-auto text-sm font-light text-white mt-2 text-center pb-10'>
                    At Gadget Heaven, we believe in the power of innovation. Our mission is to provide cutting-edge gadgets that enhance everyday life. We hire passionate individuals and equip them with the tools and support they need to excel. Together, we strive to deliver exceptional products and an unparalleled shopping experience for our customers.
                </p>

                {/* <div className="flex justify-center items-center w-[50%] gap-4 mx-auto pb-8">
                    <NavLink to={"/dashboard/cart"} className={ ({isActive}) => isActive ? "btn bg-white text-[#9538E2] font-bold px-8 rounded-[32px]" : "btn btn-outline border border-white font-bold text-white rounded-[32px] px-8" }>Cart</NavLink>
                    <NavLink to={"/dashboard/wishlist"} className={ ({isActive}) => isActive ? "btn bg-white text-[#9538E2] font-bold px-8 rounded-[32px]" : "btn btn-outline border border-white font-bold text-white rounded-[32px] px-8" }>Wishlist</NavLink>
                </div> */}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    allTeams.map(team => (
                        <div key={team.id} className='w-11/12 mx-auto bg-[#ECECEC] rounded-md p-6 space-y-4'>
                            <div>
                                {/* {team.image} */}
                                <img className='w-3/5 mx-auto rounded-lg' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
                            </div>
                            <div className='space-y-2'>
                                <h3 className='text-lg font-bold text-center'>{team.name}</h3>
                                <p className='text-sm font-medium text-center'>{team.role}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='mt-16 bg-white rounded-md w-11/12 mx-auto p-8'>
                <h3 className='text-lg font-bold text-center'>
                    We've been blown away by the support from Untitled. We suggested an
                    improvement to our account manager and they implemented it a few days!
                </h3>
                <div className='mt-6'>
                    <div className="avatar flex justify-center">
                        <div className="w-12 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div>
                        <h4 className='font-medium text-center'>Amélie Laurent</h4>
                        <p className='text-sm text-center'>CTO, Beyond Systems</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;