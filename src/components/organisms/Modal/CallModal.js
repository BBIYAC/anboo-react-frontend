import React from 'react';

const CallModal = ({isClicked, modalTitle, modalText, btn1Text, btn2Text}) =>{
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
        width: '300px',
        height: '170px',
        textAlign: 'left',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '10px',
        boxShadow: '0 2px 3px 0 rgba(34, 36, 38, 0.15)',
        transform: 'translateX(-50%) translateY(-50%)',

    };

    const handleModalTitleStyle = {
        color: 'var(--color-blue)',
        fontSize: '1rem',
        margin: '35px 20px 15px 35px',
    };

    const handleModalTextStyle = {
        fontSize: '1rem',
        margin: '15px 20px 35px 35px',
    };

    const handleModalButtonStyle = {
        borderTop: 'var(--border-bottom)',
        position: 'relative',
    };

    const handleButtonStyle = {
        backgroundColor: 'white',
        color: 'var(--color-blue)',
        border: '0',
        width: '150px',
        height: '50px',
    };

    const handleMainButtonStyle = {
        backgroundColor: 'white',
        color: 'var(--color-blue)',
        border: '0',
        width: '150px',
        height: '50px',
        fontWeight: 'bold'
    };
    return(
        <React.Fragment>
            <div style={handleModalStyle}>
                <div style={handleModalBodyStyle}>
                    <div style={handleModalTitleStyle}>{modalTitle}</div>
                    <div style={handleModalTextStyle}>{modalText}</div>
                    <div style={handleModalButtonStyle}>
                        <button style={handleButtonStyle}>{btn1Text}</button>
                        <button style={handleMainButtonStyle}>{btn2Text}</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CallModal;