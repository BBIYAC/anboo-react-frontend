import React, {useState} from 'react';
import RectangleLarge from '../../atoms/Button/RectangleLarge';
import { useHistory } from 'react-router-dom';
import './Block.css';
import CallModal from '../../organisms/Modal/CallModal';

const BelowRectangleBlock = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(true);
  }

  let history = useHistory();
  const onRegistClick = () => {
    history.push('/rg/profile')
  }

  return(
    <React.Fragment>
      <div className="block-rectanglebelowbar">
        <RectangleLarge btnText="요양자 등록하기" onClick={onRegistClick}/>
        <RectangleLarge borderLeftWidth="0.01rem" borderLeftStyle="solid" btnText="문의하기" onClick={onClick}/>
        <CallModal isClicked={isClicked} setIsClicked={setIsClicked} modalText='010-1234-5678' />
      </div>
    </React.Fragment>
  );
};

export default BelowRectangleBlock ;