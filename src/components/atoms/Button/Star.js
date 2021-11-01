import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Star = () => {
    const handleStyle = {
        width: '30px',
        height: '30px',
        padding: '10px',
        color: '#FFE600',
        // color: '#ccc'
    }
    return(
        <>
            <AiFillStar style={handleStyle}/>
        </>
    );
};

export default Star;