import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import {BiLogOut} from 'react-icons/bi';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import '../components/atoms/Label/Label.css';
import '../components/molecules/Block/Block.css';
import ManagerHomeBefore from '../components/templates/ManagerHome/ManagerHomeBefore';
// import ManagerHomeWaiting from '../components/templates/ManagerHome/ManagerHomeWaiting';
// import ManagerHomeAfter from '../components/templates/ManagerHome/ManagerHomeAfter';
import { Link } from 'react-router-dom';

const ManagerHome = () => {
    return (
        <React.Fragment>
            <div className="header">
              <IoIosArrowBack opacity='0' size="20"/>
              관리자 홈
              <Link to="/">
                <BiLogOut size="20"/>
              </Link>
            </div>
            <ManagerHomeBefore />
            {/* <ManagerHomeWaiting /> */}
            {/* <ManagerHomeAfter /> */}
            <ManagerBelowBarBlock isHome />
        </React.Fragment>
    );
};

export default ManagerHome;