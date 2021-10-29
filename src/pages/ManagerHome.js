import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import {BiLogOut} from 'react-icons/bi';
import Search from '../components/atoms/Input/Search';
import NursingHomeInfoCheckBlock from '../components/molecules/Block/NursingHomeInfoCheckBlock';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import AddCertificationFile from '../components/atoms/Input/AddCertificationFile';
import '../components/atoms/Label/Label.css';
import '../components/molecules/Block/Block.css';
import NoticeBlock from '../components/molecules/Block/NoticeBlock';

const ManagerHome = () => {
    return (
        <React.Fragment>
            <div className="header">
              <IoIosArrowBack opacity='0' size="20"/>
              관리자 홈
              <BiLogOut size="20"/>
            </div>
            <NoticeBlock />
            <Search />
            <NursingHomeInfoCheckBlock isSelected />
            <NursingHomeInfoCheckBlock />
            <AddCertificationFile />
            <RoundRectangle btnText='요양원 등록 요청하기' background='var(--color-green)' />
            <ManagerBelowBarBlock isHome />
        </React.Fragment>
    );
};

export default ManagerHome;