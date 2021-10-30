import React from 'react';
import {HiHome} from 'react-icons/hi';
import {AiOutlineMail} from 'react-icons/ai';

const Floating = ({background}) => {
  return(
    <React.Fragment>
      <div className="handleBgFloatingStyle" style={{background}}>
        {
          (background === 'var(--color-green)')
          ? <AiOutlineMail className='handleFloatingStyle' />
          : <HiHome className="handleFloatingStyle"/>
        }
      </div>
    </React.Fragment>
  );
};

export default Floating;