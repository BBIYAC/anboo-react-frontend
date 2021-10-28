import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import RegisterFooter from '../components/organisms/Footer/RegisterFooter';

const  RegisterPostRequest= () => {
    const handleHeaderStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.5rem',
        marginBottom: 'var(--margin-bottom)',
    };
    const handleResponseStyle = {
        width: 'calc(var(--width) - 40px)',
        minHeight: '300px',
        resize: 'none',
        border: 'var(--border-bottom)',
        borderRadius: 'var(--border-radius)',
        marginTop: '20px',
        outline: 'none',
        padding: '20px',
        fontFamily: 'default',
    };
    const handleDataStyle = {
        position: 'relative',
        margin: '10px 10px 60px auto',
        textAlign: 'right',
        fontSize: '0.8rem',
    };
    return (
        <React.Fragment>
            <div style={handleHeaderStyle}>
                <IoIosArrowBack size="25"/>
                요청사항 작성
                <BiLogOut size="25"/>
            </div>
            <textarea placeholder='요청사항을 작성해주세요.' style={handleResponseStyle}></textarea>
            <div style={handleDataStyle}>2021년 10월 28일 21시 15분</div>
            <RoundRectangle btnText="요청사항 보내기" />
            <RegisterFooter isRequest />
        </React.Fragment>
    );
};

export default RegisterPostRequest;