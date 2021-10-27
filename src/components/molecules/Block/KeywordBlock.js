import React from 'react';
import Rating from '../../atoms/Select/Rating';
import Religion from '../../atoms/Select/Religion';
import Favorites from '../../atoms/Button/Favorites';

const KeywordBlock = () => {
    return (
      <React.Fragment>
					<div className="block-keyword">
						<Favorites />
						<Rating />
						<Religion />
					</div>
			</React.Fragment>
    );
};

export default KeywordBlock;