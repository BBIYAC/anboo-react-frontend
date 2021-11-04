import React from "react";
import SearchBoxBlock from "../../molecules/Block/SearchBoxBlock";
import NursingHomeInfoCheckBlock from '../../molecules/Block/NursingHomeInfoCheckBlock';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import AddCertificationFile from '../../atoms/Input/AddCertificationFile';
import NoticeBlock from '../../molecules/Block/NoticeBlock';
import ManagerHome from "../../../pages/ManagerHome";
import './ManagerHome.css';

const ManagerHomeBefore = () => {
    return(
        <>
            <NoticeBlock />
            <SearchBoxBlock />
            <div className="div-NursingHomeInfoCheckBlockList">
              <NursingHomeInfoCheckBlock isSelected />
              <NursingHomeInfoCheckBlock />
              <NursingHomeInfoCheckBlock />
              <NursingHomeInfoCheckBlock />
              <NursingHomeInfoCheckBlock />
            </div>
            <AddCertificationFile />
            <RoundRectangle btnText='요양원 등록 요청하기' background='var(--color-green)' />
        </>
    );
};

export default ManagerHomeBefore;