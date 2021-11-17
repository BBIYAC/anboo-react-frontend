import React from 'react';
import {HiHome} from 'react-icons/hi';
import {AiOutlineMail} from 'react-icons/ai';

const Floating = ({background}) => {
  return(
    <React.Fragment>
      {
        (background === 'var(--color-green)')?
        <div className="handleBgFloatingStyle mg-floatingShadow" style={{background}}>
          <AiOutlineMail className='handleFloatingStyle' />
        </div>:
        <div className="handleBgFloatingStyle rg-floatingShadow" style={{background}}>
          <HiHome className="handleFloatingStyle"/>
        </div>
      }
    </React.Fragment>
  );
};

export default Floating;