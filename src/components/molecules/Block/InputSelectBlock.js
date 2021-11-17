import React from 'react';
import NameShort from '../../atoms/Input/NameShort';
import Gender from '../../atoms/Select/Gender';

const InputSelectBlock = ({setIsRegister, setIsGender, fillMessage}) => {
    const handleStyle = {
        marginTop: '30px',
        display: 'flex',
    }

    return(
        <div className="rgNameGender" style={handleStyle}>
            <NameShort setIsRegister={setIsRegister} fillMessage={fillMessage} />
            <Gender setIsGender={setIsGender} fillMessage={fillMessage} />
        </div>
    );
};

export default InputSelectBlock;