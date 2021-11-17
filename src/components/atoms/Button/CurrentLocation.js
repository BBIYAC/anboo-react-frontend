import React from 'react';

const CurrentLocation = ({onClick}) =>{
    return(
        <React.Fragment>
            <button className="btn-currentLocation" onClick={onClick}>000</button>
        </React.Fragment>
    );
};

export default CurrentLocation;