import React from "react";
import LeftSmallText from '../../atoms/Label/LeftSmallText';
import SeeMore from '../../atoms/Button/SeeMore';

const TextHorizontalBlock = () => {
    return(
        <div className='txt-horizontal'>
            <LeftSmallText text='박순자님 외 5명' />
            <SeeMore className='manager seemore' /> 
        </div>
    );
};

export default TextHorizontalBlock;