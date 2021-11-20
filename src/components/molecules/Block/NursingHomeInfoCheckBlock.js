import React, { useState, useEffect } from 'react';
import ImageSmall from '../../atoms/Input/ImageSmall';
import axios from 'axios';
import { apiUrl } from '../../../pages/ApiURL';

const NursingHomeInfoCheckBlock = ({search, setNursingHome}) => {
  const [nursingHomes, setNursingHomes] = useState([]);
  useEffect(() => {
    // axios nursing home list GET - 요양원 리스트 
    if(search){
      axios({url:`${apiUrl}/nh-info/search=${search}/`, method: 'get'})
      .then(response =>{
        setNursingHomes(response.data);
      }).catch(error => {
          console.error(error);
      });
    }else{
      axios({url:`${apiUrl}/nh-info/`, method: 'get'})
      .then(response =>{
        setNursingHomes(response.data);
      }).catch(error => {
          console.error(error);
      });
    }
  }, [search]);

  const handleClick = (e) => {
    const {id, name, checked} = e.target;
    let tempNursingHome = nursingHomes.map(nursingHome => 
      nursingHome.nh_name === name ? {...nursingHome, isChecked : checked} : {...nursingHome, isChecked: false}
    );
    setNursingHomes(tempNursingHome);
    setNursingHome(id);
  }
  
  return(
    <React.Fragment>
      {nursingHomes.map((nursingHome,idx) => (
        <div className="div-list" key={idx}>
          <ImageSmall />
          <div className="div-info">
            <div className="listInfo-name">이름: {nursingHome.nh_name}</div>
            <div className="listInfo-year">주소: {nursingHome.nh_address}</div>
          </div>
          
          <input type="checkbox" 
          className="form-check-input" 
          id={nursingHome.id}
          name={nursingHome.nh_name}
          checked={nursingHome.isChecked || false}
          onChange={handleClick}/>
        </div>
      ))}
    </React.Fragment>
  );
};

export default NursingHomeInfoCheckBlock;