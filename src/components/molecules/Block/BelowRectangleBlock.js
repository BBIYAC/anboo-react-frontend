import React from 'react';
import RectangleLarge from '../../atoms/Button/RectangleLarge';

const BelowRectangleBlock = () => {
  return(
    <React.Fragment>
      <div className="block-rectanglebelowbar">
        <RectangleLarge btnText="요양자 등록하기"/>
        <RectangleLarge borderLeftWidth="0.01rem" borderLeftStyle="solid" btnText="문의하기"/>
      </div>
    </React.Fragment>
  );
};

export default BelowRectangleBlock ;