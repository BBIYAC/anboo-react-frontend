import React from "react";

const SeeMore = ({className, icon}) => {
    return(
        <button className={className}>
          <span>더 보기</span>
          {icon}
        </button>
    );
};

export default SeeMore;