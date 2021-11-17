import React from "react";

const CountRequestBlock = ({request, count}) => {
    return(
        <div className='countrequestblock'>
            <p className='request'>{request}</p>
            <p className='manager count'>{count}건</p>
        </div>
    );
};

export default CountRequestBlock;