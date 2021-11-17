import React, {useState} from 'react';
import NursingHomeInfo from '../components/templates/ManagerNHInfo/NursingHomeInfo';
import NursingHomeInfoEdit from '../components/templates/ManagerNHInfo/NursingHomeInfoEdit';
import '../components/atoms/Button/Button.css';

const ManagerNhInfo= () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <React.Fragment>
      {isEdit
      ? <NursingHomeInfoEdit onClick={()=>setIsEdit(false)} />
      : <NursingHomeInfo onClick={()=>setIsEdit(true)} />}
    </React.Fragment>
  );
};

export default ManagerNhInfo;