import React from 'react';
import RectangleLarge from '../../atoms/Button/RectangleLarge';
import { Link } from 'react-router-dom';
import './Block.css';

const BelowRectangleBlock = () => {
  return(
    <React.Fragment>
      <div className="block-rectanglebelowbar">
        <Link className="link-regist" to="/rg/profile">
          <RectangleLarge btnText="요양자 등록하기"/>
        </Link>
        <RectangleLarge borderLeftWidth="0.01rem" borderLeftStyle="solid" btnText="문의하기"/>
      </div>
    </React.Fragment>
  );
};

export default BelowRectangleBlock ;