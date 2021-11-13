import React from 'react';
import ManagerImage from '../../atoms/Input/ManagerImage';
import {IoPersonRemove} from 'react-icons/io5';

const Manager = ({caregiver, removeCaregiver}) => {
    return (
      <React.Fragment>
        <div className="block-NursingHomeManagerInfo">
          <div className="NursingHomeManagerInfo">
            <ManagerImage url=""/>
            <div className="div-nursinghomeinfo">
              <input 
              type = "text"
              className="input-mgNhInfoEditInput"
              placeholder={caregiver.name}></input>
              <input 
              type = "number"
              className="input-mgNhInfoEditInput"
              placeholder={caregiver.phone}></input>
            </div>
          </div>
          <button 
          style={{background:"none", border:"none"}} 
          type="submit"
          onClick={() => removeCaregiver(caregiver.phone)}>
            <IoPersonRemove size="25" color="var(--color-red)"/>
          </button>
        </div>
			</React.Fragment>
    );
};

export default Manager;