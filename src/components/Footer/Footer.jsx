import React from 'react';

const Footer = () => {
    return (
        <footer className='pb-10'>
            <div className='w-11/12 mx-auto mt-20'>
                <div>
                    <h2 className='text-3xl font-bold text-center'>Gadget Heaven</h2>
                    <p className='text-[#09080F99] text-center mt-3'>Leading the way in cutting-edge technology and innovation.</p>
                </div>

                <div className='divider'></div>

                <div className='flex justify-between md:w-1/2 mx-auto'>
                    <nav className='flex flex-col text-[#09080F99]'>
                        <h6 className="text-[#09080F] text-lg font-bold">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='flex flex-col text-[#09080F99]'>
                        <h6 className="text-[#09080F] text-lg font-bold">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col text-[#09080F99]'>
                        <h6 className="text-[#09080F] text-lg font-bold">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;