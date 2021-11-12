import React from 'react';

const ImageZoomIn = ({isClicked, url, setIsClicked}) =>{
    const handleModalStyle = isClicked?{
        position: 'absolute',
        top: '0',
        left: '0', 
        width: '100%',
        height: '100%', 
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }:{
        display: 'none',
    };

    const handleModalBodyStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        textAlign: 'left',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '10px',
        boxShadow: '0 2px 3px 0 rgba(34, 36, 38, 0.15)',
        transform: 'translateX(-50%) translateY(-50%)',
        padding: '10px',

    };

    const btnModalCancel = {
        backgroundColor: 'white',
        border: '0',
        fontSize: '1.25rem',
        display: 'flex',
        margin: '10px 10px 10px auto',

    }

    const imgModalZoomIn = {
        height: '85vw',
        weight: '85vw',
        margin: 'auto'
    }

    // Default Image
    const handleImgError = (e) => {
        e.target.src = require("../../atoms/Input/picture.png").default;
    }

    const onClick = () => {
        setIsClicked(false);
    }


    return(
        <React.Fragment>
            <div style={handleModalStyle}>
                <div style={handleModalBodyStyle}>
                    <button style={btnModalCancel} type='button' onClick={onClick}>X</button>
                    <img style={imgModalZoomIn} src={url} onError={handleImgError}></img>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ImageZoomIn;