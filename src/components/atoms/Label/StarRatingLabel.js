import React from "react";
import { AiFillStar } from 'react-icons/ai';

const StarRatingLabel = () => {
  return(
    <React.Fragment>
      <div className="div-starLabel">
        <span>4.5</span>
        <AiFillStar size="20" color="var(--color-yellow)"/>
      </div>
    </React.Fragment>
  );
};

export default StarRatingLabel;