import React from "react";
import SearchBoxBlock from "../../molecules/Block/SearchBoxBlock";
import NursingHomeInfoCheckBlock from '../../molecules/Block/NursingHomeInfoCheckBlock';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import AddCertificationFile from '../../atoms/Input/AddCertificationFile';
import NoticeBlock from '../../molecules/Block/NoticeBlock';

const ManagerHomeBefore = () => {
    return(
        <>
            <NoticeBlock />
            <SearchBoxBlock />
            <NursingHomeInfoCheckBlock isSelected />
            <NursingHomeInfoCheckBlock />
            <AddCertificationFile />
            <RoundRectangle btnText='요양원 등록 요청하기' background='var(--color-green)' />
        </>
    );
};

export default ManagerHomeBefore;