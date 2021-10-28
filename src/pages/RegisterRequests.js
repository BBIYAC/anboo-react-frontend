import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import AddPost from '../components/atoms/Button/AddPost';
import RequestBlock from '../components/molecules/Block/RequestBlock';
import RegisterFooter from '../components/organisms/Footer/RegisterFooter';

const  RegisterRequests = () => {
    const handleHeaderStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.5rem',
        marginBottom: 'var(--margin-bottom)',
    };
    return (
        <React.Fragment>
            <div style={handleHeaderStyle}>
                <IoIosArrowBack opacity="0" size="25"/>
                요청사항 목록
                <BiLogOut size="25"/>
            </div>
            <AddPost />
            <RequestBlock requestTitle="# 박혁거세(박순자님 아들)" requestContent="박순자님 견과류 알레르기가 있으니 음식에 견과류 넣지 말아주세요!" requestDate="2021년 10월 28일 20시 34분" response="" />
            <RequestBlock requestTitle="# 박혁거세(박순자님 아들)" requestContent="박순자님 견과류 알레르기가 있으니 음식에 견과류 넣지 말아주세요!" requestDate="2021년 10월 28일 20시 34분" response="네, 확인했습니다." />
            <RequestBlock requestTitle="# 박혁거세(박순자님 아들)" requestContent="박순자님 견과류 알레르기가 있으니 음식에 견과류 넣지 말아주세요!" requestDate="2021년 10월 28일 20시 34분" response="박순자님 견과류 금지 확인했습니다 :)" />
            <RegisterFooter isRequest/>
        </React.Fragment>
    );
};

export default RegisterRequests;