import React, {useState} from 'react';
import RectangleLarge from '../../atoms/Button/RectangleLarge';
import { useHistory } from 'react-router-dom';
import './Block.css';
import CallModal from '../../organisms/Modal/CallModal';

const BelowRectangleBlock = ({tel, id}) => {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(true);
  }

  let history = useHistory();

  // 요양인 등록하기 이벤트
  const onRegistClick = () => {
    console.log(id+"요양인등록버튼");
    history.push({pathname:'/rg/profile', state: {isId: id}});
  }

  return(
    <React.Fragment>
      <div className="block-rectanglebelowbar">
        <RectangleLarge btnText="요양인 등록하기" onClick={onRegistClick}/>
        <RectangleLarge borderLeftWidth="0.01rem" borderLeftStyle="solid" btnText="문의하기" onClick={onClick}/>
        <CallModal  tel={tel} isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
    </React.Fragment>
  );
};

export default BelowRectangleBlock ;