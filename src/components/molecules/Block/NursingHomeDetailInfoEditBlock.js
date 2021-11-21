import React from 'react';
import NursingHomeInfoInput from '../../atoms/Input/NursingHomeInfoInput';
import AddImage from '../../atoms/Input/AddImage';

const NursingHomeDetailInfoEditBlock = ({name, tel, address, image}) => {
  return(
    <React.Fragment>
      <hr/>
      <div className="block-NursingHomeDetailInfo">
        <div className="NursingHomeInfo">
          <AddImage url={image}/>
          <NursingHomeInfoInput  name={name} tel={tel} address={address}/>
        </div>
      </div> 
    </React.Fragment>
  );
};

export default NursingHomeDetailInfoEditBlock;