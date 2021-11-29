import React, {useState, useEffect} from 'react';
import NursingHomeInfoInput from '../../atoms/Input/NursingHomeInfoInput';
import AddImage from '../../atoms/Input/AddImage';

const NursingHomeDetailInfoEditBlock = ({
  id, 
  name, 
  tel, 
  address, 
  time, 
  representativeImage, 
  setNhInfo}) => {
  const [pictures, setPictures] = useState(representativeImage);
  const [nhInfoInput, setNhInfoInput] = useState({
    nh_name : "",
    nh_operating_hour :"",
    nh_tel : "",
    nh_address : "",
    nh_representative_image : ""
  })

  useEffect(()=>{
    setNhInfo({
      nh_id : id,
      nh_name : nhInfoInput.nh_name,
      nh_operating_hour : nhInfoInput.nh_operating_hour,
      nh_tel : nhInfoInput.nh_tel,
      nh_address : nhInfoInput.nh_address,
      nh_representative_image : pictures
    })
  }, [pictures, nhInfoInput])


  return(
    <React.Fragment>
      <hr/>
      <div className="block-NursingHomeDetailInfo">
        <div className="NursingHomeInfo">
          <AddImage url={representativeImage} pictures={pictures} setPictures={setPictures}/>
          <NursingHomeInfoInput  
            name={name} 
            tel={tel} 
            address={address} 
            time={time} 
            setNhInfoInput={setNhInfoInput}/>
        </div>
      </div> 
    </React.Fragment>
  );
};

export default NursingHomeDetailInfoEditBlock;