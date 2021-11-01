import React from 'react';

const RoundRectangle = ({color, background, btnText, textAlign}) =>{
    return(
        <React.Fragment>
            <button 
            className="btn-roundrectangle"
            style={{ color, background, textAlign }}
            type='submit'>
              {btnText}
            </button>
        </React.Fragment>
    );
};

export default RoundRectangle;