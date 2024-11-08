import React from 'react';

const Heading = ({heading, description}) => {
    return (
        <div className='space-y-4'>
            <h1 className='text-3xl text-white font-bold'>{heading}</h1>
            <p className='text-sm text-[#FFFFFF] font-light'>{description}</p>
        </div>
    );
};

export default Heading;