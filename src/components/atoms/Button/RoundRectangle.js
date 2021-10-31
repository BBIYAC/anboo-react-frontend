import React from 'react';

const RoundRectangle = ({btnText, color, background, textAlign}) =>{
    return(
        <React.Fragment>
            <button 
            className="btn-roundrectangle"
            style={{ color, background, textAlign }}>
              {btnText}
            </button>
        </React.Fragment>
    );
};

export default RoundRectangle;