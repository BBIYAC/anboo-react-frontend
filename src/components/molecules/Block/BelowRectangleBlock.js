import React from 'react';
import RectangleLarge from '../../atoms/Button/RectangleLarge';

const BelowRectangleBlock = () => {
  const handleStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
  };
  return(
    <React.Fragment>
      <div 
      className="block-belowRectangle"
      style={handleStyle}>
        <RectangleLarge btnText="요양자 등록하기"/>
        <RectangleLarge borderLeftWidth="0.01rem" borderLeftStyle="solid" btnText="문의하기"/>
      </div>
    </React.Fragment>
  );
};

export default BelowRectangleBlock ;