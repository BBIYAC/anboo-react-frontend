import React from 'react';
import {HiHome} from 'react-icons/hi';
import {AiOutlineMail} from 'react-icons/ai';

const Floating = ({background, onClick}) => {
  return(
    <React.Fragment>
      {
        (background === 'var(--color-green)')?
        <div className="handleBgFloatingStyle mg-floatingShadow" style={{background}} onClick={onClick}>
          <AiOutlineMail className='handleFloatingStyle' />
        </div>:
        <div className="handleBgFloatingStyle rg-floatingShadow" style={{background}} ibClick={onClick}>
          <HiHome className="handleFloatingStyle"/>
        </div>
      }
    </React.Fragment>
  );
};

export default Floating;