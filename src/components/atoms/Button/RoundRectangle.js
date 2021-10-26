import React from 'react';

const RoundRectangle = ({btnText, color, background}) =>{
    return(
        <React.Fragment>
            <button 
            className="btn-roundrectangle"
            style={{ color, background }}>
                {btnText}
            </button>
        </React.Fragment>
    );
};

export default RoundRectangle;