import React from "react";
import Floating from "../../atoms/Button/Floating";
import LeftLargeText from "../../atoms/Label/LeftLargeText";
import CountRequestBlock from "../../molecules/Block/CountRequestBlock";

const ManagerHomeAfter = () => {
  return(
    <>
      <LeftLargeText text='안녕하세요!' />
      <LeftLargeText text='오늘도 기분좋게 일해봐요. 모두 화이팅!' />
      <CountRequestBlock request='요청사항 미응답' count='1' />
      <CountRequestBlock request='요양자 등록 미승인' count='2' />
      <Floating background='var(--color-green)'/>
    </>
  );
};

export default ManagerHomeAfter;