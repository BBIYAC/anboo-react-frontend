import React from 'react';
import Search from '../../atoms/Input/Search';
import SearchIcon from '../../atoms/Button/SearchIcon';
import KeywordBlock from './KeywordBlock';
import '../../../components/atoms/Button/Button.css';

const SearchBlock = () => {
    return (
      <React.Fragment>
				<div className="block-search">
          <div className="box-search">
					  <Search />
            <SearchIcon/>
          </div>
					<KeywordBlock />
				</div>
			</React.Fragment>
    );
};

export default SearchBlock;