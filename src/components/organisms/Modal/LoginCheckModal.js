import React from 'react';

const LoginCheckModal = ({isClicked}) =>{
    const handleModalStyle = !isClicked?{
        position: 'fixed',
        top: '0',
        left: '0', 
        width: '100%',
        height: '100%', 
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: '999',
    }:{
        display: 'none',
    };

    const handleModalBodyStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '300px',
        height: '150px',
        textAlign: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '10px',
        boxShadow: '0 2px 3px 0 rgba(34, 36, 38, 0.15)',
        transform: 'translateX(-50%) translateY(-50%)',

    };

    const handleModalTextStyle = {
        // color: 'var(--color-blue)',
        fontSize: '1rem',
        margin: '40px 20px',
    };

    const handleModalButtonStyle = {
        borderTop: 'var(--border-bottom)',
        position: 'relative',
    };

    const handleButtonStyle = {
        backgroundColor: 'white',
        color: 'var(--color-dark-gray)',
        border: '0',
        width: '150px',
        height: '50px',
        borderRadius: '0 0 0 10px',
    };

    const handleMainButtonStyle = {
        backgroundColor: 'white',
        color: 'var(--color-blue)',
        border: '0',
        width: '150px',
        height: '50px',
        fontWeight: 'bold',
        borderRadius: '0 0 10px 0',
    };
    return(
        <React.Fragment>
            <div style={handleModalStyle}>
                <div style={handleModalBodyStyle}>
                    <div style={handleModalTextStyle}>로그인 후 이용이 가능합니다 :)</div>
                    <div style={handleModalButtonStyle}>
                        <button style={handleButtonStyle}>취소</button>
                        <button style={handleMainButtonStyle}>로그인 하기</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LoginCheckModal;