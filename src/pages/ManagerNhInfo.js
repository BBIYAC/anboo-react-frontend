import React from 'react';
// import NursingHomeInfo from '../components/templates/ManagerNHInfo/NursingHomeInfo';
import NursingHomeInfoEdit from '../components/templates/ManagerNHInfo/NursingHomeInfoEdit';
import '../components/atoms/Button/Button.css';

const ManagerNhInfo= () => {
  return (
    <React.Fragment>
      {/* <NursingHomeInfo /> */}
      <NursingHomeInfoEdit />
    </React.Fragment>
  );
};

export default ManagerNhInfo;