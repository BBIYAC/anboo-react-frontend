import React from 'react';
import {HiHome} from 'react-icons/hi';

const Floating = () => {
  const handleBgFloatingStyle = {
    backgroundColor: 'var(--color-blue)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    boxShadow: '0 2px 3px 0 rgba(34, 36, 38, 0.15)',
    position: 'fixed',
    bottom: '80px',
    right: '1.5rem',
  };

  const handleFloatingStyle = {
    color: 'white',
    fontSize: '25px',
    margin: '12px',
  };

  return(
    <>
      <div style={handleBgFloatingStyle}>
          <HiHome style={handleFloatingStyle}/>
      </div>
    </>
  );
};

export default Floating;