import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Star = ({color, onClick}) => {
    const handleStyle = {
      width: '30px',
      height: '30px',
      padding: '10px',
    }
    return(
      <>
        <AiFillStar style={handleStyle} color={color} onClick={onClick}/>
      </>
    );
};

export default Star;