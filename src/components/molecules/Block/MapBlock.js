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
          <RoundRectangle textAlign="center" btnText="11개의 시설 보러가기"/>
				</div>
			</React.Fragment>
    );
};

export default MapBlock;