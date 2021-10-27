import React from 'react';

const ImageLarge = ({ url }) => {
    return(
        <>
            <img className='imgLarge' src={url}></img>
        </>
    );
};

export default ImageLarge;