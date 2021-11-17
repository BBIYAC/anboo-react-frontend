import React from 'react';

const Certification = ({text, onClick, color, type, disabled}) =>{
    return(
        <React.Fragment>
            <button type={type} className="btn-certification" onClick={onClick} style={color} disabled={disabled}>{text}</button>
        </React.Fragment>
    );
};

export default Certification;