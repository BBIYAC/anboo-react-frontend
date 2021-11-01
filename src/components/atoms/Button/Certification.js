import React from 'react';

const Certification = ({text, onClick, color}) =>{
    return(
        <React.Fragment>
            <button type='button' className="btn-certification" onClick={onClick} style={color}>{text}</button>
        </React.Fragment>
    );
};

export default Certification;