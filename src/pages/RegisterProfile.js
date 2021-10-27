import React from 'react';
import AddImage from '../components/atoms/Input/AddImage';
import NameShort from '../components/atoms/Input/NameShort';
import Gender from '../components/atoms/Select/Gender';
import Birth from '../components/atoms/Input/Birth';
import Caution from '../components/atoms/Input/Caution';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';


const  RegisterProfile= () => {
    return (
        <React.Fragment>
            <div className="title">요양자 프로필</div>
            <AddImage />
            <NameShort />
            <Gender />
            <Birth />
            <Caution />
        </React.Fragment>
    );
};

export default RegisterProfile;