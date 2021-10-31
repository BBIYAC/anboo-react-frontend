import React from 'react';
import NursingHomeActBlock from '../../molecules/Block/NursingHomeActBlock';
import AddPost from '../../atoms/Button/AddPost';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';

const ManagerActsList = () => {
    return (
        <React.Fragment>
            <div className="header">
                <IoIosArrowBack size="20"/>
                    활동 기록
                <BiLogOut size="20"/>
            </div>
            <AddPost className='manager'/>
            <ul>
                <li><NursingHomeActBlock /></li>
                <li><NursingHomeActBlock /></li>
                <li><NursingHomeActBlock /></li>
            </ul>
        </React.Fragment>
    );
};

export default ManagerActsList;