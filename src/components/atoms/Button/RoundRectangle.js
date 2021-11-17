import React from 'react';

const RoundRectangle = ({type, color, background, border, btnText, textAlign, onClick}) =>{
    return(
        <React.Fragment>
            <button 
            onClick={onClick}
            className="btn-roundrectangle"
            style={{ color, background, border, textAlign }}
            type={type}>
              {btnText}
            </button>
        </React.Fragment>
    );
};

export default RoundRectangle;