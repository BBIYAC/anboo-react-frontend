import React from "react";

const SeeMore = ({className, onClick, text, icon}) => {
    return(
        <div className={className}  onClick={onClick}>
          <span>{text}</span>
          {icon}
        </div>
    );
};

export default SeeMore;