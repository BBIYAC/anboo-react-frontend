import React from 'react';

const CallModal = ({isClicked, setIsClicked, modalText}) =>{
    const handleModalStyle = isClicked?{
        position: 'absolute',
        bottom: '0',
        left: '0', 
        width: '100vw',
        height: '100vh', 
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
                    <div style={handleModalTitleStyle}>요양원 전화번호</div>
                    {/* <div style={handleModalTextStyle}>{modalText}</div> */}
                    <div style={handleModalTextStyle}>010-1234-5678</div>
                    <div style={handleModalButtonStyle}>
                        <button style={handleButtonStyle} onClick={()=>setIsClicked(false)}>취소</button>
                        <button style={handleMainButtonStyle} onClick={()=>setIsClicked(false)}>전화걸기</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CallModal;