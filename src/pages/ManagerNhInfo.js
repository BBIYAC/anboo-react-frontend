import React, {useState} from 'react';
import NursingHomeInfo from '../components/templates/ManagerNHInfo/NursingHomeInfo';
import NursingHomeInfoEdit from '../components/templates/ManagerNHInfo/NursingHomeInfoEdit';
import '../components/atoms/Button/Button.css';

const ManagerNhInfo= () => {
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = () => {
    setIsEdit(false);
  }
  const onClickSave = () => {
    setIsEdit(true);
  }
  return (
    <React.Fragment>
      {isEdit? <NursingHomeInfoEdit onClick={onClickEdit} />: <NursingHomeInfo onClick={onClickSave} />}
    </React.Fragment>
  );
};

export default ManagerNhInfo;