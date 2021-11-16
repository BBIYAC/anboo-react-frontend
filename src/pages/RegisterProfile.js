import React from 'react';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';
import RegisterProfileAfter from '../components/templates/RegisterProfile/RegisterProfileAfter';
import RegisterProfileWaiting from '../components/templates/RegisterProfile/RegisterProfileWaiting';
import RegisterProfileBefore from '../components/templates/RegisterProfile/RegisterProfileBefore';

const  RegisterProfile= () => {
  return (
    <React.Fragment>
      {/* <RegisterProfileAfter /> */}
      {/* <RegisterProfileWaiting /> */}
      <RegisterProfileBefore />
    </React.Fragment>
  );
};

export default RegisterProfile;