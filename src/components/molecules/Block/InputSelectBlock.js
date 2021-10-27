import React from 'react';
import NameShort from '../../atoms/Input/NameShort';
import Gender from '../../atoms/Select/Gender';

const InputSelectBlock = () => {
    const handleStyle = {
        marginTop: '30px',
        display: 'flex',
    }
    return(
        <div className="rgNameGender" style={handleStyle}>
            <NameShort />
            <Gender />
        </div>
    );
};

export default InputSelectBlock;