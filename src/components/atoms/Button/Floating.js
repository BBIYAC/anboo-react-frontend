import React from 'react';
import {HiHome} from 'react-icons/hi';

const Floating = ({background}) => {
  return(
    <>
      <div className="handleBgFloatingStyle" style={{background}}>
        <HiHome className="handleFloatingStyle"/>
      </div>
    </>
  );
};

export default Floating;