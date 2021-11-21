import React from 'react';
import Rating from '../../atoms/Select/Rating';
import Favorites from '../../atoms/Button/Favorites';

import {AiOutlineAim} from 'react-icons/ai';
import '../../../components/atoms/Button/Button.css';

const SearchBlock = () => {
    return (
      <React.Fragment>
				<div className="block-search">
          <div className="box-search">
            <input className="searchBox" type="text" placeholder="요양원 이름, 주소, 지역 검색"></input>
            <button className="search-icon"><FaSearch size="20"/></button>
          </div>
					<div className="block-keyword">
						<Favorites />
						<Rating />
            <button><AiOutlineAim size="25"/></button>
					</div>
				</div>
			</React.Fragment>
    );
};

export default SearchBlock;