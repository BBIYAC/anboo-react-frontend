import React from 'react';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import { FiChevronsRight } from "react-icons/fi";

const MapBlock = () => {
    return (
      <React.Fragment>
				<div className="block-map">	
        	<div className="div-map">
            지도
          </div>
          <RoundRectangle textAlign="left" btnText="11개의 시설을 찾았습니다."/>
          <FiChevronsRight className="arrow-double"/>
				</div>
			</React.Fragment>
    );
};

export default MapBlock;