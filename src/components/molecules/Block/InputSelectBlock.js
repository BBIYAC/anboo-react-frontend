import React from 'react';
import NameShort from '../../atoms/Input/NameShort';
import Gender from '../../atoms/Select/Gender';

const InputSelectBlock = ({isRegister, isGender, setIsRegister, setIsGender, fillMessage}) => {
    const handleStyle = {
        marginTop: '30px',
        display: 'flex',
    }

    return(
        <div className="rgNameGender" style={handleStyle}>
            <NameShort isRegister={isRegister} setIsRegister={setIsRegister} fillMessage={fillMessage} />
            <Gender isGender={isGender} setIsGender={setIsGender} fillMessage={fillMessage} />
        </div>
    );
};

export default InputSelectBlock;