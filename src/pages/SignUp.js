import React from 'react';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';
import SignUpBefore from '../components/templates/SignUp/SignUpBefore';
// import SignUpAfter from '../components/templates/SignUp/SignUpAfter';

const SignUp = () => {
    return (
        <React.Fragment>
            <SignUpBefore />
            {/* <SignUpAfter /> */}
        </React.Fragment>
    );
};

export default SignUp;