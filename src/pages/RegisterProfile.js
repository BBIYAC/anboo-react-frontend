import React, { useState } from 'react';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';
import RegisterProfileAfter from '../components/templates/RegisterProfile/RegisterProfileAfter';
import RegisterProfileWaiting from '../components/templates/RegisterProfile/RegisterProfileWaiting';
import RegisterProfileBefore from '../components/templates/RegisterProfile/RegisterProfileBefore';
import { useEffect } from 'react/cjs/react.development';

const  RegisterProfile= () => {
  const [userState, setUserState] = useState('');
  const pageState = (state) => {
    switch(state){
      case 'after':{
        return <RegisterProfileAfter />
      }
      case 'waiting':{
        return <RegisterProfileWaiting />
      }
      default:{
        return <RegisterProfileBefore />
      }
    }
  }
  useEffect(()=>{
    setUserState('after');
  })
  return (
    <React.Fragment>
      {pageState(userState)}
    </React.Fragment>
  );
};

export default RegisterProfile;