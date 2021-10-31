import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import AddActImage from '../../atoms/Input/AddActImage';
import PostActTextArea from '../../atoms/Input/PostActTextArea';
import RequestDate from '../../atoms/Label/RequestDate';
import OvalLarge from '../../atoms/Button/OvalLarge';
import TextHorizontalBlock from '../../molecules/Block/TextHorizontalBlock';

const ManagerActsList = () => {
    return (
        <React.Fragment>
            <div className="header">
                <IoIosArrowBack size="20"/>
                    활동 등록
                <BiLogOut size="20"/>
            </div>
            <AddActImage />
            <PostActTextArea />
            <RequestDate />
            <TextHorizontalBlock />
            <OvalLarge btnText="등록하기"/>
        </React.Fragment>
    );
};

export default ManagerActsList;