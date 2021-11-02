import React from 'react';

const RoundRectangle = ({color, background, border, btnText, textAlign}) =>{
    return(
        <React.Fragment>
            <button 
            className="btn-roundrectangle"
            style={{ color, background, border, textAlign }}
            type='submit'>
              {btnText}
            </button>
        </React.Fragment>
    );
};

export default RoundRectangle;