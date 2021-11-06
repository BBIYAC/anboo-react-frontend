import React from 'react';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import { Link } from 'react-router-dom';

const MapBlock = () => {
    return (
      <React.Fragment>
				<div className="block-map">	
        	<div className="div-map">
            지도
          </div>
          <Link to="/rg/nhs">
            <RoundRectangle textAlign="center" btnText="11개의 시설 보러가기"/>
          </Link>
				</div>
			</React.Fragment>
    );
};

export default MapBlock;