import React from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react/cjs/react.development';

const SaveModal = ({isClicked, setIsClicked, text}) =>{
  const handleModalStyle = isClicked?{
      position: 'fixed',
      top: '0',
      left: '0', 
      width: '100vw',
      height: '100vh', 
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
      fontSize: '1rem',
      margin: '40px 20px',
  };

  const handleModalButtonStyle = {
      borderTop: 'var(--border-bottom)',
      position: 'relative',
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

  let history = useHistory();
  const onClick = () => {
      setIsClicked(false);
      // history.go(0);
  }

  return(
    <React.Fragment>
      <div style={handleModalStyle}>
        <div style={handleModalBodyStyle}>
          <div style={handleModalTextStyle}>{text}</div>
          <div style={handleModalButtonStyle}>
              <button type='button' style={handleMainButtonStyle} onClick= {onClick}>확인</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SaveModal;