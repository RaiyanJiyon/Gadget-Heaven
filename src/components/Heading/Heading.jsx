import React from 'react';

const Heading = ({heading, description}) => {
    return (
        <div>
            <h1 className='text-4xl text-white font-bold'>{heading}</h1>
            <p className='text-base text-[#FFFFFF]'>{description}</p>
        </div>
    );
};

export default Heading;