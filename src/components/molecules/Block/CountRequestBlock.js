import React from "react";

const CountRequestBlock = ({request, count, onClick}) => {
    return(
        <div className='countrequestblock' onClick={onClick}>
            <p className='request'>{request}</p>
            <p className='manager count'>{count}건</p>
        </div>
    );
};

export default CountRequestBlock;